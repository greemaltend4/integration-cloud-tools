const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue dans votre outil d\u2019int\u00e9gration cloud !');
});

app.listen(port, () => {
  console.log(`L'application est opérationnelle sur http://localhost:${port}`);
});