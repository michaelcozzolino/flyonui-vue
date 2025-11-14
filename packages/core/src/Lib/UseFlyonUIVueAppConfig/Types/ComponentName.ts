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
    | 'FoSocialButton'
    | 'FoStat'
    | 'FoStatDescription'
    | 'FoStats'
    | 'FoStatTitle'
    | 'FoStatValue'
    | 'FoSwap'
    | 'FoTableBody'
    | 'FoTableColumn'
    | 'FoTableHead'
    | 'FoTableHeader'
    | 'FoTableRow';

export type ConfigurableComponentName = keyof ConfigurableComponentProps;
export type ComponentName = ConfigurableComponentName | NonConfigurableComponentName;
