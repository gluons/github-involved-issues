const username = 'gluons';
let query = encodeURIComponent(`involves:${username} type:issue`);
let url = `https://github.com/issues?q=${query}`;

let oldInvolvedButton = document.querySelector('#involved-issues-link');
if (oldInvolvedButton) {
	oldInvolvedButton.remove();
}

let involvedButton = document.createElement('a');
involvedButton.id = 'involved-issues-link';
involvedButton.classList.add('js-selected-navigation-item', 'subnav-item');
involvedButton.href = url;
involvedButton.textContent = 'Involved';

let issueNav = document.querySelector('.subnav-links.float-left');
issueNav.appendChild(involvedButton);
