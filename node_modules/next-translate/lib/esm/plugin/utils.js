var specFileOrFolderRgx = /(__mocks__|__tests__)|(\.(spec|test)\.(tsx|ts|js|jsx)$)/;
export var clearCommentsRgx = /\/\*[\s\S]*?\*\/|\/\/.*/g;
export var defaultLoader = '(l, n) => import(`@next-translate-root/locales/${l}/${n}`).then(m => m.default)';
export function getDefaultAppJs(hasLoadLocaleFrom) {
    return "\n  import i18nConfig from '@next-translate-root/i18n'\n  import appWithI18n from 'next-translate/appWithI18n'\n\n  function MyApp({ Component, pageProps }) {\n    return <Component {...pageProps} />\n  }\n\n  export default appWithI18n(MyApp, {\n    ...i18nConfig,\n    skipInitialProps: true,\n    isLoader: true,\n    ".concat(overwriteLoadLocales(hasLoadLocaleFrom), "\n  })\n");
}
export function overwriteLoadLocales(exist) {
    if (exist)
        return '';
    return "loadLocaleFrom: ".concat(defaultLoader, ",");
}
export function hasExportName(data, name) {
    return Boolean(data.match(new RegExp("export +(const|var|let|async +function|function) +".concat(name))) ||
        data.match(new RegExp("export\\s*\\{[^}]*(?<!\\w)".concat(name, "(?!\\w)[^}]*\\}"), 'm')));
}
export function isPageToIgnore(page) {
    return Boolean(page.startsWith('/api/') ||
        page.startsWith('/api.') ||
        page.startsWith('/_document.') ||
        page.startsWith('_middleware') ||
        page.match(specFileOrFolderRgx));
}
export function hasHOC(rawData) {
    var hasWithTranslationHOC = new RegExp('import *(\\w*) *.*from *.*next-translate\\/withTranslation.*');
    if (!rawData.includes('export default'))
        return false;
    if (hasExportName(rawData, 'getStaticProps') ||
        hasExportName(rawData, 'getServerSideProps') ||
        hasExportName(rawData, 'getStaticPaths')) {
        return false;
    }
    var _a = rawData.match(hasWithTranslationHOC) || [], withTranslationName = _a[1];
    var data = rawData
        .replace(new RegExp("".concat(withTranslationName, "\\(.*\\)")), function (d) {
        return d.replace(new RegExp("(".concat(withTranslationName, "|\\(|\\))"), 'g'), '');
    })
        .replace(clearCommentsRgx, '');
    var exportedNormally = new RegExp("export default (\\(.*\\) *=>|function|class)").test(data);
    if (exportedNormally)
        return false;
    var ref = getRef(data);
    if (ref.includes('('))
        return true;
    return (data.split('\n').filter(function (line) {
        var isRefLine = line.includes(ref) && !/export +default/.test(line);
        var isComp = new RegExp("(function|class) +".concat(ref, "\\W")).test(line);
        var isCompInVar = new RegExp(" *".concat(ref, " += +(function|class) +")).test(line);
        var isArrowFunc = new RegExp(" *".concat(ref, "(: *\\w+ *)? += +\\(.*=>")).test(line);
        var isPotentialHOC = /=.*\(/.test(line);
        return (isRefLine && !isComp && !isCompInVar && !isArrowFunc && isPotentialHOC);
    }).length > 0);
}
function getRef(data) {
    var escapeRegex = function (str) {
        return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    };
    var ref = (data.replace(/ /g, '').match("exportdefault*([^\\n|;]*)") ||
        [])[1];
    var prevRef = (data.match(new RegExp("".concat(escapeRegex(ref), " += +(\\w+)($| |;|\\n)"))) || [])[1];
    return prevRef || ref;
}
