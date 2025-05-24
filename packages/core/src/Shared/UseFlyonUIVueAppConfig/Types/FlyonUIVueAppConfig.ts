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
import type { Direction }                                         from '@/Shared/UseDirection';
import type { Orientation }                                       from '@/Shared/UseOrientation';
import type { Preset }                                            from '@/Shared/UsePreset';
import type { Shape }                                             from '@/Shared/UseShape';
import type { SizeWithout2XL }                                    from '@/Shared/UseSize';
import type { HorizontalPosition }                                from '@/Shared/Utils';
import type { ConfigurableComponentName, PickIfExists, Prettify } from '@/Shared/Utils/Internal';

type LabelTypeConfig = Exclude<LabelType, 'inline'>;
type ShapeConfig = Extract<Shape, 'rounded' | 'pilled'>;

export interface FlyonUIVueAppDefaultConfig {
    global:      FlyonUIVueAppGlobalConfig;
    components?: FlyonUIVueAppComponentsConfig;
}

export interface FlyonUIVueAppGlobalConfig {
    color:              Color;
    // todo
    // textColor:          Color | undefined;
    direction:          Direction;
    horizontalPosition: HorizontalPosition;
    labelType:          LabelTypeConfig;
    orientation:        Orientation;
    preset:             Preset;
    shape:              ShapeConfig;
    size:               SizeWithout2XL;
}

// todo: temporary
type ConfigurableProps<Props extends object> = Prettify<PickIfExists<Props, 'color' | 'preset' | 'shape' | 'size'>>;

export interface ConfigurableComponentProps {
    FoBadge:     ConfigurableProps<BadgeProps>;
    FoButton:    ConfigurableProps<ButtonProps>;
    FoCheckbox:  ConfigurableProps<CheckboxProps>;
    FoIcon:      ConfigurableProps<IconProps>;
    FoInputText: ConfigurableProps<InputTextProps> & { horizontalPosition: HorizontalPosition }; // todo: this must be renamed
    FoLink:      ConfigurableProps<LinkProps>;
    FoLoading:   ConfigurableProps<LoadingProps>;
    FoMenu:      ConfigurableProps<MenuProps>;
    FoRadio:     ConfigurableProps<ButtonProps>; // todo: temporary
    FoSelect:    ConfigurableProps<SelectProps>;
    FoTextarea:  ConfigurableProps<TextareaProps>;
    FoTooltip:   ConfigurableProps<TooltipProps>;
}

export type FlyonUIVueAppComponentsConfig = {
    [K in ConfigurableComponentName]: Partial<ConfigurableComponentProps[K]>;
};

export type FlyonUIVueAppConfig = Partial<{
    global:     Partial<FlyonUIVueAppGlobalConfig>;
    components: Partial<FlyonUIVueAppComponentsConfig>;
}>;
