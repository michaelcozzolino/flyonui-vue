import type { UseColorModeOptions } from '@vueuse/core';

export type FlyonUITheme = 'light' | 'dark' | 'gourmet' | 'corporate' | 'luxury' | 'soft' | string;

export type FlyonUIThemeModes = Record<FlyonUITheme, FlyonUITheme>;

export type ThemeControllerProps = Pick<
    UseColorModeOptions<FlyonUITheme>,
    'attribute' | 'initialValue' | 'storageKey'
> & { modes?: FlyonUIThemeModes };
