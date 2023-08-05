import express from 'express';
import cors from 'cors';
import { routerConexion } from '../routes/pruebaRouter.js';







export default class Server{

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }


    routes() {
        this.app.use('/conexion', routerConexion);
 
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto: ${this.port}`)
        })
    }
}