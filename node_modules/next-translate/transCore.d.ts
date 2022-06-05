import { I18nDictionary, LoaderConfig } from '.';
import { Translate } from './index';
export default function transCore({ config, allNamespaces, pluralRules, lang, }: {
    config: LoaderConfig;
    allNamespaces: Record<string, I18nDictionary>;
    pluralRules: Intl.PluralRules;
    lang: string | undefined;
}): Translate;
