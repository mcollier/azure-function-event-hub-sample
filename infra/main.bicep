targetScope = 'subscription'

@minLength(1)
@maxLength(50)
@description('Name of the the environment which is used to generate a short unique hash used in all resources.')
param name string

@minLength(1)
@description('Primary location for all resources.')
param location string

var abbrs = loadJsonContent('abbreviations.json')
var resourceToken = toLower(uniqueString(subscription().id, name))

resource rg 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: '${abbrs.resourcesResourceGroups}${name}-${location}'
  location: location
}

module resources 'resources.bicep' = {
  name: 'resources-${resourceToken}'
  scope: rg
  params: {
    resourceToken: resourceToken
    eventHubSku: 'Standard'
  }
}

output AZURE_LOCATION string = location
