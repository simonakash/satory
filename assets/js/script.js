		// MENU OPEN & HIDE
		var button = document.querySelector('.open-menu-btn');
		var box = document.querySelector('.mobail-menu');
		button.addEventListener('click', function () {
			box.classList.toggle('open-menu');
		});

		// HUMBURGER MENU ICON
		function myFunction(x) {
			x.classList.toggle("change");
		}

		// SLIDER -1
		var swiper = new Swiper('.swiper-container1', {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.swiper-next-1',
				prevEl: '.swiper-prev-1',
			},
			breakpoints: {
				576: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			}
		});


		// SLIDER -2
		var swiper = new Swiper('.swiper-container2', {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.swiper-next-2',
				prevEl: '.swiper-prev-2',
			},
			breakpoints: {
				576: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			}
		});


		// SLIDER -3
		var swiper = new Swiper('.swiper-container3', {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.swiper-next-3',
				prevEl: '.swiper-prev-3',
			},
			breakpoints: {
				576: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			}
		});


		// BACK TO TOP BUTTON
		var mybutton = document.getElementById("up__btn");
		window.onscroll = function () {
			scrollFunction();
		};
		function scrollFunction() {
			if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
				mybutton.style.opacity = "1";
			} else {
				mybutton.style.opacity = "0";
			}
		}
		mybutton.addEventListener("click", topFunction);
		function topFunction() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}
