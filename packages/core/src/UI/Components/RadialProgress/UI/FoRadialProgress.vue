<template>
    <div class="radial-progress"
         :class="background === undefined ? colorClass : backgroundClass"
         :style="`--value:${value};`"
         role="progressbar"
         :aria-valuenow="value"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import type { Color, ComponentName, Preset } from '@/Lib';
import type { RadialProgressProps }          from '@/UI/Components/RadialProgress';
import { useFlyonUIVueAppConfig }            from '@/Lib';
import { useColor }                          from '@/Lib/UseColor/Internal';
import { useFlyonUIVueAppConfigProperty }    from '@/Lib/UseFlyonUIVueAppConfig/Internal';
import { computed }                          from 'vue';

const props = defineProps<RadialProgressProps>();

const componentName: ComponentName = 'FoRadialProgress';
const { config }                   = useFlyonUIVueAppConfig();

const colorClass = useColor(config, componentName, () => props.color);

const backgroundClass = computed((): string => {
    const emptyColorClasses: Record<Color, ''> = {
        neutral:   '',
        primary:   '',
        secondary: '',
        accent:    '',
        info:      '',
        success:   '',
        warning:   '',
        error:     '',
    };

    const colorClasses: Record<Preset, Record<Color, string>> = {
        solid: {
            neutral:   'bg-neutral text-neutral-content border-4 border-transparent',
            primary:   'bg-primary text-primary-content border-4 border-transparent',
            secondary: 'bg-secondary text-secondary-content border-4 border-transparent',
            accent:    'bg-accent text-accent-content border-4 border-transparent',
            info:      'bg-info text-info-content border-4 border-transparent',
            success:   'bg-success text-success-content border-4 border-transparent',
            warning:   'bg-warning text-warning-content border-4 border-transparent',
            error:     'bg-error text-error-content border-4 border-transparent',
        },
        outline: emptyColorClasses,
        dash:    emptyColorClasses,
        soft:    {
            neutral:   'bg-neutral/10 text-neutral border-4 border-transparent',
            primary:   'bg-primary/10 text-primary border-4 border-transparent',
            secondary: 'bg-secondary/10 text-secondary border-4 border-transparent',
            accent:    'bg-accent/10 text-accent border-4 border-transparent',
            info:      'bg-info/10 text-info border-4 border-transparent',
            success:   'bg-success/10 text-success border-4 border-transparent',
            warning:   'bg-warning/10 text-warning border-4 border-transparent',
            error:     'bg-error/10 text-error border-4 border-transparent',
        },
        gradient: emptyColorClasses,
        text:     emptyColorClasses,
        dot:      emptyColorClasses,
    };

    const defaultPreset = useFlyonUIVueAppConfigProperty(config, componentName, 'preset', props.background?.preset).value;
    const defaultColor  = useFlyonUIVueAppConfigProperty(config, componentName, 'color', props.background?.color).value;

    return colorClasses[defaultPreset][defaultColor];
});
</script>
