const clockTitle = document.querySelector(".js-clock");
function dayleft(year, month, day) {
  const left_mon = 12 - month - 1;
  let left_day = 25 - day - 1;
  let ytwo;
  if (year % 400 == 0) ytwo = 29;
  else if (year % 100 == 0) ytwo = 28;
  else if (year % 4 == 0) ytwo = 29;
  else ytwo = 28;
  switch (left_mon) {
    case 0:
      break;
    case 1: //11
      left_day += 30;
      break;
    case 2: //10
      left_day += 30 + 31;
      break;
    case 3: //9
      left_day += 30 + 31 + 30;
      break;
    case 4: //8
      left_day += 30 + 31 + 30 + 31;
      break;
    case 5: //7
      left_day += 30 + 31 + 30 + 31 + 31;
      break;
    case 6:
      left_day += 30 + 31 + 30 + 31 + 31 + 30;
      break;
    case 7:
      left_day += 30 + 31 + 30 + 31 + 31 + 30 + 31;
      break;
    case 8:
      left_day += 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30;
      break;
    case 9:
      left_day += 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31;
      break;
    case 10:
      left_day += 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 + ytwo;
      break;
    case 11:
      left_day += 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 + ytwo + 31;
      break;
  }
  if (left_day < 0)
    //이건 봐줘요잉 이것도 윤년하기 귀찮아용
    left_day += 365;
  return left_day;
}

function updateDate() {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = String(23 - date.getHours()).padStart(2, "0");
  const min = String(59 - date.getMinutes()).padStart(2, "0");
  const second = String(60 - date.getSeconds()).padStart(2, "0");
  const left_day = String(dayleft(date.getFullYear(), month, day)).padStart(
    3,
    "0"
  );
  if (month == 12 && day == 25) clockTitle.innerText = `Today is Chirst Mas~~~`;
  else if (month == 12 && day == 24)
    clockTitle.innerText = `Today is Chirst Mas Eve~~~`;
  else {
    clockTitle.innerText = `${left_day}d ${hour}h ${min}m ${second}s`;
  }
}
setInterval(updateDate, 1000);
