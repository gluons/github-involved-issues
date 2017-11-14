import * as select from 'select-dom';

/**
 * Get current username.
 *
 * @returns {string} Current username
 */
function getUsername(): string {
	let username: string = select('meta[name="user-login"]').getAttribute('content');

	return username;
}

export default getUsername;
