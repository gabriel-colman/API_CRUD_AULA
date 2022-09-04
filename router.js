const express = require('express');
const router = express.Router();

//invocar os dados a conexao
const conexao = require('./database/db')


router.get('/', (req, res)=>{ 
    //Aqui esta lançando uma consulta
    conexao.query('select * from crud', (error, results) =>{
        if(error){
            throw error;//throw lança uma exceção definida pelo usuário
        }else{
            res.send(results);//Envie uma resposta de string em um formato diferente de JSON (XML, CSV, texto simples etc.).
        }
    });
})

//export aponta para objeto que foi criado, 
//podendo ser usado para retornar funções e objetos bastando somente
// adicioná-los ao export.
module.exports = router;