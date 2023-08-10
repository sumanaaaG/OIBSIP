const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link"),
    loginForm = document.querySelector(".form.login form"),
    signupForm = document.querySelector(".form.signup form");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        });
    });
});

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        forms.classList.toggle("show-signup");
    });
});
loginForm.addEventListener("submit", e => {
    e.preventDefault();
    window.location.href = 'pickAbook.html';
});
signupForm.addEventListener("submit", e => {
    e.preventDefault();
    const passwordFields = signupForm.querySelectorAll(".password");
    const passwordValue = passwordFields[0].value;
    
    if (passwordValue.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }
    window.location.href = 'pickAbook.html';
});
