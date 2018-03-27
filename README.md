# Jamie Pittak's Doctor Lookup
#### Week 12 project for Epicodus

### By Jamie Pittak

## Description
This webpage is designed for users to enter a medical issue they are experiencing (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors in thier city who can treat their medical issue. This application was built for week twelve "Javascript-Asychrony and APIs in Javascript" of Epicodus.

## Setup
1. Clone this repository
2. go to https://developer.betterdoctor.com/ and login or create an account to access you API Key
3. Once you have obtained you API key, open the project in an editor of your choosing
4. Create a .env file in the root of the project with exports.apiKey=["Your API key goes here"] then save
5. You can now close your editor and type npm install in your terminal
6. After npm install is finished, type npm run start in your terminal and the application will launch
7. If your API request is not successful and receive an "Origin is not allowed by Access-Control-Allow-Origin" error in your console, try installing the Allow-Control-Allow-Origin: * Chrome extension.
8. Once installed repeat step 6

## Specifications
1. Take in user's medical issue
2. Take in a doctors name
3. Take in the users location
4. Return a list of doctors matching the search requirements
5. If no doctor matches search criteria the user will receive a notification that states no doctors meet the criteria they have provided
6. If the API call results in an error the application will return a notification that states what the error is.

## Technologies Used
* Javascript
* jQuery
* betterdoctor API
* Karma
* Jasmine
* Webpack
* CSS
* Bootstrap

## Legal
Copyright (c) 2018 Jamie Laurelann Pittak
