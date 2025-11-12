document.addEventListener('DOMContentLoaded', function() {
    const alertButton = document.getElementById('alert-button');
    const nameInput = document.getElementById('name-input');
    const headline = document.getElementById('headline');

    alertButton.addEventListener('click', function() {
        const inputValue = nameInput.value;
        alert(`Debarlaben: ${inputValue}`);
        headline.textContent = inputValue;
    });
});