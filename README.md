# ajanuw-vite-build-esm

[![npm version](https://img.shields.io/npm/v/ajanuw-vite-build-esm.svg)](https://www.npmjs.com/package/ajanuw-vite-build-esm)
[![npm downloads](https://img.shields.io/npm/dm/ajanuw-vite-build-esm.svg)](https://www.npmjs.com/package/ajanuw-vite-build-esm)
[![bundle size](https://img.shields.io/bundlephobia/minzip/ajanuw-vite-build-esm.svg)](https://bundlephobia.com/package/ajanuw-vite-build-esm)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A modern TypeScript utility library with ESM and UMD support, built with Vite. Provides math utilities with tree-shaking friendly exports.

## ✨ Features

- 🚀 **Modern ESM Support** - Native ES modules with tree-shaking
- 🔧 **UMD Compatibility** - Works in browsers, Node.js, and legacy environments
- 📦 **Tree-shakable** - Import only what you need
- 🎯 **TypeScript Ready** - Full type definitions included
- ⚡ **Built with Vite** - Fast builds and optimizations
- 🌐 **CDN Ready** - Use directly from unpkg or jsDelivr
- 📱 **Multiple Entry Points** - Granular imports for better performance

## 📦 Installation

```bash
# npm
npm install ajanuw-vite-build-esm

# yarn
yarn add ajanuw-vite-build-esm

# pnpm
pnpm add ajanuw-vite-build-esm
```

## 🚀 Usage

### ESM (Recommended)

```javascript
// Import all functions
import { add, sub, foo } from 'ajanuw-vite-build-esm';

// Tree-shakable imports (recommended for better bundle size)
import { add } from 'ajanuw-vite-build-esm/add';
import { sub } from 'ajanuw-vite-build-esm/sub';
import { foo } from 'ajanuw-vite-build-esm/foo';

console.log(add(2, 3));    // 5
console.log(sub(10, 4));   // 6
console.log(foo(3, 4));    // 25 (3² + 4² = 9 + 16)
```

### CommonJS

```javascript
const { add, sub, foo } = require('ajanuw-vite-build-esm');

console.log(add(2, 3));    // 5
console.log(sub(10, 4));   // 6
console.log(foo(3, 4));    // 25
```

### Browser (UMD)

```html
<script src="https://unpkg.com/ajanuw-vite-build-esm/dist/umd/index.js"></script>
<script>
  const { add, sub, foo } = AjanuwViteBuildEsm;
  console.log(add(2, 3));    // 5
  console.log(sub(10, 4));   // 6
  console.log(foo(3, 4));    // 25
</script>
```

### Browser (ESM)

```html
<script type="module">
  import { add, sub, foo } from 'https://unpkg.com/ajanuw-vite-build-esm/dist/esm/index.js';

  console.log(add(2, 3));    // 5
  console.log(sub(10, 4));   // 6
  console.log(foo(3, 4));    // 25
</script>
```

### Import Maps (Recommended for Production)

```html
<script type="importmap">
{
  "imports": {
    "math-utils": "https://unpkg.com/ajanuw-vite-build-esm/dist/esm/index.js",
    "math-utils/add": "https://unpkg.com/ajanuw-vite-build-esm/dist/esm/add.js",
    "math-utils/sub": "https://unpkg.com/ajanuw-vite-build-esm/dist/esm/sub.js",
    "math-utils/foo": "https://unpkg.com/ajanuw-vite-build-esm/dist/esm/foo.js"
  }
}
</script>

<script type="module">
  import { add } from 'math-utils/add';
  import { sub } from 'math-utils/sub';

  console.log(add(2, 3));    // 5
  console.log(sub(10, 4));   // 6
</script>
```

## 📚 API Reference

### `add(a, b)`

Adds two numbers together.

```typescript
function add(a: number, b: number): number
```

**Parameters:**
- `a` (number): The first number
- `b` (number): The second number

**Returns:** The sum of `a` and `b`

**Example:**
```javascript
import { add } from 'ajanuw-vite-build-esm/add';
console.log(add(2, 3)); // 5
```

### `sub(a, b)`

Subtracts the second number from the first.

```typescript
function sub(a: number, b: number): number
```

**Parameters:**
- `a` (number): The number to subtract from
- `b` (number): The number to subtract

**Returns:** The difference of `a` minus `b`

**Example:**
```javascript
import { sub } from 'ajanuw-vite-build-esm/sub';
console.log(sub(10, 4)); // 6
```

### `foo(a, b)`

Calculates the sum of the squares of two numbers (a² + b²).

```typescript
function foo(a: number, b: number): number
```

**Parameters:**
- `a` (number): The first number
- `b` (number): The second number

**Returns:** The sum of squares: `a² + b²`

**Example:**
```javascript
import { foo } from 'ajanuw-vite-build-esm/foo';
console.log(foo(3, 4)); // 25 (3² + 4² = 9 + 16)
```

## 🏗️ Build Formats

This package provides multiple build formats for maximum compatibility:

| Format | Location | Usage |
|--------|----------|-------|
| **ESM** | `dist/esm/` | Modern bundlers, tree-shaking |
| **UMD** | `dist/umd/` | Browsers, legacy environments |
| **Types** | `dist/esm/*.d.ts` | TypeScript support |

### Package Exports

The package uses modern [package exports](https://nodejs.org/api/packages.html#exports) for optimal module resolution:

```json
{
  "exports": {
    ".": {
      "types": "./dist/esm/index.d.ts",
      "import": "./dist/esm/index.js",
      "require": "./dist/umd/index.js",
      "default": "./dist/esm/index.js"
    },
    "./add": {
      "types": "./dist/esm/add.d.ts",
      "import": "./dist/esm/add.js",
      "default": "./dist/esm/add.js"
    }
    // ... more exports
  }
}
```

## 🌐 CDN Links

### unpkg

```html
<!-- UMD (for script tags) -->
<script src="https://unpkg.com/ajanuw-vite-build-esm/dist/umd/index.js"></script>

<!-- ESM (for module scripts) -->
<script type="module">
  import { add } from 'https://unpkg.com/ajanuw-vite-build-esm/dist/esm/add.js';
</script>
```

### jsDelivr

```html
<!-- UMD -->
<script src="https://cdn.jsdelivr.net/npm/ajanuw-vite-build-esm/dist/umd/index.js"></script>

<!-- ESM -->
<script type="module">
  import { add } from 'https://cdn.jsdelivr.net/npm/ajanuw-vite-build-esm/dist/esm/add.js';
</script>
```

## 💡 Best Practices

### Bundle Size Optimization

```javascript
// ✅ Good - tree-shakable imports
import { add } from 'ajanuw-vite-build-esm/add';
import { sub } from 'ajanuw-vite-build-esm/sub';

// ❌ Less optimal - imports entire library
import { add, sub } from 'ajanuw-vite-build-esm';
```

### TypeScript Usage

```typescript
import { add, sub, foo } from 'ajanuw-vite-build-esm';

// Full type safety
const result: number = add(1, 2);
const difference: number = sub(10, 5);
const squares: number = foo(3, 4);
```

## 🛠️ Development

### Prerequisites

- Node.js >= 16.0.0
- npm, yarn, or pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/januwA/ajanuw-vite-build-esm.git
cd ajanuw-vite-build-esm

# Install dependencies
npm install

# Build the project
npm run build

# Build for production
npm run build:prod
```

### Available Scripts

```bash
npm run build          # Build both ESM and UMD formats
npm run build:esm      # Build ESM format only
npm run build:umd      # Build UMD format only
npm run build:prod     # Production build (no source maps)
npm run dev            # Development build with watch mode
```

## 🧪 Browser Support

| Feature | Support |
|---------|---------|
| **ESM** | Chrome 61+, Firefox 60+, Safari 10.1+, Edge 16+ |
| **UMD** | All browsers including IE11+ |
| **TypeScript** | All versions with module support |

## 📄 License

[MIT](LICENSE) © [januwA](https://github.com/januwA)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🔗 Links

- [GitHub Repository](https://github.com/januwA/ajanuw-vite-build-esm)
- [npm Package](https://www.npmjs.com/package/ajanuw-vite-build-esm)
- [Issues](https://github.com/januwA/ajanuw-vite-build-esm/issues)
- [Changelog](https://github.com/januwA/ajanuw-vite-build-esm/releases)

## ⭐ Show your support

Give a ⭐️ if this project helped you!