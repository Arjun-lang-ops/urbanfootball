
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Inputs
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const terms = document.getElementById("terms").checked;

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    // Reset errors
    [nameError, emailError, passwordError, confirmPasswordError].forEach(err => {
        err.classList.add("hidden");
        err.innerText = "";
    });

    let isValid = true;

    // Name validation
    if (fullname.length < 3) {
        nameError.innerText = "Name must be at least 3 characters";
        nameError.classList.remove("hidden");
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        passwordError.innerText = "Password must be at least 6 characters";
        passwordError.classList.remove("hidden");
        isValid = false;
    } else if (!/[A-Z]/.test(password)) {
        passwordError.innerText = "Password must contain at least one uppercase letter";
        passwordError.classList.remove("hidden");
        isValid = false;
    } else if (!/[a-z]/.test(password)) {
        passwordError.innerText = "Password must contain at least one lowercase letter";
        passwordError.classList.remove("hidden");
        isValid = false;
    } else if (!/\d/.test(password)) {
        passwordError.innerText = "Password must contain at least one number";
        passwordError.classList.remove("hidden");
        isValid = false;
    } else if (!/[@$!%*?&#]/.test(password)) {
        passwordError.innerText = "Password must contain at least one special character (@, $, !, %, *, ?, &, #)";
        passwordError.classList.remove("hidden");
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.innerText = "Enter a valid email address";
        emailError.classList.remove("hidden");
        isValid = false;
    }

    // Password validation
    // Password validation
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;

    if (!passwordRegex.test(password)) {
        passwordError.innerText =
            "Password must be at least 6 characters and include uppercase, lowercase, number, and special character";
        passwordError.classList.remove("hidden");
        isValid = false;
    }

    // Confirm password
    if (password !== confirmPassword) {
        confirmPasswordError.innerText = "Passwords do not match";
        confirmPasswordError.classList.remove("hidden");
        isValid = false;
    }


    // Terms checkbox
    if (!terms) {
        alert("You must agree to the Terms & Privacy Policy");
        isValid = false;
    }

    if (!isValid) return;

    // AJAX request
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fullname,
            email,
            password
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                alert("Account created successfully!");
                window.location.href = "/login";
            } else {
                alert(data.message || "Registration failed");
            }
        })
        .catch(err => {
            console.error(err);
            alert("Something went wrong. Try again.");
        });
});
