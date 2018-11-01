const express = require('express');
const app = express();
const morgan = require('morgan');

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.use(morgan('development'));
app.use(express.static( `${__dirname}/public`));

app.listen(port, host, () => console.log(`proxy listening on ${host}:${port}`));