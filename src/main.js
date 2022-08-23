/* @ts-check */
const fs = require("fs");

/**
 * @param {string} fileName
 */
function readFileInPromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (error, value) => {
      if (error) {
        reject(error);
      }
      resolve(value);
    });
  });
}

/* node promise api 제공 */
fs.promises.readFile(".gitignore", "utf-8").then((value) => console.log(value));
readFileInPromise(".gitignore", "utf-8").then((value) => console.log(value));
