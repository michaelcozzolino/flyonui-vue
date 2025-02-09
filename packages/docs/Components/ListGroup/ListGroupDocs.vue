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
import type { Default }           from 'flyonui-vue';
import CodeSnippet                from '@/.vitepress/theme/Components/CodeSnippet.vue';
import DefaultListGroup           from '@/Components/ListGroup/DefaultListGroup.vue';
import DefaultListGroupRaw        from '@/Components/ListGroup/DefaultListGroup.vue?raw';
import FlushedListGroup           from '@/Components/ListGroup/FlushedListGroup.vue';
import FlushedListGroupRaw        from '@/Components/ListGroup/FlushedListGroup.vue?raw';
import HorizontalListGroup        from '@/Components/ListGroup/HorizontalListGroup.vue';
import HorizontalListGroupRaw     from '@/Components/ListGroup/HorizontalListGroup.vue?raw';
import InvoiceListGroup           from '@/Components/ListGroup/InvoiceListGroup.vue';
import InvoiceListGroupRaw        from '@/Components/ListGroup/InvoiceListGroup.vue?raw';
import ListGroupWithBadges        from '@/Components/ListGroup/ListGroupWithBadges.vue';
import ListGroupWithBadgesRaw     from '@/Components/ListGroup/ListGroupWithBadges.vue?raw';
import ListGroupWithCheckbox      from '@/Components/ListGroup/ListGroupWithCheckbox.vue';
import ListGroupWithCheckboxRaw   from '@/Components/ListGroup/ListGroupWithCheckbox.vue?raw';
import ListGroupWithIcons         from '@/Components/ListGroup/ListGroupWithIcons.vue';
import ListGroupWithIconsRaw      from '@/Components/ListGroup/ListGroupWithIcons.vue?raw';
import ListGroupWithoutGutters    from '@/Components/ListGroup/ListGroupWithoutGutters.vue';
import ListGroupWithoutGuttersRaw from '@/Components/ListGroup/ListGroupWithoutGutters.vue?raw';
import StripedListGroup           from '@/Components/ListGroup/StripedListGroup.vue';
import StripedListGroupRaw        from '@/Components/ListGroup/StripedListGroup.vue?raw';

interface Props {
    section: Default | 'with-icons' | 'with-badges' | 'horizontal' | 'flushed' | 'without-gutters' | 'striped' | 'with-checkbox' | 'invoice';
}

defineProps<Props>();
</script>
