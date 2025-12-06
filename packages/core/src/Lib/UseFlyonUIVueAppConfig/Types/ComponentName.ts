import type { ConfigurableComponentProps } from '@/Lib';

type NonConfigurableComponentName = 'FoJoin'
    | 'FoCheckboxGroup'
    | 'FoDatalist'
    | 'FoDotStyleBadge'
    | 'FoHeading'
    | 'FoLabel'
    | 'FoListGroup'
    | 'FoListGroupItem'
    | 'FoLoadingButton'
    | 'FoMenuItem'
    | 'FoModalTitle'
    | 'FoPagination'
    | 'FoPopover'
    | 'FoSocialButton'
    | 'FoStat'
    | 'FoStatDescription'
    | 'FoStats'
    | 'FoStatTitle'
    | 'FoStatValue'
    | 'FoSwap'
    | 'FoSwitchGroup'
    | 'FoTab'
    | 'FoTableBody'
    | 'FoTableColumn'
    | 'FoTabContent'
    | 'FoTableHead'
    | 'FoTableHeader'
    | 'FoTableRow';

export type ConfigurableComponentName = keyof ConfigurableComponentProps;
export type ComponentName = ConfigurableComponentName | NonConfigurableComponentName;
