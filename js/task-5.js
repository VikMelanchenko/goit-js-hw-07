// Написать скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в
// span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputEl = document.querySelector("input#name-input");
const outputEl = document.querySelector("span#name-output");

inputEl.addEventListener("input", getName);

function getName(event) {
  event.currentTarget.value === ""
    ? (outputEl.textContent = "незнакомец")
    : (outputEl.textContent = event.currentTarget.value);
}
