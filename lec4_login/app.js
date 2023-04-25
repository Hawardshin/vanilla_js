const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a")
function onLoginSubmit(event){
	tomato.preventDefault();
	console.log(event);
}


loginForm.addEventListener("submit",onLoginSubmit);
