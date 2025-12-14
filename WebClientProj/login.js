function validateLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // Check if username exsits in system
    const userData = localStorage.getItem(username);
    if (!userData) {
        alert("Username not found. Please register first.");
        return false;
    }

    // Check if password is correct
    const user = JSON.parse(userData);
    if (user.password !== password) {
        alert("Incorrect password.");
        return false;
    }

    // If all succesful - save in sessionStorage (lasts while the browser tab is open)
    sessionStorage.setItem("currentUser", JSON.stringify(user));

    window.location.href = "search.html";   // redirect to search page
    return false;   // No need for the form submition process - handled it without
}