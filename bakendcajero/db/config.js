const sql = require('mysql');

const conexion = sql.createConnection({
    host : 'localhost',
    password :'',
    user : 'root',
    port : '3306',
    database : 'cajeropoli'

})

conexion.connect((err)=>{
    if(err){
        console.log(`error en : ${err}`);

    }else{
        console.log(`conexion existosa `)

    }
});

module.exports = conexion;