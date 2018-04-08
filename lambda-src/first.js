import * as line from "@line/bot-sdk";

import {uploadS3} from "../utils/image_uploader";

const config = {
    channelAccessToken: process.env.TOKEN,
    channelSecret: process.env.SECRET_KEY
};

const client = new line.Client(config);

exports.handler = function(event, context, callback) {
    const events = JSON.parse(event.body).events;
     events.map(async (ev) => {
         console.log(ev);
         const afdasidfa = await client.getMessageContent(ev.message.id);
         // console.log(afdasidfa);
         const pugera = (...ev) => {console.log(ev)};
         uploadS3(afdasidfa, "hogehoge"+ new Date().getTime() + ".jpg", pugera);

         // client.replyMessage(ev.replyToken, {
         //     "type": "template",
         //     "altText": "this is a confirm template",
         //     "template": {
         //         "type": "confirm",
         //         "text": "Are you sure?",
         //         "actions": [
         //             {
         //                 "type": "message",
         //                 "label": "Yes",
         //                 "text": "mu"
         //             },
         //             {
         //                 "type": "message",
         //                 "label": "No",
         //                 "text": "no"
         //             }
         //         ]
         //     }
         // });
     });



    callback(null, {
        statusCode: 200,
        body: JSON.stringify(uploadS3, null, 2)
    });
}