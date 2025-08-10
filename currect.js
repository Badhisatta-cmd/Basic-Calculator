let string = "";
let buttons = document.querySelectorAll(".button");
let inputbox = document.querySelector("input");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerHTML;
        if (value === "=") {
            try {
                // Replace × and ÷ with * and /
                let evalString = string.replace(/×/g, '*').replace(/÷/g, '/');
                // Prevent eval on empty or invalid input
                if (evalString.trim() === "") {
                    inputbox.value = "";
                    string = "";
                } else {
                    string = eval(evalString);
                    inputbox.value = string;
                }
            } catch {
                inputbox.value = "Error";
                string = "";
            }
        }
        else if (value === "C") {
            string = "";
            inputbox.value = string;
        }
        else if (value === "DEL") {
            string = string.slice(0, -1);
            inputbox.value = string;
        }
        else if (value === "+/-") {
            if (string) {
                if (string[0] === '-') {
                    string = string.slice(1);
                } else {
                    string = '-' + string;
                }
                inputbox.value = string;
            }
        }
        else if (value === "()") {
            // Add parentheses smartly
            let open = (string.match(/\(/g) || []).length;
            let close = (string.match(/\)/g) || []).length;
            if (open === close || string[string.length - 1] === '(') {
                string += '(';
            } else {
                string += ')';
            }
            inputbox.value = string;
        }
        else {
            string = string + value;
            inputbox.value = string;
        }
    });
});