//Invocamos a conexão do DB
const conexao = require('../database/db');
//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const usuario = req.body.usuario;
    const funcao = req.body.funcao;
    conexao.query('INSERT INTO crud SET ?',{usuario:usuario, funcao:funcao}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/');         
        }
});
};
//Atualizar o registro
exports.update = (req, res)=>{
    const id = req.body.id;
    const usuario = req.body.usuario;
    const funcao = req.body.funcao;
    conexao.query('UPDATE crud SET ? WHERE id = ?',[{usuario:usuario, funcao:funcao}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};