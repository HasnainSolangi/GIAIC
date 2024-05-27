
// #1 Day of the Week
enum Weekday {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function getWeekendGreeting(day: Weekday) {
  if (day === Weekday.Saturday || day === Weekday.Sunday) {
    return "Enjoy your weekend!";
  } else {
    return "Have a productive week!";
  }
}

console.log(getWeekendGreeting(Weekday.Tuesday));  // Outputs "Have a productive week!"
console.log(getWeekendGreeting(Weekday.Saturday)); // Outputs "Enjoy your weekend!"


// #2 User Roles
enum Role {
  Admin = 'admin',
  Editor = 'editor',
  Reader = 'reader',
}

function checkAuthorization(role: Role, permission: string) {
  const permissions = {
    admin: ['create', 'edit', 'delete'],
    editor: ['edit'],
    reader: ['view'],
  };

  if (permissions[role].includes(permission)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkAuthorization(Role.Admin, 'edit'));    // Outputs true (admin can edit)
console.log(checkAuthorization(Role.Reader, 'delete')); // Outputs false (reader cannot delete)


// #3 HTTP Status Codes
enum StatusCode {
  OK = 200,
  BadRequest = 400,
  NotFound = 404,
  InternalServerError = 500,
}

function handleResponse(statusCode: StatusCode) {
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

handleResponse(StatusCode.OK);  // Outputs "Request successful!"
handleResponse(StatusCode.NotFound); // Outputs "Invalid request!" (modify case to handle this code)
