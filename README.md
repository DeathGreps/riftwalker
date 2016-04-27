# Riftwalker

A side project for creating item sets on League of Legends. Look at a demo here: http://riftwalker.herokuapp.com/

#### Requirements

- For testing locally, acquire a developer API key from Riot at https://developer.riotgames.com/ and save the key as JSON format in `api_key.json` in your root project folder as:
``` javascript
{
    "key": "YOUR-API-KEY"
}
```

- Install the needed Node modules globally. For Riftwalker, we use:

1.  [**Express**](http://expressjs.com/en/index.html) in the backend to separate Riot's API calls from our own API, which helps hide our API key from the clients. 
2. [**Gulp**](http://gulpjs.com/) for streaming our builds. 
3. [**Browser-sync**](https://www.browsersync.io/) to enable live reloading as we edit our jade/css/js files. 
4. [**Jade**](http://jade-lang.com/command-line/) is for our HTML prototyping.
5. [**Sass**](https://www.npmjs.com/package/gulp-sass) for improved CSS that allows variables, nesting, and importing.

Install these with NPM globally first:

``` javascript
npm install -g express gulp  browser-sync jade gulp-sass
```

Then install the packages locally with this, since they're already in the `package.json` file for you:
``` javascript
npm install
```


#### Getting Started

There are two ways to run this app locally.

1. With Node, to simulate a server:
 `node index.js` 

2. And with Gulp, to develop:
 `gulp` which is short for the `gulp serve` task.

Running with Node will run it locally as if it was for production, and the configs are in `config.js` (like if you want to change to a different port for some reason). The `node index.js` command will let you publish this on a remote server like at Heroku or Digital Ocean or AWS. Running with `gulp` is meant for development, with its live reloading as you change files.

#### Resources

The documentation and methods here are very useful to look at how the JSON data is formatted:

https://developer.riotgames.com/api/methods

#### **EXTRA INFO**
Since this public code is not set up to make API calls, change the following line to use your own API key:

``` javascript
// dev/js/championSelectorController.js
...
url: '/api/staticdata/' + DataService.getRegion().host + '/' + DataService.getRegion().region
```

to

``` javascript
// dev/js/championSelectorController.js
...
url: 'https://' + DataService.getRegion().host + '/api/lol/static-data/' + DataService.getRegion().region + '/v1.2/champion?champData=all&api_key=<YOUR API KEY HERE>'
```

This simulates making an API call based on the request template you get at Riot, except that this is done at the client level:

``` javascript
https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=all&api_key=<YOUR API KEY>
```

This is where Express comes in, where we made our own route on the server side, so that it reads `api_key.json` and have the client use a relative link, that only puts the region host and the region name. The server's Express will handle making the "real" api call, with the private API key. You can test this yourself with something like this, when you run with the `node index.js` command rather than gulp:

API Template for *all* champion data:

``` javascript
localhost:8080/api/staticdata/<REGION HOST>/<REGION>
```

Example:

``` javascript
localhost:8080/api/staticdata/na.api.pvp.net/na
```

You can see how this is done [if you look at the routes](https://github.com/DeathGreps/riftwalker/blob/master/routes/staticData.js). At the time of writing, there is one "public" route for getting static data and another "private" one for keeping track of the right API versions that Riot throws out.
