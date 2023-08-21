const os = require("os");

async function storage(req, res, next) {
  try {
    const totalStorageBytes = os.totalmem();
    const freeStorageBytes = os.freemem();
    const usedStorage = totalStorageBytes - freeStorageBytes;

    const totalStorageGB = ((totalStorageBytes / 1024 ** 3) * 100).toFixed(2);
    const freeStorageGB = ((freeStorageBytes / 1024 ** 3) * 100).toFixed(2);

    const freeStoragePercentage = parseInt(
      (freeStorageBytes / totalStorageBytes) * 100
    );

    const usedStoragePercentage = parseInt(
      (usedStorage / totalStorageBytes) * 100
    );

    res.json({
      freeStoragePercentage,
      usedStoragePercentage,
      totalStorageGB,
      freeStorageGB,
      scale: "Gigabyte",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = storage;
