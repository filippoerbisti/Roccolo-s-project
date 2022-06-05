export default function getConfig() {
    var g = typeof window === 'undefined' ? global : window;
    return g.i18nConfig;
}
