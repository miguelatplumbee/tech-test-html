/// <reference path="tsUnit.ts" />
/// <reference path="hello-world.ts"/>

class SimpleMathTests extends tsUnit.TestClass {

    private target = new HelloWorldModule.HelloWorld();

    doTypescriptThingShouldReturnABigNumber() {
        var result = this.target.doTypescriptThing();
        this.isTrue(result[0] > 100);
    }

}


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