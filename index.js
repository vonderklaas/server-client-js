const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser());

const recipes = [
  {
    id: 1,
    title: 'Cookies',
  },
  {
    id: 2,
    title: 'Pizza',
  },
];

app.get('/', (req, res) => {
  res.send('Welcome to Recipes!');
});

app.get('/recipes', (req, res) => {
  res.send(recipes);
});

app.get('/recipe/:id', (req, res) => {
  for (let recipe of recipes) {
    if (recipe.id === parseInt(req.params.id)) {
      res.send(recipe);
    }
  }
  res.send('There is no recipe found!');
});

app.post('/recipes', (req, res) => {
  console.log(req.body);
  recipes.push({
    id: recipes.length + 1,
    name: req.body.name,
  });
  res.send({ recipes });
});

app.listen(3000, () => {
  console.log('Server is running');
});
