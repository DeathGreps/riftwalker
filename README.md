# Riftwalker

A side project for creating item sets on League of Legends.

#### Requirements

- For testing locally, acquire a developer API key from riot at https://developer.riotgames.com/ and save the key as JSON format in `api_key.json` in your root project folder as:
``` javascript
{
    "key": "YOUR-API-KEY"
}
```

- Install the needed Node modules globally. For riftwalker, we use Express in the backend to separate Riot's API calls from our own API, which helps hide our API from the clients. Gulp for streaming our builds. Browser-sync to enable live reloading as we edit our jade/css/js files. Jade is for our HTML prototyping.
``` javascript
npm install -g express gulp  browser-sync jade
```


#### Getting Started

There are two ways to run this app locally.
1. With Node:
 `node index.js` 

2. And with Gulp:
 `gulp` which is short for the `gulp serve` task.

Running with Node will run it locally as if it was for production, and the configs are in `config.js` (like if you want to change to a different port for some reason). Running with gulp is meant for development, with its live reloading.