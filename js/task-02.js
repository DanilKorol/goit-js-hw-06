// 1 Создаст отдельный элемент < li >. 
// Обзательно используй метод document.createElement().
// 2 Добавит название ингредиента как его текстовое содержимое.
// 3 Добавит элементу класс item.
// 4 После чего вставит все <li> за одну операцию в список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsItems = ingredients.map(ingredient => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add('item');
  console.log(ingredientEl);
  return ingredientEl;
});
console.log(ingredientsItems);

const ingredientList = document.querySelector('#ingredients');
ingredientList.append(...ingredientsItems);