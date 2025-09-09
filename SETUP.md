# 🚀 Setup Guide for Dev Page Indicator Package

## Publishing Your Package

### Option 1: Publish to NPM (Public Registry)

1. **Create NPM Account**
   - Sign up at [npmjs.com](https://www.npmjs.com/)
   - Verify your email

2. **Login to NPM**
   ```bash
   npm login
   ```

3. **Update Package Name**
   - Edit `package.json` and change the name to something unique
   - Check availability: `npm view <your-package-name>`

4. **Build & Publish**
   ```bash
   npm run build
   npm publish
   ```

### Option 2: GitHub Package Registry

1. **Update package.json**
   ```json
   {
     "name": "@yourusername/dev-page-indicator",
     "publishConfig": {
       "registry": "https://npm.pkg.github.com"
     }
   }
   ```

2. **Create GitHub Token**
   - Go to GitHub Settings > Developer settings > Personal access tokens
   - Create token with `write:packages` permission

3. **Login to GitHub Registry**
   ```bash
   npm login --registry=https://npm.pkg.github.com
   # Username: YOUR_GITHUB_USERNAME
   # Password: YOUR_GITHUB_TOKEN
   ```

4. **Publish**
   ```bash
   npm publish
   ```

### Option 3: Use Directly from GitHub

Users can install directly from your GitHub repo:

```bash
# Latest from main branch
npm install github:yourusername/dev-page-indicator

# Specific version/tag
npm install github:yourusername/dev-page-indicator#v1.0.0

# Specific commit
npm install github:yourusername/dev-page-indicator#commithash
```

## Setting Up the Repository

1. **Initialize Git**
   ```bash
   cd dev-page-indicator-package
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub Repository**
   - Go to [github.com/new](https://github.com/new)
   - Name it `dev-page-indicator`
   - Don't initialize with README (we already have one)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/dev-page-indicator.git
   git branch -M main
   git push -u origin main
   ```

4. **Set Up GitHub Actions**
   - Go to Settings > Secrets > Actions
   - Add secret `NPM_TOKEN` with your NPM auth token

## Local Development & Testing

### Link Package Locally

1. **In the package directory:**
   ```bash
   npm link
   ```

2. **In your project directory:**
   ```bash
   npm link dev-page-indicator
   ```

3. **To unlink:**
   ```bash
   # In your project
   npm unlink dev-page-indicator
   
   # In the package
   npm unlink
   ```

### Test in Another Project

1. **Install from local path:**
   ```bash
   npm install ../path/to/dev-page-indicator-package
   ```

2. **Or use npm pack:**
   ```bash
   # In package directory
   npm pack
   
   # In your project
   npm install ../path/to/dev-page-indicator-1.0.0.tgz
   ```

## Versioning

Use semantic versioning:

```bash
# Patch release (1.0.0 -> 1.0.1)
npm version patch

# Minor release (1.0.0 -> 1.1.0)
npm version minor

# Major release (1.0.0 -> 2.0.0)
npm version major

# With a message
npm version patch -m "Fix: Component detection bug"
```

## Creating a Release

1. **Update version:**
   ```bash
   npm version patch/minor/major
   ```

2. **Push with tags:**
   ```bash
   git push origin main --tags
   ```

3. **Create GitHub Release:**
   - Go to Releases > Create new release
   - Choose the tag you just created
   - Add release notes
   - Publish release (this triggers the publish workflow)

## Customization for Your Projects

### Add Your Common Components

Edit `src/DevPageIndicator.tsx` to add your common component patterns:

```tsx
// Built-in detection patterns
if (classString.includes('your-component')) {
  return { name: 'YourComponent', file: 'path/to/component.tsx' };
}
```

### Add Your Route Mappings

```tsx
const defaultRouteMap: Record<string, string> = {
  "/": "app/page.tsx",
  "/your-route": "app/your-route/page.tsx",
  // Add more...
};
```

## Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

### TypeScript Errors
```bash
# Check types
npx tsc --noEmit
```

### Publishing Issues
- Ensure unique package name
- Check you're logged in: `npm whoami`
- Verify registry: `npm config get registry`

## Next Steps

1. ⭐ Star the repo on GitHub
2. 📝 Customize for your needs
3. 🚀 Publish to NPM
4. 📢 Share with the community
5. 🐛 Report issues and contribute improvements

## Support

Create issues on GitHub for:
- Bug reports
- Feature requests
- Documentation improvements

Happy coding! 🎉
