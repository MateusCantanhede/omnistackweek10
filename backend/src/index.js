// Mtodos HTTP: GET,POST,PUT,DELETE
//Tipos de parmetros:
//Querry Params : req.query (filtros e ordenação paginação ect)
//Route Params : request.params (identifica um recurso na alteração ou remoção)
//Body : request.body (criação ou alteração de um registro)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const {setupWebsocket} = require('./websocket'); 
const app = express();
const server = http.Server(app);

setupWebsocket(server);
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-axctb.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology : true,
    useCreateIndex: true,
});
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);