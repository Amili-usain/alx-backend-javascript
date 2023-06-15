const Utils = require('./utils.js');

function sendPaymentRequestToApi(totalAmount) {
  console.log(`Payment request for ${totalAmount}`);
  const amount = Utils.calculateNumber(totalAmount, 0.3);
  console.log(`Amount after calculation: ${amount}`);
  // Send the payment request to the API...
}

module.exports = sendPaymentRequestToApi;
