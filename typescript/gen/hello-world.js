/**
* Created by peter on 18/09/2014.
*/
var HelloWorldModule;
(function (HelloWorldModule) {
    var HelloWorld = (function () {
        function HelloWorld() {
        }
        HelloWorld.prototype.doTypescriptThing = function () {
            var a = 0;
            var b = 1;

            var el = document.getElementById("div1");

            while (a < 100) {
                console.log(a, b);

                el.innerHTML += a;
                el.innerHTML += ", ";
                el.innerHTML += b;
                el.innerHTML += ", ";

                a += b;
                b += a;
            }

            return [a, b];
        };
        return HelloWorld;
    })();
    HelloWorldModule.HelloWorld = HelloWorld;
})(HelloWorldModule || (HelloWorldModule = {}));
//# sourceMappingURL=hello-world.js.map
