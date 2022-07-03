function verifyPassword() {
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;

    if (password != confirm_password) {
        alert("Password doesn't match!");
    };
};