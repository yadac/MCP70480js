function Employee(name, title) {
    this.name = name;
    this.title = title;
}

var e = new Employee('don', 'developer');
console.log(e.toString());

Employee.prototype.toString = function () {
    return this.name + " is a " + this.title;
}

function HourlyEmployee(name, title, rate) {
    // Employee's constructor is called?
    Employee.call(this, name, title);
    this.rate = rate;
}

// inherit
HourlyEmployee.prototype = new Employee();

// override
HourlyEmployee.prototype.toString = function () {
    return Employee.prototype.toString.call(this) +
        ' with an houly rate of ' + this.rate;
}

var h = new HourlyEmployee('lisa', 'qa tester', 25);
console.log(h.toString());
