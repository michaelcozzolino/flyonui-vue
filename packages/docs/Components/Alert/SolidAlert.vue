<template>
    <FoAlert>
        A quick alert conveying key information or prompting action within a system.
    </FoAlert>

    <FoAlert color="primary">
        Welcome to our platform! Explore our latest features and updates.
    </FoAlert>

    <FoAlert color="secondary">
        Welcome to our platform! Explore our latest features and updates.
    </FoAlert>

    <FoAlert color="accent">
        Welcome to our platform! Explore our latest features and updates.
    </FoAlert>

    <FoAlert color="info">
        Stay tuned for our upcoming events and announcements.
    </FoAlert>

    <FoAlert color="success">
        Your transaction was successful. Thank you for choosing our service!
    </FoAlert>

    <FoAlert color="warning">
        Attention! Your account security may be at risk. Enable two-factor authentication now.
    </FoAlert>

    <FoAlert color="error">
        Oops! It seems there was an unexpected error. Please try again later.
    </FoAlert>
</template>

<script setup lang="ts">
import { FoAlert } from 'flyonui-vue';
</script>
