"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getGreeting = function () {
        return 'Hi ' + this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
exports.Person = Person;
