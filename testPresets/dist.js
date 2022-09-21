"use strict";

require("core-js/modules/es.promise.js");

require("core-js/modules/es.promise.finally.js");

const arrowFun = a => {
  console.log(a);
};

Array.from([1, 2, 3]);
Promise.resolve().finally();
