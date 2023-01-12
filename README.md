<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>write-dir-safe</h1>
  <a href="https://npmjs.com/package/write-dir-safe">
    <img alt="NPM" src="https://img.shields.io/npm/v/write-dir-safe.svg">
  </a>
  <a href="https://github.com/bconnorwhite/write-dir-safe">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/write-dir-safe.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/write-dir-safe?branch=master">
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/write-dir-safe.svg?branch=master">
  </a>
</div>

<br />

<blockquote align="center">Create directories and their parents recursively.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/write-dir-safe">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/write-dir-safe?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

> Create directories and their parents recursively.
- Returns `true` if directory now exists.
- Returns `false` if unable to create directory.
- Returns `undefined` on other errors (ex: permission denied) rather than throwing.

## Installation

```sh
yarn add write-dir-safe
```

```sh
npm install write-dir-safe
```

```sh
pnpm add write-dir-safe
```

## Usage

```ts
import { writeDir, writeDirSync, Options } from "write-dir-safe";

function writeDir(path: string, options: Options): Promise<boolean | undefined>;

function writeDirSync(path: string, options: Options): boolean | undefined;

type Options = {
  /**
   * Recursively create parent directories as well. Default: `true`
   */
  recursive?: boolean;
};
```
<!--BEGIN FOOTER-->

<br />

<h2>Dev Dependencies</h2>

- [@types/mock-fs](https://www.npmjs.com/package/@types/mock-fs): TypeScript definitions for mock-fs
- [@types/node](https://www.npmjs.com/package/@types/node): TypeScript definitions for Node.js
- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.
- [mock-fs](https://www.npmjs.com/package/mock-fs): A configurable mock file system.  You know, for testing.
- [read-file-safe](https://www.npmjs.com/package/read-file-safe): Read files without try catch

<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/write-dir-safe.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT) - _MIT License_
<!--END FOOTER-->

<br />

## Related Packages

- [fs-safe](https://www.npmjs.com/package/fs-safe): A simple fs wrapper that doesn't throw
- [read-dir-safe](https://www.npmjs.com/package/read-dir-safe): Read directories recursively or non-recursively
- [remove-dir-safe](https://www.npmjs.com/package/remove-dir-safe): Remove directories recursively or non-recursively
- [read-file-safe](https://www.npmjs.com/package/read-file-safe): Read files without try catch
- [write-file-safe](https://www.npmjs.com/package/write-file-safe): Write files, and parent directories if necessary
- [remove-file-safe](https://www.npmjs.com/package/remove-file-safe): Remove a file without try catch
