const db = require('../db/config');

const getMovi= async(req,res)=>{
    const {documento}  = await req.params; 

    const sql = `SELECT * FROM movieentos  WHERE documento = '${documento}'  ORDER BY id DESC`;
  
    db.query(sql,(error,results)=>{
        if(error){
            res.json({error: error})
        }else{
            res.json(results);
            

        }
    })

}

module.exports = getMovi
