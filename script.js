let string = "";
let buttons = document.querySelectorAll(".button");
let inputbox = document.querySelector("input");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            inputbox.value = string;
        }
        else if (e.target.innerHTML == "C") {
            string = "";
            inputbox.value = string;
        }
        else if (e.target.innerHTML == "DEL") {
            string = string.slice(0, -1);
            inputbox.value = string;
        }
        else if (e.target.innerHTML == "+/-") {
            string = -1 * parseFloat(string);
            inputbox.value = string;
        }
        else {
            string = string + e.target.innerHTML;
            inputbox.value = string;
        }
    })
})