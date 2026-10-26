import type { CheckboxProps, FoCheckbox } from 'flyonui-vue';
import type * as React                    from 'react';

type VueCheckboxProps = InstanceType<typeof FoCheckbox>['$props'];
type CheckboxUpdateEvent = CustomEvent<Parameters<NonNullable<VueCheckboxProps['onUpdate:modelValue']>>>;

export interface CheckboxElement extends HTMLElement {
    modelValue: VueCheckboxProps['modelValue'];
}

declare module 'react' {
    // eslint-disable-next-line ts/no-namespace -- React JSX augmentation requires this namespace.
    namespace JSX {
        interface IntrinsicElements {
            'fo-checkbox': React.ClassAttributes<CheckboxElement>
                & React.HTMLAttributes<CheckboxElement>
                & {
                    'model-value':         VueCheckboxProps['modelValue'];
                    'onupdate:modelValue': (event: CheckboxUpdateEvent) => void;
                } & CheckboxProps;
        }
    }
}
