<template>
    <!--    todo: user must be able to move tabs with keyboard -->
    <div :class="[
        isFilled && 'w-full',
        orientation === 'vertical' && 'flex',
    ]"
    >
        <nav class="tabs"
             :class="[
                 shape === undefined ? 'tabs-bordered' : (orientation === 'horizontal' ? 'space-x-1' : 'flex-col items-start space-y-1'),
                 alignmentClass,
                 orientationClass,
                 responsiveClass,
                 sizeClass,
             ]"
             aria-label="Tabs"
             role="tablist"
             :aria-orientation="orientation"
        >
            <slot name="tabs" />
        </nav>

        <div :class="orientation === 'horizontal' ? 'mt-3' : 'ms-3'">
            <slot name="tab-contents" />
        </div>
    </div>
</template>

<script setup lang="ts" generic="T extends TabProps">
import type { ComponentName }                           from '@/Lib';
import type { TabProps, TabsProps }                     from '@/UI/Navigations';
import { useFlyonUIVueAppConfig }                       from '@/Lib';
import { useAlignment }                                 from '@/Lib/UseAlignment/Internal';
import { useOrientation }                               from '@/Lib/UseOrientation/Internal';
import { useResponsitivity }                            from '@/Lib/UseResponsitivity/Internal';
import { useSize }                                      from '@/Lib/UseSize/Internal';
import { activeTabInjectionKey, tabsPropsInjectionKey } from '@/UI/Navigations/Tabs/Internal';
import { computed, provide }                            from 'vue';

const props = withDefaults(defineProps<TabsProps<T>>(), {
    alignment:    'left',
    orientation:  'horizontal',
    isResponsive: false,
});

const activeTab = defineModel<T>({ required: true });

const componentName: ComponentName = 'FoTabs';

const { config } = useFlyonUIVueAppConfig();

provide(activeTabInjectionKey, activeTab);
provide(tabsPropsInjectionKey, computed(() => props));

const [
    alignmentClass,
    orientationClass,
    responsiveClass,
    sizeClass,
] = [
    useAlignment(componentName, () => props.alignment),
    useOrientation(componentName, () => props.orientation),
    useResponsitivity(componentName, () => props.isResponsive),
    useSize(config, componentName, () => props.size),
];
</script>
