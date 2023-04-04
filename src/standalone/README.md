# Setup

- Run `npm install` from the **src** directory.
- Create an Event Hub namespace in East US and West Europe.
- Edit the `sample.env` file, adding the namespace connection string for the **RootManageSharedAccessKey** for the namespace, and the desired event hub (e.g., orders).
- Rename the `sample.env` file to just `.env`.
- Navigate to the **src/standalone** directory, if not already there.
- Run the `node test-new.js` to demonstrate the use of the new SDK.
- Run the `node test-old.js` to demonstrate the use of the old SDK.
