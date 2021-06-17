const { bgBlue, black, green, blue, red } = require("chalk");
const moment = require("moment");

module.exports = class Logger {
    constructor(recordTime = true) {
        this.recordTime = recordTime;
    }

    log(content, type = "log") {
        let date;
        let color;
        date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        switch (type.toLowerCase()) {
            case "log":
            case "info":
                color = bgBlue;
                break;
            case "notice":
                color = blue;
                break;
            case "warn":
                color = yellow;
                break;
            case "err":
            case "error":
                color = red;
                break;
            case "debug":
                color = green;
                break;
            default:
                throw new TypeError(
                    "Logger type must be either log, warn, error or debug."
                );
                return;
                break;
        }
        let text = `${color(type.toUpperCase())} ${content}`;
        if (this.recordTime) console.log(`${date}: ${text}`);
        else console.log(`${text}`);
    }
};
