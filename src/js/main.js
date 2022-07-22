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

/**
 * Updates the state according to user input, renders the 'Thank you' view when the rating is submitted
 */
class RatingController {
	ratingSelected = null;
	hasSubmitted = false;

	constructor(ratingSelected, hasSubmitted) {
		this.ratingSelected = ratingSelected;
		this.hasSubmitted = hasSubmitted;
	}

	ratingSelectionListener(inputs) {
		Array.from(inputs).forEach((input) =>
			input.addEventListener("click", (e) => {
				console.log("Selected rating " + e.target.value + " out of 5");
				this.setRating(e.target.value);
			})
		);
	}
	setRating(value) {
		this.ratingSelected = value;
	}
	getRating() {
		return this.ratingSelected;
	}
	setHasSubmitted(booleanValue) {
		this.hasSubmitted = booleanValue;
	}

	/**
	 * Click handler to display the new template when the rating is submitted
	 */
	displayThankYouState(sectionElement, formElement) {
		formElement.addEventListener("submit", (e) => {
			e.preventDefault();
			// Proceed only if the user has selected a rating
			if (this.getRating()) {
				this.setHasSubmitted(true);
				const ratingSelected = this.getRating();

				// Generate a view
				const ratingViews = new RatingView();
				ratingViews.displayThankYouState(sectionElement, ratingSelected);
			}
		});
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
	const formElement = document.querySelector("form");

	const ratingController = new RatingController();
	ratingController.ratingSelectionListener(inputElements);
	ratingController.displayThankYouState(sectionElement, formElement);
});
