const { bgBlue, black, green, blue, red, yellow } = require("chalk");
const moment = require("moment");

module.exports = class Logger {
    constructor(recordTime = true) {
        this.recordTime = recordTime;
        this.version = require("./package.json").version;
    }

    log(content, type = "log", tags = ["INFO"]) {
        if (!typeof tags === "array") {
            throw new TypeError(`Argument \"tags\" should be typeof array, received ${typeof tags}`);
        }
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
<<<<<<< HEAD
        if (tags)
            text = `[${tags.join(", ")}] ` + text;
=======
        if (tags) text = `[${tags.join(", ")}]` + text;
>>>>>>> f2b69d39e8811d75e6da70faa9d6753a51e41116
        if (this.recordTime) console.log(`${date}: ${text}`);
        else console.log(`${text}`);
    }
};
