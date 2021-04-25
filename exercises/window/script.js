const time = new Date();
const hrCloud = document.querySelector('.cloud1');
const minCloud = document.querySelector('.cloud2');

const hour = time.getHours();
const min = time.getMinutes();

console.log(hour);
console.log(min);

hrCloud.style.animationDuration = "86400s";
hrCloud.style.animationDelay = `${-hour * 3600}s`;
minCloud.style.animationDuration = "3600s";
minCloud.style.animationDelay = `${-min * 60}s`;