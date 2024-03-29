// Setting Elements

const lengthEl = document.getElementById("length");
const lengthText = document.getElementById("lengthText");
const lowerCaseEl = document.getElementById("lowercase");
const upperCaseEl = document.getElementById("uppercase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");

const generatePasswordButton = document.getElementById("generatePassword");
const passwordEl = document.getElementById("password");
const clipboardButton = document.getElementById("clipboard");

// Setting

const lowerCases = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "m",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

const upperCases = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const symbols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "[",
    "]",
    "{",
    "}",
    "|",
    ";",
    ":",
    "'",
    '"',
    ",",
    ".",
    "<",
    ">",
    "/",
    "?",
    "`",
    "~",
];

const setting = [lowerCases, upperCases, numbers, symbols];

function generateLetter(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

generatePasswordButton.addEventListener("click", function () {
    const currentSetting = [
        lowerCaseEl.checked,
        upperCaseEl.checked,
        numberEl.checked,
        symbolEl.checked,
    ];
    if (currentSetting.every((item) => !item)) {
        generatePasswordButton.style.backgroundColor = "#7a0002";
        setTimeout(() => {
            generatePasswordButton.style.backgroundColor = "#02a5ad";
        }, 1000);
        return;
    }
    const currentLength = lengthEl.value;
    let password = "";
    for (let i = 1; i <= currentLength; i++) {
        const randomIndex = Math.floor(Math.random() * currentSetting.length);
        if (currentSetting[randomIndex]) {
            password += generateLetter(setting[randomIndex]);
        } else {
            i--;
        }
    }
    passwordEl.textContent = password;
});

clipboardButton.addEventListener("click", function () {
    if (passwordEl.textContent === "-") {
        clipboardButton.style.backgroundColor = "#b85658";
        setTimeout(() => {
            clipboardButton.style.backgroundColor = "#636363";
        }, 750);
        return;
    }
    navigator.clipboard.writeText(passwordEl.textContent);
    clipboardButton.style.backgroundColor = "#47b34f";
    setTimeout(() => {
        clipboardButton.style.backgroundColor = "#636363";
    }, 750);
});

lengthEl.addEventListener("input", function () {
    lengthText.textContent = lengthEl.value;
});
