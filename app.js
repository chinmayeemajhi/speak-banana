// var que1 = document.querySelector("textarea");
// console.log(que1);
// var que2 = document.querySelector(".btn-primary");
// console.log(que2);
// var que3 = document.querySelector("[name=translator]");
// console.log(que3);

//console.log(txtInput);


var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//var urlServer = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var urlServer = "https://api.funtranslations.com/translate/minion.json";

function constructUrl(text) {
    var url = urlServer + "?" + "text=" + text;
    return url;
};

function errorHandler(error) {

    console.log("error occured " + error);
};

function clickEventHandler() {
    var inputText = txtInput.value;//taking input

    //processing input
    fetch(constructUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;//showing output
        })
        .catch(errorHandler)//handling error 

};

btnTranslate.addEventListener("click", clickEventHandler);