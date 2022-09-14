const express = require('express');
const router = express.Router();

//invocar os dados a conexao
const conexao = require('./database/db')


router.get('/', (req, res) => {
    // res.render é usada para renderizar uma visualização e envia a string HTML renderizada para o cliente. 
    // res.render('index', {var1: 'Estou com essa variavel'}) // para fazer referencia la de ejs
    conexao.query('SELECT * FROM crud',(error, results)=>{
        if(error){
            throw error;
        } else {                       
            res.render('index.ejs', {results:results});            
        }   
    })
})

router.get('/create', (req,res)=>{
    res.render('create');
})

router.get('/edit/:id', (req,res)=>{    
    const id = req.params.id;
    conexao.query('SELECT * FROM crud WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('edit.ejs', {usuario:results[0]});            
        }        
    });
});

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexao.query('DELETE FROM crud WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});

const crud = require('./controllers/crud');

router.post('/save', crud.save);
router.post('/update', crud.update);

//export aponta para objeto que foi criado, 
//podendo ser usado para retornar funções e objetos bastando somente
// adicioná-los ao export.
module.exports = router;