import logger from '../libs/logger'
import packageInfo from '../package.json'

export default {
  version: packageInfo.version,
  http: {
    port: 80
  },
  database: {
    name: "db",
    username: "",
    password: "",
    params: {
      dialect: "sqlite",
      storage: "db.sqlite",
      logging: (sql) =>{
          logger.info(`[${new Date()}] ${sql}`)
      },
      define: {
          underscored: true
      }
    }
  },
  jwt: {
    secret: "Nta$K-AP1",
    session: { session: false },
  }
}
