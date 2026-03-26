<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoStatus"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }              from '@/Api/Types/Api.ts';
import type { Default }              from 'flyonui-vue';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import DefaultStatus                 from '@/Components/Status/DefaultStatus.vue';
import DefaultStatusRaw              from '@/Components/Status/DefaultStatus.vue?raw';
import StatusAnimation               from '@/Components/Status/StatusAnimation.vue';
import StatusAnimationRaw            from '@/Components/Status/StatusAnimation.vue?raw';
import StatusColor                   from '@/Components/Status/StatusColor.vue';
import StatusColorRaw                from '@/Components/Status/StatusColor.vue?raw';
import StatusSize                    from '@/Components/Status/StatusSize.vue';
import StatusSizeRaw                 from '@/Components/Status/StatusSize.vue?raw';
import { computed }                  from 'vue';

type Section = Default
    | 'color'
    | 'size'
    | 'animation'
    | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Section, ComponentDocsPreview>([
        [
            'default',
            {
                code:      DefaultStatusRaw,
                component: DefaultStatus,
            },
        ],
        [
            'color',
            {
                code:      StatusColorRaw,
                component: StatusColor,
            },
        ],
        [
            'size',
            {
                code:      StatusSizeRaw,
                component: StatusSize,
            },
        ],
        [
            'animation',
            {
                code:      StatusAnimationRaw,
                component: StatusAnimation,
                grid:      { columns: 1, rows: 3 },
            },
        ],
    ]);
});
</script>
