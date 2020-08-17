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
// [2020-08-17T21:57:05.640Z] [INFO   ] Foo 42

log.warning`Bar ${{ foo: "bar" }}`;
// [2020-08-17T21:57:05.642Z] [WARNING] Bar { foo: 'bar' }

log.error`Foo bar ${new Error("Error")}`;
// [2020-08-17T21:57:05.644Z] [ERROR  ] Foo bar   Error: Error
```

## API

### log.error(strings, ...values)

### log.info(strings, ...values)

### log.warning(strings, ...values)

Prints the given message, interpolating `strings` and enhanced `values`, in addition to the current UTC timestamp and log level.
