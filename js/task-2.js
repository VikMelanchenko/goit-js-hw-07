// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию в
// список ul.ingredients.Для создания DOM - узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsEl = document.querySelector("ul#ingredients");

const getIngredientsList = (ingredients) => {
  return ingredients.map((ingredient) => {
    const listEl = document.createElement("li");
    listEl.textContent = ingredient;

    return listEl;
  });
};
const elements = getIngredientsList(ingredients);
ingredientsEl.append(...elements);

console.log(elements);
