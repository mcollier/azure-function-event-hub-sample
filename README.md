# Azure Functions and Event Hubs SDK Sample

## Steps
1. Open solution in dev container.
1. Deploy the Azure resources specified in [main.bicep](./infra/main.bicep).  This will create a new resource group and two Event Hub namespaces, and an event hub named 'orders' in each namespace.
    - Use the [./infra/deploy.sh](./infra/deploy.sh) to provision the Azure resources.
1. Copy the **RootManageSharedAccessKey** from the Event Hub namespace in East US.  
1. Paste the connection string into the _eastUSEventHubConnectionString_ variable at the top of the [test.http](/test.http) file.
1. Copy the **RootManageSharedAccessKey** from the Event Hub namespace in West Europe.
1.  Paste the connection string into the westEuropeEventHubConnectionString variable at the top of the [test.http](/test.http) file.
1. Start the local function app using the `func host start` command.
1. Using the [test.http](/test.http) file, issue requests against the old SDK and new SDK (notes are in the test.http to indicate which request targets which SDK).