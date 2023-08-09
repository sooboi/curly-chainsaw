(function () {
  const dateElement = document.getElementById("date");
  const timeElement = document.getElementById("time");

  const modifyNumber = (number) => {
    return parseInt(number) < 10 ? "0" + number : number;
  };

  const getNowDate = () => {
    const nowDate = new Date();
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const month = modifyNumber(nowDate.getMonth() + 1);
    const date = modifyNumber(nowDate.getDate());
    const day = nowDate.getDay();
    setNowDate(month, date, week[day]);
  };

  const setNowDate = (month, date, day) => {
    dateElement.textContent = `${month}월 ${date}일 ${day}요일`;
  };

  const getNowTime = () => {
    const nowDate = new Date();
    let hour = modifyNumber(nowDate.getHours());
    let minute = modifyNumber(nowDate.getMinutes());
    let second = modifyNumber(nowDate.getSeconds());
    setNowTime(hour, minute, second);
  };

  const setNowTime = (hour, minute, second) => {
    timeElement.textContent = `${hour} : ${minute} : ${second}`;
  };

  getNowDate();
  getNowTime();

  setInterval(getNowTime, 1000);
})();
