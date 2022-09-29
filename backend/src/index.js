const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
require('./config/dbConfig');

app.use(cors());
app.use(express.json());
app.use(routes);

const port = 3333;
app.listen(port, () => {
    console.log(`O servidor está executando na porta: ${port}`);
});
