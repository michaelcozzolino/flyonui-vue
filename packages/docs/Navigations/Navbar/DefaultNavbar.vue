<template>
    <FoNavbar :links="links"
              link-type="js"
    >
        <template #start>
            <FoNavbarBrand>
                FlyonUI-vue
            </FoNavbarBrand>
        </template>
    </FoNavbar>
</template>

<script setup lang="ts">
import type { NavbarLink }         from 'flyonui-vue';
import { FoNavbar, FoNavbarBrand } from 'flyonui-vue';
import { computed }                from 'vue';

const links = computed((): NavbarLink[] => {
    return [
        { id: 1, to: '/home', text: 'Home' },
        { id: 2, to: '/service', text: 'Services' },
        { id: 3, to: '/contact-us', text: 'Contact us' },
    ];
});
</script>
