const csv=require('csvtojson')
const fs=require('fs')
const path = require('path')

const csvFilePath='./customer-data.csv'

//Synchronous conversion from csv to json. This is not a good idea if csv is too large.
const json=csv().fromFile(csvFilePath);

//Synchronous conversion write operation. This is not a good idea if json is large in size.
fs.writeFileSync(path.join(__dirname,  'output.json'), JSON.stringify(jsonObj, null, 4))

console.log("This will be executed after write operation is completed!")