"use strict";
exports.__esModule = true;
var MyNamespace = require("./MyNamespace");
//import './MyClassPatch';
var myClass = new MyNamespace.MyClass();
myClass.Patch();
