
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const terms = document.getElementById("terms");
  

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  const termsError = document.getElementById("termsError");

  //reset errors
  [nameError, emailError, passwordError, confirmPasswordError, termsError].forEach(err => {
    err.classList.add("hidden");
    err.textContent = "";
  });

  let isValid = true;

  //Name validation
  if (name.value.trim().length < 3) {
    nameError.textContent = "Name must be at least 3 characters";
    nameError.classList.remove("hidden");
    isValid = false;
  }

  //Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = "Enter a valid email address";
    emailError.classList.remove("hidden");
    isValid = false;
  }

  //Password validation
  if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    passwordError.classList.remove("hidden");
    isValid = false;
  }

  //Confirm password
  if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = "Passwords do not match";
    confirmPasswordError.classList.remove("hidden");
    isValid = false;
  }

  //Terms validation
  if (!terms.checked) {
    termsError.textContent = "You must accept the terms";
    termsError.classList.remove("hidden");
    isValid = false;
  }

  //Success
  if (isValid) {
    alert("Account created successfully");

    //registerForm.submit(); // enable when backend is ready
  }
});


