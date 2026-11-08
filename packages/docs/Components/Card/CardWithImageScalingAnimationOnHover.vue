<template>
    <FoCard class="group hover:shadow-sm">
        <figure>
            <img src="https://cdn.flyonui.com/fy-assets/components/card/image-8.png"
                 alt="Shoes"
                 class="transition-transform duration-500 group-hover:scale-110"
            >
        </figure>

        <FoCardBody>
            <FoCardTitle class="mb-2.5">
                Card title
            </FoCardTitle>

            <p class="mb-6">
                Nike Air Max is a popular line of athletic shoes that feature Nike's signature Air cushioning technology in the sole.
            </p>

            <template #actions>
                <FoCardActions>
                    <FoButton color="primary">
                        Buy Now
                    </FoButton>

                    <FoButton preset="soft">
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
