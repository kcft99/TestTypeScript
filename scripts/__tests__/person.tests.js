"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var person_1 = require("../person");
describe('Person', function () {
    var p;
    beforeEach(function () {
        p = new person_1.Person('Bob', 31);
    });
    it('constructor() creates a Person with properties as expected', function () {
        chai_1.expect(p.name).to.equal('Bob');
        chai_1.expect(p.age).to.equal(31);
    });
    it('greet() returns a greeting', function () {
        chai_1.expect(p.getGreeting()).to.equal('Hi Bob');
    });
});
