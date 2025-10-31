import type { Color, Colorable, ConfigurableComponentName, Preset, Shape, Size } from '@/Lib';
import type { PickIfExists, Prettify }                                           from '@/Lib/Utils/Internal';
import type { Direction, HorizontalPosition }                                    from '@/Types';
import type { BadgeProps, ButtonProps, LabelType, LoadingProps, MenuProps }      from '@/UI/Components';
import type { KeyboardProps, LinkProps }                                         from '@/UI/Content';
import type { IconProps }                                                        from '@/UI/Customization';
import type { CheckboxProps, InputTextProps, SelectProps, TextareaProps }        from '@/UI/Forms';
import type { ModalProps, TooltipProps }                                         from '@/UI/Overlays';
import type { TableProps }                                                       from '@/UI/Tables';

/**
 * todo: docs here should be checked and put in vitepress
 * Default configuration for the library
 */
export interface FlyonUIVueAppDefaultConfig {
    /** Global settings */
    global:      FlyonUIVueAppGlobalConfig;
    /** Per-component overrides */
    components?: FlyonUIVueAppComponentsConfig;
}

export type GlobalLabelType = Exclude<LabelType, 'inline'>;
export type GlobalPresetType = Exclude<Preset, 'gradient' | 'text'>;
export type GlobalShapeType = Extract<Shape, 'rounded' | 'pilled'>;

/** Adds label type support */
interface LabelTypeComponentConfig {
    /** Default label style */
    labelType?: GlobalLabelType;
}

/** Configures icon position */
interface HorizontalIconPositionConfig {
    /** Icon position */
    icon: HorizontalPosition;
}

/** Configures helper text position */
interface HorizontalHelperTextPositionConfig {
    /** Helper text position */
    helperText: HorizontalPosition;
}

type HorizontalPositionGlobalConfig = HorizontalIconPositionConfig & HorizontalHelperTextPositionConfig;

/** Allows overriding element positions */
interface HorizontalPositionComponentConfig<T extends object> {
    /** Positions to override */
    horizontalPosition?: Prettify<Partial<T>>;
}

/** Global defaults applied to all components */
export interface FlyonUIVueAppGlobalConfig {
    /** Theme color */
    color:              Color;
    // todo
    // textColor:          Color | undefined;
    /** Text direction */
    direction:          Direction;
    /** Default positions */
    horizontalPosition: HorizontalPositionGlobalConfig;
    /** Label style */
    labelType:          GlobalLabelType;
    /** Visual preset */
    preset:             GlobalPresetType;
    /** Default component shape */
    shape:              GlobalShapeType;
    /** Base size */
    size:               Size;
}

type ConfigurableProps<MaybeProps extends object> = Prettify<
    PickIfExists<MaybeProps, 'color' | 'horizontalPosition' | 'labelType' | 'preset' | 'shape' | 'size'>
>;

/** Configurable props for each component */
export interface ConfigurableComponentProps {
    /** Badge defaults */
    FoBadge:     ConfigurableProps<BadgeProps & HorizontalPositionComponentConfig<HorizontalIconPositionConfig>>;
    /** Button defaults */
    FoButton:    ConfigurableProps<ButtonProps & HorizontalPositionComponentConfig<HorizontalIconPositionConfig>>;
    /** Checkbox defaults */
    FoCheckbox:  ConfigurableProps<CheckboxProps>;
    FoIcon:      ConfigurableProps<IconProps>;
    FoInputText: ConfigurableProps<
        InputTextProps
        & HorizontalPositionComponentConfig<HorizontalPositionGlobalConfig>
        & LabelTypeComponentConfig
    >;
    FoKeyboard: ConfigurableProps<KeyboardProps>;
    /** Link defaults */
    FoLink:     ConfigurableProps<LinkProps>;
    /** Loading defaults */
    FoLoading:  ConfigurableProps<LoadingProps>;
    /** Menu defaults */
    FoMenu:     ConfigurableProps<MenuProps>;
    FoModal:    ConfigurableProps<Omit<ModalProps, 'backdrop'> & Colorable>;
    /** Radio defaults */
    FoRadio:    ConfigurableProps<ButtonProps>; // todo: temporary
    /** Select defaults */
    FoSelect:   ConfigurableProps<SelectProps> & LabelTypeComponentConfig & HorizontalPositionComponentConfig<HorizontalHelperTextPositionConfig>;
    /** Table defaults */
    FoTable:    ConfigurableProps<TableProps>;
    FoTextarea: ConfigurableProps<
        TextareaProps
        & HorizontalPositionComponentConfig<HorizontalPositionGlobalConfig>
        & LabelTypeComponentConfig
    >;
    /** Tooltip defaults */
    FoTooltip: ConfigurableProps<TooltipProps>;
}

/** Default config for components */
export type FlyonUIVueAppComponentsConfig = {
    [K in ConfigurableComponentName]: Partial<ConfigurableComponentProps[K]>;
};

/** Runtime FlyonUI config */
export type FlyonUIVueAppConfig = Partial<{
    /** Global overrides */
    global:     Partial<FlyonUIVueAppGlobalConfig>;
    /** Component overrides */
    components: Partial<FlyonUIVueAppComponentsConfig>;
}>;
