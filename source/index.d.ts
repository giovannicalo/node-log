declare namespace log {

	/**
	 * Logs an error message.
	 *
	 * @param {String[]} strings - Strings to interleave.
	 * @param {...*} values - Values to interleave.
	 * @returns {void}
	 */
	function error(strings: string[], ...values: any): void;

	/**
	 * Logs an info message.
	 *
	 * @param {String[]} strings - Strings to interleave.
	 * @param {...*} values - Values to interleave.
	 * @returns {void}
	 */
	function info(strings: string[], ...values: any): void;

	/**
	 * Logs a warning message.
	 *
	 * @param {String[]} strings - Strings to interleave.
	 * @param {...*} values - Values to interleave.
	 * @returns {void}
	 */
	function warning(strings: string[], ...values: any): void;

}

export = log;
