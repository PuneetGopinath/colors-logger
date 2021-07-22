# colors-logger

> Log your information and errors colorfully

## Installation

Run `npm i colors-logger`

## Example usage

```
const Logger = require("colors-logger");
const logger = new Logger();
logger.log("You message here", "log", ["INFO"]);
```

## FAQ

### What types are available to use in type parameter?

The type parameter is the second parameter.

- `log` or `info` - Blue background
- `notice` - Blue
- `warn` - Yellow
- `error` or `err` - Red
- `debug` - Green

### What args are required here?

Only the 1st argument or `content` argument is required.

If the 2nd argument or `type` argument is omitted, then it will be considered as log.

The 3rd argument or `tags` argument, tags of that log.
