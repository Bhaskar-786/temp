// Get the form element
const form = document.querySelector('form');

// Add an event listener to the form on submit
form.addEventListener('submit', (event) => {
	// Prevent the default form submission behavior
	event.preventDefault();

	// Get the values from the form inputs
	const username = form.username.value;
	const password = form.password.value;
	const rememberMe = form.remember.checked;

	// Perform login logic here using the username, password, and rememberMe values
	console.log(username, password, rememberMe);

	// Reset the form
	form.reset();
});
