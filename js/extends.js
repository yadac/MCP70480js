function User() { };
User.prototype.isAdmin = function () { return false; };

function Admin() { };
Admin.prototype = new User();
Admin.prototype.isAdmin = function () { return true; };

var u = new User();
var a = new Admin();
console.log(`u.isAdmin() = ${u.isAdmin()}`);
console.log(`a.isAdmin() = ${a.isAdmin()}`);
