<template>
    <FoStatus color="info"
              animation="bounce"
    >
        Unread messages
    </FoStatus>

    <FoStatus color="error"
              animation="ping"
    >
        Server is down
    </FoStatus>

    <FoStatus color="warning"
              animation="pulse"
    >
        Under Maintenance
    </FoStatus>
</template>

<script setup lang="ts">
import { FoStatus } from 'flyonui-vue';
</script>
