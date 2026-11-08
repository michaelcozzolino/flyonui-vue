<template>
    <FoCard orientation="horizontal">
        <figure>
            <img src="https://cdn.flyonui.com/fy-assets/components/card/image-7.png"
                 alt="headphone"
            >
        </figure>

        <FoCardBody>
            <FoCardTitle class="mb-0.5">
                Airpods Max
            </FoCardTitle>

            <p class="mb-2">
                This is a wider card with supporting text below as a natural lead-in to additional content.
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
</template>

<script setup lang="ts">
import { FoButton, FoCard, FoCardActions, FoCardBody, FoCardTitle } from 'flyonui-vue';
</script>
