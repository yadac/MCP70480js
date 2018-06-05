function IsLeapYear(year) {

    if (year % 400 === 0) return true;
    if (year % 4 === 0 & year % 100 !== 0) return true;
    return false;
}

console.log(IsLeapYear(2000));
console.log(IsLeapYear(2004));
console.log(IsLeapYear(2100));

