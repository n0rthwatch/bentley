const banner = new Swiper('.banner-swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	simulateTouch: true,
	dragable: true,
});

let navToggler = document.querySelector('.navbar-toggler');
let menu = document.querySelector('.navbar-menu');

navToggler.addEventListener('click', (e) => {
	let openedStatus = navToggler.getAttribute('data-opened');
	if (openedStatus == 'false') {
		document.body.classList.toggle('scroll-lock');
		menu.classList.toggle('opened');
		navToggler.classList.toggle('closed');
		navToggler.setAttribute('data-opened', true);
		document.sc;
	}
	if (openedStatus == 'true') {
		document.body.classList.toggle('scroll-lock');
		menu.classList.toggle('opened');
		navToggler.classList.toggle('closed');
		navToggler.setAttribute('data-opened', false);
	}
	console.log(openedStatus);
});
