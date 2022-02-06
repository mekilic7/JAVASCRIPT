let fs = require('fs')

let readStream = fs.createReadStream("./docs/testFileForStream.txt",{encoding:"utf-8"})
let writeStream = fs.createWriteStream("./docs/testFileForStream3.txt");

// readStream.on("data",(CHUNK)=> {
//     console.log("-----------------NEW CHUNK----------------------")
//     console.log(CHUNK)  
//     writeStream.write(CHUNK)  
// })

readStream.pipe(writeStream)