const { flushSync } = require("react-dom");
const fs = require("fs");
const app = require("./app.js");
const arr = [1,2,3,4,5,6,7,8,4];
const http = require("http");
const colors = require("colors");

console.log(app.z());

let res = arr.filter((item)=>{
    return item > 4 && item < 8;
})

console.warn(res);

//fs.writeFileSync("./backend/Temp.txt", "This is just an example file");
console.log(__dirname.blue);

const dataControl = (req, resp) => {
    res.write("This is Haris Rehman Here!");
    res.end();
}

//http.createServer(dataControl).listen(4500);

console.log("Hello".random);

