let btn = document.querySelector("#generateBtn");
let qrInstance = null;
let qrContainer = document.querySelector("#qrcode");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  // Get user input
  let userInput = document.querySelector("input").value;
  let size = document.getElementById("sizes").value;
  // Check if the input is not empty
  if (userInput.trim() !== "") {
    // Generate QR code
    qrContainer.innerHTML = "";

    qrInstance = new QRCode(document.getElementById("qrcode"), {
      text:userInput,
      height:size,
      width:size,
    });
  } 
  else {
    alert("Please enter some text before generating the QR code.");
  }
});
