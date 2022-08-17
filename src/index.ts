const button = document.getElementById("btn") as HTMLButtonElement;
const input1 = document.getElementById("firstInput") as HTMLInputElement;
const input2 = document.getElementById("secondInput") as HTMLInputElement;

button!.addEventListener("click", function () {
    console.log(prepend([input1!.value, input2!.value]));
});

function prepend<T>(array: T[]) {
    let space: string = "";
    let numOfSpaces = +array[1] as number;
    let word = array[0]

    for (let i = 0; i < numOfSpaces; i++) {
        space += " ";
    }

    console.log("number of spaces:", numOfSpaces);
    console.log("amount of space: ", "|" + space +"|");

    return `${space}${word}`;
}
