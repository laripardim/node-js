//importação das dependencias
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

//execução api
const app = express();

//conexão com banco de dados
const con = mysql.createConnection({
    database:'academia',
    host:'localhost',
    user:'root'
})

//indicador de depemdencias
app.use(cors())
app.use(express.json())

// rota (GET)
app.get('/api/', (req,res)=>{
    let string = 'select * from alunos';
    con.query(string, (err, result)=>{
        if(err) throw err;
        res.json(result)
    })
})

//rota (GET) por id
app.get('/id/:id', (req, res)=>{
    let string = 'select * from alunos where id = ' + req.params.id
    con.query(string, (err, result)=>{
        if(err) throw err;
        res.json(result)
    })
})

//Gerenciado de porta da api
app.listen(3000, ()=>{
    console.log('rodando na porta 3000');
})