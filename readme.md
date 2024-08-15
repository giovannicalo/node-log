# Node Log

[![Build Status](https://github.com/giovannicalo/node-log/actions/workflows/build.yml/badge.svg)](https://github.com/giovannicalo/node-log/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/giovannicalo/node-log/badge.svg)](https://coveralls.io/github/giovannicalo/node-log)

## Installation

```bash
npm install giovannicalo/node-log
```

> Not yet published to NPM. This will install it from GitHub.

## Usage

```javascript
const log = require("log");

log.info`Foo ${42}`;
// [2020-08-18T04:53:01.777Z] [INFO   ] Foo 42

log.warning`Bar ${{ foo: "bar" }}`;
// [2020-08-18T04:53:01.781Z] [WARNING] Bar { foo: 'bar' }

log.error`Foo bar ${new Error("Something went wrong")}`;
// [2020-08-18T04:57:18.066Z] [ERROR  ] Foo bar Error: Something went wrong
//   Object.<anonymous>
//   foo.js:5:21
//   log.error`Foo bar ${new Error("Something went wrong")}`;
//                       ^
```

## API

### `error(strings: string[], ...values: any): void`

### `info(strings: string[], ...values: any): void`

### `warning(strings: string[], ...values: any): void`

Prints the given message, interpolating `strings` and enhanced `values`, in addition to the current UTC timestamp and log level.

## Known Issues

- Currently only works with CommonJS modules. It can't be used with ECMAScript modules.
