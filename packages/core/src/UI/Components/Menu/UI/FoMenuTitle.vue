<template>
    <component :is="isParent ? 'span' : 'li'"
               class="menu-title"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
interface Props {
    isParent?: boolean;
}

withDefaults(defineProps<Props>(), {
    isParent: false,
});
</script>
