const Schema = require("../database/schema");
const Model = require("../database/Model");

const AgentSchema = new Schema({
  name: {
    type: "TEXT(255)",
    req: true,
  },
  nid_no: {
    type: "VARCHAR(25)",
    req: true,
  },
  email: {
    type: "TEXT(255)",
    req: true,
  },
  phone: {
    type: "TEXT(255)",
    req: true,
  },
  photo: {
    type: "TEXT(255)",
    req: false,
  },
  admin: {
    type: "TEXT(255)",
    req: false,
  },
  password: {
    type: "TEXT(255)",
    req: true,
  },
  status: {
    type: "INT(255)",
    req: true,
  },
  balance: {
    type: "TEXT(255)",
    req: true,
  },
  rate: {
    type: "TEXT(255)",
    req: true,
  },
  session: {
    type: "TEXT(255)",
    req: true,
  },
});

const agent = new Model(AgentSchema, "agent");

module.exports = agent;
