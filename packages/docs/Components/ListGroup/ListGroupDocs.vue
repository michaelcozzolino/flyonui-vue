<template>
    <CodeSnippet v-if="section === 'default'"
                 :code="DefaultListGroupRaw"
                 :component="DefaultListGroup"
    />

    <CodeSnippet v-else-if="section === 'with-icons'"
                 :code="ListGroupWithIconsRaw"
                 :component="ListGroupWithIcons"
    />

    <CodeSnippet v-else-if="section === 'with-badges'"
                 :code="ListGroupWithBadgesRaw"
                 :component="ListGroupWithBadges"
    />

    <CodeSnippet v-else-if="section === 'horizontal'"
                 :code="HorizontalListGroupRaw"
                 :component="HorizontalListGroup"
    />

    <CodeSnippet v-else-if="section === 'flushed'"
                 :code="FlushedListGroupRaw"
                 :component="FlushedListGroup"
    />

    <CodeSnippet v-else-if="section === 'without-gutters'"
                 :code="ListGroupWithoutGuttersRaw"
                 :component="ListGroupWithoutGutters"
    />

    <CodeSnippet v-else-if="section === 'striped'"
                 :code="StripedListGroupRaw"
                 :component="StripedListGroup"
    />

    <CodeSnippet v-else-if="section === 'with-checkbox'"
                 :code="ListGroupWithCheckboxRaw"
                 :component="ListGroupWithCheckbox"
                 :preview="{ columns: 1, rows: 1 }"
    />

    <CodeSnippet v-else-if="section === 'invoice'"
                 :code="InvoiceListGroupRaw"
                 :component="InvoiceListGroup"
    />
</template>

<script setup lang="ts">
import type { Default }           from 'flyonui-vue/dist/src/Shared/Types/Variants';
import CodeSnippet                from '../../.vitepress/theme/Components/CodeSnippet.vue';
import DefaultListGroup           from './DefaultListGroup.vue';
import DefaultListGroupRaw        from './DefaultListGroup.vue?raw';
import FlushedListGroup           from './FlushedListGroup.vue';
import FlushedListGroupRaw        from './FlushedListGroup.vue?raw';
import HorizontalListGroup        from './HorizontalListGroup.vue';
import HorizontalListGroupRaw     from './HorizontalListGroup.vue?raw';
import InvoiceListGroup           from './InvoiceListGroup.vue';
import InvoiceListGroupRaw        from './InvoiceListGroup.vue?raw';
import ListGroupWithBadges        from './ListGroupWithBadges.vue';
import ListGroupWithBadgesRaw     from './ListGroupWithBadges.vue?raw';
import ListGroupWithCheckbox      from './ListGroupWithCheckbox.vue';
import ListGroupWithCheckboxRaw   from './ListGroupWithCheckbox.vue?raw';
import ListGroupWithIcons         from './ListGroupWithIcons.vue';
import ListGroupWithIconsRaw      from './ListGroupWithIcons.vue?raw';
import ListGroupWithoutGutters    from './ListGroupWithoutGutters.vue';
import ListGroupWithoutGuttersRaw from './ListGroupWithoutGutters.vue?raw';
import StripedListGroup           from './StripedListGroup.vue';
import StripedListGroupRaw        from './StripedListGroup.vue?raw';

interface Props {
    section: Default | 'with-icons' | 'with-badges' | 'horizontal' | 'flushed' | 'without-gutters' | 'striped' | 'with-checkbox' | 'invoice';
}

defineProps<Props>();
</script>
