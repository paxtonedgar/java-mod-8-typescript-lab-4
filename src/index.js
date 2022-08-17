var inputString = document.getElementById("inputString").value;
var numSpaces = parseInt(document.getElementById("numSpaces").value);
var button = document.getElementById("pad_it");
button.addEventListener("click", function () {
    console.log(prepend(inputString, numSpaces));
});
function prepend(inputString, numSpaces) {
    if (numSpaces != null && inputString != null) {
        var spaces = "";
        for (var x = 0; x < numSpaces; x++) {
            spaces = spaces + "&nbsp;";
        }
        var result = spaces + inputString;
        var output = "\"" + result + "\"";
        return output;
    }
    else
        return "";
}
console.log(prepend("happy", 10));
