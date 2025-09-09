export interface DevPageIndicatorProps {
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
  customComponentMap?: Record<string, { name: string; file?: string }>;
  
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
