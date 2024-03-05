const fs = require('fs');
let write= async ()=>{
let txt="";
  await new Promise((resolve,reject)=>{
     fs.readFile('./file1.txt','utf-8',(err,data)=>{
        if(err){
            reject(err);
        }
        else{
            resolve(data);
        }
     })
  }).then((data)=>{
    txt=data;
   
  })
  let newtxt=txt.replace(/\s+/g, ' ');
  fs.writeFile('./file1.txt',newtxt,'utf-8',(err)=>{
      if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('File has been written successfully.');
        }
  })
}
write();

