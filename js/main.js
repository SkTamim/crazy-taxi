// CHOOSE CAR TAB FUNCTIONALITY
const cooseCarBtns = document.querySelectorAll(".choose-car-btn");
const cooseCarImg = document.querySelector(".choose-car-img img");

cooseCarBtns.forEach((btn, index, array) => {
	btn.addEventListener("click", (e) => {
		array.forEach((el) => {
			el.classList.remove("active");
		});
		if (index === 0) {
			cooseCarImg.setAttribute("src", "images/choose-car-1.png");
			btn.classList.add("active");
		} else if (index === 1) {
			cooseCarImg.setAttribute("src", "images/choose-car-2.png");
			btn.classList.add("active");
		} else if (index === 2) {
			cooseCarImg.setAttribute("src", "images/choose-car-3.png");
			btn.classList.add("active");
		} else if (index === 3) {
			cooseCarImg.setAttribute("src", "images/choose-car-1.png");
			btn.classList.add("active");
		} else if (index === 4) {
			cooseCarImg.setAttribute("src", "images/choose-car-2.png");
			btn.classList.add("active");
		} else if (index === 5) {
			cooseCarImg.setAttribute("src", "images/choose-car-4.png");
			btn.classList.add("active");
		}
	});
});

//Navbar Icon
const navbarToggler = document.querySelector(".navbar-toggler");

navbarToggler.addEventListener("click", () => {
	let isOpen = navbarToggler.getAttribute("aria-expanded");
	let icon = document.querySelector(".navbar-toggler-icon");
	console.log(icon);

	if (isOpen == "true") {
		icon.style.backgroundImage = 'url("images/x.svg")';
	} else {
		icon.style.backgroundImage = "var(--bs-navbar-toggler-icon-bg)";
	}
});

// LISTING DETAILS FUNCTIONALITY
const listingDetailsBtn = document.querySelectorAll(".listing-details-btn");
const listingDetailsCloseBtn = document.querySelectorAll(
	".listing-details .btn-close"
);

const listingDetails = document.querySelectorAll(".listing-details");

listingDetailsBtn.forEach((item, index) => {
	item.addEventListener("click", () => {
		if (item.firstElementChild.classList[1] == "bi-chevron-down") {
			item.firstElementChild.classList.replace(
				"bi-chevron-down",
				"bi-chevron-up"
			);
			listingDetails[index].style.display = "block";
		} else {
			item.firstElementChild.classList.replace(
				"bi-chevron-up",
				"bi-chevron-down"
			);
			listingDetails[index].style.display = "none";
		}
	});
});

listingDetailsCloseBtn.forEach((element, elIndex) => {
	element.addEventListener("click", () => {
		listingDetails[elIndex].style.display = "none";
		listingDetailsBtn[elIndex].firstElementChild.classList.replace(
			"bi-chevron-up",
			"bi-chevron-down"
		);
	});
});
