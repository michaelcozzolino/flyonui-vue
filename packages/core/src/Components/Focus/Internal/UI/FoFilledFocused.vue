<template>
    <span v-if="filledFocusedClass !== undefined"
          :class="filledFocusedClass"
    />
</template>

<script setup lang="ts">
import type { LabelType }                 from '@/Components/Label';
import type { LabellableTypeElementName } from '@/Shared/Types';
import { computed }                       from 'vue';

interface Props {
    labelType?:  LabelType;
    elementName: LabellableTypeElementName;
}

const props = defineProps<Props>();

const filledFocusedClass = computed((): string | undefined => {
    if (props.labelType !== 'filled') {
        return undefined;
    }

    const classes: Record<LabellableTypeElementName, string> = {
        'input-text': 'input-filled-focused',
        'select':     'select-filled-focused',
    };

    return classes[props.elementName];
});
</script>
