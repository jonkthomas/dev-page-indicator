"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import type { DevPageIndicatorProps } from "./types";

// Try to import Next.js hooks if available
let usePathname: (() => string) | undefined;
try {
  const nextNavigation = require("next/navigation");
  usePathname = nextNavigation.usePathname;
} catch {
  // Next.js not available, will use window.location
}

const DevPageIndicator: React.FC<DevPageIndicatorProps> = ({
  defaultVisible = true,
  position = "bottom-left",
  customComponentMap = {},
  enableFiberDetection = true,
  maxParentSearchDepth = 5,
  customRouteMap = {},
  showShortcutHints = true,
  zIndex = 50,
}) => {
  const pathname = usePathname ? usePathname() : typeof window !== "undefined" ? window.location.pathname : "/";
  const [pageFile, setPageFile] = useState("");
  const [isVisible, setIsVisible] = useState(defaultVisible);
  const [justCopied, setJustCopied] = useState(false);
  const [selectorMode, setSelectorMode] = useState(false);
  const [hoveredComponent, setHoveredComponent] = useState<{
    name: string;
    file?: string;
    props?: string[];
    parentComponent?: string;
  } | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<{
    name: string;
    file?: string;
    props?: string[];
    parentComponent?: string;
  } | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleCopyPath = async (text?: string) => {
    const textToCopy = text || pageFile;
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast.success(`Copied: ${textToCopy}`, {
        duration: 2000,
        style: {
          background: '#10b981',
          color: 'white',
          fontSize: '14px',
        },
      });
      setJustCopied(true);
      setTimeout(() => setJustCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const handleCopyFullContext = async () => {
    let contextText = `📍 Page: ${pageFile}\n`;
    contextText += `🔗 Route: ${pathname}\n`;
    
    if (selectedComponent) {
      contextText += `\n🎯 Component: ${selectedComponent.name}\n`;
      if (selectedComponent.file) {
        contextText += `📁 File: ${selectedComponent.file}\n`;
      }
      if (selectedComponent.parentComponent) {
        contextText += `👆 Parent: ${selectedComponent.parentComponent}\n`;
      }
      if (selectedComponent.props && selectedComponent.props.length > 0) {
        contextText += `🎨 Classes: ${selectedComponent.props.join(', ')}\n`;
      }
    }
    
    const markdownContext = `
## Development Context

### Page Information
- **Page File:** \`${pageFile}\`
- **Route:** \`${pathname}\`
${selectedComponent ? `
### Selected Component
- **Component:** ${selectedComponent.name}
${selectedComponent.file ? `- **File:** \`${selectedComponent.file}\`` : ''}
${selectedComponent.parentComponent ? `- **Parent:** ${selectedComponent.parentComponent}` : ''}
${selectedComponent.props && selectedComponent.props.length > 0 ? `- **Classes:** \`${selectedComponent.props.join(', ')}\`` : ''}
` : ''}
---
*Copied from DevPageIndicator at ${new Date().toLocaleTimeString()}*
`;

    try {
      if (navigator.clipboard.write) {
        const blob = new Blob([markdownContext], { type: 'text/plain' });
        const richBlob = new Blob([markdownContext], { type: 'text/markdown' });
        const data = [
          new ClipboardItem({
            'text/plain': blob,
            'text/markdown': richBlob
          })
        ];
        await navigator.clipboard.write(data);
      } else {
        await navigator.clipboard.writeText(contextText);
      }
      
      toast.success('Copied full context to clipboard!', {
        duration: 2500,
        style: {
          background: '#8b5cf6',
          color: 'white',
          fontSize: '14px',
        },
        icon: '📋',
      });
    } catch (err) {
      try {
        await navigator.clipboard.writeText(contextText);
        toast.success('Copied context (plain text)', {
          duration: 2000,
          style: {
            background: '#10b981',
            color: 'white',
            fontSize: '14px',
          },
        });
      } catch (fallbackErr) {
        toast.error('Failed to copy to clipboard');
      }
    }
  };

  // Get React Fiber information from DOM element
  const getReactFiber = (element: any): any => {
    if (!enableFiberDetection) return null;
    const key = Object.keys(element).find(key => 
      key.startsWith('__reactFiber') || 
      key.startsWith('__reactInternalInstance')
    );
    return key ? element[key] : null;
  };

  // Get component name from React Fiber
  const getComponentNameFromFiber = (fiber: any): string | null => {
    if (!fiber) return null;
    
    let currentFiber = fiber;
    while (currentFiber) {
      if (currentFiber.elementType && typeof currentFiber.elementType === 'function') {
        const name = currentFiber.elementType.displayName || 
                    currentFiber.elementType.name;
        if (name && name !== 'Anonymous' && !name.startsWith('_')) {
          return name;
        }
      }
      
      if (currentFiber.type && typeof currentFiber.type === 'function') {
        const name = currentFiber.type.displayName || 
                    currentFiber.type.name;
        if (name && name !== 'Anonymous' && !name.startsWith('_')) {
          return name;
        }
      }
      
      if (currentFiber.elementType?.$$typeof) {
        const symbolString = currentFiber.elementType.$$typeof.toString();
        if (symbolString.includes('memo') || symbolString.includes('forward_ref')) {
          const innerType = currentFiber.elementType.type || currentFiber.elementType.render;
          if (innerType) {
            const name = innerType.displayName || innerType.name;
            if (name && name !== 'Anonymous') {
              return name;
            }
          }
        }
      }
      
      currentFiber = currentFiber.return;
    }
    
    return null;
  };

  // Smart class-based identification with custom mapping
  const identifyByClasses = (classList: string[]): {
    name: string;
    file?: string;
  } | null => {
    const classString = classList.join(' ').toLowerCase();
    
    // Check custom component map first
    for (const [className, componentInfo] of Object.entries(customComponentMap)) {
      if (classString.includes(className.toLowerCase())) {
        return componentInfo;
      }
    }
    
    // Special handling for common Tailwind layout classes
    if (classList.includes('space-y-3') || classList.includes('space-x-3')) {
      return null;
    }
    
    // Built-in detection patterns
    if (classString.includes('btn') || classString.includes('button')) {
      return { name: 'Button' };
    }
    if (classString.includes('modal')) {
      return { name: 'Modal' };
    }
    if (classString.includes('card')) {
      return { name: 'Card' };
    }
    if (classString.includes('header')) {
      return { name: 'Header' };
    }
    if (classString.includes('footer')) {
      return { name: 'Footer' };
    }
    
    return null;
  };

  // Traverse up DOM to find identifiable parent component
  const findParentComponent = (element: HTMLElement): {
    name: string;
    file?: string;
  } | null => {
    let current = element.parentElement;
    let depth = 0;
    
    while (current && depth < maxParentSearchDepth) {
      const componentName = current.getAttribute('data-component-name');
      if (componentName) {
        return {
          name: componentName,
          file: current.getAttribute('data-component-file') || undefined
        };
      }
      
      const classList = Array.from(current.classList);
      const identified = identifyByClasses(classList);
      if (identified && identified.name !== 'Unknown') {
        return identified;
      }
      
      current = current.parentElement;
      depth++;
    }
    
    return null;
  };

  // Extract component information from DOM element
  const getComponentInfo = useCallback((element: HTMLElement): {
    name: string;
    file?: string;
    props?: string[];
    parentComponent?: string;
  } | null => {
    // Check for explicit data attributes
    const componentName = element.getAttribute('data-component-name');
    const componentFile = element.getAttribute('data-component-file');
    
    if (componentName) {
      return {
        name: componentName,
        file: componentFile || undefined,
        props: Array.from(element.attributes)
          .filter(attr => attr.name.startsWith('data-') && 
                  !attr.name.includes('component'))
          .map(attr => attr.name.replace('data-', ''))
      };
    }

    // Try React Fiber detection
    const fiber = getReactFiber(element);
    const fiberName = getComponentNameFromFiber(fiber);
    
    if (fiberName) {
      return {
        name: fiberName,
        props: Array.from(element.classList)
      };
    }

    // Try class-based identification
    const classList = Array.from(element.classList);
    const id = element.id;
    const tagName = element.tagName.toLowerCase();
    
    const identified = identifyByClasses(classList);
    if (identified) {
      return {
        ...identified,
        props: classList
      };
    }

    // Check parent components
    const parentComponent = findParentComponent(element);
    
    if (parentComponent) {
      return {
        name: `${tagName}${id ? `#${id}` : ''}`,
        props: classList,
        parentComponent: `${parentComponent.name}${parentComponent.file ? ` (${parentComponent.file})` : ''}`
      };
    }
    
    // Generic fallback
    return {
      name: `<${tagName}${id ? `#${id}` : ''}${classList.length > 0 ? `.${classList[0]}` : ''}>`,
      props: classList
    };
  }, [customComponentMap, enableFiberDetection, maxParentSearchDepth]);

  // Handle element hover in selector mode
  const handleElementHover = useCallback((e: MouseEvent): void => {
    if (!selectorMode) return;
    
    const target = e.target as HTMLElement;
    if (overlayRef.current?.contains(target)) return;
    
    const componentInfo = getComponentInfo(target);
    setHoveredComponent(componentInfo);
    
    target.style.outline = '2px solid #8b5cf6';
    target.style.outlineOffset = '2px';
    target.style.cursor = 'pointer';
  }, [selectorMode, getComponentInfo]);

  // Handle element click in selector mode
  const handleElementClick = useCallback((e: MouseEvent): void => {
    if (!selectorMode) return;
    
    const target = e.target as HTMLElement;
    if (overlayRef.current?.contains(target)) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const componentInfo = getComponentInfo(target);
    setSelectedComponent(componentInfo);
    setSelectorMode(false);
  }, [selectorMode, getComponentInfo]);

  // Handle mouse leave to remove highlights
  const handleElementLeave = useCallback((e: MouseEvent): void => {
    if (!selectorMode) return;
    
    const target = e.target as HTMLElement;
    target.style.outline = '';
    target.style.cursor = '';
    setHoveredComponent(null);
  }, [selectorMode]);

  // Handle keyboard shortcuts
  const handleKeyDown = useCallback((e: KeyboardEvent): void => {
    if (e.key === 'Escape' && selectorMode) {
      setSelectorMode(false);
      setHoveredComponent(null);
    }
    
    if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'c') {
      e.preventDefault();
      handleCopyFullContext();
    }
  }, [selectorMode, handleCopyFullContext]);

  // Setup and cleanup selector mode event listeners
  useEffect(() => {
    if (selectorMode) {
      document.addEventListener('mouseover', handleElementHover);
      document.addEventListener('click', handleElementClick);
      document.addEventListener('mouseout', handleElementLeave);
      
      document.body.style.userSelect = 'none';
      
      return () => {
        document.removeEventListener('mouseover', handleElementHover);
        document.removeEventListener('click', handleElementClick);
        document.removeEventListener('mouseout', handleElementLeave);
        document.body.style.userSelect = '';
        
        document.querySelectorAll('[style*="outline"]').forEach((el) => {
          (el as HTMLElement).style.outline = '';
          (el as HTMLElement).style.cursor = '';
        });
      };
    }
    return undefined;
  }, [selectorMode, handleElementHover, handleElementClick, handleElementLeave]);

  // Setup global keyboard shortcuts
  useEffect(() => {
    if (isVisible) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
    return undefined;
  }, [isVisible, handleKeyDown]);

  useEffect(() => {
    const getPageFile = (path: string): string => {
      const normalizedPath = path.endsWith("/") && path !== "/" 
        ? path.slice(0, -1) 
        : path;

      // Check custom route map first
      if (customRouteMap[normalizedPath]) {
        return customRouteMap[normalizedPath];
      }

      // Default Next.js app router structure
      const defaultRouteMap: Record<string, string> = {
        "/": "app/page.tsx",
        "/dashboard": "app/dashboard/page.tsx",
        "/settings": "app/settings/page.tsx",
        "/signin": "app/signin/page.tsx",
        ...customRouteMap
      };

      if (defaultRouteMap[normalizedPath]) {
        return defaultRouteMap[normalizedPath];
      }

      if (normalizedPath.startsWith("/api/")) {
        return `app${normalizedPath}/route.ts`;
      }

      return normalizedPath === "" ? "app/page.tsx" : `app${normalizedPath}/page.tsx`;
    };

    setPageFile(getPageFile(pathname));
  }, [pathname, customRouteMap]);

  // Only show in development mode
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  // Position styles
  const positionStyles = {
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4'
  };

  if (!isVisible) {
    return (
      <>
        <Toaster position="top-center" />
        <button
          onClick={() => setIsVisible(true)}
          className={`fixed ${positionStyles[position]}`}
          style={{ 
            zIndex,
            backgroundColor: '#8b5cf6',
            color: 'white',
            fontSize: '12px',
            padding: '4px 8px',
            borderRadius: '4px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.2s',
            opacity: 0.5
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.backgroundColor = '#7c3aed';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.5';
            e.currentTarget.style.backgroundColor = '#8b5cf6';
          }}
          title="Show page indicator"
        >
          👁️
        </button>
      </>
    );
  }

  // Inject styles for animations
  useEffect(() => {
    const styleId = 'dev-page-indicator-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @keyframes dev-page-indicator-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `;
      document.head.appendChild(style);
    }
    return () => {
      const style = document.getElementById(styleId);
      if (style) {
        style.remove();
      }
    };
  }, []);

  return (
    <>
      <Toaster position="top-center" />
      <div 
        ref={overlayRef}
        className={`fixed ${positionStyles[position]}`}
        style={{ 
          zIndex,
          backgroundColor: 'rgba(17, 24, 39, 0.95)',
          backdropFilter: 'blur(4px)',
          color: 'white',
          padding: '8px 12px',
          borderRadius: '8px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          maxWidth: '24rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#a78bfa', fontSize: '12px', fontWeight: '600' }}>DEV</span>
            <span style={{ color: '#9ca3af', fontSize: '12px' }}>|</span>
            <button
              onClick={() => {
                setSelectorMode(!selectorMode);
                setSelectedComponent(null);
              }}
              style={{
                padding: '4px 8px',
                fontSize: '12px',
                borderRadius: '4px',
                transition: 'all 0.2s',
                backgroundColor: selectorMode ? '#8b5cf6' : '#374151',
                color: selectorMode ? 'white' : '#d1d5db',
                animation: selectorMode ? 'dev-page-indicator-pulse 2s infinite' : 'none',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                if (!selectorMode) {
                  e.currentTarget.style.backgroundColor = '#4b5563';
                }
              }}
              onMouseLeave={(e) => {
                if (!selectorMode) {
                  e.currentTarget.style.backgroundColor = '#374151';
                }
              }}
              title={selectorMode ? "Exit selector mode" : "Enable component selector"}
            >
              {selectorMode ? '🎯 Selecting...' : '🎯 Select'}
            </button>
            <button
              onClick={handleCopyFullContext}
              style={{
                padding: '4px 8px',
                fontSize: '12px',
                borderRadius: '4px',
                backgroundColor: '#047857',
                color: 'white',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#059669';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#047857';
              }}
              title="Copy full context (page + component)"
            >
              📋 Copy All
            </button>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            style={{
              color: '#9ca3af',
              fontSize: '12px',
              transition: 'color 0.2s',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '2px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#9ca3af';
            }}
            title="Hide indicator"
          >
            ✕
          </button>
        </div>
        
        {/* Page info */}
        <div style={{ marginTop: '8px' }}>
          <div style={{ fontSize: '12px', color: '#d1d5db', display: 'flex', alignItems: 'center', gap: '4px' }}>
            Page:
            {justCopied && !selectedComponent && (
              <span style={{ color: '#34d399', fontSize: '12px', animation: 'dev-page-indicator-pulse 2s infinite' }}>✓ Copied!</span>
            )}
          </div>
          <div 
            style={{
              fontSize: '14px',
              fontFamily: 'monospace',
              color: '#34d399',
              wordBreak: 'break-all',
              cursor: 'pointer',
              transition: 'color 0.2s',
              userSelect: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#86efac';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#34d399';
            }}
            onClick={() => handleCopyPath(pageFile)}
            title="Click to copy path"
          >
            <span style={{ color: '#6b7280', transition: 'color 0.2s' }}>📋</span>
            {pageFile}
          </div>
        </div>

        {/* Selected component info */}
        {selectedComponent && (
          <div className="mt-2 pt-2 border-t border-gray-700">
            <div className="text-xs text-gray-300 flex items-center justify-between">
              <span>Selected Component:</span>
              <button
                onClick={() => setSelectedComponent(null)}
                className="text-gray-500 hover:text-gray-300 text-xs"
                title="Clear selection"
              >
                ✕
              </button>
            </div>
            <div className="text-sm font-bold text-blue-400 mt-1">
              {selectedComponent.name}
            </div>
            {selectedComponent.parentComponent && (
              <div className="text-xs text-purple-400 mt-1">
                Parent: {selectedComponent.parentComponent}
              </div>
            )}
            {selectedComponent.file && (
              <div 
                className="text-xs font-mono text-yellow-400 break-all cursor-pointer hover:text-yellow-300 transition-colors duration-200 select-none group flex items-center gap-1 mt-1"
                onClick={() => handleCopyPath(selectedComponent.file)}
                title="Click to copy component path"
              >
                <span className="text-gray-500 group-hover:text-gray-400 transition-colors">📋</span>
                {selectedComponent.file}
              </div>
            )}
            {!selectedComponent.file && selectedComponent.parentComponent && (
              <div className="text-xs text-gray-400 mt-1 italic">
                This element is part of the parent component
              </div>
            )}
            {selectedComponent.props && selectedComponent.props.length > 0 && (
              <div className="mt-1">
                <span className="text-xs text-gray-400">Classes:</span>
                <div className="text-xs text-gray-300 font-mono mt-1 max-h-20 overflow-y-auto">
                  {selectedComponent.props.slice(0, 3).join(', ')}
                  {selectedComponent.props.length > 3 && ` +${selectedComponent.props.length - 3} more`}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Route info */}
        <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #374151' }}>
          <div style={{ fontSize: '12px', color: '#9ca3af', fontFamily: 'monospace' }}>Route: {pathname}</div>
        </div>

        {/* Instructions */}
        {showShortcutHints && (selectorMode || selectedComponent) && (
          <div className="mt-2 pt-2 border-t border-gray-700">
            {selectorMode && (
              <>
                <div className="text-xs text-yellow-400 animate-pulse">
                  ⚡ Click any element to inspect
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Press ESC to cancel
                </div>
              </>
            )}
            <div className="text-xs text-gray-500 mt-1">
              <span className="text-gray-600">Shortcut:</span> {' '}
              <kbd className="px-1 py-0.5 text-xs bg-gray-800 rounded">⌘/Ctrl</kbd>
              <span className="mx-0.5">+</span>
              <kbd className="px-1 py-0.5 text-xs bg-gray-800 rounded">Shift</kbd>
              <span className="mx-0.5">+</span>
              <kbd className="px-1 py-0.5 text-xs bg-gray-800 rounded">C</kbd>
              <span className="ml-1 text-gray-600">to copy all</span>
            </div>
          </div>
        )}
      </div>

      {/* Floating tooltip for hovered component in selector mode */}
      {selectorMode && hoveredComponent && (
        <div className="fixed pointer-events-none" 
          style={{
            left: '50%',
            top: '20px',
            transform: 'translateX(-50%)',
            zIndex: zIndex + 10000
          }}
        >
          <div className="bg-purple-900/95 backdrop-blur-sm text-white px-3 py-2 rounded-lg shadow-lg border border-purple-500">
            <div className="text-sm font-bold">{hoveredComponent.name}</div>
            {hoveredComponent.parentComponent && (
              <div className="text-xs text-purple-200 mt-1">
                Parent: {hoveredComponent.parentComponent}
              </div>
            )}
            {hoveredComponent.file && (
              <div className="text-xs text-purple-300 mt-1">{hoveredComponent.file}</div>
            )}
            {!hoveredComponent.file && !hoveredComponent.parentComponent && (
              <div className="text-xs text-purple-200 mt-1 italic">DOM Element</div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DevPageIndicator;
