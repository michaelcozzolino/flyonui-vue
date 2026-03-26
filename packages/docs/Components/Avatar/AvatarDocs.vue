<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoAvatar', 'FoAvatarGroup']"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview }  from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }               from '@/Api/Types/Api.ts';
import ComponentDocs                  from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import AnimatedAvatarGroup            from '@/Components/Avatar/AnimatedAvatarGroup.vue';
import AnimatedAvatarGroupRaw         from '@/Components/Avatar/AnimatedAvatarGroup.vue?raw';
import AvatarBottomStatusIndicator    from '@/Components/Avatar/AvatarBottomStatusIndicator.vue';
import AvatarBottomStatusIndicatorRaw from '@/Components/Avatar/AvatarBottomStatusIndicator.vue?raw';
import AvatarGroup                    from '@/Components/Avatar/AvatarGroup.vue';
import AvatarGroupRaw                 from '@/Components/Avatar/AvatarGroup.vue?raw';
import AvatarIconPlaceholder          from '@/Components/Avatar/AvatarIconPlaceholder.vue';
import AvatarIconPlaceholderRaw       from '@/Components/Avatar/AvatarIconPlaceholder.vue?raw';
import AvatarInitialsPlaceholder      from '@/Components/Avatar/AvatarInitialsPlaceholder.vue';
import AvatarInitialsPlaceholderRaw   from '@/Components/Avatar/AvatarInitialsPlaceholder.vue?raw';
import AvatarLogoIndicator            from '@/Components/Avatar/AvatarLogoIndicator.vue';
import AvatarLogoIndicatorRaw         from '@/Components/Avatar/AvatarLogoIndicator.vue?raw';
import AvatarShape                    from '@/Components/Avatar/AvatarShape.vue';
import AvatarShapeRaw                 from '@/Components/Avatar/AvatarShape.vue?raw';
import AvatarSize                     from '@/Components/Avatar/AvatarSize.vue';
import AvatarSizeRaw                  from '@/Components/Avatar/AvatarSize.vue?raw';
import AvatarTopStatusIndicator       from '@/Components/Avatar/AvatarTopStatusIndicator.vue';
import AvatarTopStatusIndicatorRaw    from '@/Components/Avatar/AvatarTopStatusIndicator.vue?raw';
import MaskedAvatar                   from '@/Components/Avatar/MaskedAvatar.vue';
import MaskedAvatarRaw                from '@/Components/Avatar/MaskedAvatar.vue?raw';
import OutlineAvatar                  from '@/Components/Avatar/OutlineAvatar.vue';
import OutlineAvatarRaw               from '@/Components/Avatar/OutlineAvatar.vue?raw';
import SoftAvatar                     from '@/Components/Avatar/SoftAvatar.vue';
import SoftAvatarRaw                  from '@/Components/Avatar/SoftAvatar.vue?raw';
import SolidAvatar                    from '@/Components/Avatar/SolidAvatar.vue';
import SolidAvatarRaw                 from '@/Components/Avatar/SolidAvatar.vue?raw';
import { computed }                   from 'vue';

type Section = 'shape'
    | 'size'
    | 'masked'
    | 'icon-placeholder'
    | 'text-placeholder'
    | 'solid'
    | 'soft'
    | 'outline'
    | 'top-status-indicator'
    | 'bottom-status-indicator'
    | 'logo-indicator'
    | 'group'
    | 'animated-group'
    | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Section, ComponentDocsPreview>([
        [
            'shape',
            {
                code:      AvatarShapeRaw,
                component: AvatarShape,
            },
        ],
        [
            'size',
            {
                code:      AvatarSizeRaw,
                component: AvatarSize,
            },
        ],
        [
            'masked',
            {
                code:      MaskedAvatarRaw,
                component: MaskedAvatar,
            },
        ],
        [
            'icon-placeholder',
            {
                code:      AvatarIconPlaceholderRaw,
                component: AvatarIconPlaceholder,
            },
        ],
        [
            'text-placeholder',
            {
                code:      AvatarInitialsPlaceholderRaw,
                component: AvatarInitialsPlaceholder,
            },
        ],
        [
            'solid',
            {
                code:      SolidAvatarRaw,
                component: SolidAvatar,
            },
        ],
        [
            'soft',
            {
                code:      SoftAvatarRaw,
                component: SoftAvatar,
            },
        ],
        [
            'outline',
            {
                code:      OutlineAvatarRaw,
                component: OutlineAvatar,
            },
        ],
        [
            'top-status-indicator',
            {
                code:      AvatarTopStatusIndicatorRaw,
                component: AvatarTopStatusIndicator,
            },
        ],
        [
            'bottom-status-indicator',
            {
                code:      AvatarBottomStatusIndicatorRaw,
                component: AvatarBottomStatusIndicator,
            },
        ],
        [
            'logo-indicator',
            {
                code:      AvatarLogoIndicatorRaw,
                component: AvatarLogoIndicator,
            },
        ],
        [
            'group',
            {
                code:      AvatarGroupRaw,
                component: AvatarGroup,
            },
        ],
        [
            'animated-group',
            {
                code:      AnimatedAvatarGroupRaw,
                component: AnimatedAvatarGroup,
            },
        ],
    ]);
});
</script>
