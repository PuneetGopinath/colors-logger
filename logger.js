/**
 * Colors Logger - https://github.com/PuneetGopinath/colors-logger
 * @author PuneetGopinath
 * {@link https://github.com/PuneetGopinath/colors-logger|GitHub}
 */
const { bgBlue, black, green, blue, red, yellow, gray } = require("chalk");
const moment = require("moment");

/**
 * Logger class
 */
class Logger {
    /**
     * Create new Logger
     * @param {object} options The options
     * @param {boolen} options.recordDate Whether to log date with the log.
     * @constructor
     * @return Logger
     */
    constructor(options = {}) {
        const { recordDate = true } = options;
        this.opts = { recordDate };
        this.version = require(__dirname + "/package.json").version;
    }

    /**
     * Log text
     * @param {string} content The content
     * @param {string} type The type of that log
     * @param {array} tags The tags of that log.
     * @return {string} text The text that was logged
     */
    log(content, type = "log", tags = ["LOGGER"]) {
        if (typeof tags === "string") {
            tags = [tags];
        }
        if (!Array.isArray(tags)) {
            throw new TypeError(
                `Argument \"tags\" should be typeof array, received ${typeof tags}`
            );
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
                    "Logger type must be either log, info, warn, error or debug."
                );
                return;
                break;
        }
        let text = `${color(type.toUpperCase())} ${content}`;
        if (tags) text = `[${tags.join(", ")}] ` + text;
        if (this.opts.recordDate) text = `${gray(date)}: ${text}`;
        console.log(`${text}`);
        return text;
    }

    /**
     * Shortcut for log(content, "info", tags)
     * @param {string} content The content
     * @param {array} tags The tags of that log.
     * @return {string} text The text that was logged
     */
    info(content, tags) {
        return this.log(content, "info", tags);
    }

    /**
     * Shortcut for log(content, "notice", tags)
     * @param {string} content The content
     * @param {array} tags The tags of that log.
     * @return {string} text The text that was logged
     */
    notice(content, tags) {
        return this.log(content, "notice", tags);
    }

    /**
     * Shortcut for log(content, "warn", tags)
     * @param {string} content The content
     * @param {array} tags The tags of that log.
     * @return {string} text The text that was logged
     */
    warn(content, tags) {
        return this.log(content, "warn", tags);
    }

    /**
     * Shortcut for log(content, "error", tags)
     * @param {string} content The content
     * @param {array} tags The tags of that log.
     * @return {string} text The text that was logged
     */
    error(content, tags) {
        return this.log(content, "error", tags);
    }

    /**
     * Shortcut for log(content, "debug", tags)
     * @param {string} content The content
     * @param {array} tags The tags of that log.
     * @return {string} text The text that was logged
     */
    debug(content, tags) {
        return this.log(content, "debug", tags);
    }
}

/**
 * @ignore
 */
module.exports = Logger;
