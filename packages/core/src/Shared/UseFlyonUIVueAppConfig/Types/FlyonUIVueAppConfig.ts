import type { BadgeProps }                                        from '@/Components/Badge';
import type { ButtonProps }                                       from '@/Components/Button';
import type { CheckboxProps }                                     from '@/Components/Checkbox';
import type { IconProps }                                         from '@/Components/Icon';
import type { InputTextProps }                                    from '@/Components/InputText';
import type { LabelType }                                         from '@/Components/Label';
import type { LinkProps }                                         from '@/Components/Link';
import type { LoadingProps }                                      from '@/Components/Loading';
import type { MenuProps }                                         from '@/Components/Menu';
import type { SelectProps }                                       from '@/Components/Select';
import type { TextareaProps }                                     from '@/Components/Textarea';
import type { TooltipProps }                                      from '@/Components/Tooltip';
import type { Color }                                             from '@/Shared/UseColor';
import type { Preset }                                            from '@/Shared/UsePreset';
import type { Shape }                                             from '@/Shared/UseShape';
import type { Size }                                              from '@/Shared/UseSize';
import type { Direction, HorizontalPosition }                     from '@/Shared/Utils';
import type { ConfigurableComponentName, PickIfExists, Prettify } from '@/Shared/Utils/Internal';

export interface FlyonUIVueAppDefaultConfig {
    global:      FlyonUIVueAppGlobalConfig;
    components?: FlyonUIVueAppComponentsConfig;
}

export type GlobalLabelType = Exclude<LabelType, 'inline'>;
export type GlobalPresetType = Exclude<Preset, 'gradient' | 'text'>;
export type GlobalShapeType = Extract<Shape, 'rounded' | 'pilled'>;

interface LabelTypeComponentConfig {
    labelType?: GlobalLabelType;
}

interface HorizontalIconPositionConfig {
    icon: HorizontalPosition;
}

interface HorizontalHelperTextPositionConfig {
    helperText: HorizontalPosition;
}

type HorizontalPositionGlobalConfig = HorizontalIconPositionConfig & HorizontalHelperTextPositionConfig;

interface HorizontalPositionComponentConfig<T> {
    horizontalPosition?: Prettify<Partial<T>>;
}

export interface FlyonUIVueAppGlobalConfig {
    color:              Color;
    // todo
    // textColor:          Color | undefined;
    direction:          Direction;
    horizontalPosition: HorizontalPositionGlobalConfig;
    labelType:          GlobalLabelType;
    preset:             GlobalPresetType;
    shape:              GlobalShapeType;
    size:               Size;
}

type ConfigurableProps<MaybeProps extends object> = Prettify<
    PickIfExists<MaybeProps, 'color' | 'horizontalPosition' | 'labelType' | 'preset' | 'shape' | 'size'>
>;

export interface ConfigurableComponentProps {
    FoBadge:     ConfigurableProps<BadgeProps & HorizontalPositionComponentConfig<HorizontalIconPositionConfig>>;
    FoButton:    ConfigurableProps<ButtonProps & HorizontalPositionComponentConfig<HorizontalIconPositionConfig>>;
    FoCheckbox:  ConfigurableProps<CheckboxProps>;
    FoIcon:      ConfigurableProps<IconProps>;
    FoInputText: ConfigurableProps<
        InputTextProps
        & HorizontalPositionComponentConfig<HorizontalPositionGlobalConfig>
        & LabelTypeComponentConfig
    >;
    FoLink:     ConfigurableProps<LinkProps>;
    FoLoading:  ConfigurableProps<LoadingProps>;
    FoMenu:     ConfigurableProps<MenuProps>;
    FoRadio:    ConfigurableProps<ButtonProps>; // todo: temporary
    FoSelect:   ConfigurableProps<SelectProps> & LabelTypeComponentConfig;
    FoTextarea: ConfigurableProps<
        TextareaProps
        & HorizontalPositionComponentConfig<HorizontalPositionGlobalConfig>
        & LabelTypeComponentConfig
    >;
    FoTooltip: ConfigurableProps<TooltipProps>;
}

export type FlyonUIVueAppComponentsConfig = {
    [K in ConfigurableComponentName]: Partial<ConfigurableComponentProps[K]>;
};

export type FlyonUIVueAppConfig = Partial<{
    global:     Partial<FlyonUIVueAppGlobalConfig>;
    components: Partial<FlyonUIVueAppComponentsConfig>;
}>;
