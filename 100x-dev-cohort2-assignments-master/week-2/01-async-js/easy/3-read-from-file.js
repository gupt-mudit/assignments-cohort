const fs = require('fs');


const readFileAndPrint = (filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log('File contents:', data);
      
     
      
    }
  });
};
const filePath = './file.txt';


readFileAndPrint(filePath);
const content = 'Hello, this is the content to be written to the file.';
fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('File has been written successfully.');
    }
  });
readFileAndPrint(filePath);