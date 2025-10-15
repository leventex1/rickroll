#!/bin/bash

set -e

echo "Installing npm packages..."
npm install

echo "Building project..."
npm run build

echo "Starting preview on the local network..."
npm run preview -- --host --port 5000
