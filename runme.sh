#!/bin/bash

#Please run me. I will help you (for now)

sudo rm -rf node_modules
echo "Deleted node modules"
sudo rm -rf .next
echo "Deleted the .next directory"
sudo rm -rf package-lock.json
echo "Deleted paakge-lock.json"
echo "Updating npm globally"
npm update -g npm@latest
echo "Updated npm globally"
echo "Clean cache by force"
sudo npm cache clean --force
echo "Installing npm packages"
sudo npm install
echo "Succesfully installed npm packages"
