import * as line from "@line/bot-sdk";

const config = {
    channelAccessToken: process.env.TOKEN,
    channelSecret: process.env.SECRET_KEY
};

const client = new line.Client(config);

exports.handler = function(event, context, callback) {
    const events = JSON.parse(event.body).events;
     events.map(async (ev) => {
         console.log(ev);
         // const afdasidfa = await client.getMessageContent(ev.message.id);
         // // console.log(afdasidfa);
         // afdasidfa.on('data', (data) => {
         //     console.log(data);
         // })

         client.replyMessage(ev.replyToken, {
             "type": "template",
             "altText": "this is a confirm template",
             "template": {
                 "type": "confirm",
                 "text": "Are you sure?",
                 "actions": [
                     {
                         "type": "message",
                         "label": "Yes",
                         "text": "mu"
                     },
                     {
                         "type": "message",
                         "label": "No",
                         "text": "no"
                     }
                 ]
             }
         });
     });



    callback(null, {
        statusCode: 200,
        body: JSON.stringify("hello world", null, 2)
    });
}