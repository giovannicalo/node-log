/**
 * Logs an error message.
 *
 * @param {String[]} strings - Strings to interleave.
 * @param {...*} values - Values to interleave.
 * @returns {void}
 */
export function error(strings: string[], ...values: any): void

/**
 * Logs an info message.
 *
 * @param {String[]} strings - Strings to interleave.
 * @param {...*} values - Values to interleave.
 * @returns {void}
 */
export function info(strings: string[], ...values: any): void

/**
 * Logs a warning message.
 *
 * @param {String[]} strings - Strings to interleave.
 * @param {...*} values - Values to interleave.
 * @returns {void}
 */
export function warning(strings: string[], ...values: any): void
