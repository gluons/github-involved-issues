import * as domLoaded from 'dom-loaded';
import * as gitHubInjection from 'github-injection';
import * as select from 'select-dom';

const username = 'gluons';
let query = encodeURIComponent(`involves:${username} is:open type:issue`);
let url = `https://github.com/issues?q=${query}`;

function inject(): void {
	if (!select.exists('#involved-issues-link')) {
		let involvedButton = document.createElement('a');
		involvedButton.id = 'involved-issues-link';
		involvedButton.classList.add('js-selected-navigation-item', 'subnav-item');

		// Check current url for setting button status
		if (location.search.includes(`involves%3A${username}`)) {
			involvedButton.classList.add('selected');
		}

		involvedButton.href = url;
		involvedButton.textContent = 'Involved';

		// Remove "involves" from search query
		for (let tab of select.all(`.subnav-links a[href*="involves%3A${username}"]`)) {
			let tabLink: HTMLAnchorElement = tab;
			tabLink.href = tabLink.href.replace(`involves%3A${username}`, '');
		}

		select('.subnav-links').appendChild(involvedButton); // Add button
	}
}

domLoaded.then(() => {
	inject();
	gitHubInjection(() => inject());
});
