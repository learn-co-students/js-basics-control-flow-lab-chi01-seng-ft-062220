function scuberGreetingForFeet(rideLength) {
  // Write your code here!
  let result;
  if (rideLength < 400) {
    result = "This one is on me!";
  } else if (rideLength > 2500) {
    result = "No can do.";
  } else {
    result = "I will gladly take your thirty bucks.";
  }
  return result;
}

function ternaryCheckCity(city) {
  // Write your code here!
  let result = city === "NYC" ? "Ok, sounds good." : "No go.";
  return result;
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  let result;
  switch (tip) {
    case "generous":
      result = "Thank you so much.";
      break;

    case "not as generous":
      result = "Thank you.";
      break;

    default:
      result = "Bye."
      break;
  }
  return result;
}
