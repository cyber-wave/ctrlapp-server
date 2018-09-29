var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.status(200).render('noticias',{
        title: "Envio de notícias"
    })
});

router.post('/', function(req,res,next){
    var dados = req.body;
    res.status(200).send(dados);
});

module.exports = router;