<template>
    <div class="bg-base-200/20 border-neutral/10 rounded-box not-prose bg-[url('https://cdn.flyonui.com/fy-assets/components/carousel/image-10.png')] bg-cover flex w-full flex-[1_0_0] flex-wrap gap-3 border p-3 sm:p-6">
        <FoCard class="text-white"
                with-glass
        >
            <figure>
                <img src="https://cdn.flyonui.com/fy-assets/components/card/image-1.png"
                     alt="iphones"
                >
            </figure>

            <FoCardBody>
                <FoCardTitle class="mb-2.5 text-white">
                    Smartphone
                </FoCardTitle>

                <p class="mb-4">
                    A high-quality smartphone with the latest features for a premium user experience.
                </p>

                <template #actions>
                    <FoCardActions>
                        <FoButton color="warning">
                            Buy Now
                        </FoButton>
                    </FoCardActions>
                </template>
            </FoCardBody>
        </FoCard>
    </div>
</template>

<script setup lang="ts">
import { FoButton, FoCard, FoCardActions, FoCardBody, FoCardTitle } from 'flyonui-vue';
</script>
