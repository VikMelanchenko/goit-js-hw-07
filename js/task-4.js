// создаем переменную в которой будет хранится текущее значение счетчика
let counterValue = 0;
// создаем функции increment и decrement для увеличения и уменьшения значения счетчика

const countBtn = {
  btn1: (btnDecrement = document.querySelector("[data-action='decrement']")),
  btn2: (btnIncrement = document.querySelector("[data-action='increment']")),
  span: (spanCount = document.querySelector("#value")),
  div: (divCounter = document.querySelector("#counter")),
};

const decrement = () => {
  counterValue -= 1;
  document.getElementById("value").innerHTML = counterValue;
};

const increment = () => {
  counterValue += 1;
  document.getElementById("value").innerHTML = counterValue;
};

// добавляем слушатели кликов на кнопки, вызовы функций и обновление интерфейса
countBtn.btn1.addEventListener("click", decrement);
countBtn.btn2.addEventListener("click", increment);
