// let os = require('os')
let fs = require('fs')

// console.log(os.platform(),os.homedir(),os.hostname())


// fs.readFile("docs\\testFile.txt",(err,data) => {
// if (err) throw err 
// console.log(data.toString())
// })


// fs.readFile("docs\\testFile.txt","utf-8",(err,data) => {
//     if (err) throw err 
//     console.log(data)
// })


// fs.writeFile("./docs/testFile2.txt","Fine thanks and you ? ",(err) => {
//     if(err) throw err
//     console.log("Done")
// })


// fs.mkdir("./assets",(err)=> {
//     if(err) throw err
//     console.log("Done !")
// })


if(!fs.existsSync("./assets2")){
    fs.mkdir("./assets2",(err)=> {
        if(err) throw err
        console.log("Done create !")
    })

}

if(fs.existsSync("./assets2")){
    fs.rmdir("./assets2",(err)=> {
        if(err) throw err
        console.log("Done delete !")
    })

}

//delete file
if(fs.existsSync("./docs/testFile2.txt")){
    fs.unlink("./docs/testFile2.txt",(err)=> {
        if(err) throw err
        console.log("Done file delete !")
    })

}







