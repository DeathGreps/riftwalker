# Riftwalker

A side project for creating item sets on League of Legends.

#### Requirements

- For testing locally, acquire a developer API key from Riot at https://developer.riotgames.com/ and save the key as JSON format in `api_key.json` in your root project folder as:
``` javascript
{
    "key": "YOUR-API-KEY"
}
```

- For Riftwalker, some of the prominent packages I used were:

1.  [**Express**](http://expressjs.com/en/index.html) in the backend to separate Riot's API calls from our own API, which helps hide our API key from the clients.
2. [**Angular 2**](https://angular.io/) for the entire architecture of the app.
3. [**Lite Server**](https://www.npmjs.com/package/lite-server) to enable live reloading as we edit our TypeScript files.
4. [**Typescript**](http://www.typescriptlang.org/) is for our JS prototyping, as well as being a common standard in Angular 2.0.

Install the packages locally with this, since they're already in the `package.json` file for you:
``` javascript
npm install
```

#### Getting Started

There are two ways to run this app locally.

1. With Node, to simulate a **production server**:
 `node index.js`

2. With `npm` + `lite-server` + `tsw` (TypeScript watching), **for development**:
 `npm start`

Running with Node will run it locally as if it was for production, and the configs for the server are in `config.js` (like if you want to change to a different port for some reason). The `node index.js` command will let you publish this on a remote server like at Heroku or Digital Ocean or AWS. Running with `npm start` is meant for development, with its live reloading as you change TypeScript files.

#### Resources

The documentation and methods here are very useful to look at how the JSON data is formatted:

https://developer.riotgames.com/api/methods

#### **EXTRA INFO**

Since this public code is not set up to make API calls, change the following similar lines to use your own API key:

``` javascript
url: '/api/staticdata/' + DataService.getRegion().host + '/' + DataService.getRegion().region
```

to

``` javascript
url: 'https://' + DataService.getRegion().host + '/api/lol/static-data/' + DataService.getRegion().region + '/v1.2/champion?champData=all&api_key=<YOUR API KEY HERE>'
```

This simulates making an API call based on the request template you get at Riot, except that this is done at the client level:

``` javascript
https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=all&api_key=<YOUR API KEY>
```

This is where Express comes in, where we made our own route on the server side, so that it reads `api_key.json` and have the client use a relative link, that only puts the region host and the region name. The server's Express will handle making the "real" api call, with the private API key somewhere in the background. You can test this yourself with something like this, when you run with the `node index.js` command:

#### API

##### For getting *all* champion data:

``` javascript
localhost:8080/api/staticdata/<REGION HOST>/<REGION>
```

Example:

``` javascript
localhost:8080/api/staticdata/na.api.pvp.net/na
```
