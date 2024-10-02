function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    // Clear any previous error messages
    errorMessage.textContent = '';

    // Validate form inputs
    if (username === '') {
        errorMessage.textContent = 'Please enter your username';
        return false;
    }
    
    if (password === '') {
        errorMessage.textContent = 'Please enter your password';
        return false;
    }

    
    alert(`Welcome, ${username}!`);
    return true;
}
