import React from 'react';

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
export function devIdentify(
  componentName: string,
  componentFile?: string,
  additionalProps?: Record<string, string>
): Record<string, string> {
  // Only add attributes in development mode
  if (process.env.NODE_ENV !== 'development') {
    return {};
  }

  const props: Record<string, string> = {
    'data-component-name': componentName,
  };

  if (componentFile) {
    props['data-component-file'] = componentFile;
  }

  if (additionalProps) {
    Object.entries(additionalProps).forEach(([key, value]) => {
      if (!key.startsWith('data-')) {
        props[`data-${key}`] = value;
      } else {
        props[key] = value;
      }
    });
  }

  return props;
}

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
export function withDevIdentify<P extends object>(
  Component: React.ComponentType<P>,
  componentName: string,
  componentFile?: string
) {
  if (process.env.NODE_ENV !== 'development') {
    return Component;
  }

  const WrappedComponent = (props: P) => {
    return (
      <div {...devIdentify(componentName, componentFile)}>
        <Component {...props} />
      </div>
    );
  };

  WrappedComponent.displayName = `DevIdentified(${componentName})`;
  
  return WrappedComponent;
}
