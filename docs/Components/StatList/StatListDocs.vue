<template>
    <CodeSnippet v-if="section === 'default'"
                 :code="DefaultStatListRaw"
                 :component="DefaultStatList"
    />

    <CodeSnippet v-if="section === 'with-avatar'"
                 :code="StatListWithAvatarRaw"
                 :component="StatListWithAvatar"
    />

    <CodeSnippet v-if="section === 'with-icons-and-image'"
                 :code="StatListWithIconsAndImageRaw"
                 :component="StatListWithIconsAndImage"
    />

    <CodeSnippet v-if="section === 'centered-item'"
                 :code="CenteredItemStatListRaw"
                 :component="CenteredItemStatList"
    />

    <CodeSnippet v-if="section === 'vertical'"
                 :code="VerticalStatListRaw"
                 :component="VerticalStatList"
    />

    <CodeSnippet v-if="section === 'bordered'"
                 :code="BorderedStatListRaw"
                 :component="BorderedStatList"
    />
</template>

<script setup lang="ts">
import CodeSnippet                  from '../../.vitepress/theme/Components/CodeSnippet.vue';
import BorderedStatList             from './BorderedStatList.vue';
import BorderedStatListRaw          from './BorderedStatList.vue?raw';
import CenteredItemStatList         from './CenteredItemStatList.vue';
import CenteredItemStatListRaw      from './CenteredItemStatList.vue?raw';
import DefaultStatList              from './DefaultStatList.vue';
import DefaultStatListRaw           from './DefaultStatList.vue?raw';
import StatListWithAvatar           from './StatListWithAvatar.vue';
import StatListWithAvatarRaw        from './StatListWithAvatar.vue?raw';
import StatListWithIconsAndImage    from './StatListWithIconsAndImage.vue';
import StatListWithIconsAndImageRaw from './StatListWithIconsAndImage.vue?raw';
import VerticalStatList             from './VerticalStatList.vue';
import VerticalStatListRaw          from './VerticalStatList.vue?raw';

interface Props {
    section: 'default' | 'with-avatar' | 'with-icons-and-image' | 'centered-item' | 'vertical' | 'bordered';
}

defineProps<Props>();
</script>
