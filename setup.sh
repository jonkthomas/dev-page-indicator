#!/bin/bash

# Dev Page Indicator - Quick Setup Script

echo "🎯 Dev Page Indicator - Setup Script"
echo "===================================="
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js and npm first."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo ""
echo "🔨 Building the package..."
npm run build

echo ""
echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Update package.json with your info (name, author, repository)"
echo "2. Test locally: npm link"
echo "3. Publish to npm: npm publish"
echo "4. Or push to GitHub for direct installation"
echo ""
echo "📖 See SETUP.md for detailed instructions"
echo ""
echo "🚀 Quick test in your project:"
echo "   npm link dev-page-indicator"
echo "   # Then add <DevPageIndicator /> to your app"
echo ""
echo "Happy coding! 🎉"
