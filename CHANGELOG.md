# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2025-12-24

### Changed

- **BREAKING**: Converted to ES Modules (ESM) as the primary module format
- **BREAKING**: Moved `@11ty/eleventy` from dependencies to peerDependencies (requires `>=2.0.0`)
- Updated minimum Node.js version to 24 in CI

### Added

- Dual module support: ESM (`.eleventy.js`) and CommonJS (`.eleventy.cjs`)
- Package exports field for proper module resolution
- Liquid template support: pass extra classes as a string argument (Liquid doesn't support objects)

### Migration

If you're using CommonJS (`require`), no changes needed - the package will automatically use the CJS wrapper.

For ESM projects, update your config:

```js
// Before (CommonJS)
const eleventyPluginVidyard = require('eleventy-plugin-vidyard');

// After (ESM)
import eleventyPluginVidyard from 'eleventy-plugin-vidyard';
```

## [1.0.1] - 2022-06-10

### Changed

- Updated dependencies

## [1.0.0] - 2022-05-04

### Added

- Initial release
- Vidyard video embed shortcode
- URL validation using `is-url`
- Configurable options: script, class, version, type
