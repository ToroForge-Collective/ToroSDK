# Publishing Toronet SDK to npm

This guide contains the commands and steps needed to publish the Toronet SDK package to npm.

## Prerequisites

1. **npm Account**: Ensure you have an npm account. Create one at [https://www.npmjs.com/signup](https://www.npmjs.com/signup) if you don't have one.

2. **Login to npm**: Authenticate with npm using your credentials.

```bash
npm login
```

You'll be prompted for:
- Username
- Password
- Email (one-time password will be sent)

3. **Verify Login**: Check that you're logged in correctly.

```bash
npm whoami
```

## Pre-Publishing Checklist

1. **Update Version**: Update the version number in `package.json` following [Semantic Versioning](https://semver.org/):
   - **Patch** (1.0.0 → 1.0.1): Bug fixes
   - **Minor** (1.0.0 → 1.1.0): New features (backward compatible)
   - **Major** (1.0.0 → 2.0.0): Breaking changes

```bash
# Option 1: Manual edit in package.json
# Change "version": "0.0.9" to "version": "0.0.10" (or appropriate version)

# Option 2: Use npm version command (recommended)
npm version patch   # For bug fixes (0.0.9 → 0.0.10)
npm version minor   # For new features (0.0.9 → 0.1.0)
npm version major   # For breaking changes (0.0.9 → 1.0.0)
```

2. **Build the Package**: Compile TypeScript and generate distribution files.

```bash
npm run build
```

This runs the `tsup` build command defined in `package.json` and creates the `dist/` directory with compiled JavaScript files.

3. **Test the Build**: Verify the build output is correct.

```bash
# Check that dist/ directory contains the expected files
ls -la dist/

# Should see files like:
# - index.js
# - index.mjs
# - index.d.ts
# - index.d.mts
```

4. **Check Package Contents**: Verify what will be published (only files listed in `package.json` "files" field will be included).

```bash
npm pack --dry-run
```

This shows what files will be included in the package without actually creating the tarball.

## Publishing Commands

### Publish to npm (Public Package)

```bash
npm publish
```

This publishes the package to the public npm registry. The package name and version from `package.json` will be used.

### Publish with Specific Tag

```bash
# Publish as beta/alpha version
npm publish --tag beta
npm publish --tag alpha

# Install with tag: npm install torosdk@beta
```

### Publish to Test Registry (Optional)

If you want to test publishing first, you can use a test registry:

```bash
# Use npm's test registry (requires separate account)
npm publish --registry https://registry.npmjs.org/ --dry-run
```

## Post-Publishing

1. **Verify Publication**: Check that your package is published.

```bash
# View package info
npm view torosdk

# Check specific version
npm view torosdk@0.0.9
```

2. **Install and Test**: Install the published package in a test project to verify it works.

```bash
# In a different directory/project
npm install torosdk@latest
# or
npm install torosdk@0.0.9
```

3. **Update Documentation**: If needed, update any external documentation or README with the new version.

## Common Workflow

Here's a typical workflow for publishing a new version:

```bash
# 1. Ensure you're on the main branch and up to date
git checkout main
git pull origin main

# 2. Make sure all changes are committed
git status

# 3. Update version (this also creates a git tag)
npm version patch  # or minor, or major

# 4. Build the package
npm run build

# 5. Test the build locally (optional)
npm pack
# This creates a .tgz file you can test install

# 6. Publish to npm
npm publish

# 7. Push version tag to git
git push origin main --tags
```

## Troubleshooting

### Error: "You must be logged in to publish packages"

```bash
npm login
```

### Error: "Package name already exists" or "403 Forbidden"

- Check if you're the owner/maintainer of the package
- Verify package name in `package.json` matches your npm username/org
- Check if the version already exists (you can't republish the same version)

### Error: "Invalid package name"

- Package name must be lowercase
- Can contain hyphens and underscores
- Must be unique on npm

### Error: "Missing required field: repository"

Add repository field to `package.json`:

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/ToroForge-Collective/ToroSDK.git"
  }
}
```

### Unpublish a Version (Use with Caution!)

⚠️ **Warning**: Only unpublish within 72 hours of publishing. After that, you must use `npm deprecate` instead.

```bash
# Unpublish a specific version
npm unpublish torosdk@0.0.9

# Deprecate instead (recommended for older versions)
npm deprecate torosdk@0.0.9 "This version has a critical bug, please upgrade"
```

## Version Management Best Practices

1. **Use Semantic Versioning**: Follow semver.org guidelines
2. **Create Git Tags**: The `npm version` command automatically creates git tags
3. **Update CHANGELOG**: Document changes in a CHANGELOG.md file
4. **Test Before Publishing**: Always test the build locally first
5. **Publish from CI/CD**: Consider automating publishing through GitHub Actions or similar

## Automated Publishing (Optional)

You can set up GitHub Actions to automatically publish on version tags:

```yaml
# .github/workflows/publish.yml
name: Publish to npm
on:
  push:
    tags:
      - 'v*'
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm run build
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
```

## Quick Reference

```bash
# Login
npm login

# Check current user
npm whoami

# Update version
npm version patch|minor|major

# Build
npm run build

# Test what will be published
npm pack --dry-run

# Publish
npm publish

# Publish with tag
npm publish --tag beta

# View published package
npm view torosdk

# Install published package
npm install torosdk@latest
```

## Notes

- The `package.json` already includes the `files` field specifying `["dist", "README.md"]`, so only these will be published
- The `main`, `module`, and `types` fields point to the `dist/` directory
- Make sure `dist/` is in `.gitignore` but the build runs before publishing
- Always test the published package in a fresh project before announcing the release

