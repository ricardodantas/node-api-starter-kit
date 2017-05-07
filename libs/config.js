import _ from 'lodash'

import configDefault from '../config/default'
import configProduction from '../config/production'
import configDevelopment from '../config/development'
import configTest from '../config/test'

module.exports = app =>{
    const env = process.env.NODE_ENV

    switch (env) {
        case 'PRODUCTION':
        case 'production':
          return _.merge(configDefault, configProduction)
        case 'TEST':
        case 'test':
          return _.merge(configDefault, configTest)
        default:
          return _.merge(configDefault, configDevelopment)
    }
}
