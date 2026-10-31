<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoButton', 'FoLoadingButton', 'FoSocialButton']"
    />
</template>

<script setup lang="ts">
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import ButtonLayout                     from '@/Components/Button/ButtonLayout.vue';
import ButtonLayoutRaw                  from '@/Components/Button/ButtonLayout.vue?raw';
import ButtonSize                       from '@/Components/Button/ButtonSize.vue';
import ButtonSizeRaw                    from '@/Components/Button/ButtonSize.vue?raw';
import ButtonState                      from '@/Components/Button/ButtonState.vue';
import ButtonStateRaw                   from '@/Components/Button/ButtonState.vue?raw';
import DashedButton                     from '@/Components/Button/DashedButton.vue';
import DashedButtonRaw                  from '@/Components/Button/DashedButton.vue?raw';
import GlassButton                      from '@/Components/Button/GlassButton.vue';
import GlassButtonRaw                   from '@/Components/Button/GlassButton.vue?raw';
import GradientButton                   from '@/Components/Button/GradientButton.vue';
import GradientButtonRaw                from '@/Components/Button/GradientButton.vue?raw';
import IconButton                       from '@/Components/Button/IconButton.vue';
import IconButtonRaw                    from '@/Components/Button/IconButton.vue?raw';
import IconPositionButton               from '@/Components/Button/IconPositionButton.vue';
import IconPositionButtonRaw            from '@/Components/Button/IconPositionButton.vue?raw';
import LoadingButton                    from '@/Components/Button/LoadingButton.vue';
import LoadingButtonRaw                 from '@/Components/Button/LoadingButton.vue?raw';
import OutlineButton                    from '@/Components/Button/OutlineButton.vue';
import OutlineButtonRaw                 from '@/Components/Button/OutlineButton.vue?raw';
import PilledButton                     from '@/Components/Button/PilledButton.vue';
import PilledButtonRaw                  from '@/Components/Button/PilledButton.vue?raw';
import SocialButton                     from '@/Components/Button/SocialButton.vue';
import SocialButtonRaw                  from '@/Components/Button/SocialButton.vue?raw';
import SocialButtonShape                from '@/Components/Button/SocialButtonShape.vue';
import SocialButtonShapeRaw             from '@/Components/Button/SocialButtonShape.vue?raw';
import SoftButton                       from '@/Components/Button/SoftButton.vue';
import SoftButtonRaw                    from '@/Components/Button/SoftButton.vue?raw';
import SolidButton                      from '@/Components/Button/SolidButton.vue';
import SolidButtonRaw                   from '@/Components/Button/SolidButton.vue?raw';
import TextButton                       from '@/Components/Button/TextButton.vue';
import TextButtonRaw                    from '@/Components/Button/TextButton.vue?raw';

type Section = 'solid'
    | 'soft'
    | 'outline'
    | 'dash'
    | 'text'
    | 'gradient'
    | 'pilled'
    | 'state'
    | 'size'
    | 'layout'
    | 'icon'
    | 'icon-position'
    | 'social'
    | 'social-shape'
    | 'loading'
    | 'glass'
    | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed((): Map<Section, FrameworkSectionPreview> => {
    return new Map<Section, FrameworkSectionPreview>([
        [
            'solid',
            {
                vue: {
                    codePreview: SolidButtonRaw,
                    component:   SolidButton,
                },
            },
        ],
        [
            'soft',
            {
                vue: {
                    codePreview: SoftButtonRaw,
                    component:   SoftButton,
                },
            },
        ],
        [
            'outline',
            {
                vue: {
                    codePreview: OutlineButtonRaw,
                    component:   OutlineButton,
                },
            },
        ],
        [
            'dash',
            {
                vue: {
                    codePreview: DashedButtonRaw,
                    component:   DashedButton,
                },
            },
        ],
        [
            'text',
            {
                vue: {
                    codePreview: TextButtonRaw,
                    component:   TextButton,
                },
            },
        ],
        [
            'gradient',
            {
                vue: {
                    codePreview: GradientButtonRaw,
                    component:   GradientButton,
                },
            },
        ],
        [
            'pilled',
            {
                vue: {
                    codePreview: PilledButtonRaw,
                    component:   PilledButton,
                },
            },
        ],
        [
            'state',
            {
                vue: {
                    codePreview: ButtonStateRaw,
                    component:   ButtonState,
                },
            },
        ],
        [
            'size',
            {
                vue: {
                    codePreview: ButtonSizeRaw,
                    component:   ButtonSize,
                },
            },
        ],
        [
            'layout',
            {
                vue: {
                    codePreview: ButtonLayoutRaw,
                    component:   ButtonLayout,
                },
            },
        ],
        [
            'icon',
            {
                vue: {
                    codePreview: IconButtonRaw,
                    component:   IconButton,
                },
            },
        ],
        [
            'icon-position',
            {
                vue: {
                    codePreview: IconPositionButtonRaw,
                    component:   IconPositionButton,
                },
            },
        ],
        [
            'social',
            {
                vue: {
                    codePreview: SocialButtonRaw,
                    component:   SocialButton,
                },
            },
        ],
        [
            'social-shape',
            {
                vue: {
                    codePreview: SocialButtonShapeRaw,
                    component:   SocialButtonShape,
                },
                grid: { columns: 4, rows: 3 },
            },
        ],
        [
            'loading',
            {
                vue: {
                    codePreview: LoadingButtonRaw,
                    component:   LoadingButton,
                },
                excludeFromTests: true,
            },
        ],
        [
            'glass',
            {
                vue: {
                    codePreview: GlassButtonRaw,
                    component:   GlassButton,
                },
            },
        ],
    ]);
});
</script>
