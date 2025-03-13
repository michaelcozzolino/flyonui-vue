<template>
    <CodeSnippet v-if="section === 'default'"
                 :code="DefaultStatListRaw"
                 :component="DefaultStatList"
    />

    <CodeSnippet v-else-if="section === 'with-avatar'"
                 :code="StatListWithAvatarRaw"
                 :component="StatListWithAvatar"
    />

    <CodeSnippet v-else-if="section === 'with-icons-and-image'"
                 :code="StatListWithIconsAndImageRaw"
                 :component="StatListWithIconsAndImage"
    />

    <CodeSnippet v-else-if="section === 'centered-item'"
                 :code="CenteredItemStatListRaw"
                 :component="CenteredItemStatList"
    />

    <CodeSnippet v-else-if="section === 'vertical'"
                 :code="VerticalStatListRaw"
                 :component="VerticalStatList"
    />

    <CodeSnippet v-else-if="section === 'with-progress-bar'"
                 :code="StatListWithProgressBarRaw"
                 :component="StatListWithProgressBar"
    />

    <CodeSnippet v-else-if="section === 'with-actions-button'"
                 :code="StatListWithActionsButtonRaw"
                 :component="StatListWithActionsButton"
    />

    <CodeSnippet v-else-if="section === 'bordered'"
                 :code="BorderedStatListRaw"
                 :component="BorderedStatList"
    />
</template>

<script setup lang="ts">
import type { Default }             from 'flyonui-vue';
import CodeSnippet                  from '@/.vitepress/theme/Components/CodeSnippet.vue';
import BorderedStatList             from '@/Components/StatList/BorderedStatList.vue';
import BorderedStatListRaw          from '@/Components/StatList/BorderedStatList.vue?raw';
import CenteredItemStatList         from '@/Components/StatList/CenteredItemStatList.vue';
import CenteredItemStatListRaw      from '@/Components/StatList/CenteredItemStatList.vue?raw';
import DefaultStatList              from '@/Components/StatList/DefaultStatList.vue';
import DefaultStatListRaw           from '@/Components/StatList/DefaultStatList.vue?raw';
import StatListWithActionsButton    from '@/Components/StatList/StatListWithActionsButton.vue';
import StatListWithActionsButtonRaw from '@/Components/StatList/StatListWithActionsButton.vue?raw';
import StatListWithAvatar           from '@/Components/StatList/StatListWithAvatar.vue';
import StatListWithAvatarRaw        from '@/Components/StatList/StatListWithAvatar.vue?raw';
import StatListWithIconsAndImage    from '@/Components/StatList/StatListWithIconsAndImage.vue';
import StatListWithIconsAndImageRaw from '@/Components/StatList/StatListWithIconsAndImage.vue?raw';
import StatListWithProgressBar      from '@/Components/StatList/StatListWithProgressBar.vue';
import StatListWithProgressBarRaw   from '@/Components/StatList/StatListWithProgressBar.vue?raw';
import VerticalStatList             from '@/Components/StatList/VerticalStatList.vue';
import VerticalStatListRaw          from '@/Components/StatList/VerticalStatList.vue?raw';

interface Props {
    section: Default | 'with-avatar' | 'with-icons-and-image' | 'centered-item' | 'vertical' | 'with-progress-bar' | 'with-actions-button' | 'bordered';
}

defineProps<Props>();
</script>
