/**
 * Displays the views
 */
class RatingView {
	displayThankYouState(sectionElement, ratingSelected) {
		const thankyouStateTemplate = `
			<img
				id="thank-you-illustration"
				src="src/images/illustration-thank-you.svg"
				alt=""
			/>
			<!-- Add rating here -->
			<p class="selection-recap">
				You selected <span id="rating-selected">${ratingSelected}</span> out of 5
			</p>
			<p class="copy-heading">Thank you!</p>
			<p>
				We appreciate you taking the time to give a rating. If you ever need
				more support, don’t hesitate to get in touch!
			</p>
			`;

		// Add a class so that the styles work
		sectionElement.classList.add("thank-you-state");
		// Replace the element's HTML content
		sectionElement.innerHTML = thankyouStateTemplate;
		console.log("Reload the page to select another rating!");
	}
}

window.addEventListener("DOMContentLoaded", () => {
	/**
	 * The parent element for the component
	 */
	const sectionElement = document.querySelector("section");
	/**
	 * The radio inputs
	 */
	const inputElements = document.querySelectorAll('input[type="radio"]');
	/**
	 * The submit input
	 */
	const submitElement = document.querySelector('input[type="submit"]');

});
