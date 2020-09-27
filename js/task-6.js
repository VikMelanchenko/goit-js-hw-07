// написать скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

const inputFocus = document.querySelector("#validation-input");

inputFocus.addEventListener("blur", onInputBlur);

function onInputBlur() {
  const inputDataLength = Number(inputFocus.getAttribute(`data-length`));
  const inputValueLength = inputFocus.value.length;
  if (inputDataLength === inputValueLength) {
    inputFocus.classList.add("valid");
    inputFocus.classList.remove("invalid");
  } else {
    inputFocus.classList.add("invalid");
    inputFocus.classList.remove("valid");
  }
}
