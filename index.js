 const fs = require('fs')

// fs.writeFileSync("test.text","i am shristi")
// fs.appendFileSync("test.text", " i am from web17 batch")
// const data=fs.readFileSync("test.text",{encoding:"utf-8"})
// console.log(data)
// fs.renameSync("test.text","new.text")
// fs.unlinkSync("new.text")

const my = process.argv.slice(2);
console.log('my: ', my);

switch(my[0]){
    case "create":
        fs.writeFileSync(my[1],"i am shristi")
        break
    case "read":
    const data=fs.readFileSync(my[1],{encoding:"utf-8"})
   console.log(data)
   break
   case "append":
    fs.appendFileSync(my[1], " i am from web17 batch")
    break
    case "delete":
        fs.unlinkSync(my[1])
        break
    case "rename":
        fs.renameSync(my[1],"new.text") 
        break  
    default:
        console.log("something went wrong")
}


