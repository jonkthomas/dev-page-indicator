#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  blue: '\x1b[34m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
};

function printBanner() {
  console.log('\n' + colors.bright + colors.magenta + '╔══════════════════════════════════════════════════════════╗' + colors.reset);
  console.log(colors.bright + colors.magenta + '║' + colors.reset + '     📦 ' + colors.bright + colors.cyan + 'Dev Page Indicator' + colors.reset + ' Successfully Installed!     ' + colors.bright + colors.magenta + '║' + colors.reset);
  console.log(colors.bright + colors.magenta + '╚══════════════════════════════════════════════════════════╝' + colors.reset);
}

function printInstructions() {
  console.log('\n' + colors.bright + colors.green + '🚀 Quick Setup Instructions:' + colors.reset);
  console.log(colors.dim + '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' + colors.reset);
  
  console.log('\n' + colors.bright + '1. Import the component:' + colors.reset);
  console.log(colors.cyan + '   import { DevPageIndicator } from \'dev-page-indicator\';' + colors.reset);
  
  console.log('\n' + colors.bright + '2. Add to your app:' + colors.reset);
  console.log(colors.yellow + '   <DevPageIndicator />' + colors.reset);
  
  console.log('\n' + colors.bright + '📍 Where to add:' + colors.reset);
  console.log('   • Next.js App Router → ' + colors.green + 'app/layout.tsx' + colors.reset);
  console.log('   • Next.js Pages Router → ' + colors.green + 'pages/_app.tsx' + colors.reset);
  console.log('   • Regular React → ' + colors.green + 'App.tsx' + colors.reset);
}

function printAIPrompt() {
  console.log('\n' + colors.bright + colors.blue + '🤖 Using AI Tools? (Cursor, Copilot, etc.)' + colors.reset);
  console.log(colors.dim + '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' + colors.reset);
  console.log('\nCopy this prompt:');
  console.log(colors.dim + '---' + colors.reset);
  console.log(colors.cyan + `Add dev-page-indicator to this project:
1. Import: import { DevPageIndicator } from 'dev-page-indicator';
2. Add <DevPageIndicator /> before closing </body> or at component end
3. Should only show in development mode` + colors.reset);
  console.log(colors.dim + '---' + colors.reset);
}

function printLinks() {
  console.log('\n' + colors.bright + '📚 Resources:' + colors.reset);
  console.log('   Documentation: ' + colors.blue + 'https://github.com/jonkthomas/dev-page-indicator' + colors.reset);
  console.log('   Integration Guide: ' + colors.blue + 'https://github.com/jonkthomas/dev-page-indicator/blob/main/INTEGRATION.md' + colors.reset);
}

function detectProjectType() {
  const cwd = process.cwd();
  
  // Check for Next.js
  if (fs.existsSync(path.join(cwd, 'next.config.js')) || 
      fs.existsSync(path.join(cwd, 'next.config.mjs'))) {
    if (fs.existsSync(path.join(cwd, 'app'))) {
      return 'nextjs-app-router';
    }
    if (fs.existsSync(path.join(cwd, 'pages'))) {
      return 'nextjs-pages-router';
    }
  }
  
  // Check for Vite
  if (fs.existsSync(path.join(cwd, 'vite.config.js')) || 
      fs.existsSync(path.join(cwd, 'vite.config.ts'))) {
    return 'vite';
  }
  
  // Check for Create React App
  if (fs.existsSync(path.join(cwd, 'public')) && 
      fs.existsSync(path.join(cwd, 'src/App.tsx')) || 
      fs.existsSync(path.join(cwd, 'src/App.jsx'))) {
    return 'cra';
  }
  
  return 'unknown';
}

function printProjectSpecificInstructions() {
  const projectType = detectProjectType();
  
  if (projectType !== 'unknown') {
    console.log('\n' + colors.bright + colors.green + '✨ Detected Project Type: ' + projectType + colors.reset);
    
    switch (projectType) {
      case 'nextjs-app-router':
        console.log('\n' + colors.yellow + 'Add to your app/layout.tsx:' + colors.reset);
        console.log(colors.dim + `
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
}` + colors.reset);
        break;
        
      case 'nextjs-pages-router':
        console.log('\n' + colors.yellow + 'Add to your pages/_app.tsx:' + colors.reset);
        console.log(colors.dim + `
import { DevPageIndicator } from 'dev-page-indicator';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <DevPageIndicator />
    </>
  );
}` + colors.reset);
        break;
        
      case 'vite':
      case 'cra':
        console.log('\n' + colors.yellow + 'Add to your App.tsx:' + colors.reset);
        console.log(colors.dim + `
import { DevPageIndicator } from 'dev-page-indicator';

function App() {
  return (
    <div className="App">
      {/* Your app content */}
      <DevPageIndicator />
    </div>
  );
}` + colors.reset);
        break;
    }
  }
}

// Main execution
function main() {
  // Only run in actual install, not in the package itself
  if (process.env.INIT_CWD && !process.env.INIT_CWD.includes('dev-page-indicator-package')) {
    printBanner();
    printInstructions();
    printProjectSpecificInstructions();
    printAIPrompt();
    printLinks();
    console.log('\n' + colors.bright + colors.green + '✅ Setup complete! Happy debugging! 🎯' + colors.reset + '\n');
  }
}

main();
