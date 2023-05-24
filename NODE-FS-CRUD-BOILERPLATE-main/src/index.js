const fs = require('fs/promises');

const myFileWriter = async (fileName, fileContent) => {
  try {
    await fs.writeFile(fileName, fileContent);
    console.log(`File ${fileName} create success.`);
  } catch (error) {
    console.error(error);
  }
};

const myFileReader = async (fileName) => {
  try {
    const content = await fs.readFile(fileName, 'utf-8');
    console.log(`File ${fileName} content:`, content);
    return content;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const myFileUpdater = async (fileName, fileContent) => {
  try {
    const existingContent = await myFileReader(fileName);
    const updatedContent = existingContent ? existingContent + fileContent : fileContent;
    await fs.writeFile(fileName, updatedContent);
    console.log(`File ${fileName} update success.`);
  } catch (error) {
    console.error(error);
  }
};

const myFileDeleter = async (fileName) => {
  try {
    await fs.unlink(fileName);
    console.log(`File ${fileName} delete  success`);
  } catch (error) {
    console.error(error);
  }
};

myFileWriter("hello.txt", "HELLO INDIA AND BANGLA");

myFileReader("hello.txt");
myFileUpdater("hello.txt", " HELLO WORLD AGAIN AND AGAIN");
myFileDeleter("hello.txt");

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
