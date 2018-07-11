exports.handler = async function(event, context, callback) {

    console.log(process.env.CHOME)

    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            fulfillmentText: process.env.HOGE
        })
    });
}
