# Node Log <br /> [![Dependency Status](https://david-dm.org/giovannicalo/node-log.svg)](https://david-dm.org/giovannicalo/node-log) [![Build Status](https://travis-ci.org/giovannicalo/node-log.svg?branch=master)](https://travis-ci.org/giovannicalo/node-log)

## Installation

```bash
npm install giovannicalo/node-log
```

> Not yet published

## Usage

```javascript
const log = require("log");

log.info("Foo {{bar}}", {
	bar: 42
});
// [2019-06-29T23:10:33.751Z] [INFO   ] Foo 42

log.warning("Bar {{foobar}}", {
	foobar: { foo: "bar" }
});
// [2019-06-29T23:10:33.755Z] [WARNING] Bar { foo: 'bar' }

log.error("Foo bar {{error}}", {
	error: new Error("Error")
});
// [2019-06-29T23:10:33.758Z] [ERROR  ] Foo bar   Error: Error
```

## API

### log.error(message, values)

### log.info(message, values)

### log.warning(message, values)

Prints the given `message`, replacing any placeholders (e.g. `{{placeholder}}`) with enhanced values from the `values` object, in addition to the current timestamp and log level.
