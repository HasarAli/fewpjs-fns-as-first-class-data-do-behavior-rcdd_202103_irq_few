/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const hour = parseInt(time.split(':')[0]);
  console.log(hour);
  // if (hour < 12)
  //   return 'Good Morning';
  // else if (hour <= 5)
  //   return 'Good Afternoon'
  // else
  //   return 'Good Evening'
}
/* Write your implementation of displayMessage() */

greet('11:12')