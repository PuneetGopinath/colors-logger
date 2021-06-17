# colors-logger

> Log your information and errors colorfully

## Screenshot

![example image](screenshot.jpg)

## Installation

Run `npm i colors-logger`

## Example usage

```
const Logger = require("colors-logger");
const logger = new Logger();
logger.log("You message here", "log");
```

## FAQ

### What types are available to use in type parameter?

The type parameter is the second parameter.

- `log` or `info` - Blue background
- `notice` - Blue
- `warn` - Black with Yellow background
- `error` or `err` - Black with Red background
- `debug` - Green
