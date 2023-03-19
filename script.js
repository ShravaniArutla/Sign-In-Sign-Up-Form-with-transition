const containerEl = document.querySelector(".container");
const containerLeft = document.querySelector(".container-left");
const headingLeft = document.getElementById("heading-left");
const nameleftLabel = document.querySelector(".name-label");
const nameInput = document.querySelector(".user-name");
const btnPrimary = document.getElementById("btn-primary");
const containerRight = document.querySelector(".container-right");
const headingRight = document.getElementById("heading-right");
const btnSecondary = document.getElementById("btn-secondary");

function ToggleMenu() {
    if (!containerEl.classList.contains("toggle")) {
        headingLeft.innerText = "Login"
        nameleftLabel.style.display = "none";
        nameInput.style.display = "none";
        btnPrimary.innerText = "SIGN IN"
        headingRight.innerText = "New User?"
        btnSecondary.innerText = "SIGN UP"
    } else {
        headingLeft.innerText = "Create Account"
        nameleftLabel.style.display = "block";
        nameInput.style.display = "block";
        btnPrimary.innerText = "SIGN UP"
        headingRight.innerText = "Already a user?"
        btnSecondary.innerText = "SIGN IN"
    }
    containerEl.classList.toggle("toggle");
}
//switch button
btnSecondary.addEventListener("click", ToggleMenu);


