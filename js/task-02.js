const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEL = document.getElementById('ingredients');

murkup(ingredients);

function murkup(arr) {
  const elements = arr.map(ingredient => {
    const listItemEl = document.createElement('li');
    listItemEl.textContent = `${ingredient}`;
    listItemEl.classList.add('item');
    return listItemEl;
  });

  return listEL.append(...elements);
}
