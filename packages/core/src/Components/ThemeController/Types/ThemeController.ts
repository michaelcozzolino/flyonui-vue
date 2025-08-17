import type { UseColorModeOptions } from '@vueuse/core';

export type FlyonUITheme = 'light'
    | 'dark'
    | 'black'
    | 'claude'
    | 'corporate'
    | 'ghibli'
    | 'gourmet'
    | 'luxury'
    | 'mintlify'
    | 'pastel'
    | 'perplexity'
    | 'shadcn'
    | 'slack'
    | 'soft'
    | 'spotify'
    | 'valorant'
    | 'vscode'
    | string;

export type FlyonUIThemeModes = Record<FlyonUITheme, FlyonUITheme>;

export type ThemeControllerProps = Pick<
    UseColorModeOptions<FlyonUITheme>,
    'attribute' | 'initialValue' | 'storageKey'
> & { modes?: FlyonUIThemeModes };
