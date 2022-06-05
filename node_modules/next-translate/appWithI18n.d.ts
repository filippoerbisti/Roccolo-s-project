import React from 'react';
import { LoaderConfig } from '.';
declare type Props = {
    [key: string]: any;
};
interface PartialNextContext {
    res?: any;
    AppTree?: NextComponentType<PartialNextContext>;
    Component?: NextComponentType<PartialNextContext>;
    ctx?: PartialNextContext;
    [key: string]: any;
}
declare type NextComponentType<C extends PartialNextContext = PartialNextContext, IP = {}, P = {}> = React.ComponentType<P> & {
    getInitialProps?(context: C): IP | Promise<IP>;
};
export default function appWithI18n(AppToTranslate: NextComponentType, config?: LoaderConfig): {
    (props: Props): JSX.Element;
    getInitialProps(appCtx: any): Promise<{
        __lang: string;
        __namespaces?: Record<string, object> | undefined;
    }>;
};
export {};
