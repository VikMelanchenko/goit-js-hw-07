// выводим шаблонную строку и кол - во категорий

const categoriesUl = document.querySelectorAll("ul#categories li.item");
console.log(`В списке ${categoriesUl.length} категории.`);

// выводим категории и их кол-во внутри
const categoriesArr = document.querySelectorAll("ul#categories .item");
categoriesArr.forEach.call(categoriesArr, (element) => {
  const title = element.querySelector("h2").innerHTML;
  const itemsLength = element.querySelectorAll("li").length;
  console.log(`Категория: ${title}, Количество элементов: ${itemsLength}`);
});
