<template>
    <FoLink to="https://www.google.com">
        Default link
    </FoLink>

    <FoLink to="https://www.google.com"
            underline-effect="no-underline"
    >
        Link with no underline
    </FoLink>
</template>

<script setup lang="ts">
import { FoLink } from 'flyonui-vue';
</script>
