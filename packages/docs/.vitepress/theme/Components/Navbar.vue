<template>
    <FoNavbar>
        <template #start>
            <FoNavbarBrand>
                FlyonUI-Vue
            </FoNavbarBrand>
        </template>

        <template #end>
            <div class="flex gap-2">
                <FoSelectThemeController class="w-48" />
                <FoSocialButton class="place-self-center"
                                social="Github"
                                shape="square"
                                @click="goToGitHub"
                />
            </div>
        </template>
    </FoNavbar>
</template>

<script setup lang="ts">
import { FoNavbar, FoNavbarBrand, FoSelectThemeController, FoSocialButton } from 'flyonui-vue';

function goToGitHub(): void {
    window.open('https://github.com/michaelcozzolino/flyonui-vue', '_blank');
}
</script>
