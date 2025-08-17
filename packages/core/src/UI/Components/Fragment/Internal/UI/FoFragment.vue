<template>
    <slot v-if="$slots.default" />
</template>

<script lang="ts" setup>
/**
 * When used in conditional wrappers, it may receive attributes or props, such as "class",
 * that are not needed here.
 */
defineOptions({
    inheritAttrs: false,
});
</script>
