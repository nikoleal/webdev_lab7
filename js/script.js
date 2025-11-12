document.addEventListener('DOMContentLoaded', function() {
    const alertButton = document.getElementById('alertMe');
    const nameInput = document.getElementById('myInput');
    const headline = document.getElementById('headline');

    if (alertButton && nameInput && headline) {
        alertButton.addEventListener('click', function() {
            const inputValue = nameInput.value.trim();
            alert(`Leal: ${inputValue}`);
            headline.textContent = inputValue;
        });
    } else {
        console.error('Missing one or more required elements (alertMe, myInput, headline)');
    }
});
