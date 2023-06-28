const refs = {
  categories: document.querySelector('#categories'),
  categoriesList: categories.querySelectorAll('.item'),
};

displayNumberOfCategories(refs);

function displayNumberOfCategories({ categories }) {
  console.log('Number of categories:', categories.childElementCount);
}

displayTitleAndNumberOfItems(refs);

function displayTitleAndNumberOfItems({ categoriesList }) {
  categoriesList.forEach(item => {
    const titleEL = item.querySelector('h2').textContent;
    console.log('Category:', titleEL);

    const numberOfChildEl = item.querySelector('ul').childElementCount;
    console.log('Elements:', numberOfChildEl);
  });
}
