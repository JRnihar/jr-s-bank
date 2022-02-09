document.getElementById('login-submit').addEventListener("click", function() {
    let emailField = document.getElementById('user-email');
    let userEmail = emailField.value;
    //pass
    let passlField = document.getElementById('user-pass');
    let userpass = passlField.value;
    //condition
    if (userEmail == "nihar@mail.com" && userpass == "jrnihar") {
        window.location.href = "banking.html"
    }
})