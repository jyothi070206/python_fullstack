alert("Welcome to NRIIT Learning Management System")
let heading = document.getElementById("welcome");
heading.innerHTML = "Welcome Future Software Engineers"
console.log("Heading element: ", heading)
let msg = document.getElementById("message")
msg.innerHTML = "Javascript is fun"
console.log("Message element: ", msg)
function showmessage() {
    alert("Welcome to NRIIT Learning Management System")
}
function changemessage() {
    document.getElementById("message").innerHTML = "Welcome Python Full Stack Developers"}
let heading1=document.querySelector("#welcome");
console.log("Heading element:", heading)
let button=document.getElementById("btnGreeting");
button.addEventListener("click", function() {
    alert("Welcome to javascript Event Handling")
});
let registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return; // Stop further execution
    }
    // Proceed with form submission or further processing
    alert("Form submitted successfully!");
});

console.log("Name:", name);
console.log("Email:", email);
console.log("Password:", password);
console.log("Confirm Password:", confirmPassword);