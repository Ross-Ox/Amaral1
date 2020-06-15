var pool = require('./MysqlConn').pool;

//Função para testes

module.exports.getAllQuestion = function(callback, next) {
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("select * from Questionario_2",
            function(err, results) {

                conn.release();
                if (err) {
                    callback(err, { code: 500, status: "Error in a database query" })
                    return;
                }
                callback(false, { code: 200, status: "ok", data: results })
            })

    })
}