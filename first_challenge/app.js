// document.title = "hello title by js"
// const title = document.getElementById("title");
// console.log(title);
// console.dir(title);
// title.innerText = "Got you";
// console.log(title.id);
// console.log(title.className);
//1st done


// const hellos = document.getElementsByClassName("hello") //only for class
// console.log(hellos);

// const title = document.getElementsByTagName("h1"); //for all tag get
// console.log(title);

const title = document.querySelector(".hello h1");

console.log(title);
const title2 = document.querySelector(".hello:first-child h1");
console.log(title2);
const title3 = document.querySelector("div.hello:first-child h1");
console.log(title3);
console.dir(title3);



function handleTitleClick() {
  // console.log("title was clicked!");
  title.style.color = "blue";
}

function handleMouseEnter(){
  // console.log("mouse is here");
  title.innerText = "mouse is here"
}

function handleWindowResize(){
  document.body.style.backgroundColor = "tomato";
}

function handleMouseLeave(){
  title.innerText = "mouse is gone!"
}

function handleWindowCopy(){
  alert("copier!!");
}

function handleWindowOffline(){
  alert("SoS no Wife");
}

function handleWindowOnline(){
  alert("All GOOOOD");
}


// title.addEventListener("click",handleTitleClick);
title.onclick = handleTitleClick;
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
