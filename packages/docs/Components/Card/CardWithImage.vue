<template>
    <FoCard>
        <figure>
            <img src="https://cdn.flyonui.com/fy-assets/components/card/image-9.png"
                 alt="Watch"
            >
        </figure>

        <FoCardBody>
            <FoCardTitle class="mb-2.5">
                Apple Smart Watch
            </FoCardTitle>

            <p class="mb-4">
                Stay connected, motivated, and healthy with the latest Apple Watch.
            </p>

            <template #actions>
                <FoCardActions>
                    <FoButton color="primary">
                        Buy Now
                    </FoButton>

                    <FoButton color="secondary"
                              preset="soft"
                    >
                        Add to cart
                    </FoButton>
                </FoCardActions>
            </template>
        </FoCardBody>
    </FoCard>

    <FoCard>
        <FoCardBody>
            <FoCardTitle class="mb-2.5">
                Airpods Max
            </FoCardTitle>

            <p>
                A perfect balance of exhilarating high-fidelity audio and the effortless magic of Airpods.
            </p>
        </FoCardBody>
        <figure>
            <img src="https://cdn.flyonui.com/fy-assets/components/card/image-7.png"
                 alt="headphone"
            >
        </figure>
    </FoCard>
</template>

<script setup lang="ts">
import { FoButton, FoCard, FoCardActions, FoCardBody, FoCardTitle } from 'flyonui-vue';
</script>
