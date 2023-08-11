const Schema = require('../database/schema');
const Model = require('../database/Model');

const AdminSchema = new Schema({
    username:{
        type:'TEXT(255)',
        req:true,
    },
    email:{
        type:'TEXT(255)',
        req:true,
    },
    phone:{
        type:'TEXT(255)',
        req:true,
    },
    photo:{
        type:'TEXT(255)',
        req:false
    },
    role:{
        type:'TEXT(255)',
        req:false
    },
    password:{
        type:'TEXT(255)',
        req:true
    },
    status:{
        type:"INT(255)",
        req:true,
    }
});

const Admin = new Model(AdminSchema,"admin")

module.exports = Admin;