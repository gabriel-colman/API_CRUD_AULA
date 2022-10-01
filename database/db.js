const Client = require('pg').Client;

const conexao = new Client({
    user: "postgres", 
    password: "ifms", 
    host: "localhost", 
    port: 5432,
    database: "API_CRUD"
});

conexao.connect((error)=> {
    if (error) {
        console.error('A conexao deu erro' + error);
        return;
    }
    console.log('Conectado com sucesso');
}
);

module.exports = conexao;