'use strict';
// Fan
const fan = document.querySelector('#fan');
let countWin = 0;
const fanWorking = function () {
  countWin += 10;
  fan.style = `transform: rotateZ(${countWin}deg);`;
  if (countWin > 99999) {
    countWin = 0;
  }
}
setInterval(fanWorking, 9);

// Times
document.querySelector(".year").innerText = (new Date().getFullYear());
// PDF Name Maker
function pdfNameMaker() {
  const date = new Date();
  const pdfNameWithTimes = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  console.log(pdfNameWithTimes);
  const dupur = "https://futurelottery.github.io/result/1.30_"+pdfNameWithTimes + ".pdf";
  console.log(dupur);
  const night = "https://futurelottery.github.io/result/8.30_"+pdfNameWithTimes + ".pdf";
  console.log(night);
  
  const ancor = document.querySelectorAll(".download_a");
  ancor[0].href = dupur;
  ancor[1].href = night;
};
pdfNameMaker();