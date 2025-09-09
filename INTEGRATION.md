# 🚀 Integration Guide for Dev Page Indicator

## Quick Copy-Paste for AI Tools (Cursor, Copilot, etc.)

### For Cursor AI

Copy this entire block and paste it into Cursor:

```
Add the dev-page-indicator component to this project. The package is already installed.

Tasks:
1. Find the root layout file (app/layout.tsx for App Router, pages/_app.tsx for Pages Router, or App.tsx for regular React)
2. Add this import at the top: import { DevPageIndicator } from 'dev-page-indicator';
3. Add the component <DevPageIndicator /> right before the closing </body> tag (or before the last closing tag in the component)
4. The component should only render in development mode (it handles this automatically)

Example for Next.js App Router (app/layout.tsx):
```tsx
import { DevPageIndicator } from 'dev-page-indicator';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <DevPageIndicator />
      </body>
    </html>
  );
}
```

Make sure not to add it multiple times if it already exists.
```

## Manual Integration

### Step 1: Import the Component

```tsx
import { DevPageIndicator } from 'dev-page-indicator';
```

### Step 2: Add to Your App

#### Next.js App Router (app/layout.tsx)
```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <DevPageIndicator />
      </body>
    </html>
  );
}
```

#### Next.js Pages Router (pages/_app.tsx)
```tsx
import { DevPageIndicator } from 'dev-page-indicator';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <DevPageIndicator />
    </>
  );
}
```

#### React (Vite/CRA)
```tsx
import { DevPageIndicator } from 'dev-page-indicator';

function App() {
  return (
    <div className="App">
      {/* Your app content */}
      <DevPageIndicator />
    </div>
  );
}
```

## Configuration Options

```tsx
<DevPageIndicator
  position="bottom-left"     // Position: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
  defaultVisible={true}       // Show on load
  showShortcutHints={true}    // Show keyboard shortcuts
/>
```

## Verification

After adding the component:

1. Start your dev server
2. Look for the purple "DEV" indicator in the bottom-left corner
3. Click "🎯 Select" to start inspecting components
4. Use Cmd/Ctrl + Shift + C to copy context

## Troubleshooting

### Component Not Showing?
- Ensure you're in development mode (`NODE_ENV=development`)
- Check browser console for errors
- Verify the import path is correct

### Build Errors?
- Make sure you've installed the package: `npm install --save-dev github:jonkthomas/dev-page-indicator`
- Try rebuilding: `npm run build`

### TypeScript Errors?
```tsx
// Add type import if needed
import type { DevPageIndicatorProps } from 'dev-page-indicator';
```

## Advanced: Mark Your Components

Make your components easily identifiable:

```tsx
import { devIdentify } from 'dev-page-indicator';

export function MyComponent() {
  return (
    <div {...devIdentify('MyComponent', 'components/MyComponent.tsx')}>
      {/* Component content */}
    </div>
  );
}
```

## Need Help?

- 📖 [Full Documentation](https://github.com/jonkthomas/dev-page-indicator)
- 🐛 [Report Issues](https://github.com/jonkthomas/dev-page-indicator/issues)
- 💬 [Discussions](https://github.com/jonkthomas/dev-page-indicator/discussions)
