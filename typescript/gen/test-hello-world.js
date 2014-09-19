/// <reference path="tsUnit.ts" />
/// <reference path="hello-world.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SimpleMathTests = (function (_super) {
    __extends(SimpleMathTests, _super);
    function SimpleMathTests() {
        _super.apply(this, arguments);
        this.target = new HelloWorldModule.HelloWorld();
    }
    SimpleMathTests.prototype.doTypescriptThingShouldReturnABigNumber = function () {
        var result = this.target.doTypescriptThing();
        this.isTrue(result[0] > 100);
    };
    return SimpleMathTests;
})(tsUnit.TestClass);

// new instance of tsUnit
var test = new tsUnit.Test();

// add your test class (you can call this multiple times)
test.addTestClass(new SimpleMathTests());

// Use the built in results display
test.showResults(document.getElementById('results'), test.run());
// new instance of tsUnit - pass in modules that contain test classes
//var test = new tsUnit.Test(SimpleMathTests);
// Use the built in results display
//test.showResults(document.getElementById('results'), test.run());
//# sourceMappingURL=test-hello-world.js.map
