"use strict";
exports.__esModule = true;
var MyNamespace = require("./MyNamespace");
MyNamespace.MyClass.prototype.Patch = function () {
    console.log('Patched');
};
