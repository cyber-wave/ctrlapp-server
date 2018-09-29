var express = require('express');
var router = express.Router();

const initOptions = {};

var Usuario = require("../models/usuario/usuario");
var UsuarioDAO = require("../models/usuario/usuarioDAO");


/* GET home page. */
router.get('/', function(req, res, next) {
  
  UsuarioDAO.getUsuario("bixiguinha").then(myUser =>{
    res.status(200).render('index',{
      title: myUser.login
    });
  });
    
  
  
  

  
});


router.post('/', function(req,res,next){
  
  res.status(200).send(req.body);
});

module.exports = router;
