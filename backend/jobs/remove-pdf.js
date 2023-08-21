const schedule = require("node-schedule");
const fs = require("fs");
const path = require("path");

const removeInterval = 1000 * 60 * 60 * 24;

schedule.scheduleJob("0 0 0 * * *", () => {
  const expire = new Date().getTime() - removeInterval;
  const root = path.join(__dirname, "../GenaretePDF");

  const files = fs.readdirSync(root);

  files.forEach((file) => {
    if (path.extname(file) === ".pdf") {
      const filePath = path.join(root, file);
      const stat = fs.statSync(filePath);
      if (expire >= stat.ctime.getTime()) {
        fs.unlinkSync(filePath);
      }
    }
  });
});
