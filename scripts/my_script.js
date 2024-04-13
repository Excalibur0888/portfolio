document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("contactForm").addEventListener("submit", function(event) {
			event.preventDefault();

			const name = document.getElementById("name").value;
			const email = document.getElementById("email").value;
			const message = document.getElementById("message").value;
			
			if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
					alert("Please fill in all fields.");
					return;
			}

			const submitButton = this.querySelector('button[type="submit"]');
			submitButton.innerText = "Спасибо!";
			submitButton.disabled = true;
	});
});
