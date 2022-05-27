require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { PORT } = process.env;

require('./config/ConnectDB')();

const app = express();
app.use(cookieParser());
app.use(cors());

app.use(express.json());

app.use('/api', require('./routes/api.js'));

app.listen(PORT, () => console.log(`Servidor corriendo en ${PORT}`));
