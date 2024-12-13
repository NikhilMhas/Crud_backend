import { Sequelize } from 'sequelize';
import { createUserModel } from '../model/userSchema.js';

const sequelize = new Sequelize('crud', 'postgres', 'Nik@1234', {
    host: 'localhost',
    dialect: 'postgres'
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
