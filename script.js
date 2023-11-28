var isDate = function (input) {
    // Check if the input is a date object
  if (input instanceof Date) {
    return !isNaN(input.getTime());
  }

  // Check if the input is a valid date string
  if (typeof input === 'string') {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime());
  }

  // Return false for other types of input
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
