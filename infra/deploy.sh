#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

LOCATION=eastus
DEPLOYMENT_NAME="deploy-$(date +%Y%m%d_%H%m%s%N)"

az deployment sub create \
    --name "$DEPLOYMENT_NAME" \
    --location "$LOCATION" \
    --template-file ./main.bicep \
    --parameters name=eventhub101 location="$LOCATION"