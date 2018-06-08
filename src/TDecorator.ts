function log (taget : any, key : string, descriptor: any){
    const original = descriptor.value;
    descriptor.value = function (...args:any[]) {
        const result = original.apply(this, args);
        console.log(`${key} with arguments ${args[0]} is  ${result}`);
        return result;
    }
    return descriptor;
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