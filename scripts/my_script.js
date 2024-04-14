document.addEventListener("DOMContentLoaded", function() {
	document.querySelector(".contact__form").addEventListener("submit", function(event) {
			event.preventDefault();

			const formData = new FormData(this);
			document.querySelector("button[type=submit]").innerText = "Спасибо!";

	});
});
