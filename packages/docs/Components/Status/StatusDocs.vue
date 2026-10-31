<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoStatus"
    />
</template>

<script setup lang="ts">
import type { Default }                 from 'flyonui-vue';
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import DefaultStatus                    from '@/Components/Status/DefaultStatus.vue';
import DefaultStatusRaw                 from '@/Components/Status/DefaultStatus.vue?raw';
import StatusAnimation                  from '@/Components/Status/StatusAnimation.vue';
import StatusAnimationRaw               from '@/Components/Status/StatusAnimation.vue?raw';
import StatusColor                      from '@/Components/Status/StatusColor.vue';
import StatusColorRaw                   from '@/Components/Status/StatusColor.vue?raw';
import StatusSize                       from '@/Components/Status/StatusSize.vue';
import StatusSizeRaw                    from '@/Components/Status/StatusSize.vue?raw';

type Section = Default
    | 'color'
    | 'size'
    | 'animation'
    | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed((): Map<Section, FrameworkSectionPreview> => {
    return new Map<Section, FrameworkSectionPreview>([
        [
            'default',
            {
                vue: {
                    codePreview: DefaultStatusRaw,
                    component:   DefaultStatus,
                },
            },
        ],
        [
            'color',
            {
                vue: {
                    codePreview: StatusColorRaw,
                    component:   StatusColor,
                },
            },
        ],
        [
            'size',
            {
                vue: {
                    codePreview: StatusSizeRaw,
                    component:   StatusSize,
                },
            },
        ],
        [
            'animation',
            {
                vue: {
                    codePreview: StatusAnimationRaw,
                    component:   StatusAnimation,
                },
                grid: { columns: 1, rows: 3 },
            },
        ],
    ]);
});
</script>
