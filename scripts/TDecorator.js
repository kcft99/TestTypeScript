"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(taget, key, descriptor) {
    var original = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = original.apply(this, args);
        console.log(key + " with arguments " + args[0] + " is  " + result);
        return result;
    };
    return descriptor;
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.square = function (inNum) {
        return inNum * inNum;
    };
    __decorate([
        log
    ], Calculator.prototype, "square", null);
    return Calculator;
}());
var calculator = new Calculator();
var theNum = 5;
console.log("Test results:");
console.log(theNum + " Square is: " + calculator.square(theNum));
