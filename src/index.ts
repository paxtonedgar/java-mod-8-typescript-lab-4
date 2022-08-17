const inputString: string = (<HTMLInputElement>document.getElementById("inputString")).value;
const numSpaces:number = parseInt((<HTMLInputElement>document.getElementById("numSpaces")).value);
const button = (<HTMLButtonElement>document.getElementById("pad_it"));

button!.addEventListener("click", function(){
    console.log(prepend(inputString, numSpaces));
});

function prepend(inputString: string, numSpaces: number | string){

  if(numSpaces!= null && inputString!= null){
  let spaces: string ="";
    for(let x=0; x<numSpaces;x++){
    spaces = spaces + "&nbsp;";
    }
     let result = spaces + inputString;
     let output = "\"" + result + "\"";
     return output;

  }
  else return "";

}

console.log(prepend("happy", 10));