// Register SW
if ('serviceWorker' in navigator) {
	// register him
	navigator.serviceWorker
		.register('/sw.js', {
			updateViaCache: 'none',
			scope: '/',
		})
		.then(() => {
			// finished registering
		})
		.catch((err) => {
			console.warn('Failed to register', err.message);
		});

	// listen for messages
	navigator.serviceWorker.addEventListener('message', ({ data }) => {
		// received a message from the service worker
		console.log(data, 'New message from your service worker.');
	});
}

// SYNC
async function registerPeriodicCheck() {
	const registration = await navigator.serviceWorker.ready;
	try {
		await registration.periodicSync.register('latest-update', {
			minInterval: 24 * 60 * 60 * 1000,
		});
	} catch {
		console.log('Periodic sync could not be registered!');
	}
}

navigator.serviceWorker.ready.then((registration) => {
	registration.periodicSync.getTags().then((tags) => {
		if (tags.includes('latest-update')) skipDownloadingLatestUpdateOnPageLoad();
	});
});

// Page Transitions
if (window.innerWidth > 1023) {
	const aboutLink = document.querySelector('#aboutLink'),
		experienceLink = document.querySelector('#experienceLink'),
		educationLink = document.querySelector('#educationLink'),
		skillsLink = document.querySelector('#skillsLink'),
		contactLink = document.querySelector('#contactLink'),
		menuLinks = document.querySelectorAll('.menu-link'),
		aboutSection = document.querySelector('#about'),
		experienceSection = document.querySelector('#experience'),
		educationSection = document.querySelector('#education'),
		skillsSection = document.querySelector('#skills'),
		contactSection = document.querySelector('#contact'),
		resume = document.querySelector('#resume'),
		faIcons = document.querySelectorAll('.fa'),
		fasIcon = document.querySelector('.fas');

	menuLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			// About section
			if (e.target == aboutLink || e.target === faIcons[1]) {
				resume.style.display = 'none';
				aboutSection.style.display = 'block';
				setTimeout(() => {
					resume.style.display = 'block';
					resume.style.animation = 'leftSlide 300ms ease-in';
					aboutSection.style.animation = 'fadeIn 1000ms ease-in-out both';
				}, 1);
				experienceSection.style.display = 'none';
				educationSection.style.display = 'none';
				skillsSection.style.display = 'none';
				contactSection.style.display = 'none';

				// Experience section
			} else if (e.target === experienceLink || e.target === fasIcon) {
				resume.style.display = 'none';
				experienceSection.style.display = 'block';
				setTimeout(() => {
					resume.style.display = 'block';
					resume.style.animation = 'leftSlide 300ms ease-in';
					experienceSection.style.animation = 'fadeIn 1000ms ease-in-out both';
				}, 1);
				aboutSection.style.display = 'none';
				educationSection.style.display = 'none';
				skillsSection.style.display = 'none';
				contactSection.style.display = 'none';

				// Education section
			} else if (e.target === educationLink || e.target === faIcons[2]) {
				resume.style.display = 'none';
				educationSection.style.display = 'block';
				setTimeout(() => {
					resume.style.display = 'block';
					resume.style.animation = 'leftSlide 300ms ease-in';
					educationSection.style.animation = 'fadeIn 1000ms ease-in-out both';
				}, 1);
				aboutSection.style.display = 'none';
				experienceSection.style.display = 'none';
				skillsSection.style.display = 'none';
				contactSection.style.display = 'none';

				// Skills section
			} else if (e.target === skillsLink || e.target === faIcons[3]) {
				resume.style.display = 'none';
				skillsSection.style.display = 'block';
				setTimeout(() => {
					resume.style.display = 'block';
					resume.style.animation = 'leftSlide 300ms ease-in';
					skillsSection.style.animation = 'fadeIn 1000ms ease-in-out both';
				}, 1);
				aboutSection.style.display = 'none';
				experienceSection.style.display = 'none';
				educationSection.style.display = 'none';
				contactSection.style.display = 'none';

				// Contact section
			} else if (e.target === contactLink || e.target === faIcons[4]) {
				resume.style.display = 'none';
				contactSection.style.display = 'block';
				setTimeout(() => {
					resume.style.display = 'block';
					resume.style.animation = 'leftSlide 300ms ease-in';
					contactSection.style.animation = 'fadeIn 1000ms ease-in-out both';
				}, 1);
				aboutSection.style.display = 'none';
				experienceSection.style.display = 'none';
				educationSection.style.display = 'none';
				skillsSection.style.display = 'none';
			}
		});
	});
}

// Textarea auto resize
const home = document.querySelector('#home');

if (document.body === home) {
	(function autoResize() {
		const textArea = document.querySelector('[data-autoresize]'),
			offset = textArea.offsetHeight - textArea.clientHeight;

		textArea.addEventListener('input', (e) => {
			e.target.style.height = 'auto';
			e.target.style.height = e.target.scrollHeight + offset + 'px';
		});
	})();
}

// Date
const currentYear = document.querySelector('#currentYear');
currentYear.innerText = new Date().getFullYear();
