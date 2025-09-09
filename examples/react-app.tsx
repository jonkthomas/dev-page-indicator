// App.tsx - Regular React App (Vite, CRA, etc.)
import React from 'react';
import { DevPageIndicator, devIdentify } from 'dev-page-indicator';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Dashboard />
      </main>
      <Footer />
      
      {/* Add DevPageIndicator */}
      <DevPageIndicator
        position="bottom-left"
        customComponentMap={{
          'app-header': { name: 'Header', file: 'src/components/Header.tsx' },
          'app-footer': { name: 'Footer', file: 'src/components/Footer.tsx' },
          'dashboard': { name: 'Dashboard', file: 'src/components/Dashboard.tsx' },
        }}
        // Since we're not using Next.js, provide custom route mapping
        customRouteMap={{
          '/': 'src/App.tsx',
          '/about': 'src/pages/About.tsx',
          '/contact': 'src/pages/Contact.tsx',
        }}
      />
    </div>
  );
}

// Example Header component with explicit identification
const Header = () => {
  return (
    <header 
      className="app-header"
      {...devIdentify('Header', 'src/components/Header.tsx')}
    >
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

// Example Dashboard component
const Dashboard = () => {
  return (
    <div 
      className="dashboard"
      {...devIdentify('Dashboard', 'src/components/Dashboard.tsx')}
    >
      <h1>Dashboard</h1>
      <div className="dashboard-grid">
        <Widget title="Sales" value="$12,345" />
        <Widget title="Users" value="1,234" />
        <Widget title="Orders" value="456" />
      </div>
    </div>
  );
};

// Example Widget component
const Widget = ({ title, value }: { title: string; value: string }) => {
  return (
    <div 
      className="widget"
      {...devIdentify('Widget', 'src/components/Dashboard.tsx', {
        widget: title.toLowerCase()
      })}
    >
      <h3>{title}</h3>
      <p className="widget-value">{value}</p>
    </div>
  );
};

// Example Footer component
const Footer = () => {
  return (
    <footer 
      className="app-footer"
      {...devIdentify('Footer', 'src/components/Footer.tsx')}
    >
      <p>&copy; 2024 My App. All rights reserved.</p>
    </footer>
  );
};

export default App;

// For React Router apps
// import { BrowserRouter } from 'react-router-dom';
// 
// function AppWithRouter() {
//   return (
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// }
// 
// export default AppWithRouter;
