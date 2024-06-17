import { Sequelize } from 'sequelize'

export const sequeli = new Sequelize('facebook_duplicate', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequeli.authenticate().then(() => { console.log('SEQUELIZE CONNECTED SUCCESSFULLY TO DATABASE!'); }).catch(() => { console.log('SEQUELIZE FAILED TO CONNECT TO DATABASE!'); })