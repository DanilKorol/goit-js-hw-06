// 1 Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// 2 Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>)
//  и количество элементов в категории(всех вложенных в него < li >).


// const allCategories = document.querySelector('#categories').children.length;
// console.log(allCategories);
// const allCategories = document.querySelectorAll('.item').length;

const allCategories = document.querySelectorAll('.item');

// console.log(allCategories);
// console.log(`Number of categories: ${allCategories}`);

console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach(category => {
    const nameOfCategory = category.querySelector('h2');
    const categoryItems = category.querySelectorAll('li');
    console.log(`Category: ${nameOfCategory.textContent}`);
    console.log(`Elements: ${categoryItems.length}`);
});





