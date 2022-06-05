import { useMemo } from 'react';
import useTranslation from './useTranslation';
import formatElements from './formatElements';
export default function Trans(_a) {
    var i18nKey = _a.i18nKey, values = _a.values, components = _a.components, fallback = _a.fallback, defaultTrans = _a.defaultTrans, ns = _a.ns;
    var _b = useTranslation(ns), t = _b.t, lang = _b.lang;
    var result = useMemo(function () {
        var text = t(i18nKey, values, { fallback: fallback, default: defaultTrans });
        if (!components || components.length === 0)
            return text;
        return formatElements(text, components);
    }, [i18nKey, values, components, lang]);
    return result;
}
