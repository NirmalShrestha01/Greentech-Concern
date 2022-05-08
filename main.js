const counters = document.querySelectorAll('.counter');
const speed = 10; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const increase = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + increase;
			// Call function every ms
			setTimeout(updateCount, 50);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});



let navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = '0px';
}

function hideMenu() {
    navLinks.style.right = '-200px';
}

