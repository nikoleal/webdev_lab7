document.addEventListener('DOMContentLoaded', function() {
    const alertButton = document.getElementById('alert-button');
    const nameInput = document.getElementById('name-input');
    const headline = document.getElementById('headline');

    if (alertButton && nameInput && headline) {
        alertButton.addEventListener('click', function() {
            const inputValue = nameInput.value.trim(); // trims extra spaces
            alert(`Debarlaben: ${inputValue}`); // shows alert with name prefix
            headline.textContent = inputValue; // updates headline text
        });
    } else {
        console.error('Missing one or more required elements (alert-button, name-input, headline)');
    }
});
