<template>
    <ClientOnly>
        <FoNavbar id="flyonui-vue-docs-navbar"
                  class="vp-raw sticky top-0 z-100 border-b border-base-content/10"
                  :links="links"
                  link-type="js"
        >
            <template #start>
                <div class="flex place-items-center gap-4">
                    <FoLink to="https://www.npmjs.com/package/flyonui-vue"
                            color="info"
                            underline-effect="hover-animated"
                    >
                        {{ flyonUIVueVersion }}
                    </FoLink>

                    <FoNavbarBrand :class="!isSidebarCollapsed && 'sm:ms-46'"
                                   @click="router.go('/')"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M17.6745 16.9224L12.6233 10.378C12.2167 9.85117 11.4185 9.8611 11.0251 10.3979L6.45728 16.631C6.26893 16.888 5.96935 17.0398 5.65069 17.0398H3.79114C2.9635 17.0398 2.49412 16.0919 2.99583 15.4336L11.0224 4.90319C11.4206 4.38084 12.2056 4.37762 12.608 4.89668L20.9829 15.6987C21.4923 16.3558 21.024 17.3114 20.1926 17.3114H18.4661C18.1562 17.3114 17.8638 17.1677 17.6745 16.9224ZM12.5866 15.5924L14.8956 18.3593C15.439 19.0105 14.976 20 14.1278 20H9.74075C8.9164 20 8.4461 19.0586 8.94116 18.3994L11.0192 15.6325C11.4065 15.1169 12.1734 15.0972 12.5866 15.5924Z"
                                  fill="var(--color-primary)"
                            />
                        </svg>
                    </FoNavbarBrand>

                    <FoPopover placement="bottom">
                        <FoButton :icon="{ right: 'tabler:chevron-down' }"
                                  preset="gradient"
                                  size="small"
                        >
                            {{ currentVersion }}
                        </FoButton>

                        <template #body>
                            <template v-for="{ name: version, to } in oldVersions"
                                      :key="version"
                            >
                                <FoLink :to="to"
                                        color="primary"
                                        underline-effect="hover-animated"
                                >
                                    {{ version }}
                                </FoLink>
                            </template>
                        </template>
                    </FoPopover>

                    <VPNavBarSearch />
                </div>
            </template>

            <template #end>
                <FoButton icon="tabler:settings-bolt"
                          color="info"
                          preset="gradient"
                          shape="square"
                          @click.prevent="show = !show"
                />

                <FoModal v-model="show"
                         placement="middle-center"
                >
                    <ConfigurationSettings :theme-storage-key="vitepressThemeLocalStorageKey" />
                </FoModal>

                <FoSocialButton class="place-self-center"
                                social="github"
                                shape="square"
                                to="https://github.com/michaelcozzolino/flyonui-vue"
                />
            </template>
        </FoNavbar>
    </ClientOnly>
</template>

<script setup lang="ts">
import type { FlyonUITheme, NavbarLink } from 'flyonui-vue';
import ConfigurationSettings
    from '@/.vitepress/theme/Components/ConfigurationSettings/UI/ConfigurationSettings.vue';
import {
    useFlyonUIVueVersion,
}                         from '@/.vitepress/theme/Components/Layout/Lib/UseFlyonUIVueVersion';
import { useLayoutStore ,
}                                                                             from '@/.vitepress/theme/Components/Layout/Lib/UseLayoutStore';
import { useColorMode, useStorage }                                                              from '@vueuse/core';
import { FoButton, FoLink, FoModal, FoNavbar, FoNavbarBrand, FoPopover, FoSocialButton } from 'flyonui-vue';
import {  useRouter, withBase }                                                          from 'vitepress';
import { VPNavBarSearch }                                                                        from 'vitepress/theme';
import { computed, onMounted, ref }                                                              from 'vue';

const { currentVersion, oldVersions } = useFlyonUIVueVersion();

const router = useRouter();

const { vitepressThemeLocalStorageKey } = useLayoutStore();

const links = computed((): NavbarLink[] => {
    return [
        {
            id:   1,
            text: 'Playground',
            to:   withBase('/playground/'),
        },
    ];
});

const themeStorageKey = 'vitepress-theme-appearance';

const show = ref<boolean>(false);

onMounted(() => {
    /**
     * The theme selector will be shown only on click, in order to allow the automatic theme selection from local
     * storage on first load, it must be fetched and set according to the user one.
     */
    const initialValue = useStorage<FlyonUITheme>(
        themeStorageKey,
        'dark',
        localStorage,
        { mergeDefaults: true },
    );

    useColorMode({
        initialValue,
        attribute:     'data-theme',
        mergeDefaults: true,
        storageKey:    themeStorageKey,
    });
});
</script>
