<template>
    <nav class="navbar bg-base-100 gap-4 shadow"
         :class="useRoundedBox(() => props.isRounded).value"
    >
        <div class="w-full md:flex md:items-center md:gap-2">
            <div class="flex items-center justify-between">
                <div class="navbar-start items-center justify-between max-md:w-full">
                    <slot name="start" />

                    <FoNavbarHamburgerMenuToggler v-if="links.length"
                                                  v-model="isCollapsed"
                    />
                </div>

                <div class="navbar-center">
                    <slot name="center" />
                </div>
            </div>

            <!--            todo: understand fade -->
            <Transition enter-from-class="hidden"
                        enter-active-class="transition duration-[10000ms] ease-in-out"
                        enter-to-class="open"
                        leave-from-class="open"
                        leave-active-class="duration-300"
                        leave-to-class="hidden"
            >
                <div v-if="!isCollapsed" id="logo-navbar-collapse"
                     class="md:navbar-end collapse grow basis-full overflow-hidden max-md:w-full"
                >
                    <slot name="end" />

                    <FoNavbarLinkList :links="links" />
                </div>
            </Transition>
        </div>
    </nav>
</template>

<script setup lang="ts">
import type { NavbarLink }          from '@/Components/Navbar/Types/Navbar';
import FoNavbarHamburgerMenuToggler from '@/Components/Navbar/UI/FoNavbarHamburgerMenuToggler.vue';
import FoNavbarLinkList             from '@/Components/Navbar/UI/FoNavbarLinkList.vue';
import { useRoundedBox }            from '@/Shared/Lib/UseClass';
import { ref }                      from 'vue';

interface Props {
    links?:     NavbarLink[];
    isRounded?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    links:     () => [],
    isRounded: false,
});

const isCollapsed   = ref<boolean>(true);
</script>
