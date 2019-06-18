var express = require('express');
var router = express.Router();

/* GET users listing. */

const SELECT_ALL_USER_QUERY = 'SELECT * FROM usuarios'



router.get('/affichage', (req, res) => {
    connection.query(SELECT_ALL_USER_QUERY, (err, resultados) => {
        if(err) {
            return res.send(err)
        } else {
            return res.json({
                data: resultados
            })
        }
    })
});

router.get('/user/add', (req, res) => {
    const{ nome, sobrenome, email } = req.query
    const INSERT_USER_QUERY = `INSERT INTO usuarios(nome, sobrenome, email) VALUES('${nome}', '${sobrenome}', '${email}')`
    connection.query(INSERT_USER_QUERY, (err, resultados) => {
        if(err) {
            return res.send(err)
        } else {
            return res.send('usuario adicionado com sucesso')
        }
    })
});




module.exports = router;
