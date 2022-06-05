"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useTranslation_1 = __importDefault(require("./useTranslation"));
var formatElements_1 = __importDefault(require("./formatElements"));
function Trans(_a) {
    var i18nKey = _a.i18nKey, values = _a.values, components = _a.components, fallback = _a.fallback, defaultTrans = _a.defaultTrans, ns = _a.ns;
    var _b = (0, useTranslation_1.default)(ns), t = _b.t, lang = _b.lang;
    var result = (0, react_1.useMemo)(function () {
        var text = t(i18nKey, values, { fallback: fallback, default: defaultTrans });
        if (!components || components.length === 0)
            return text;
        return (0, formatElements_1.default)(text, components);
    }, [i18nKey, values, components, lang]);
    return result;
}
exports.default = Trans;
