let AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();
const ddb = new AWS.DynamoDB.DocumentClient();
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = function (event, context, callback) {

    kinesis.describeStream({
        StreamName: 'HiruTest'
    }).promise()
        .then(data => {
            // your logic goes here
        })
        .catch(err => {
            // error handling goes here
        });



    callback(null, { "message": "Successfully executed" });
}