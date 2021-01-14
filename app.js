var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

console.log(txtInput);

function clickEventHandler() {
    console.log(txtInput.value);
    console.log("clicked!");
};  

btnTranslate.addEventListener("click", clickEventHandler);