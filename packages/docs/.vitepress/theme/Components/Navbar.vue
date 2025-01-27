<template>
    <FoNavbar :links="links"
              link-type="js"
    >
        <template #start>
            <FoNavbarBrand>
                FlyonUI-Vue
            </FoNavbarBrand>
        </template>

        <template #end>
            <FoSelectThemeController class="!w-48" />

            <FoSocialButton class="place-self-center"
                            social="Github"
                            shape="square"
                            @click="goToGitHub"
            />
        </template>
    </FoNavbar>
</template>

<script setup lang="ts">
import { FoNavbar, FoNavbarBrand, FoSelectThemeController, FoSocialButton, type NavbarLink } from 'flyonui-vue';
import { withBase }                                                                          from 'vitepress';
import { computed }                                                                          from 'vue';

function goToGitHub(): void {
    window.open('https://github.com/michaelcozzolino/flyonui-vue', '_blank', 'noopener,noreferrer');
}

const links = computed((): NavbarLink[] => {
    return [
        {
            id:   1,
            text: 'Playground',
            to:   withBase('/playground/'),
        },
    ];
});
</script>
