import type { ConfigurableComponentProps } from '@/Configuration/CreateFlyonUIVueApp';

type NonConfigurableComponentName = 'FoLabel' | 'FoStat' | 'FoStatDescription' | 'FoStatTitle' | 'FoStatValue';
export type ConfigurableComponentName = keyof ConfigurableComponentProps;
export type ComponentName = ConfigurableComponentName | NonConfigurableComponentName;
