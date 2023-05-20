const db = require('../database/models')

const serverErr = function (error,res) {
    if(error instanceof db.Sequelize.ConnectionError){
        res.status(503).send({error: "El servidor no responde"})
    } else {
        res.send(error)
    }
}

module.exports = serverErr;