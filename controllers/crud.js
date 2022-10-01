//Invocamos a conexão do DB
const conexao = require('../database/db');
//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const usuario = req.body.usuario;
    const funcao = req.body.funcao;
    conexao.query(
        'INSERT INTO crud(id, usuario, funcao) VALUES($1, $2, $3)',
        [GeradorID(usuario, funcao), usuario, funcao],
        (error, results) => {
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/');         
        }
});
};

// //Atualizar o registro
exports.update = (req, res)=>{
    const id = req.body.id;
    const usuario = req.body.usuario;
    const funcao = req.body.funcao;
    conexao.query(
        'UPDATE crud SET usuario=$1, funcao=$2, id=$4 WHERE id=$4',
        [usuario, funcao, id],
        (error, results) => {
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};

function GeradorID(usuario, funcao) {
    return Number(usuario.toString().length) + Number(funcao.toString().length)
}