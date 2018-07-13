const csv=require('csvtojson')
const fs=require('fs')
const path = require('path')

const csvFilePath='./customer-data.csv'

//Asynchronous csv to json. This is useful for large sized csv.
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    //Asynchronous write. This is useful for large sized data.
    fs.writeFile(path.join(__dirname,  'output.json'), JSON.stringify(jsonObj, null, 4), ()=>{
        console.log("Done with write operation!");
    })
})
//by using async operations we can continue with rest of the code (if any).
console.log("This is likely to be executed before file write operation completes!");
