// Mtodos HTTP: GET,POST,PUT,DELETE
//Tipos de parmetros:
//Querry Params : req.query (filtros e ordenação paginação ect)
//Route Params : request.params (identifica um recurso na alteração ou remoção)
//Body : request.body (criação ou alteração de um registro)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const app = express();
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-axctb.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology : true,
    useCreateIndex: true,
});
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);