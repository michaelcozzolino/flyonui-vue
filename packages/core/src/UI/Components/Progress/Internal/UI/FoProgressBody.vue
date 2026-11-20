<template>
    <div class="progress"
         :class="[orientationClass, shapeClass]"
         role="progressbar"
         aria-label="Progressbar"
         :aria-valuenow="numericValue"
         :aria-valuemin="min"
         :aria-valuemax="max"
    >
        <div class="progress-bar font-normal"
             :class="[colorClass, shapeClass, stripesClass, isAnimated && 'progress-animated']"
             :style="{ [orientation === 'horizontal' ? 'width' : 'height']: percentageValue }"
        >
            <span v-if="typeof value !== 'number' && value.label.position === 'within'"
                  :class="orientation === 'vertical' && '-rotate-90'"
            >
                {{ percentageValue }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Color, ComponentName, Orientation, Shape } from '@/Lib';
import type { ProgressProps }                            from '@/UI/Components';
import {    useFlyonUIVueAppConfig }                     from '@/Lib';
import { useColor }                                      from '@/Lib/UseColor/Internal';
import { useOrientation }                                from '@/Lib/UseOrientation/Internal';
import { useShape }                                      from '@/Lib/UseShape/Internal';
import { useStripes }                                    from '@/Lib/UseStripes/Internal';

interface Props extends ProgressProps {
    numericValue:    number;
    percentageValue: string;
}

const props = withDefaults(defineProps<Props>(), {
    min:         0,
    max:         100,
    orientation: 'horizontal',
    isStriped:   false,
});

const { config } = useFlyonUIVueAppConfig();

const componentName: ComponentName = 'FoProgress';

const [
    colorClass,
    orientationClass,
    shapeClass,
    stripesClass,
] = [
    useColor(config, componentName, (): Color | undefined => props.color),
    useOrientation(componentName, (): Orientation => props.orientation),
    useShape(config, componentName, (): Shape | undefined => props.shape),
    useStripes(componentName, (): boolean => props.isStriped),
];
</script>
