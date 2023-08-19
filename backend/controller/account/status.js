const LOI = require("../../model/LOI");

async function getStatus(req, res, next) {
  try {
    const [[{ submitToday }]] = await LOI.RayQuery(
      `SELECT COUNT(*) AS submitToday FROM loi_data WHERE DATE(createdAt) = CURDATE()`
    );

    const [[{ confirmToday }]] = await LOI.RayQuery(
      `SELECT COUNT(*) AS confirmToday FROM loi_data WHERE DATE(updateAt) = CURDATE() AND status='approved'`
    );

    const [[{ totalTask }]] = await LOI.RayQuery(
      `SELECT COUNT(*) AS totalTask FROM loi_data WHERE status='pending';`
    );

    const [[{ totalCancel }]] = await LOI.RayQuery(
      `SELECT COUNT(*) AS totalCancel FROM loi_data WHERE status='cancel';`
    );

    const [[{ totalApproved }]] = await LOI.RayQuery(
      `SELECT COUNT(*) AS totalApproved FROM loi_data WHERE status='approved';`
    );

    res.json({
      submitToday,
      confirmToday,
      totalTask,
      totalApproved,
      totalCancel,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

module.exports = getStatus;
