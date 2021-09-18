const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //middlewares
        this.middlewares();

        //rutas de mi aplicacion
        this.routes();
    }

    middlewares() {
        //directorio publico
        this.app.use(express.static('public'));

        //usar cors
        this.app.use(cors());

        //usar json parseo y lectura del body
        this.app.use(express.json());
    }

    routes() {

        this.app.use('/api/usuarios', require('../routes/user'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto ${this.port}`);
        });
    }

}

module.exports = Server;