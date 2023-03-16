const path = require('path');
const express = require('express');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist/')));

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`yooo dis works at port ${PORT}`);
})