"use strict";
let text = document.querySelector("#text");
let countA = -1;
function fanIsWork() {
  countA++;
  switch (countA) {
    case 0:
      text.textContent = "Fu";
      break;
    case 1:
      text.textContent += "tu";
      break;
    case 2:
      text.textContent += "re";
      break;
    case 3:
      text.textContent += " L";
      break;
    case 4:
      text.textContent += "ot";
      break;
    case 5:
      text.textContent += "te";
      break;
    case 6:
      text.textContent += "ry";
      break;
    case 14:
      text.textContent = "To";
      break;
    case 15:
      text.textContent += "da";
      break;
    case 16:
      text.textContent += "y ";
      break;
    case 17:
      text.textContent += "Re";
      break;
    case 18:
      text.textContent += "su";
      break;
    case 19:
      text.textContent += "lt";
      break;
    case 26:
      countA = -1;
    default:
      text.textContent = text.textContent.slice(0,-2);
      break;
  }
}
setInterval(fanIsWork, 200);