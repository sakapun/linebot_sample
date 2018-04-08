require("dotenv").config({path: "../.env"});

const aws = require("aws-sdk");
// var inspect = require('util').inspect;

// console.log(aws.config);
const s3 = new aws.S3();

// Define s3-upload-stream with S3 credentials.
const s3Stream = require('s3-upload-stream')(s3);

// Handle uploading file to Amazon S3.
// Uses the multipart file upload API.
function uploadS3 (readStream, key, callback) {
    var upload = s3Stream.upload({
        Bucket: 'aws-nodejs-ecma-script-d-serverlessdeploymentbuck-18q97jmjxx8rb',
        Key: key,
        ACL: "public-read",
        ContentType: "image/png"
    });

    // Handle errors.
    upload.on('error', function (err) {
        callback(err);
    });

    // Handle progress.
    upload.on('part', function (details) {
        // console.log(inspect(details));
    });

    // Handle upload completion.
    upload.on('uploaded', function (details) {
        callback(details);
    });

    // Pipe the Readable stream to the s3-upload-stream module.
    readStream.pipe(upload);
}

module.exports.uploadS3 = uploadS3;