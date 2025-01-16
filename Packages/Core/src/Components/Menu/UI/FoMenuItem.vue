<template>
    <li :class="[item.isDisabled && 'disabled', item.text.asTooltip && 'tooltip [--placement:right] hover:show']"
        @mouseover="showTooltip = true"
        @mouseleave="showTooltip = false"
    >
        <!--  todo: everything here should be adjusted -->
        <a active-class="active"
           exact-active-class="active"
           href="item.to"
           :class="item.text.asTooltip && 'tooltip-toggle'"
        >
            <FoIcon v-if="item.icon !== undefined"
                    class="size-5"
                    :icon="item.icon"
            />

            <template v-if="!item.text.isHidden && !item.text.asTooltip">
                {{ item.text.value }}
            </template>
        </a>

        <span v-if="item.text.asTooltip"
              class="tooltip-shown:opacity-100 tooltip-shown:visible"
              :class="!showTooltip && 'tooltip-content'"
              role="tooltip"
        >
            <span class="tooltip-body">{{ item.text.value }}</span>
        </span>

        <slot />
    </li>
</template>

<script setup lang="ts">
import type { MenuItem }    from '@/Components/Menu/Types/Menu';
import FoIcon               from '@/Components/Icon/UI/FoIcon.vue';
import { ref, watchEffect } from 'vue';

interface Props {
    item: MenuItem;
}

const props = defineProps<Props>();
const showTooltip = ref<boolean>(false);

watchEffect(() => {
    if (props.item.icon === undefined && props.item.text.isHidden) {
        throw new Error('The text is hidden but the icon is not specified.');
    }
});
</script>
