let express = require('express');
let app = express();
let path = require('path');
let hbs = require('express-handlebars');
let cors = require('cors');
let bodyparser = require('body-parser');
let PORT = 4200;


//CONFIGURACION DE HANDLEBARS COMO MOTOR DE PLANTILLAS
app.engine('hbs', hbs({ defaultLayout: 'base', extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '/public')));

//MIDDLEWARES
app.use(cors());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: false }));

//ENRUTADORES
let indexRouter = require('./routes/index');
let personaRouter = require('./routes/persona');
app.use('/index', indexRouter);
app.use('/personas', personaRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})