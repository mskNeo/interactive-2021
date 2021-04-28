$(document).ready(function() {
  const hrStartRad = 20;
  const minStartRad = 10;
  const hrStep = 2.5;

  const clock = document.querySelector(".clock");
  const hrClock = document.querySelector('.hr');
  const minClock = document.querySelector('.min');
  const secClock = document.querySelector('.sec');

  // quadratic function for adjusting color based on hour
  const backgroundColor = (hr) => {
    return (-(hr * hr) + 24 * hr) / 144;
  }

  const shading = (hr) => {
    return (hr * hr - 23 * hr + 132.25) / 132.25;
  }

  setInterval(() => {
    const date = new Date();
    let color, shade1, shade2;
    color = backgroundColor(date.getHours()) * 200;
    shade1 = shading(date.getHours()) * 250;
    shade2 = backgroundColor(date.getHours()) * 250;
    hrClock.style.width = `${hrStartRad + date.getHours() * hrStep}vh`;
    hrClock.style.height = `${hrStartRad + date.getHours() * hrStep}vh`;
    minClock.style.width = `${minStartRad + date.getMinutes() / 60 * (parseFloat(hrClock.style.width) - minStartRad)}vh`;
    minClock.style.height = `${minStartRad + date.getMinutes() / 60 * (parseFloat(hrClock.style.height) - minStartRad)}vh`;
    secClock.style.width = `${date.getSeconds() / 60 * (parseFloat(minClock.style.width))}vh`;
    secClock.style.height = `${date.getSeconds() / 60 * (parseFloat(minClock.style.height))}vh`;
    clock.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
    hrClock.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
    minClock.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
    secClock.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
    hrClock.style.boxShadow = `inset 5px 5px 5px rgba(${shade1}, ${shade1}, ${shade1}, 0.3), inset -1px -1px 6px rgba(${shade2}, ${shade2}, ${shade2}, 0.4)`;
    minClock.style.boxShadow = `inset 5px 5px 5px rgba(${shade1}, ${shade1}, ${shade1}, 0.3), inset -1px -1px 6px rgba(${shade2}, ${shade2}, ${shade2}, 0.4)`;
    secClock.style.boxShadow = `inset 5px 5px 5px rgba(${shade1}, ${shade1}, ${shade1}, 0.3), inset -1px -1px 6px rgba(${shade2}, ${shade2}, ${shade2}, 0.4)`;
  });
});
