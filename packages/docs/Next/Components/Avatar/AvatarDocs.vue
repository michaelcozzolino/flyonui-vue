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
import AnimatedAvatarGroup            from '@/Next/Components/Avatar/AnimatedAvatarGroup.vue';
import AnimatedAvatarGroupRaw         from '@/Next/Components/Avatar/AnimatedAvatarGroup.vue?raw';
import AvatarGroup                    from '@/Next/Components/Avatar/AvatarGroup.vue';
import AvatarGroupRaw                 from '@/Next/Components/Avatar/AvatarGroup.vue?raw';
import AvatarIconPlaceholder          from '@/Next/Components/Avatar/AvatarIconPlaceholder.vue';
import AvatarIconPlaceholderRaw       from '@/Next/Components/Avatar/AvatarIconPlaceholder.vue?raw';
import AvatarInitialsPlaceholder      from '@/Next/Components/Avatar/AvatarInitialsPlaceholder.vue';
import AvatarInitialsPlaceholderRaw   from '@/Next/Components/Avatar/AvatarInitialsPlaceholder.vue?raw';
import AvatarLogoIndicator            from '@/Next/Components/Avatar/AvatarLogoIndicator.vue';
import AvatarLogoIndicatorRaw         from '@/Next/Components/Avatar/AvatarLogoIndicator.vue?raw';
import AvatarShape                    from '@/Next/Components/Avatar/AvatarShape.vue';
import AvatarShapeRaw                 from '@/Next/Components/Avatar/AvatarShape.vue?raw';
import AvatarSize                     from '@/Next/Components/Avatar/AvatarSize.vue';
import AvatarSizeRaw                  from '@/Next/Components/Avatar/AvatarSize.vue?raw';
import AvatarStatusIndicatorBottom    from '@/Next/Components/Avatar/AvatarStatusIndicatorBottom.vue';
import AvatarStatusIndicatorBottomRaw from '@/Next/Components/Avatar/AvatarStatusIndicatorBottom.vue?raw';
import AvatarStatusIndicatorTop       from '@/Next/Components/Avatar/AvatarStatusIndicatorTop.vue';
import AvatarStatusIndicatorTopRaw    from '@/Next/Components/Avatar/AvatarStatusIndicatorTop.vue?raw';
import MaskedAvatar                   from '@/Next/Components/Avatar/MaskedAvatar.vue';
import MaskedAvatarRaw                from '@/Next/Components/Avatar/MaskedAvatar.vue?raw';
import OutlineAvatar                  from '@/Next/Components/Avatar/OutlineAvatar.vue';
import OutlineAvatarRaw               from '@/Next/Components/Avatar/OutlineAvatar.vue?raw';
import SoftAvatar                     from '@/Next/Components/Avatar/SoftAvatar.vue';
import SoftAvatarRaw                  from '@/Next/Components/Avatar/SoftAvatar.vue?raw';
import SolidAvatar                    from '@/Next/Components/Avatar/SolidAvatar.vue';
import SolidAvatarRaw                 from '@/Next/Components/Avatar/SolidAvatar.vue?raw';
import { computed }                   from 'vue';

type Section = 'shape'
    | 'size'
    | 'masked'
    | 'icon-placeholder'
    | 'text-placeholder'
    | 'solid'
    | 'soft'
    | 'outline'
    | 'status-indicator-top'
    | 'status-indicator-bottom'
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
            'status-indicator-top',
            {
                code:      AvatarStatusIndicatorTopRaw,
                component: AvatarStatusIndicatorTop,
            },
        ],
        [
            'status-indicator-bottom',
            {
                code:      AvatarStatusIndicatorBottomRaw,
                component: AvatarStatusIndicatorBottom,
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
