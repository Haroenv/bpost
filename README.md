# bpost

JavaScript API wrapper for bpost track &amp; trace

[![NPM](https://img.shields.io/npm/v/bpost.svg?style=flat-square)](https://www.npmjs.com/package/bpost)
[![David](https://img.shields.io/david/thibmaek/bpost.svg?style=flat-square)](https://david-dm.org/thibmaek/bpost)
[![Travis](https://img.shields.io/travis/thibmaek/bpost/master.svg?style=flat-square)](https://travis-ci.org/thibmaek/bpost)
[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat-square)](https://stackshare.io/thibmaek/bpost)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.carloscuesta.me/)

## Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

	yarn add bpost (--dev)

or npm

	npm install bpost (--save-dev)


If you don't use a package manager, you can [access `bpost` via unpkg (CDN)](https://unpkg.com/bpost/), download the source, or point your package manager to the url.

`bpost` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/09/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `bpost` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/bpost/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/bpost) on your page. The UMD builds make `bpost` available as a `window.bpost` global variable.<sup>*1*</sup>

This module was created using the magnificent [generator-module-boilerplate](https://github.com/duivvv/generator-module-boilerplate).

## Usage

### setup

```js
import bpost from 'bpost';
// or CommonJS: const bpost = require('bpost');

// Setup your package for calling methods on it:
const pkg = bpost(`SOMEIDHERE`);
```

### methods
__bpost(id: String, ?lang: String = `en`)__
> Object: returns all the available methods on bpost package. You should only need this to instantiate your package. Takes an optional second parameter `lang` which is used to return localized values from the API response (this parameter defaults to `en`)

#### events.js
__bpost#droppedOffBySender()__
> Object: returns information when package has been received at source postal point

__bpost#availableForPickup()__
> Boolean: returns true when package is available for pickup

#### getStatus.js
__bpost#getStatus()__
> Object: returns the currently active step

#### homeDeliveryOptions.js
__bpost#availableFrom()__
> Object: returns the earliest time and day that a package can be picked up after absence

__bpost#availableTo()__
> Object: returns the latest time and day that a package can be picked up after absence

__bpost#availableFromTo()__
> String: returns a formatted string stating the period (in days) a package can be picked up after absence
(e.g `"Available from 2016-11-23 to 2016-12-07"`)

__bpost#attemptedDelivery()__
> Object: returns the time and day that delivery was attempted but receiver was absent

__bpost#actualDelivery()__
> Object: returns the time and day when a package was picked up from the postal point, receiving the absently delivered package

#### packageInfo.js
__bpost#getPackageWeight()__
> Number: returns the package weight in grams

__bpost#deliveryMethod()__
> String: returns the requested delivery method
(e.g `"POSTAL_POINT"`)

__bpost#identifier()__
> Number: returns the internal id for package
_❗ this is different from the itemIdentifier param passed to the methods as first argument_

__bpost#hasRetourOptions()__
> Boolean: returns true when package is eligible for retour

__bpost#receiver(formatted: Boolean)__
> Object: returns data for the receiver
> String: returns a formatted string with receiver data
(eg. `"THIBAULT MAEKELBERGH, 8000 BRUGGE, BE"`)

#### postalPointOptions.js
__bpost#sourcePostalPoint()__
> String: returns the English name for the postal point where your package is delivered by the sender

__bpost#destinationPostalPoint()__
> String: returns the English name for the postal point where your package is delivered for the recipient

__bpost#destinationAsAddress()__
> String: returns a formatted string with the complete destination address
(eg. `"Pathoekeweg 73, 8000 Brugge"`)

__bpost#openingHours(day: String)__
> Object: returns opening and closing times on the given day
(eg. `{ open: "07:00", close: "19:00" }`)

__bpost#destinationCoordinate()__
> Object: returns a 2D lat long coordinate of the destination
(eg. `{ "longitude": 3.21387, "latitude": 51.23154, }`)


## Examples

see the [`examples`](example/) folder. A working example is available on [cloud9](https://ide.c9.io/thibmaek_1/bpost).

### Contributing
We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

### License

The code is available under the [MIT](LICENSE) license.

<sup>*1*</sup>: UMD builds are currently broken due to changes needed in either Rollup or Axios. There is an issue for this [here](https://github.com/thibmaek/bpost/issues/28).
