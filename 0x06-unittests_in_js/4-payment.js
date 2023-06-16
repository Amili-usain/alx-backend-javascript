const Utils = require('./utils.js');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  console.log(`Payment request for ${totalAmount}`);
  const amount = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`Amount after calculation: ${amount}`);
  // Send the payment request to the API...
}

module.exports = sendPaymentRequestToApi;
