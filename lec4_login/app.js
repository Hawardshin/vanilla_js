const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDNE_CLASSNAME = "hidden";
function onLoginSubmit(event){
	event.preventDefault();
	// console.log(event);
	loginForm.classList.add(HIDDNE_CLASSNAME);
	const username = loginInput.value
	// greeting.innerText = "Hello " + username;
	localStorage.setItem("username",username);
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove(HIDDNE_CLASSNAME);
}


loginForm.addEventListener("submit",onLoginSubmit);
