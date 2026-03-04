const express = require('express');
const app = express();

const apiV1Router = require('./routes');

app.use(express.json());

app.use('/api/v1', apiV1Router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});