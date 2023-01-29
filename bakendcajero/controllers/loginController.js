const jwt = require ('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../db/config');


const auth = async(req,res)=>{
    let {correo,contraseña} = await req.body;
    contraseña = String(contraseña);
    let pass ;
    const sql = ` SELECT contraseña ,correo , tipoUser FROM usuarios WHERE correo = '${correo}'`;
    if(correo == undefined){
        res.json('ingresa los campos ');
    }else{
        db.query(sql,(error,results)=>{
                if(error){
                    res.json({error : error});
                }else{
                  
                    results.forEach(element => {
                        pass = element.contraseña;
                    });

                    const compare  = bcrypt.compareSync(contraseña,pass);

                    if(!compare){
                        res.json({error: 'usuario incorrecto'})
                    }  else{
                        if(results.length >0){
                            let data = JSON.stringify(results[0]);
                            const token = jwt.sign(data,'stil')
                            res.json({token})
                            console.log("loggeado")
                        }else{
                            
                            res.json('usuario incorrecto')
                        }
                         
                     }
                }

        })
     
}
}


module.exports = {
    auth
}