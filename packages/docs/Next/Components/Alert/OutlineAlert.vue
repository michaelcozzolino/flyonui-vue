<template>
    <FoAlert preset="outline">
        A quick alert conveying key information or prompting action within a system.
    </FoAlert>

    <FoAlert color="primary"
             preset="outline"
    >
        Welcome to our platform! Explore our latest features and updates.
    </FoAlert>

    <FoAlert color="secondary"
             preset="outline"
    >
        Welcome to our platform! Explore our latest features and updates.
    </FoAlert>

    <FoAlert color="accent"
             preset="outline"
    >
        Welcome to our platform! Explore our latest features and updates.
    </FoAlert>

    <FoAlert color="info"
             preset="outline"
    >
        Stay tuned for our upcoming events and announcements.
    </FoAlert>

    <FoAlert color="success"
             preset="outline"
    >
        Your transaction was successful. Thank you for choosing our service!
    </FoAlert>

    <FoAlert color="warning"
             preset="outline"
    >
        Attention! Your account security may be at risk. Enable two-factor authentication now.
    </FoAlert>

    <FoAlert color="error"
             preset="outline"
    >
        Oops! It seems there was an unexpected error. Please try again later.
    </FoAlert>
</template>

<script setup lang="ts">
import { FoAlert } from 'flyonui-vue';
</script>
