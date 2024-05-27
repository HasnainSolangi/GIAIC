"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// #1 Day of the Week
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Sunday"] = 0] = "Sunday";
    Weekday[Weekday["Monday"] = 1] = "Monday";
    Weekday[Weekday["Tuesday"] = 2] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 3] = "Wednesday";
    Weekday[Weekday["Thursday"] = 4] = "Thursday";
    Weekday[Weekday["Friday"] = 5] = "Friday";
    Weekday[Weekday["Saturday"] = 6] = "Saturday";
})(Weekday || (Weekday = {}));
function getWeekendGreeting(day) {
    if (day === Weekday.Saturday || day === Weekday.Sunday) {
        return "Enjoy your weekend!";
    }
    else {
        return "Have a productive week!";
    }
}
console.log(getWeekendGreeting(Weekday.Tuesday)); // Outputs "Have a productive week!"
console.log(getWeekendGreeting(Weekday.Saturday)); // Outputs "Enjoy your weekend!"
// #2 User Roles
var Role;
(function (Role) {
    Role["Admin"] = "admin";
    Role["Editor"] = "editor";
    Role["Reader"] = "reader";
})(Role || (Role = {}));
function checkAuthorization(role, permission) {
    const permissions = {
        admin: ['create', 'edit', 'delete'],
        editor: ['edit'],
        reader: ['view'],
    };
    if (permissions[role].includes(permission)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkAuthorization(Role.Admin, 'edit')); // Outputs true (admin can edit)
console.log(checkAuthorization(Role.Reader, 'delete')); // Outputs false (reader cannot delete)
// #3 HTTP Status Codes
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["InternalServerError"] = 500] = "InternalServerError";
})(StatusCode || (StatusCode = {}));
function handleResponse(statusCode) {
    switch (statusCode) {
        case StatusCode.OK:
            console.log("Request successful!");
            break;
        case StatusCode.BadRequest:
            console.log("Invalid request!");
            break;
        // Handle other status codes
    }
}
handleResponse(StatusCode.OK); // Outputs "Request successful!"
handleResponse(StatusCode.NotFound); // Outputs "Invalid request!" (modify case to handle this code)
