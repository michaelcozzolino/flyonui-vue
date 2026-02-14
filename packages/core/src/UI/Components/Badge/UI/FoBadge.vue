<template>
    <UseDismissibleTransition>
        <FoBadgeBody v-if="isDismissed === false"
                     v-bind="$props"
                     @dismiss="isDismissed = true; emit('dismiss');"
        >
            <slot />
        </FoBadgeBody>
    </UseDismissibleTransition>
</template>

<script setup lang="ts">
import type { DismissibleEmits }    from '@/Lib/UseDismissibleTransition';
import type { WithDefaultSlot }     from '@/Types';
import type { BadgeProps }          from '@/UI/Components';
import { UseDismissibleTransition } from '@/Lib/UseDismissibleTransition/Internal';
import { FoBadgeBody }              from '@/UI/Components/Badge/Internal';
import { ref }                      from 'vue';

withDefaults(defineProps<BadgeProps>(), {
    isDismissible: false,
});

const emit = defineEmits<DismissibleEmits>();

defineSlots<WithDefaultSlot>();

const isDismissed = ref<boolean>(false);
</script>
