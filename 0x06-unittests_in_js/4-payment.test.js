const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
    it("check that Utils.calculateNumber is stubbed", function() {
	const consoleLogSpy = sinon.spy(console, "log");
	const calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(10);
	sendPaymentRequestToApi(100, 20);

	assert(consoleLogSpy.withArgs("The total is: 10").calledOnce);
	assert(calculateNumberStub.withArgs("SUM", 100, 20).calledOnce);
    });
});
