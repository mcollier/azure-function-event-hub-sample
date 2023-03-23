# Setup

- Create an Event Hub namespace in East US and West Europe.
- Copy the namespace connection string for the **RootManageSharedAccessKey** for the namespace and paste into the appropriate constants in the _test-old.js_ and _test-new.js_ files.

    ```javascript
    // East US
    const eventHubConnectionString = "EVENT HUBS NAMESPACE CONNECTION STRING";

    // West Europe
    // const eventHubConnectionString = "EVENT HUBS NAMESPACE CONNECTION STRING";
    ```

- Run the `node test-new.js` to demonstrate the use of the new SDK.
- Run the `node test-old.js` to demonstrate the use of the old SDK.