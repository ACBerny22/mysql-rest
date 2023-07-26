const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyPaser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(bodyPaser.json());

//routes
require('./routes/userRoutes')(app);

app.listen(app.get('port'), () => {
    console.log('Innit in port 3000')
});