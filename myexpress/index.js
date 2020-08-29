const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const app = express();

app.use(express.json());
app.use(logger);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port ', PORT));
