const { EventHubProducerClient } = require("@azure/event-hubs");

// Load the .env file if it exists
require("dotenv").config();

// Define connection string and related Event Hubs entity name here
const eventHubConnectionString = process.env["EVENTHUB_CONNECTION_STRING"] || "";
const eventHubName = process.env["EVENTHUB_NAME"] || "";

async function main() {
    // console.log(eventHubConnectionString);
    // console.log(eventHubName);

    const producerClient = new EventHubProducerClient(eventHubConnectionString, eventHubName);

    await producerClient.getEventHubProperties()
        .then((res) => {
            console.log("All good!");
        }).catch((error) => {
            console.log.error(error);
        })

    await producerClient.close();

    console.log("Done!");
}

main().catch((err) => {
    console.log("Error occurred: ", err);
});
