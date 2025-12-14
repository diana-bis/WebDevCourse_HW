function validateForm() {
    const username = document.getElementById("username").value.trim();
    const firstname = document.getElementById("firstname").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    const image = document.getElementById("image").value.trim();

    // Password length
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // Check if username already exists in Local Storage
    const existingUser = localStorage.getItem(username);
    if (existingUser) {
        alert("This username already exists. Please choose another one.");
        return false;
    }

    // check if password has at least one letter, one number, one special char
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;
    if (!passwordPattern.test(password)) {
        alert("Password must contain at least one letter, one number, and one special character.");
        return false;
    }

    // Confirm password match
    if (password !== confirm) {
        alert("Passwords do not match!");
        return false;
    }

    // Image URL check
    if (!image.startsWith("http")) {
        alert("Please enter a valid image URL (must start with http or https).");
        return false;
    }

    // If all checks passed — save user to localStorage
    const userData = {
        username: username,
        firstname: firstname,
        password: password,
        image: image
    };

    localStorage.setItem(username, JSON.stringify(userData));
    window.location.href = "login.html";    // Redirect to login page
    return false;   // No need for the form submition process - handled it without

}