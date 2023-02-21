const slider = document.getElementById("length-slider");
const generateButton = document.getElementById("generate-btn");
const passwordBox = document.getElementById("password-box");
const passwordLength = document.getElementById("password-length");
const lengthBox = document.getElementById("length-box");

function generatePassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

function updatePasswordLength() {
  passwordLength.innerText = slider.value;
  lengthBox.value = slider.value;
}

function updateSliderValue() {
  slider.value = lengthBox.value;
  updatePasswordLength();
}

function generatePasswordHandler() {
  let password = generatePassword(lengthBox.value);
  passwordBox.value = password;
}

slider.addEventListener("input", function() {
  updatePasswordLength();
  updateSliderValue(); // update the textbox when the slider is moved
});

lengthBox.addEventListener("input", function() {
  updateSliderValue();
  updatePasswordLength(); // update the slider when the textbox is changed
});

generateButton.addEventListener("click", function() {
  generatePasswordHandler();
});

const container = document.querySelector(".container");

document.addEventListener("click", function(event) {
  if (!container.contains(event.target)) {
    container.style.opacity = 0;
    container.style.pointerEvents = "none";
  }
});


updatePasswordLength();
