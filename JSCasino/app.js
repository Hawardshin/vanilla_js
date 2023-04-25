const rangeForm = document.querySelector("#inputrange");
const inputRange = document.querySelector("#inputrange input");
const guessForm = document.querySelector("#iguess");
const inputguess = document.querySelector("#iguess input");
const result = document.querySelector("#Input_result");
const win = document.querySelector("#win_result");
const USEINPUT_KEY = "input";
const INPUT_GUESS = "guess";
const RANDOM_VALUE = "RAND"
const HIDDNE_CLASSNAME = "hidden";
function oninputRangeSubmit(event){
	event.preventDefault();
  localStorage.setItem(USEINPUT_KEY,inputRange.value);
  localStorage.setItem(RANDOM_VALUE,Math.floor(rand(0,inputRange.value)))
  const youchoose = inputguess.value;
  const savedRandValue= localStorage.getItem(RANDOM_VALUE);
  if (youchoose !== null && savedRandValue !== null)
    dow();

}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dow(){
  const youchoose = inputguess.value;
  const savedRandValue= localStorage.getItem(RANDOM_VALUE);
  result.innerText = `you chose: ${youchoose} the machine chose: ${savedRandValue}`
  if (youchoose === savedRandValue)
    win.innerText = "You Won!";
  else
    win.innerText = "You lost!";
  win.classList.remove(HIDDNE_CLASSNAME);
  result.classList.remove(HIDDNE_CLASSNAME);
  win.classList.add("bold");
}

rangeForm.addEventListener("submit",oninputRangeSubmit);
guessForm.addEventListener("submit",oninputRangeSubmit);


