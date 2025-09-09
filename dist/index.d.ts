import React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface DevPageIndicatorProps {
    /**
     * Initial visibility state
     * @default true
     */
    defaultVisible?: boolean;
    /**
     * Position of the indicator
     * @default "bottom-left"
     */
    position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
    /**
     * Custom class mapping for component detection
     */
    customComponentMap?: Record<string, {
        name: string;
        file?: string;
    }>;
    /**
     * Enable/disable React Fiber detection
     * @default true
     */
    enableFiberDetection?: boolean;
    /**
     * Maximum depth to search for parent components
     * @default 5
     */
    maxParentSearchDepth?: number;
    /**
     * Custom route to file mapping
     */
    customRouteMap?: Record<string, string>;
    /**
     * Show keyboard shortcut hints
     * @default true
     */
    showShortcutHints?: boolean;
    /**
     * Z-index for the indicator
     * @default 50
     */
    zIndex?: number;
}

declare const DevPageIndicator: React.FC<DevPageIndicatorProps>;

/**
 * Adds data attributes to help identify components in development mode
 * This is used by the DevPageIndicator component for better component detection
 *
 * @param componentName - The name of the component
 * @param componentFile - The file path of the component
 * @param additionalProps - Any additional data attributes to add
 * @returns Object with data attributes or empty object in production
 *
 * @example
 * // In your component file
 * import { devIdentify } from 'dev-page-indicator';
 *
 * export default function MyComponent() {
 *   return (
 *     <div
 *       className="my-component"
 *       {...devIdentify('MyComponent', 'components/MyComponent.tsx')}
 *     >
 *       Component content
 *     </div>
 *   );
 * }
 */
declare function devIdentify(componentName: string, componentFile?: string, additionalProps?: Record<string, string>): Record<string, string>;
/**
 * Higher-order component that wraps a component with dev identification
 *
 * @example
 * import { withDevIdentify } from 'dev-page-indicator';
 *
 * const MyComponent = () => <div>Content</div>;
 *
 * export default withDevIdentify(MyComponent, 'MyComponent', 'components/MyComponent.tsx');
 */
declare function withDevIdentify<P extends object>(Component: React.ComponentType<P>, componentName: string, componentFile?: string): React.ComponentType<P> | {
    (props: P): react_jsx_runtime.JSX.Element;
    displayName: string;
};

export { DevPageIndicator, type DevPageIndicatorProps, devIdentify, withDevIdentify };
