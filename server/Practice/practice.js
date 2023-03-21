const { json } = require("express");
const fs = require('fs');

const bioData = {
    name : "Prem",
    class : "A",
    id : 123
};
// console.log(bioData);
// console.log(bioData.name);

// // converts javascript value to json
// const json_data = JSON.stringify(bioData);
// console.log(json_data);

// // console.log(json_data.name);  -- undefined

// console.log();

const json_data = JSON.stringify(bioData);
fs.writeFile("bio_data.json", json_data, (err)=>{
    console.log("done");
});

fs.readFile("bio_data.json", "utf-8", (err, data)=>{
    console.log(data);
});

