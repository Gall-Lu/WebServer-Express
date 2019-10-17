const express = require('express');
const app = express(); // Se declara una variable del producto de la función express
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/Public'));

// al poner '__dirname' toma la variable y le concatena la ruta despues del +
hbs.registerPartials(__dirname + '/views/Parciales');

// Express HBS
app.set('view engine', 'hbs');


//Un helper del hbs es una función que se dispara cuando el taplate lo requiere.


// app.get('/', (req, res) => { // Se configura una solicitud get cuando el path es '/'.
//     let salida = {
//         nombre: 'Luis Felipe',
//         edad: 32,
//         url: req.url
//     };

//     res.send(salida);

// })


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Luis Felipe barrios PEREZ'
    });

})

app.get('/about', (req, res) => {

    res.render('about');

})

// app.get('/data', (req, res) => {


//     res.send("Hola data.");

// })

/* El app.listen tambien puede recibir un callback y se dispara cuando el app.listen se levanta*/
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}.`);
});

/* 
    Un midelware es un callback que se ba a ejecutar siempre que la persona pida un URL.
*/