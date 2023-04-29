
const API_KEY = "f8936024baf4598906baa7fb033bf985";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in",lat,lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&unit=metric`
  fectch (url).then(response =>response.json()).then(data=>{
    const weather=document.querySelector("#weather span:first-child");
    const city=document.querySelector("#weather span:last-child");
    city.innerText= data.name;
    weather.innerText = `data.weather[0].main / ${data.main.temp}`;
  });
}
function onGeoError(){
  alert("Can't find you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);