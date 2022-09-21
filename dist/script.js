"use strict";

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.number.is-integer.js");

require("core-js/modules/es.number.constructor.js");

require("core-js/modules/es.array.of.js");

var arrowFun = function arrowFun(a) {
  console.log(a);
}; // 插入变量绑定的值


var name = "Bob",
    time = "today";
"Hello ".concat(name, ", how are you ").concat(time, "?");
[1, 2, 3].includes(1);
Number.isInteger(Infinity);
Array.of(1, 2, 3);