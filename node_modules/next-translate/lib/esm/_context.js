import { createContext } from 'react';
export default createContext({
    t: function (k) { return (Array.isArray(k) ? k[0] : k); },
    lang: '',
});
