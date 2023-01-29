const  cors=require('cors');
const express = require('express');

class Server {

    constructor(){
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.loginPath = '/api/login';
    this.homePath = '/api/home';
    this.registroPath = '/api/registro'
    this.middelwares();
    this.routes();


    }

    middelwares(){

        this.app.use(cors());

        //uso de archivos json 
         this.app.use((express.json({limit: '50mb'})));
         this.app.use(express.urlencoded({limit: '50mb'}));

    }

    routes(){
            //this.app.use(this.loginPath,require('../routes/loginRouting'));
            this.app.use(this.homePath,require('../routes/homeRouting'));
            this.app.use(this.registroPath,require('../routes/registroRouting'));
           this.app.use(this.loginPath,require('../routes/loginRouting'));
    }


    listen(){
        this.app.listen(this.port,()=>{
            console.log(`servidor corriendo en  :http://localhost:${this.port}/api`);
        })
    }
}

module.exports = Server;