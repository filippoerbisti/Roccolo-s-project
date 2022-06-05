import React from 'react';
import { NextComponentType } from 'next';
export default function withTranslation<P = unknown>(Component: React.ComponentType<P> | NextComponentType<any, any, any>, defaultNS?: string): React.ComponentType<Omit<P, 'i18n'>>;
