import { Sequelize } from 'sequelize'

export const sequeli = new Sequelize('mysql://ush9th0tuufmkcfd:T9nT9qg5Q6S5pg44wsDG@bsfyamhx90tfrfusdzu6-mysql.services.clever-cloud.com:3306/bsfyamhx90tfrfusdzu6')

sequeli.authenticate().then(() => { console.log('SEQUELIZE CONNECTED SUCCESSFULLY TO DATABASE!'); }).catch(() => { console.log('SEQUELIZE FAILED TO CONNECT TO DATABASE!'); })