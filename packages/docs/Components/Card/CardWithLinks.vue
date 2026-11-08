<template>
    <FoCard>
        <FoCardBody>
            <FoCardTitle class="mb-0">
                Welcome to Our Platform
            </FoCardTitle>

            <div class="text-base-content/50 mb-6">
                Your journey starts here
            </div>

            <p class="mb-4">
                Explore a range of features and services designed to enhance your experience.
                Join us and make the most out of what we have to offer.
            </p>

            <template #actions>
                <FoCardActions>
                    <FoLink to="#"
                            color="primary"
                            underline-effect="no-underline"
                    >
                        Get Started
                    </FoLink>

                    <FoLink to="#"
                            color="primary"
                            underline-effect="no-underline"
                    >
                        Learn More
                    </FoLink>
                </FoCardActions>
            </template>
        </FoCardBody>
    </FoCard>
</template>

<script setup lang="ts">
import { FoCard, FoCardActions, FoCardBody, FoCardTitle, FoLink } from 'flyonui-vue';
</script>
