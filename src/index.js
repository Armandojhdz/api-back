const express =require('express');
const path = require('path'); 
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection'); 

const app = express();

//importando rutas
const radiobaseRoutes = require('./routes/radiobase')


//settings 
app.set('port',process.env.PORT || 3000);

//---------------

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'system'
}, 'single'));




//routes
app.use('/', radiobaseRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//empezando el server
app.listen(app.get('port'), ()=>{
    console.log('server on port');
});