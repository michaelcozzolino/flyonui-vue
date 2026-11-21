<template>
    <div class="progress-step"
         :class="colorClass"
         role="progressbar"
         aria-label="Progressbar"
         :aria-valuenow="value"
         aria-valuemin="0"
         aria-valuemax="100"
    />
</template>

<script setup lang="ts">
import type { Color, Colorable, ComponentName } from '@/Lib';
import { computed }                             from 'vue';
import {  useFlyonUIVueAppConfig }              from '@/Lib';
import { useColor }                             from '@/Lib/UseColor/Internal';
import { useFlyonUIVueAppConfigProperty }       from '@/Lib/UseFlyonUIVueAppConfig/Internal';

interface Props extends Colorable {
    value:      number;
    isComplete: boolean;
}

const props = defineProps<Props>();

const { config } = useFlyonUIVueAppConfig();

const componentName: ComponentName = 'FoProgressStep';

const colorClass = computed((): string => {
    return props.isComplete
        ? useColor(config, componentName, (): Color | undefined => props.color).value
        : {
                neutral:   'bg-neutral/10',
                primary:   'bg-primary/10',
                secondary: 'bg-secondary/10',
                accent:    'bg-accent/10',
                info:      'bg-info/10',
                success:   'bg-success/10',
                warning:   'bg-warning/10',
                error:     'bg-error/10',
            }[useFlyonUIVueAppConfigProperty(config, componentName, 'color', props.color).value];
});
</script>
