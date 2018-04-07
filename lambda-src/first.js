import * as line from "@line/bot-sdk";

const config = {
    channelAccessToken: process.env.TOKEN,
    channelSecret: process.env.SECRET_KEY
};

const client = new line.Client(config);

exports.handler = async function(event, context, callback) {
    client.pushMessage("1572918706", {
        type: "text",
        text: "hello world!"
    });

    callback(null, {
        statusCode: 200,
        body: JSON.stringify(client, null, 2)
    });
}