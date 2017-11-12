const username = 'gluons';
let query = encodeURIComponent(`involves:${username} type:issue`);
let url = `https://github.com/issues?q=${query}`;

function inject() {
	if (!document.getElementById('involved-issues-link')) {
		let involvedButton = document.createElement('a');
		involvedButton.id = 'involved-issues-link';
		involvedButton.classList.add(
			'js-selected-navigation-item',
			'subnav-item'
		);
		involvedButton.href = url;
		involvedButton.textContent = 'Involved';

		let issueNav = document.querySelector('.subnav-links.float-left');
		issueNav.appendChild(involvedButton);
	}
}

if (document.readyState === 'interactive' || document.readyState === 'complete') {
	inject();
} else {
	document.addEventListener(
		'DOMContentLoaded',
		() => {
			inject();
		},
		{
			capture: true,
			once: true,
			passive: true
		}
	);
}
