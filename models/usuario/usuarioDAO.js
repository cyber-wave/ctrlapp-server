var pgp = require("pg-promise")();
var db = pgp('postgres://teste:ufc123@localhost:5432/ctrlapp');
var Usuario = require('./usuario');

class UsuarioDAO{
    /**
     * Get all users in the system.
     * @param {Function} success Called when receiving data
     * @param {Function} failure Called when there is an error
     */
    static getTodos(success, failure){
        db.any("SELECT * FROM usuario")
        .then(data => {
            success(data);
        })
        .catch(err => {
            failure(err);
        });
    }
    /**
     * Função que pega um usuario do banco
     * @param {String} login Login do usuario cadastrado
     * @returns Uma promise com um Usuario pendentes
     */
     static async getUsuario(login){
        var data = await db.one("SELECT * FROM usuario WHERE usuario.login = $1",login)
        console.log(data);
        return new Usuario(data.login, data.email, data.senha, data.msg_id);
        
    }
}

module.exports = UsuarioDAO;