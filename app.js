const express = require('express'); //referenciando express
const app = express();
const { json } = require('express')

// aqui esta chamando o <template> é um mecanismo para encapsular
//  um conteúdo do lado do cliente que não é renderizado quando a página é carregada
app.set('view engine', 'ejs'); 
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./router'));

//listen escuta as conexões em um caminho fornecido.
app.listen(5000, ()=>{ 
    console.log('SERVER execundo em http://localhost:5000');
})