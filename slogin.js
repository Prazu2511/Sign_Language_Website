// slogin.js (for login)
function loginUser(event) {
   event.preventDefault();

   // Get user input
   const email = document.getElementsByName("email")[0].value;
   const password = document.getElementsByName("pass")[0].value;

   // Retrieve user data from localStorage
   const users = JSON.parse(localStorage.getItem("users")) || [];

   // Check if the user exists
   const user = users.find(u => u.email === email && u.password === password);

   if (user) {
       // Set user data in localStorage
       localStorage.setItem("loggedInUser", JSON.stringify(user));

       // Redirect to home page or perform any other action
       window.location.href = "shome.html";
   } else {
       alert("Invalid email or password. Please try again.");
   }
}

// script.js (for register)
function registerUser(event) {
   event.preventDefault();

   // Get user input
   const name = document.getElementsByName("name")[0].value;
   const email = document.getElementsByName("email")[0].value;
   const password = document.getElementsByName("pass")[0].value;
   const confirmPassword = document.getElementsByName("c_pass")[0].value;

   // Check if passwords match
   if (password !== confirmPassword) {
       alert("Passwords do not match. Please try again.");
       return;
   }

   // Retrieve user data from localStorage
   const users = JSON.parse(localStorage.getItem("users")) || [];

   // Check if the user already exists
   const existingUser = users.find(u => u.email === email);

   if (existingUser) {
       alert("User with this email already exists. Please use a different email.");
       return;
   }

   // Create a new user object
   const newUser = {
       name: name,
       email: email,
       password: password,
   };

   // Add the new user to the array
   users.push(newUser);

   // Update user data in localStorage
   localStorage.setItem("users", JSON.stringify(users));

   // Redirect to login page or perform any other action
   window.location.href = "slogin.html";
}
