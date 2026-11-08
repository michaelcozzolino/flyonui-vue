<template>
    <FoCard class="md:max-w-md">
        <FoCardAlert color="error"
                     preset="soft"
        >
            <span class="font-bold">Attention:</span>
            Important security update required.
        </FoCardAlert>

        <FoCardBody>
            <FoCardTitle class="mb-2.5">
                Security Alert
            </FoCardTitle>

            <p class="mb-4">
                We have detected a potential security vulnerability.
                Please update your settings to ensure your data remains safe.
                Click the link below for detailed instructions.
            </p>

            <FoLink color="primary"
                    to="#"
                    underline-effect="hover"
            >
                Update Now
            </FoLink>
        </FoCardBody>
    </FoCard>
</template>

<script setup lang="ts">
import { FoCard, FoCardAlert, FoCardBody, FoCardTitle, FoLink } from 'flyonui-vue';
</script>
