const clock = document.querySelector("h2#clock");


function getClock(){
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clock.innerText = `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
}
getClock();
setInterval(getClock, 1000);
