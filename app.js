// Select the button
const fetchJokeBtn = document.getElementById('fetchJokeBtn');
// Select the paragraph where the joke will be displayed
const jokeDisplay = document.getElementById('jokeDisplay');
// Select the button and display element

// Function to fetch data from the joke API
function fetchJoke() {
	fetch('https://api.chucknorris.io/jokes/random') // A public API for random jokes
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.json();
		})
		.then((data) => {
			// Display the joke in the paragraph element
			jokeDisplay.textContent = data.value;
		})
		.catch((error) => {
			jokeDisplay.textContent = `Error: ${error.message}`;
		});
}

// Add an event listener to the button
fetchJokeBtn.addEventListener('click', fetchJoke);
