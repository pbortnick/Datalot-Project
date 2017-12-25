var goodCustomers = [];
var badCustomers = [];
var goodSale = [];
var badSale = []
var profits;
var saleProfit = 50;
var count = 0;

function randomCustomer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decision() {
  var customer = randomCustomer(1,2);
  if (customer = 1) {
    goodCustomers.push(customer);
  } else {
    badCustomers.push(customer);
  }
  count++
}

function getSale() {
  for (x in goodCustomers) {
    goodCustomers[x] = randomCustomer(1,10)
    if (goodCustomers[x] < 8) {
      goodSale.push(goodCustomers[x]);
    } else {
      badSale.push(goodCustomers[x]);
    }
  }
}

function getProfits() {
  while (count < 100) {
    decision()
  }
  getSale();
  profits = goodSale.length * saleProfit;
  return profits;
}

getProfits();
console.log("$"+profits);
