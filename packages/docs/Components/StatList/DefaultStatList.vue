<template>
    <FoStatList :stats="stats" />
</template>

<script setup lang="ts">
import type { Stat }  from 'flyonui-vue';
import { FoStatList } from 'flyonui-vue';
import { ref }        from 'vue';

const stats = ref<Stat[]>([
    {
        id:          1,
        title:       'Total Emails Sent',
        value:       76250,
        description: '18% more than last month',
    },
]);
</script>
