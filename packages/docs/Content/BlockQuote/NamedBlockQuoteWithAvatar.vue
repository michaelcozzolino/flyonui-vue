<template>
    <FoBlockQuote :author="{
        name: 'Shamus Tuttle',
        avatar: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png',
        title: 'Source title',
    }"
    >
        The blockquote element is ideal for showcasing well-known quotes within content. It's commonly used for
        testimonials, reviews, and notable quotes in articles.
    </FoBlockQuote>

    <FoBlockQuote :author="{
        name: 'Shamus Tuttle',
        avatar: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png',
    }"
    >
        The blockquote element is ideal for showcasing well-known quotes within content. It's commonly used for
        testimonials, reviews, and notable quotes in articles.
    </FoBlockQuote>
</template>

<script setup lang="ts">
import { FoBlockQuote } from 'flyonui-vue';
</script>
