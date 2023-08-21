const os = require("os");

async function storage(req, res, next) {
  try {
    const totalStorageBytes = os.totalmem();
    const freeStorageBytes = os.freemem();
    const usedStorage = totalStorageBytes - freeStorageBytes;

    const totalStorageGB = parseInt((totalStorageBytes / 1024 ** 3) * 100);
    const freeStorageGB = parseInt((freeStorageBytes / 1024 ** 3) * 100);
    const usedStorageGB = parseInt((usedStorage / 1024 ** 3) * 100);

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
      usedStorageGB,
      scale: "Gigabyte",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = storage;
