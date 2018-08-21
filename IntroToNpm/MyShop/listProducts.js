

var faker = require("faker");

var productList  = faker.commerce.productName();
var productPrice = faker.commerce.price();

    console.log("=============================");
    console.log("========== My Shop ==========");
    console.log("=============================");

for (var i = 0; i <= 10; i++) {
    console.log(faker.commerce.productName() + " - $" + faker.commerce.price());

    // console.log(faker.commerce.productName());
}
