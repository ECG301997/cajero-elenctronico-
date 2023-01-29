const db = require('../../db/config');

const existeMail = async(req,res,next)=>{
    const correo = await req.body.correo;
    let validation ;
    const sql = ` SELECT correo FROM  usuarios  WHERE correo = '${correo}'`;
     db.query(sql,(error,results)=>{
            if(error){
                throw error 
            }else{
                results.forEach(element => {
                    validation = element.correo
       
                  });
            }
            if(validation == correo){
                return res.status(400).json('correo ya esta registrado');

            }else if(validation == undefined){
                next();

            }
    })
}


const   validarTexto=   async(text)=> {
    let regxp = /^([0-9]){1,4}$/;


      return (regxp.test(text));
    
  }

  const validarPass =  async(req,res,next)=>{
    const contraseña =  await req.body.contraseña;
   
    const rta = await validarTexto(contraseña);
    
    if( rta == false){
        res.json({error : 'contraseña debe tener caracter numericos y un minido de 4 '})
    }else{
        next();
    }


  }






const existeMailTrue = async(req,res)=>{
    const correo = await req.body.correo;
    let validation ;
    const sql = ` SELECT correo FROM  usuarios  WHERE correo = '${correo}'`;
     db.query(sql,(error,results,next)=>{
            if(error){
                throw error 
            }else{
                results.forEach(element => {
                    validation = element.correo
       
                  });
            }
            if(validation !== correo){
                return res.status(400).json('correo no  esta registrado');
            }else if(validation == undefined){
                next();

            }
    })
}

module.exports = {
    existeMail,
    validarPass
}