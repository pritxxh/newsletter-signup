const form = document.getElementById('signup-form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
const urlParams = new URLSearchParams(window.location.search);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    // Check if email is valid
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
        emailInput.classList.add('error');
        errorMessage.textContent = 'Valid email required';
    } else {
        emailInput.classList.remove('error');
        errorMessage.textContent = '';

        // Redirect to the success page
        window.location.href = 'success.html?email=' + encodeURIComponent(email);
    }
});

// Button hover effect
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = 'hsl(235, 18%, 26%)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = 'hsl(4, 100%, 67%)';
    });
});
