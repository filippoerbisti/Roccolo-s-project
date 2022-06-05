import { useMemo } from 'react';
import formatElements from './formatElements';
export default function TransText(_a) {
    var text = _a.text, components = _a.components;
    return useMemo(function () {
        return !components || components.length === 0
            ? text
            : formatElements(text, components);
    }, [text, components]);
}
