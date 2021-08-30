const Logger = require("./logger");
const logger = new Logger();

logger.log("Testing");
logger.log("This is a warning message", "warn");
logger.log("This is the third time I am using colors-logger", "debug");
logger.log("An error occurred!", "error");
logger.notice("AN NOTICE!!");
