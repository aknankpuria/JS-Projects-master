const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

const giveAway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".time h4");

let futureDate = new Date(2021, 5, 12, 11, 30, 0);   // date of giveaway

const year = futureDate.getFullYear();
const month = futureDate.getMonth();
const date = futureDate.getDate();
const day = futureDate.getDay();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

giveAway.textContent = `Giveaway ends on ${weekdays[day]}, ${date} ${months[month]} ${year}, ${hours}:${mins}`;

// values in ms
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

function getRemainingTime()
{
    let ms = Date.parse(futureDate.toString()) - Date.now();     // difference in ms between current date and future date

    let daysLeft = Math.floor(ms / oneDay);
    let hoursLeft = Math.floor((ms % oneDay) / oneHour);
    let minutesLeft = Math.floor((ms % oneHour) / oneMinute);
    let secondsLeft = Math.floor((ms % oneMinute) / 1000);

    const values = [daysLeft, hoursLeft, minutesLeft, secondsLeft];

    const format = (num) => {
        if (num < 10)
            return (num = `0${num}`);
        return num;
    }

    items.forEach((item, index) => {
        item.innerHTML = format(values[index]);
    })
    
    if(ms < 0)
    {
        clearInterval(countDown);
    }
}

let countDown = setInterval(getRemainingTime, 1000);