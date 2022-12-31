const express = require("express")
const sql = require('mssql')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())

const config = {
    server: "localhost",
    user: "esrayilmaz",
    password: "esra123456",
    database: "Giris",
    stream: false,
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true,
    },
}

app.get("/get_soru", async (req, res) => {
    let sql_soru = "SELECT TOP 5 * FROM soru s ORDER BY NEWID()"

    sql.connect(config).then(pool => {
        if (pool.connected) {
            new sql.Request().query(sql_soru, (err, res_soru) => {
                res.send(res_soru.recordsets[0])
            })
        }
    })
})

app.listen(PORT, "0.0.0.0", function(){
    console.log("Express server " + PORT + " ile çalışıyor.")
});
