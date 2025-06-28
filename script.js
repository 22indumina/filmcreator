function openLoginModal() {
  document.getElementById("loginModal").style.display = "flex";
}

function closeLoginModal() {
  document.getElementById("loginModal").style.display = "none";
}

function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  alert("Logging in with:\nEmail: " + email + "\nPassword: " + password);
}

function switchToSignup() {
  alert("Switching to Sign Up (you can build a signup form here)");
}
