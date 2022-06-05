import { LoaderConfig } from '.';
export default function loadNamespaces(config?: LoaderConfig): Promise<{
    __lang: string;
    __namespaces?: Record<string, object>;
}>;
