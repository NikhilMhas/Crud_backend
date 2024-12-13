import { Sequelize } from 'sequelize';
import { createUserModel } from '../model/userSchema.js';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "postgres",
  logging: false,
});

let userModel=null;

  const connection =async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        userModel=await createUserModel(sequelize);
        await sequelize.sync();
        console.log("Database synced");

      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }
  export { connection, userModel };
