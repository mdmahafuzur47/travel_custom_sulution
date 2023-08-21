const checkDiskSpace = require("check-disk-space").default;

async function storage(req, res, next) {
  try {
    const disk = await checkDiskSpace("C:");

    const totalStorage = disk.size;
    const freeStorage = disk.free;
    const usedStorage = totalStorage - freeStorage;

    const totalStorageGB = parseInt(totalStorage / 1024 ** 3);
    const freeStorageGB = parseInt(freeStorage / 1024 ** 3);
    const usedStorageGB = parseInt(usedStorage / 1024 ** 3);

    const freeStoragePercentage = parseInt((freeStorage / totalStorage) * 100);
    const usedStoragePercentage = parseInt((usedStorage / totalStorage) * 100);

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
