const schedule = require("node-schedule");
const fs = require("fs");
const path = require("path");

function removeTempEveryDay() {
  const removeInterval = 1000 * 60 * 60 * 24;

  schedule.scheduleJob("0 0 0 * * *", () => {
    const expire = new Date().getTime() - removeInterval;
    const root = path.join(__dirname, "../../upload/temp");

    const files = fs.readdirSync(root);

    files.forEach((file) => {
      if (expire >= stat.ctime.getTime()) {
        const filePath = path.join(root, file);
        fs.unlinkSync(filePath);
      }
    });
  });
}

module.exports = removeTempEveryDay;
