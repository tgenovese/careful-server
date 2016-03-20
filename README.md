# careful-server

Backend server for the "Careful" application, built with [Sails](http://sailsjs.org).

Also used during development:
- [Chai](http://chaijs.com) for the test assertions
- [Mocha](http://mochajs.org) as the test framework
- [Istanbul](https://github.com/gotwarlost/istanbul) for code coverage

## Get Started

Install the dependencies:

```bash
npm install
```

Copy the local configuration file sample and configure the ```carefulDb``` database connection (using [PostgreSQL](http://www.postgresql.org/) by default):

```bash
cp config/local.js.sample config/local.js
editor config/local.js
```

Start the backend server:

```bash
npm start
```

Alternatively, watch the source files and restart the backend server on changes:

```bash
npm run dev
```

## Unit Testing

Run the tests once:

```bash
npm test
```

Watch the source and test files and run the tests on changes:

```bash
npm run tdd
```

Generate a code coverage report:

```bash
npm run cover
open coverage/lcov-report/index.html
```
