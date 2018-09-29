var express = require('express');
var router = express.Router();

const initOptions = {};

var Usuario = require("../models/usuario/usuario");
var UsuarioDAO = require("../models/usuario/usuarioDAO");


/* GET home page. */
router.get('/', function(req, res, next) {
  
  
    res.status(200).render('index',{
      title: "Página Inicial",
      user: req.session.login,
      login: req.session.login
    });    
});

module.exports = router;
