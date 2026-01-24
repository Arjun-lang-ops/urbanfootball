/**
 * Reusable function to toggle password visibility
 * @param {string} toggleButtonId - ID of the toggle button
 * @param {string} passwordInputId - ID of the password input field
 */
function setupPasswordToggle(toggleButtonId, passwordInputId) {
    const toggleButton = document.getElementById(toggleButtonId);
    const passwordInput = document.getElementById(passwordInputId);

    if (!toggleButton || !passwordInput) {
        return;
    }

    toggleButton.addEventListener('click', function () {
        // Toggle input type
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Toggle icon
        const icon = toggleButton.querySelector('.material-symbols-outlined');
        if (icon) {
            icon.textContent = type === 'password' ? 'visibility' : 'visibility_off';
        }

        // Maintain focus
        passwordInput.focus();
    });
}

// Initialize for the main password field
document.addEventListener('DOMContentLoaded', function () {
    setupPasswordToggle('togglePassword', 'password');
});
