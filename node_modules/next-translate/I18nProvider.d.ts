import React from 'react';
import { I18nProviderProps } from '.';
export declare const InternalContext: React.Context<{
    ns: {};
    config: {};
}>;
export default function I18nProvider({ lang: lng, namespaces, children, config: newConfig, }: I18nProviderProps): JSX.Element;
