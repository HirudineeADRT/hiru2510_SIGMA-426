let AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();
const ddb = new AWS.DynamoDB.DocumentClient();
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = function (event, context, callback) {

    callback(null, { "message": "Successfully executed" });
}