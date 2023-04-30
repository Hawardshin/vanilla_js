const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDNE_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event){
	event.preventDefault();
	// console.log(event);
	loginForm.classList.add(HIDDNE_CLASSNAME);
	// greeting.innerText = "Hello " + username;
	localStorage.setItem(USERNAME_KEY, loginInput.value);
	paintGreetings();
}

function paintGreetings(){
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`
  greeting.classList.remove(HIDDNE_CLASSNAME);
}

loginForm.addEventListener("submit",onLoginSubmit);
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
  //show the form
  loginForm.classList.remove(HIDDNE_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
}else{
  //show the greeting
  paintGreetings();
}
