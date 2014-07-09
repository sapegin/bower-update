# bower-update

[![Build Status](https://travis-ci.org/sapegin/bower-update.png)](https://travis-ci.org/sapegin/bower-update)

Updates Bower project’s components to the really latest versions, no matter what `bower.json` requires.

For example if your `bower.json` requires jQuery `~2.0.0` standard `bower update` command will install 2.0.9 but not 2.1.0. `bower-update` will install 2.1.0, 3.0.0, etc.


## Installation

```
npm install -g bower-update
```

## Usage

Just `cd` to your project’s root folder (where your `bower.json` is located) and run:

```
bower-update
bower-update --interactive
```


## Changelog

The changelog can be found in the [Changelog.md](Changelog.md) file.

---

## License

The MIT License, see the included [License.md](License.md) file.
