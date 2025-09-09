# 🎯 Dev Page Indicator

A powerful development tool for Next.js and React applications that provides instant visual feedback about your current page, components, and allows smart context copying for better developer experience.

![Version](https://img.shields.io/npm/v/dev-page-indicator)
![License](https://img.shields.io/npm/l/dev-page-indicator)
![Size](https://img.shields.io/bundlephobia/minzip/dev-page-indicator)

## 🚀 Quick Install & Setup

```bash
npm install --save-dev github:jonkthomas/dev-page-indicator
```

**After installation, you'll see setup instructions in your terminal!** 

Or copy this for AI tools (Cursor/Copilot):
```
Add dev-page-indicator (already installed):
1. Import: import { DevPageIndicator } from 'dev-page-indicator';
2. Add <DevPageIndicator /> before </body> tag
```

📖 [Full Integration Guide](https://github.com/jonkthomas/dev-page-indicator/blob/main/INTEGRATION.md)

## ✨ Features

- 📍 **Page Detection** - Automatically shows current page file path
- 🎯 **Component Selector** - Click to inspect any element and identify its React component
- 🧠 **Smart Detection** - Uses React Fiber, class patterns, and parent traversal
- 📋 **Copy Context** - One-click copy of page + component info in markdown format
- ⌨️ **Keyboard Shortcuts** - Quick actions with Cmd/Ctrl + Shift + C
- 🎨 **Fully Customizable** - Position, mappings, and behavior options
- 🚀 **Zero Config** - Works out of the box with Next.js
- 🪶 **Lightweight** - Only loads in development mode

## 🚀 Installation

### NPM
```bash
npm install --save-dev dev-page-indicator
```

### Yarn
```bash
yarn add -D dev-page-indicator
```

### PNPM
```bash
pnpm add -D dev-page-indicator
```

### Install from GitHub (Latest)
```bash
npm install --save-dev github:jonkthomas/dev-page-indicator
```


## 📦 Quick Start

### Next.js App Router

Add to your root layout (`app/layout.tsx`):

```tsx
import { DevPageIndicator } from 'dev-page-indicator';

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

### Next.js Pages Router

Add to your `_app.tsx`:

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

### Regular React App

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

## 🎨 Configuration

```tsx
<DevPageIndicator
  // Position on screen
  position="bottom-left" // 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
  
  // Initial visibility
  defaultVisible={true}
  
  // Custom component detection mapping
  customComponentMap={{
    'my-component-class': { 
      name: 'MyComponent', 
      file: 'components/MyComponent.tsx' 
    }
  }}
  
  // Custom route to file mapping
  customRouteMap={{
    '/custom-route': 'src/pages/custom.tsx'
  }}
  
  // Enable React Fiber detection
  enableFiberDetection={true}
  
  // Max depth to search for parent components
  maxParentSearchDepth={5}
  
  // Show keyboard shortcut hints
  showShortcutHints={true}
  
  // Custom z-index
  zIndex={50}
/>
```

## 🔧 Advanced Usage

### Mark Components for Better Detection

Use the `devIdentify` utility to explicitly mark your components:

```tsx
import { devIdentify } from 'dev-page-indicator';

export default function MyComponent() {
  return (
    <div 
      className="my-component"
      {...devIdentify('MyComponent', 'components/MyComponent.tsx')}
    >
      {/* Component content */}
    </div>
  );
}
```

### HOC Pattern

Wrap components with `withDevIdentify`:

```tsx
import { withDevIdentify } from 'dev-page-indicator';

const MyComponent = () => <div>Content</div>;

export default withDevIdentify(
  MyComponent, 
  'MyComponent', 
  'components/MyComponent.tsx'
);
```

### Custom Component Mapping

Add your own component detection patterns:

```tsx
<DevPageIndicator
  customComponentMap={{
    'dashboard-widget': { 
      name: 'DashboardWidget', 
      file: 'components/Dashboard/Widget.tsx' 
    },
    'user-avatar': { 
      name: 'UserAvatar', 
      file: 'components/User/Avatar.tsx' 
    }
  }}
/>
```

## ⌨️ Keyboard Shortcuts

- **ESC** - Exit component selector mode
- **Cmd/Ctrl + Shift + C** - Copy full context to clipboard

## 📋 Copied Context Format

The tool copies context in both plain text and markdown:

```markdown
## Development Context

### Page Information
- **Page File:** `app/dashboard/page.tsx`
- **Route:** `/dashboard`

### Selected Component
- **Component:** RewardCard
- **File:** `components/rewards/RewardCard.tsx`
- **Parent:** RewardsList
- **Classes:** `reward-card, p-4, shadow-lg`

---
*Copied from DevPageIndicator at 3:45:12 PM*
```

## 🧠 Component Detection Strategies

1. **Data Attributes** - Explicit marking with `devIdentify`
2. **React Fiber** - Accesses React's internal component tree
3. **Class Patterns** - Identifies by CSS class names
4. **Parent Traversal** - Searches up the DOM tree
5. **DOM Fallback** - Shows element info as last resort

## 🏗️ Development

Clone and install:

```bash
git clone https://github.com/jonkthomas/dev-page-indicator.git
cd dev-page-indicator
npm install
```

Build:

```bash
npm run build
```

Watch mode:

```bash
npm run dev
```

## 📝 TypeScript Support

Full TypeScript support with exported types:

```tsx
import { DevPageIndicator, DevPageIndicatorProps } from 'dev-page-indicator';

const config: DevPageIndicatorProps = {
  position: 'bottom-right',
  defaultVisible: false
};

<DevPageIndicator {...config} />
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

- Inspired by React DevTools
- Built with React and TypeScript
- Toast notifications by react-hot-toast

## 🐛 Known Issues

- Component detection may vary based on build optimization
- React Fiber detection works best with development builds
- Some framework-specific components may need custom mapping

## 🚀 Roadmap

- [ ] Vue.js support
- [ ] Browser extension version
- [ ] Component props inspection
- [ ] Performance metrics display
- [ ] Network request tracking
- [ ] State management integration

## 💬 Support

- [GitHub Issues](https://github.com/jonkthomas/dev-page-indicator/issues)
- [Discussions](https://github.com/jonkthomas/dev-page-indicator/discussions)

---

Made with ❤️ for developers who love great DX
