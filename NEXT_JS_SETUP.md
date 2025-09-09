# Next.js Setup Guide for Dev Page Indicator

## Important: Server vs Client Components

The DevPageIndicator uses React hooks (useState, useEffect) and browser APIs, so it must be used in a client component. Since Next.js 13+ App Router uses server components by default, you need to handle this properly.

## Method 1: Create a Client Wrapper (Recommended)

Create a new file `components/DevIndicator.tsx`:

```tsx
'use client';

import dynamic from 'next/dynamic';

// Dynamically import with no SSR to avoid hydration issues
const DevPageIndicator = dynamic(
  () => import('dev-page-indicator').then(mod => mod.DevPageIndicator),
  { 
    ssr: false,
    loading: () => null 
  }
);

export default function DevIndicator() {
  // Only render in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }
  
  return <DevPageIndicator />;
}
```

Then in your root layout (`app/layout.tsx`):

```tsx
import DevIndicator from '@/components/DevIndicator';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <DevIndicator />
      </body>
    </html>
  );
}
```

## Method 2: Direct Import with Dynamic Loading

In your root layout (`app/layout.tsx`):

```tsx
import dynamic from 'next/dynamic';

const DevPageIndicator = dynamic(
  () => import('dev-page-indicator').then(mod => mod.DevPageIndicator),
  { 
    ssr: false,
    loading: () => null 
  }
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {process.env.NODE_ENV === 'development' && <DevPageIndicator />}
      </body>
    </html>
  );
}
```

## Method 3: Simple Client Component

Create `components/DevPageIndicatorWrapper.tsx`:

```tsx
'use client';

import { DevPageIndicator } from 'dev-page-indicator';

export default function DevPageIndicatorWrapper() {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }
  
  return <DevPageIndicator />;
}
```

Then import in your layout:

```tsx
import DevPageIndicatorWrapper from '@/components/DevPageIndicatorWrapper';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <DevPageIndicatorWrapper />
      </body>
    </html>
  );
}
```

## Troubleshooting

### Error: "useState only works in Client Components"
- You're trying to use the component directly in a server component
- Use one of the wrapper methods above

### Component Not Showing
- Check that you're in development mode
- Verify the import path is correct
- Check browser console for errors

### Styling Issues
- The component now uses inline styles, so it should work regardless of your CSS setup
- If you still see issues, check for global CSS that might be overriding

## Configuration

You can pass props to customize the component:

```tsx
<DevPageIndicator 
  position="bottom-right"  // or "top-left", "top-right", "bottom-left"
  defaultVisible={false}   // Start hidden
  zIndex={9999}           // Adjust z-index if needed
/>
```

## For Pages Router

If using Next.js Pages Router, add to `pages/_app.tsx`:

```tsx
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';

const DevPageIndicator = dynamic(
  () => import('dev-page-indicator').then(mod => mod.DevPageIndicator),
  { ssr: false }
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {process.env.NODE_ENV === 'development' && <DevPageIndicator />}
    </>
  );
}
```
