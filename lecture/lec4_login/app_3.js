const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a")
function onLoginSubmit(event){
	tomato.preventDefault();
	console.log(event);
}

function handleLinkClick(event){
	event.preventDefault();
}

loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",handleLinkClick);
