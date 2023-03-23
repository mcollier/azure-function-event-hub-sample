const { EventHubProducerClient, EventHubConsumerClient } = require("@azure/event-hubs");

// East US
const eventHubConnectionString = "EVENT HUBS NAMESPACE CONNECTION STRING";

// West Europe
// const eventHubConnectionString = "EVENT HUBS NAMESPACE CONNECTION STRING";

const eventHubName = "orders";

async function main() {
    const producerClient = new EventHubProducerClient(eventHubConnectionString, eventHubName);

    producerClient.getEventHubProperties()
        .then((res) => {
            console.log("All good!");
        }).catch((error) => {
            console.log.error(error);
        })

    producerClient.close();

    console.log("Done!");
}

main().catch((err) => {
    console.log("Error occurred: ", err);
});
