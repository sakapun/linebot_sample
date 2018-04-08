const fs = require("fs");
const request = require("request");
require("dotenv").config({path: "../.env"});

console.log(process.env.HOGE);

const imageStream = fs.createReadStream("icon_03.png");

const unsplashit = request("https://source.unsplash.com/1600x900/?nature,water");

imageStream.on("end", () => {
    console.log("unsplashit")
})

const hoge = fs.createWriteStream("test.png");

unsplashit.pipe(hoge);