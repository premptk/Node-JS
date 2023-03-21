const { json } = require("express");

const bioData = {
    name : "Prem",
    class : "A",
    id : 123
};
console.log(bioData);
console.log(bioData.name);

// converts javascript value to json
const json_data = JSON.stringify(bioData);
console.log(json_data);

// console.log(json_data.name);  -- undefined

console.log();