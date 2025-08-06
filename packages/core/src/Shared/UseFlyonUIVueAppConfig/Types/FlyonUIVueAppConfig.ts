import type {
    BadgeProps,
    ButtonProps,
    CheckboxProps,
    IconProps,
    InputTextProps,
    KeyboardProps,
    LabelType,
    LinkProps,
    LoadingProps,
    MenuProps,
    SelectProps,
    TableProps,
    TextareaProps,
    TooltipProps,
} from '@/Components';
import type { Color, ConfigurableComponentName, Direction, HorizontalPosition, Preset, Shape, Size } from '@/Shared';
import type {
    PickIfExists,
    Prettify,
} from '@/Shared/Utils/Internal';

/**
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
interface HorizontalPositionComponentConfig<T> {
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
