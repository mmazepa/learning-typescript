var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World!");
    };
    return Greeting;
}());
var message = new Greeting();
message.greet();
