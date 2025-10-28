const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Azure Node.js API running'));
app.listen(8080, () => console.log('Server started'));

