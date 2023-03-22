@description('Specifies the messaging tier for Event Hub Namespace.')
@allowed([
  'Basic'
  'Standard'
])
param eventHubSku string = 'Standard'

@description('Value used in name of Azure resources.')
param resourceToken string

var abbrs = loadJsonContent('abbreviations.json')

var eastUSRegion = 'eastus'
var westEuropeRegion = 'westeurope'

resource eventHubNamespaceWestEurope 'Microsoft.EventHub/namespaces@2021-11-01' = {
  name: '${abbrs.eventHubNamespaces}${resourceToken}-${westEuropeRegion}'
  location: westEuropeRegion
  sku: {
    name: eventHubSku
  }
  properties: {
    isAutoInflateEnabled: false
    maximumThroughputUnits: 0
    zoneRedundant: false
  }

  resource ordersEventHub 'eventhubs' = {
    name: 'orders'
    properties: {
      messageRetentionInDays: 7
      partitionCount: 3
    }
  }
}

resource eventHubNamespaceEastUs 'Microsoft.EventHub/namespaces@2021-11-01' = {
  name: '${abbrs.eventHubNamespaces}${resourceToken}-${eastUSRegion}'
  location: eastUSRegion
  sku: {
    name: eventHubSku
  }
  properties: {
    isAutoInflateEnabled: false
    maximumThroughputUnits: 0
    zoneRedundant: false
  }

  resource ordersEventHub 'eventhubs' = {
    name: 'orders'
    properties: {
      messageRetentionInDays: 7
      partitionCount: 3
    }
  }
}
