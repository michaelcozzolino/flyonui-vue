<template>
    <FoCardGroup>
        <FoCard>
            <figure>
                <img src="https://cdn.flyonui.com/fy-assets/components/card/image-4.png"
                     alt="paris"
                >
            </figure>

            <FoCardBody>
                <FoCardTitle class="mb-2.5">
                    Travel to Paris
                </FoCardTitle>

                <p>
                    Discover iconic landmarks, world-class museums, and exquisite cuisine.
                    Explore the Eiffel Tower, Louvre Museum, and charming neighborhoods.
                </p>
            </FoCardBody>

            <FoCardFooter>
                <p class="text-base-content/50 text-sm">
                    Card text content
                </p>
            </FoCardFooter>
        </FoCard>

        <FoCard>
            <figure>
                <img src="https://cdn.flyonui.com/fy-assets/components/card/image-3.png"
                     alt="rome"
                >
            </figure>

            <FoCardBody>
                <FoCardTitle class="mb-2.5">
                    Travel to Rome
                </FoCardTitle>

                <p>
                    Visit ancient ruins, stunning basilicas, and enjoy delicious Italian cuisine.
                    Explore the Colosseum, Vatican City, and more.
                </p>
            </FoCardBody>

            <FoCardFooter>
                <p class="text-base-content/50 text-sm">
                    Card text content
                </p>
            </FoCardFooter>
        </FoCard>

        <FoCard>
            <figure>
                <img src="https://cdn.flyonui.com/fy-assets/components/card/image-2.png"
                     alt="sydney"
                >
            </figure>

            <FoCardBody>
                <FoCardTitle class="mb-2.5">
                    Travel to Sydney
                </FoCardTitle>

                <p>
                    Explore the vibrant city of Sydney, where every corner tells a story.
                    Visit iconic landmarks, laze on beautiful beaches, and immerse yourself in a lively arts scene.
                </p>
            </FoCardBody>

            <FoCardFooter>
                <p class="text-base-content/50 text-sm">
                    Card text content
                </p>
            </FoCardFooter>
        </FoCard>
    </FoCardGroup>
</template>

<script setup lang="ts">
import { FoCard, FoCardBody, FoCardFooter, FoCardGroup, FoCardTitle } from 'flyonui-vue';
</script>
