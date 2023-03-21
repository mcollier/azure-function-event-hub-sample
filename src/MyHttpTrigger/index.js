let azureEventHubs = require('azure-event-hubs');

// module.exports = async function (context, req) {
module.exports = (context, req) => {
    context.log('JavaScript HTTP trigger function processed a request.');

    const responseMessage = "Hello, world!";

    let registration = req.body;

    context.log(registration.eventHubConnectionString);
    context.log(registration.eventHubName);

    context.log('validating event hub');
    const eventHubClient = azureEventHubs.EventHubClient.createFromConnectionString(registration.eventHubConnectionString, registration.eventHubName);
    eventHubClient.getHubRuntimeInformation()
        .then((res) => {
            context.log('all good');
        }).catch((error) => {
            context.log.error(error);

            context.res = {
                status: 400,
                body: "Invalid Connection String or Event Hub Name"
            };
            context.done();
        })

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}