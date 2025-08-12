import type { ConfigurableComponentProps } from '@/Shared/UseFlyonUIVueAppConfig';

type NonConfigurableComponentName = 'FoJoin'
    | 'FoCheckboxGroup'
    | 'FoDatalist'
    | 'FoLabel'
    | 'FoListGroup'
    | 'FoListGroupItem'
    | 'FoLoadingButton'
    | 'FoMenuItem'
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
