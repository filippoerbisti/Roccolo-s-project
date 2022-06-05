var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export default function wrapTWithDefaultNs(oldT, ns) {
    if (typeof ns !== 'string')
        return oldT;
    var t = function (key, query, options) {
        return oldT(key, query, __assign({ ns: ns }, options));
    };
    return t;
}
