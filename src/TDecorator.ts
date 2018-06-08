function log (taget : any, key : string, desctiption: any){
    console.log(key);
}

class Calculator {

    @log
    square ( inNum :number) {
      return inNum * inNum;
    }
        
}
const calculator = new Calculator();
const theNum = 5;

console.log("Test results:");
console.log (theNum + " Square is: " + calculator.square(theNum));