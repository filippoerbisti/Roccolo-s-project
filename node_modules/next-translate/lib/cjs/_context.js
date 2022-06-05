"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.default = (0, react_1.createContext)({
    t: function (k) { return (Array.isArray(k) ? k[0] : k); },
    lang: '',
});
