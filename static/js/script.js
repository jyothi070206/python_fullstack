alert("Welcome to NRIIT Learning Management System")
let heading = document.getElementById("welcome");
heading.innerHTML = "Welcome Future Software Engineers"
console.log("Heading element: ", heading)
let msg = document.getElementById("message");
msg.innerHTML = "Javascript is fun"
console.log("Message element: ", msg)
function showmessage() {
    alert("Welcome to NRIIT Learning Management System")
}
function changeHeading() {
    document.getElementById("welcome").innerHTML = "Welcome Python Fullstack Developers"
}
let heading1 = document.querySelector("#welcome");
console.log("Heading element: ", heading1)
let button = document.getElementById("btnGreeting");
button.addEventListener("click", function () {
    alert("Welcome to javascript Event Handling");
});
let registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (!name || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }
    alert("Registration successful!");
    
    // Perform validation or further processing here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
});

function squareNumber(num) {
    return num * num;
}
x=squareNumber(5);
console.log("Square of 5 is: ", x);

function checkOddEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkOddEven(10));
console.log(checkOddEven(7));