

var faker = require("faker");

var randomName = faker.name.firstName();
var randomEmail = faker.internet.email();
var randomCard = faker.helpers.createCard();

console.log(randomCard);