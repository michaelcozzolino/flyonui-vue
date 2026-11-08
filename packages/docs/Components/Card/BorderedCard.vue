<template>
    <FoCard is-bordered>
        <FoCardBody>
            <FoCardTitle class="mb-2.5">
                Welcome to Our Service
            </FoCardTitle>

            <p class="mb-4">
                Discover the features and benefits that our service offers.
                Enhance your experience with our user-friendly platform designed to meet all your needs.
            </p>

            <template #actions>
                <FoCardActions>
                    <FoButton color="primary">
                        Learn More
                    </FoButton>
                </FoCardActions>
            </template>
        </FoCardBody>
    </FoCard>
</template>

<script setup lang="ts">
import { FoButton, FoCard, FoCardActions, FoCardBody, FoCardTitle } from 'flyonui-vue';
</script>
