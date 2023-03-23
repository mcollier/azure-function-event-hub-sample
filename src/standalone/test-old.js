let azureEventHubs = require('azure-event-hubs');

// East US
const eventHubConnectionString = "EVENT HUBS NAMESPACE CONNECTION STRING";

// West Europe
//const eventHubConnectionString = "EVENT HUBS NAMESPACE CONNECTION STRING";

const eventHubName = "orders";

async function main() {
    const eventHubClient = azureEventHubs.EventHubClient.createFromConnectionString(eventHubConnectionString, eventHubName);

    eventHubClient.getHubRuntimeInformation()
        .then((res) => {
            console.log("All good!");
        }).catch((error) => {
            console.log(error);
        })

    console.log("Done!");
}

main().catch((err) => {
    console.log("Error occurred: ", err);
});
