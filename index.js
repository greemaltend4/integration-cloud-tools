const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue dans l\'outil d\'intégration cloud!');
});

app.listen(port, () => {
  console.log(`L'application est en cours d\'exécution sur http://localhost:${port}`);
});
