const BalanceRequests = require("../../model/BalanceReq");
const Agent = require("../../model/Agent");

async function getBalanceRequests(req, res, next) {
  try {
    const [balRes] = await BalanceRequests.findAll();
    const [agtRes] = await Agent.findAll();

    const requests = balRes.map((bal) => ({
      ...bal,
      agent: agtRes.find((agt) => agt.id === bal.agent_id),
    }));

    res.json(requests);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = getBalanceRequests;
