const fs = require("fs");
const path = require("path");

const getAllFiles = function (dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, "/", file));
    }
  });

  return arrayOfFiles;
};

const createBackup = (arrayOfFiles, baseFolderIndex) => {
  arrayOfFiles.forEach((sourceFile) => {
    outputFileName = path.join(
      __dirname,
      "bk",
      sourceFile
        .split(path.sep)
        .slice(baseFolderIndex + 1)
        .join(path.sep)
    );

    fs.mkdirSync(path.dirname(outputFileName), { recursive: true });

    fs.copyFileSync(sourceFile, outputFileName);
  });
  console.log("Your original files are now safely on the backup folder!");
};

const getBaseFolderIndex = (file) => {
  const baseFolderIndex = file.split(path.sep).findIndex((subFolder) => {
    return subFolder == "Sound";
  });

  return baseFolderIndex;
};

const allFilePaths = getAllFiles(path.join(".", "Sound"));

const baseFolderIndex = getBaseFolderIndex(allFilePaths[0]);

if (!fs.existsSync("bk")) {
  createBackup(allFilePaths, baseFolderIndex);
}

allFilePaths.forEach((file) => {
  if (path.basename(file) === "eGem.wav") return;
  fs.copyFileSync("empty.wav", file);
});
