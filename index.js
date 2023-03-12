/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */


function greet(timeStr) {
  const time = parseInt(timeStr, 10)
  if (time < 12) return "Good Morning"
  if (time > 17) return "Good Evening"
  return "Good Afternoon"
}

// The radix argument is converted to a number. If it's unprovided, or if the value becomes 0, NaN or Infinity (undefined is coerced to NaN), JavaScript assumes the following:
// If the input string, with leading whitespace and possible +/- signs removed, begins with 0x or 0X (a zero, followed by lowercase or uppercase X), radix is assumed to be 16 and the rest of the string is parsed as a hexadecimal number.
// If the input string begins with any other value, the radix is 10 (decimal). Hence, above, we have 'timeStr, 10'.

/* Write your implementation of displayMessage() */


function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}
