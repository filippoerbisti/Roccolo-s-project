"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getConfig() {
    var g = typeof window === 'undefined' ? global : window;
    return g.i18nConfig;
}
exports.default = getConfig;
