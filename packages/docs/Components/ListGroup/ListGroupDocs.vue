<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoListGroup', 'FoListGroupItem']"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }              from '@/Api/Types/Api';
import type { Default }              from 'flyonui-vue';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import DefaultListGroup              from '@/Components/ListGroup/DefaultListGroup.vue';
import DefaultListGroupRaw           from '@/Components/ListGroup/DefaultListGroup.vue?raw';
import FlushedListGroup              from '@/Components/ListGroup/FlushedListGroup.vue';
import FlushedListGroupRaw           from '@/Components/ListGroup/FlushedListGroup.vue?raw';
import HorizontalListGroup           from '@/Components/ListGroup/HorizontalListGroup.vue';
import HorizontalListGroupRaw        from '@/Components/ListGroup/HorizontalListGroup.vue?raw';
import InvoiceListGroup              from '@/Components/ListGroup/InvoiceListGroup.vue';
import InvoiceListGroupRaw           from '@/Components/ListGroup/InvoiceListGroup.vue?raw';
import ListGroupWithBadges           from '@/Components/ListGroup/ListGroupWithBadges.vue';
import ListGroupWithBadgesRaw        from '@/Components/ListGroup/ListGroupWithBadges.vue?raw';
import ListGroupWithCheckbox         from '@/Components/ListGroup/ListGroupWithCheckbox.vue';
import ListGroupWithCheckboxRaw      from '@/Components/ListGroup/ListGroupWithCheckbox.vue?raw';
import ListGroupWithIcons            from '@/Components/ListGroup/ListGroupWithIcons.vue';
import ListGroupWithIconsRaw         from '@/Components/ListGroup/ListGroupWithIcons.vue?raw';
import ListGroupWithoutGutters       from '@/Components/ListGroup/ListGroupWithoutGutters.vue';
import ListGroupWithoutGuttersRaw    from '@/Components/ListGroup/ListGroupWithoutGutters.vue?raw';
import StripedListGroup              from '@/Components/ListGroup/StripedListGroup.vue';
import StripedListGroupRaw           from '@/Components/ListGroup/StripedListGroup.vue?raw';
import { computed }                  from 'vue';

type Section = Default
    | 'with-icons'
    | 'with-badges'
    | 'horizontal'
    | 'flushed'
    | 'without-gutters'
    | 'striped'
    | 'with-checkbox'
    | 'invoice'
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
                code:      DefaultListGroupRaw,
                component: DefaultListGroup,
            },
        ],
        [
            'with-icons',
            {
                code:      ListGroupWithIconsRaw,
                component: ListGroupWithIcons,
            },
        ],
        [
            'with-badges',
            {
                code:      ListGroupWithBadgesRaw,
                component: ListGroupWithBadges,
            },
        ],
        [
            'horizontal',
            {
                code:      HorizontalListGroupRaw,
                component: HorizontalListGroup,
            },
        ],
        [
            'flushed',
            {
                code:      FlushedListGroupRaw,
                component: FlushedListGroup,
            },
        ],
        [
            'without-gutters',
            {
                code:      ListGroupWithoutGuttersRaw,
                component: ListGroupWithoutGutters,
            },
        ],
        [
            'striped',
            {
                code:      StripedListGroupRaw,
                component: StripedListGroup,
            },
        ],
        [
            'with-checkbox',
            {
                grid:      { columns: 1, rows: 1 },
                code:      ListGroupWithCheckboxRaw,
                component: ListGroupWithCheckbox,
            },
        ],
        [
            'invoice',
            {
                code:      InvoiceListGroupRaw,
                component: InvoiceListGroup,
            },
        ],
    ]);
});
</script>
