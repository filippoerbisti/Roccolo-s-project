"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
function templateWithHoc(code, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.skipInitialProps, skipInitialProps = _c === void 0 ? false : _c, _d = _b.typescript, typescript = _d === void 0 ? false : _d, _e = _b.pageName, pageName = _e === void 0 ? '__Page_Next_Translate__' : _e, _f = _b.hasLoadLocaleFrom, hasLoadLocaleFrom = _f === void 0 ? false : _f;
    var tokenToReplace = "__CODE_TOKEN_".concat(Date.now().toString(16), "__");
    var codeWithoutComments = code.replace(utils_1.clearCommentsRgx, '');
    var modifiedCode = code.replace(/export +default/g, "const ".concat(pageName, " ="));
    var _g = codeWithoutComments.match(/export +default +(function|class) +([A-Z]\w*)/) || [], componentName = _g[2];
    if (componentName) {
        modifiedCode = modifiedCode.replace(new RegExp("\\W".concat(componentName, "\\.getInitialProps"), 'g'), "".concat(pageName, ".getInitialProps"));
    }
    var template = "\n    import __i18nConfig from '@next-translate-root/i18n'\n    import __appWithI18n from 'next-translate/appWithI18n'\n    ".concat(tokenToReplace, "\n    export default __appWithI18n(__Page_Next_Translate__, {\n      ...__i18nConfig,\n      isLoader: true,\n      skipInitialProps: ").concat(skipInitialProps, ",\n      ").concat((0, utils_1.overwriteLoadLocales)(hasLoadLocaleFrom), "\n    });\n  ");
    if (typescript)
        template = template.replace(/\n/g, '\n// @ts-ignore\n');
    return template.replace(tokenToReplace, function () {
        return "\n".concat(modifiedCode, "\n");
    });
}
exports.default = templateWithHoc;
