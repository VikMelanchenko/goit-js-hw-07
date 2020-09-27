const btnCounter = {
  btn1: document.querySelector("[data-action='increment']"),
  btn2: document.querySelector("[data-action='decrement']"),
};
let counterValue = 0;

const increment = () => {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
};

btnCounter.btn1.addEventListener("click", increment);

const decrement = () => {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue;
};

btnCounter.btn2.addEventListener("click", decrement);
