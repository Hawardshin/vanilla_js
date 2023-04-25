
// const loginForm = document.getElementsByClassName("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
// const loginForm = document.querySelector("#login-form");
// const loginForm = document.getElenmetsById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick(){
// 	console.dir(loginInput);//여기서 보면 입력값이  value로 들어갔다는 사실을 찾을 수 있다.
// 	console.log("clicked!!!");
// 	console.log(loginInput.value);
// }

//form 쓰기 전 함수
// function onLoginBtnClick(){
// 	const username = loginInput.value;
// 	if (username === ""){
// 		alert("Please write your name");
// 	}else if (username.length > 15){
// 		alert("Your name is too long")
// 	}
// }


function onLoginBtnClick(){
	console.log(loginInput.value);
}
loginButton.addEventListener("click",onLoginBtnClick);
