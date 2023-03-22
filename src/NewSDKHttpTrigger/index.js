const { EventHubProducerClient, EventHubConsumerClient } = require("@azure/event-hubs");

module.exports = (context, req) => {
    context.log('JavaScript HTTP trigger function processed a request.');
    const responseMessage = "Hello, world!";

    let registration = req.body;

    // context.log(registration.eventHubConnectionString);
    // context.log(registration.eventHubName);

    const producerClient = new EventHubProducerClient(registration.eventHubConnectionString, registration.eventHubName);

    context.log('validating event hub');
    producerClient.getEventHubProperties()
        .then((res) => {
            context.log('all good');
            context.done();
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