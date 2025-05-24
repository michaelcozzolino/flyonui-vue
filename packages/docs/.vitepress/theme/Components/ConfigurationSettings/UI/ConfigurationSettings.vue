<template>
    <!--    todo: check size on devices such as iphone SE, the tooltip seems to be cut off the screen -->
    <FoListGroup class="w-80 bg-base-100">
        <ConfigurationSettingsHeader v-model="showGlobalSettings"
                                     class="text-base-content"
        >
            Global settings
        </ConfigurationSettingsHeader>

        <template v-if="showGlobalSettings">
            <ConfigurationSettingsItem>
                <ThemeSettings v-model="config.global.direction"
                               :theme-storage-key="themeStorageKey"
                />
            </ConfigurationSettingsItem>
            <!--            todo: icon position -->
            <!--            <FoListGroupItem> -->
            <!--                <div class="flex items-center"> -->
            <!--                    <FoIcon :icon="config.global.horizontalPosition === 'left' ? 'fluent:text-align-left-20-regular' : 'fluent:text-align-right-20-regular'" -->
            <!--                            size="doubleExtraLarge" -->
            <!--                    /> -->

            <!--                    <div class="flex gap-2"> -->
            <!--                        <FoRadio v-model="config.global.horizontalPosition" -->
            <!--                                 value="left" -->
            <!--                                 label="Left" -->
            <!--                        /> -->

            <!--                        <FoRadio v-model="config.global.horizontalPosition" -->
            <!--                                 value="right" -->
            <!--                                 label="Right" -->
            <!--                        /> -->
            <!--                    </div> -->
            <!--                </div> -->
            <!--            </FoListGroupItem> -->

            <ConfigurationSettingsItem icon="fluent:color-20-regular">
                <ColorSettings v-model="config.global.color" />
            </ConfigurationSettingsItem>

            <ConfigurationSettingsItem icon="la:border-style">
                <PresetSettings v-model="config.global.preset" />
            </ConfigurationSettingsItem>

            <ConfigurationSettingsItem icon="radix-icons:dimensions">
                <SizeSettings v-model="config.global.size" />
            </ConfigurationSettingsItem>

            <ConfigurationSettingsItem icon="fluent:shapes-20-regular">
                <ShapeSettings v-model="config.global.shape" />
            </ConfigurationSettingsItem>
        </template>
    </FoListGroup>
</template>

<script setup lang="ts">
// todo: maybe these paths could be aliased
import ColorSettings               from '@/.vitepress/theme/Components/ConfigurationSettings/UI/ColorSettings.vue';
import ConfigurationSettingsHeader
    from '@/.vitepress/theme/Components/ConfigurationSettings/UI/ConfigurationSettingsHeader.vue';
import ConfigurationSettingsItem
    from '@/.vitepress/theme/Components/ConfigurationSettings/UI/ConfigurationSettingsItem.vue';
import PresetSettings
    from '@/.vitepress/theme/Components/ConfigurationSettings/UI/PresetSettings.vue';
import ShapeSettings
    from '@/.vitepress/theme/Components/ConfigurationSettings/UI/ShapeSettings.vue';
import SizeSettings
    from '@/.vitepress/theme/Components/ConfigurationSettings/UI/SizeSettings.vue';
import ThemeSettings
    from '@/.vitepress/theme/Components/ConfigurationSettings/UI/ThemeSettings.vue';
import { flyonUIVueAppDefaultConfig, FoListGroup, useFlyonUIVueAppConfigInjectionKey } from 'flyonui-vue';
import { inject, ref }                                                                 from 'vue';

interface Props {
    themeStorageKey: string;
}

defineProps<Props>();

const config = inject(useFlyonUIVueAppConfigInjectionKey, ref(flyonUIVueAppDefaultConfig));

const showGlobalSettings = ref<boolean>(true);
</script>
