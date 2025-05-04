import type { ButtonProps }                                                    from '@/Components/Button';
import type { InputTextProps }                                                 from '@/Components/InputText';
import type { LabelType }                                                      from '@/Components/Label';
import type { HorizontalPosition, Orientation, Preset, Shape, SizeWithout2XL } from '@/Shared/Types';
import type { Color }                                                          from '@/Shared/UseColor';

type LabelTypeConfig = Exclude<LabelType, 'inline'>;
type ShapeConfig = Extract<Shape, 'default' | 'pilled'>;

export interface FlyonUIVueAppDefaultConfig {
    global:      FlyonUIVueAppGlobalConfig;
    components?: FlyonUIVueAppComponentsConfig;
}

export interface FlyonUIVueAppGlobalConfig {
    color:              Color;
    // todo
    // textColor:          Color | undefined;
    direction:          'ltr' | 'rtl';
    horizontalPosition: HorizontalPosition;
    labelType:          LabelTypeConfig;
    orientation:        Orientation;
    preset:             Preset;
    shape:              ShapeConfig;
    size:               SizeWithout2XL;
}

export interface FlyonUIVueAppComponentsConfig {
    FoButton:    Partial<Omit<ButtonProps, 'isDisabled' | 'isActive' | 'to'>>;
    FoInputText: Partial<InputTextConfig>;
}

export type InputTextConfig = Omit<InputTextProps, 'label' | 'icon' | 'placeholder' | 'helperText'> & {
    labelType:          LabelTypeConfig;
    iconPosition:       HorizontalPosition;
    helperTextPosition: HorizontalPosition;
    size:               SizeWithout2XL;
};

export type FlyonUIVueAppConfig = Partial<{
    global:     Partial<FlyonUIVueAppGlobalConfig>;
    components: Partial<FlyonUIVueAppComponentsConfig>;
}>;
