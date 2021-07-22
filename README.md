# colors-logger

> Log your information and errors colorfully

## Installation

Run `npm i colors-logger`

Note: Currently this is used in nodejs only.

## Example usage

```
const Logger = require("colors-logger");
const logger = new Logger();
logger.log("You message here", "log", ["INFO"]);
```

## Useful links

- [GitHub](https://github.com/PuneetGopinath/colors-logger)
- [Docs](https://puneetgopinath.github.io/colors-logger/Logger.html)

## FAQ

### What types are available to use in type parameter?

The type parameter is the second parameter.

- `log` or `info` - Blue background
- `notice` - Blue
- `warn` - Yellow
- `error` or `err` - Red
- `debug` - Green
