const { bgBlue, black, green } = require("chalk");
const moment = require("moment");

module.exports = class Logger {
    static log (content, type = "log") {
        const date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        switch (type) {
            case "log":
                return console.log(`${date} ${bgBlue(type.toUpperCase())} ${content} `);
                break;
            case "warn":
                return console.log(`${date} ${black.bgYellow(type.toUpperCase())} ${content} `);
                break;
            case "error":
                return console.log(`${date} ${black.bgRed(type.toUpperCase())} ${content} `);
                break;
            case "debug":
                return console.log(`${date} ${green(type.toUpperCase())} ${content} `);
                break;
            default:
                throw new TypeError("Logger type must be either log, warn, error or debug.");
                break;
        }
    }
};
