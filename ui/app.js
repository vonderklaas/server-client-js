const form = document.getElementById('add-recipe-form');
const input = document.getElementById('add-recipe-input');
const recipesDiv = document.getElementById('recipes');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(input.value);
  addRecipe(input.value);
  input.value = '';
});

const addRecipe = (name) => {
  fetch('http://localhost:3000/recipes', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

const getRecipes = () => {
  fetch('http://localhost:3000/recipes')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

const getRecipe = (id) => {
  fetch(`http://localhost:3000/recipe/${id}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
