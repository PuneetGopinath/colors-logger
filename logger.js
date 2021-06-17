const { bgBlue, black, green } = require("chalk");
const moment = require("moment");

module.exports = class Logger {
    constructor(recordTime = true) {
        this.recordTime = recordTime;
    }

    static log(content, type = "log") {
        let date;
        let color;
        date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        switch (type.toLowerCase()) {
            case "log":
                color = bgBlue;
                break;
            case "notice":
                color = blue;
                break;
            case "warn":
                color = black.bgYellow;
                break;
            case "err":
            case "error":
                color = black.bgRed;
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
