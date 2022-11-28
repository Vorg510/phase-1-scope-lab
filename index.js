// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = 'Paul';

function upperCaseCustomerName() {
  const ret = customerName.toUpperCase();
  customerName = ret;
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer(name){
    leastFavoriteCustomer = name;

}