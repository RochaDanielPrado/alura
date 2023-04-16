const db = require('../config/db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{
            
        const q = 'SELECT * FROM carros';

            db.query(q, (error, data)=>{
                if(error) { rejeitado(error); return; }
              
                aceito(data);
            });
        });
    },

    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM carros WHERE codigo = ?', [codigo], (error, data) => {
                if(error) { rejeitado(error); return; }
                if(data.length > 0){ //vai verificar se retornou mais de 1 e pegar o 1
                    aceito(data[0]);
                }else {
                    aceito(false);
                }
            });
        });
    },
    inserir: (modelo, placa)=> {
        return new Promise((aceito, rejeitado)=> {

            db.query('INSERT INTO carros (modelo, placa) VALUES (?, ?)',
                [modelo, placa],
                (error, data)=>{
                    if(error){ rejeitado(error); return; }
                    aceito(data.insertCodigo); //insertId
                }
            );
        });
    },
    alterar:(codigo, modelo, placa)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('UPDATE carros SET modelo = ?, placa = ? WHERE codigo = ?',
                [modelo, placa, codigo],
                (error, data) => {
                    if(error){ rejeitado(error); return; }
                    aceito(data);
                }
            );
        });
    },

    excluir: (codigo)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('DELETE FROM carros WHERE codigo = ?',[codigo], (error, data ) =>{
                if(error){ rejeitado(error); return; }
                aceito(data);
            });
        });
    }
};
