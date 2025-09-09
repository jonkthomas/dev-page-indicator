// app/layout.tsx
import { DevPageIndicator } from 'dev-page-indicator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My App',
  description: 'My awesome app with dev tools',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        
        {/* Basic usage */}
        <DevPageIndicator />
        
        {/* Or with custom configuration */}
        {/*
        <DevPageIndicator
          position="bottom-right"
          defaultVisible={false}
          customComponentMap={{
            'dashboard-widget': { 
              name: 'DashboardWidget', 
              file: 'components/Dashboard/Widget.tsx' 
            },
            'user-card': { 
              name: 'UserCard', 
              file: 'components/User/Card.tsx' 
            },
          }}
          customRouteMap={{
            '/admin': 'app/admin/page.tsx',
            '/profile': 'app/profile/page.tsx',
          }}
        />
        */}
      </body>
    </html>
  );
}

// Example component with devIdentify
// components/MyComponent.tsx
import { devIdentify } from 'dev-page-indicator';

export default function MyComponent() {
  return (
    <div 
      className="my-component p-4 rounded-lg shadow"
      {...devIdentify('MyComponent', 'components/MyComponent.tsx')}
    >
      <h2>My Component</h2>
      <p>This component is now identifiable by DevPageIndicator!</p>
    </div>
  );
}

// Example with HOC pattern
// components/Card.tsx
import { withDevIdentify } from 'dev-page-indicator';

const Card = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default withDevIdentify(Card, 'Card', 'components/Card.tsx');
