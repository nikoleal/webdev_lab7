document.addEventListener('DOMContentLoaded', function() {
    const alertMeBtn = document.getElementById('alertMeBtn');
    const nameInput = document.getElementById('nameInput');
    const headline = document.getElementById('headline');

    alertMeBtn.addEventListener('click', function() {
        const inputValue = nameInput.value;
        alert(`Debarlaben: ${inputValue}`);
        headline.textContent = inputValue;
    });
});