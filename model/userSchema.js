import { DataTypes, Sequelize } from "sequelize";

export const createUserModel=async(sequelize)=>{
    
    const user=sequelize.define('user',{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            isLowerCase:true,
            
        },
        designation:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        empId:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
        },
    });
    return user;
}