import * as line from "@line/bot-sdk";

const config = {
    channelAccessToken: process.env.TOKEN,
    channelSecret: process.env.SECRET_KEY
};

const client = new line.Client(config);

exports.handler = async function(event, context, callback) {
    console.log(event, context);

    callback(null, {
        statusCode: 200,
        body: JSON.stringify("hello world", null, 2)
    });
}