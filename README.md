[![Build Status](https://travis-ci.org/duereg/adverb-where.svg?branch=master)](https://travis-ci.org/duereg/adverb-where)

# Adverb Where?

npm module for checking for adverbs

## Install

```shell
npm install adverb-where
```

## Use

```javascript
var complexity = require('adverb-where');

var problems = complexity('Allegedly, this sentence is terrible.');
// problems -> [{ match: "Allegedly", index: 0, offset: 9 }]
```

## License
MIT
