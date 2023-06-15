const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with stubbed return value and console.log with correct values', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(5);
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(10);

    expect(calculateNumberStub.calledOnceWithExactly(10, 0.3)).to.be.true;
    expect(consoleLogSpy.calledWithExactly('Payment request for 10')).to.be.true;
    expect(consoleLogSpy.calledWithExactly('Amount after calculation: 5')).to.be.true;

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
