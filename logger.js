const { bgBlue, black, green, blue, red, yellow, gray } = require("chalk");
const moment = require("moment");

module.exports = class Logger {
    /**
     * Create new Logger
     * @param {object} options
     * @constructor
     * @return Logger
     */
    constructor(options = {}) {
        const { recordTime = true } = options;
        this.recordTime = recordTime;
        this.version = require(__diraname + "/package.json").version;
    }

    /**
     * Log text
     * @param {string} content The content
     * @param {string} type The type
     * @param {array} tags The tags
     */
    log(content, type = "log", tags = ["LOGGER"]) {
        if (typeof tags === "string") {
            tags = [tags];
        }
        if (!Array.isArray(tags)) {
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
        if (tags)
            text = `[${tags.join(", ")}] ` + text;
        if (this.recordTime) console.log(`${gray(date)}: ${text}`);
        else console.log(`${text}`);
        return text;
    }
};
