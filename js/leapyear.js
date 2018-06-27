function IsLeapYear(year) {
    return year % 400 == 0 || year % 4 == 0 && year % 100 != 0;
}

console.log(IsLeapYear(2000));
console.log(IsLeapYear(2004));
console.log(IsLeapYear(2100));


