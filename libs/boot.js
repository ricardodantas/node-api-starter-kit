import https from 'https'
import fs from 'fs'

module.exports = app => {
    if (process.env.NODE_ENV !== "test") {
        const credentials = {
            key: fs.readFileSync('ssl.key', 'utf-8'),
            cert: fs.readFileSync('ssl.cert', 'utf-8')
        }
        app.db.sequelize.sync().done(() => {
            https.createServer(credentials, app)
                 .listen(app.get("port"), () => console.log(`API running at https://localhost:${app.get("port")}`))
        })
    }
}
