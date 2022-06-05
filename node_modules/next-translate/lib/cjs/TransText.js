"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var formatElements_1 = __importDefault(require("./formatElements"));
function TransText(_a) {
    var text = _a.text, components = _a.components;
    return (0, react_1.useMemo)(function () {
        return !components || components.length === 0
            ? text
            : (0, formatElements_1.default)(text, components);
    }, [text, components]);
}
exports.default = TransText;
