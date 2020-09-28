// Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.

const inputFontSize = document.querySelector("input#font-size-control");
const inputSpanText = document.querySelector("span#text");

inputFontSize.addEventListener("input", onInputRange);

function onInputRange(event) {
  inputSpanText.style.fontSize = event.currentTarget.value + "px";
  console.log(inputSpanText.style.fontSize);
}
