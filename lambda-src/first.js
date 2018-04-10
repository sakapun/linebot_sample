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
         switch (ev.message.type){
             case "image":
                 const streamMedia = await client.getMessageContent(ev.message.id);
                 // console.log(streamMedia);
                 const callbackAfterSaved = (callbackedArg) => {
                     client.replyMessage(ev.replyToken, {
                         type: "text",
                         text: callbackedArg.Location
                     });
                     console.log(callbackedArg);
                 };
                 uploadS3(streamMedia, "hogehoge"+ new Date().getTime() + ".jpg", callbackAfterSaved);
                 break;
             default:
                 client.replyMessage(ev.replyToken, {
                     type: "text",
                     text: "画像ではありません"
                 })
                 break;
         }
         console.log(ev)

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
        body: JSON.stringify("wwww", null, 2)
    });
}