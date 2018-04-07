import * as line from "@line/bot-sdk";

const config = {
    channelAccessToken: process.env.TOKEN,
    channelSecret: process.env.SECRET_KEY
};

const client = new line.Client(config);

exports.handler = function(event, context, callback) {
    const events = JSON.parse(event.body).events;
    events.map(ev => {
        console.log(ev.replyToken);
        client.replyMessage(ev.replyToken, {
            type: "text",
            text: "this is reply"
        });
    });



    callback(null, {
        statusCode: 200,
        body: JSON.stringify("hello world", null, 2)
    });
}