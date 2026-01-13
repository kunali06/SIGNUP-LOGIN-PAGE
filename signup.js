let users = JSON.parse(localStorage.getItem("users")) || [];

function signup() {
  const email = suEmail.value;
  const pass = suPass.value;

  if (!email || !pass) return alert("Fill all fields");

  const exists = users.find(u => u.email === email);
  if (exists) return alert("User already exists");

  users.push({ email, pass });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup successful");
}

function login() {
  const email = liEmail.value;
  const pass = liPass.value;

  const user = users.find(u => u.email === email && u.pass === pass);
  if (!user) return alert("Invalid credentials");

  localStorage.setItem("loggedInUser", email);
  window.location.href = "dashboard.html";
}
