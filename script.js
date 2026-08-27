const contactForm = document.querySelector('#contact-form');

if (contactForm) {
	contactForm.addEventListener('submit', (event) => {
		event.preventDefault();

		const formData = new FormData(contactForm);
		const subject = formData.get('_subject');
		const body = [
			`Name: ${formData.get('name')}`,
			`Email: ${formData.get('email')}`,
			'',
			formData.get('message')
		].join('\n');

		window.location.href = `mailto:thinkboxwebdevelopment@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	});
}
