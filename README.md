# configuration.reader

> configuration.reader for simple reading of configuration file for consumption in JavaScript files.

## usage
The module exports a method that returns a configuration object promise.

```javascript
const config = require('@pentia/configuration-reader')('./solution-config.json');

config.then( configurationObject => {
    // do something with configurationObject once promise resolves.
});
```