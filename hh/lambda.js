let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = function (event, context, callback) {

    cognito_idp.listUsers({
        UserPoolId: process.env.UserPoolId_cognitotesthirudinee,
        Limit: 10
    }, function (error, data) {
        if (error) {
            // implement error handling logic here kkk
            throw error;
        }
        // your logic goes within this block
    });
    ddb.query({
        TableName: 'yyy'
        , ExpressionAttributeValues: { ':jj': 'kk ' }, KeyConditionExpression: 'jjj < :jj', FilterExpression: 'nn n nmn = :jj'
    }).promise()
        .then((data) => {
            //your logic goes here
        })
        .catch((err) => {
            //handle error
        });



    callback(null, { "message": "Successfully executed" });
}