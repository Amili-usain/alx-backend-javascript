const { describe, it } = require("mocha");
const sinon = require("sinon");
const Utils = require("./utils");
const assert = require("assert");

const sendPaymentRequestToApi = require("./4-payment");

describe("sendPaymentRequestToApi", function() {
  it("check that Utils.calculateNumber is stubbed", function() {
    const consoleLogStub = sinon.stub(console, "log");
    const calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(10);

    sendPaymentRequestToApi(100, 20);

    assert(
      consoleLogStub.calledWith("Amount after calculation: 10"),
      "console.log should be called with the expected message"
    );
    assert(
      calculateNumberStub.calledWith("SUM", 100, 20),
      "calculateNumber method should be called with correct arguments"
    );
    assert(
      calculateNumberStub.calledOnce,
      "calculateNumber method should be called once"
    );

    // Restore the original functions
    consoleLogStub.restore();
    calculateNumberStub.restore();
  });
});
