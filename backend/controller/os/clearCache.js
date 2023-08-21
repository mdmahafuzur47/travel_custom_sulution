const fs = require("fs");
const path = require("path");

const pdfPath = path.join(__dirname, "../../GenaretePDF");
const tempPath = path.join(__dirname, "../../upload/temp");

function clearCache(req, res, next) {
  try {
    deleteFilesInFolder(pdfPath, (name) => path.extname(name) === ".pdf");
    deleteFilesInFolder(tempPath);

    res.json({ success: true });
  } catch (error) {
    next(error);
  }
}

function deleteFilesInFolder(folderPath, check = () => true) {
  const items = fs.readdirSync(folderPath);

  items.forEach((item) => {
    const itemPath = path.join(folderPath, item);
    const stats = fs.statSync(itemPath);

    if ((stats.isFile(), check(item))) {
      fs.unlinkSync(itemPath);
    }
  });
}

module.exports = clearCache;
