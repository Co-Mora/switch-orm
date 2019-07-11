# Switch ORM

switch-orm is a promise-based Node.js ORM for MySQL

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
npm install switch-orm --save

```

### Installing

<!-- A step by step series of examples that tell you how to get a development env running

Say what the step will be -->

```Node
  require('switch-orm')
```

End with an example of getting some data out of the system or using it for a little demo

<!-- ## Running the ORM

<!-- Explain how to run the automated tests for this system -->

### Break down into end to end ORM

A step by step series of examples that tell you how to get a development env running

```Node
const con = new SwitchOrm(dbName, username, password, {
  dialect:'mysql'
}).exec();
```

### And coding style tests

CREATE a Model to Initial tables in the Database

```
const customer = new Model(tableName).create({
  name: Number,
  email: String,
  transactionID: String,
  addressData: String,
  })
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Nodejs](https://nodejs.org/en/docs) - The runtime javaScript framework used
* [NPM](https://docs.npmjs.com/) - Dependency Management

<!-- ## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us. -->

<!-- ## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). -->

## Authors

* **Omar Ahmed** - *Initial work* - [Co-Mora](https://github.com/Co-Mora)

See also the project repository [Repository](https://github.com/Co-Mora/switch-orm).

## License

This project is licensed under the MIT License

<!-- ## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc -->
