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
  // 50% chance of customer being good
  var customer = randomCustomer(1,2);
  // 1 represents good customer
  if (customer = 1) {
    goodCustomers.push(customer);
  } else {
    badCustomers.push(customer);
  }
  count++
}

function getSale() {
  // pass good customers on to sales team
  for (x in goodCustomers) {
    goodCustomers[x] = randomCustomer(1,10)
    // 80% chance of customer being sold
    if (goodCustomers[x] < 8) {
      goodSale.push(goodCustomers[x]);
    } else {
      badSale.push(goodCustomers[x]);
    }
  }
}

function getProfits() {
  // run decision function multiple times
  while (count < 100) {
    decision()
  }
  getSale();
  // multiply sale amount by amount of good sales to get total profits
  profits = goodSale.length * saleProfit;
  return profits;
}

getProfits();
console.log("profits = $"+profits);
