# Node Log

[![Build Status](https://travis-ci.org/giovannicalo/node-log.svg?branch=master)](https://travis-ci.org/giovannicalo/node-log)
[![Coverage Status](https://coveralls.io/repos/github/giovannicalo/node-log/badge.svg?branch=master)](https://coveralls.io/github/giovannicalo/node-log?branch=master)

## Installation

```bash
npm install giovannicalo/node-log
```

> Not yet published

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

### log.error(strings, ...values)

### log.info(strings, ...values)

### log.warning(strings, ...values)

Prints the given message, interpolating `strings` and enhanced `values`, in addition to the current UTC timestamp and log level.
