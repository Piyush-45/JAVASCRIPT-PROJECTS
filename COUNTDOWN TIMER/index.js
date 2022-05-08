const countdown = ()=>{
  const countDate = new Date("may 30, 2030 20:22:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;
  

  // how the fuck does time work?

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // ccalculate the shit

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour ) / minute);
  const textSecond = Math.floor((gap % minute) / second);
  
  // console.log(textDay);
  // console.log(textHour);
  // console.log(textMinutes);
  // console.log(textSecond);

  document.querySelector('.day').innerHTML = textDay;
  document.querySelector('.hour').innerHTML = textHour;
  document.querySelector('.minute').innerHTML =textMinute;
  document.querySelector('.second').innerHTML = textSecond;

 
};
// to run function after every 1000ms so that countdown staatr working
setInterval(countdown, 1000);



