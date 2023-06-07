const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/dataRoutes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/data', dataRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
