# DEPRECATED: Please use [npm-check-updates](https://github.com/tjunnone/npm-check-updates)

npm-check-updates supports bower as of v2.3.0. It has many useful features and is well-maintained.

```sh
$ npm install -g npm-check-updates
$ npm-check-updates --packageManager bower   # or 'ncu -m bower' for short
```

# bower-update

[![Build Status](https://travis-ci.org/sapegin/bower-update.svg)](https://travis-ci.org/sapegin/bower-update)

Updates Bower project’s components to the really latest versions, no matter what `bower.json` requires.

For example if your `bower.json` requires jQuery `~2.0.0` standard `bower update` command will install 2.0.9 but not 2.1.0. `bower-update` will install 2.1.0, 3.0.0, etc.

![](http://wow.sapegin.me/image/24132B3P3M2D/Image%202014-07-10%20at%2012.34.39%20%D0%BF%D0%BE%D1%81%D0%BB%D0%B5%20%D0%BF%D0%BE%D0%BB%D1%83%D0%B4%D0%BD%D1%8F.png)

## Installation

```
npm install -g bower-update
```

## Usage

Just `cd` to your project’s root folder (where your `bower.json` is located) and run:

```
bower-update [--non-interactive]
```

### Options

#### non-interactive

bower-update will not ask you before updating any components.


## Changelog

The changelog can be found in the [Changelog.md](Changelog.md) file.

---

## License

The MIT License, see the included [License.md](License.md) file.
