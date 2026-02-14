<template>
    <FoAlert v-if="isOutdatedVersion"
             class="flex items-center gap-4 my-4"
             color="warning"
             preset="soft"
    >
        <FoIcon icon="line-md:alert" />

        <p class="flex flex-col">
            <span class="font-semibold">
                WARNING
            </span>

            <span>
                You're browsing the documentation for an old version of FlyonUI Vue.
                Consider upgrading your project to the

                <FoLink :to="to">
                    latest one
                </FoLink>.
            </span>
        </p>
    </FoAlert>
</template>

<script setup lang="ts">
import { FoAlert, FoIcon, FoLink  } from 'flyonui-vue';
import { computed }                 from 'vue';

/**
 * It checks that the current url contains vx in its domain, where x is a version number.
 */
const isOutdatedVersion = computed((): boolean => {
    const subdomain = window.location.hostname.split('.')[0];

    return /^v\d+$/.test(subdomain ?? '');
});

const to: string = `https://${FLYONUI_VUE_DOMAIN}`;
</script>
