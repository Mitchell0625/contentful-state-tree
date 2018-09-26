require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const port = 3001;

const ctrl = require('./controller');

const app = express();
app.use(json());

app.get(`/api/images`, ctrl.getAssets);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
