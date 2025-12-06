<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoButton', 'FoLoadingButton', 'FoSocialButton']"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }              from '@/Api/Types/Api.ts';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import ButtonLayout                  from '@/Components/Button/ButtonLayout.vue';
import ButtonLayoutRaw               from '@/Components/Button/ButtonLayout.vue?raw';
import ButtonSize                    from '@/Components/Button/ButtonSize.vue';
import ButtonSizeRaw                 from '@/Components/Button/ButtonSize.vue?raw';
import ButtonState                   from '@/Components/Button/ButtonState.vue';
import ButtonStateRaw                from '@/Components/Button/ButtonState.vue?raw';
import DashedButton                  from '@/Components/Button/DashedButton.vue';
import DashedButtonRaw               from '@/Components/Button/DashedButton.vue?raw';
import DefaultButton                 from '@/Components/Button/DefaultButton.vue';
import DefaultButtonRaw              from '@/Components/Button/DefaultButton.vue?raw';
import GlassButton                   from '@/Components/Button/GlassButton.vue';
import GlassButtonRaw                from '@/Components/Button/GlassButton.vue?raw';
import GradientButton                from '@/Components/Button/GradientButton.vue';
import GradientButtonRaw             from '@/Components/Button/GradientButton.vue?raw';
import IconButton                    from '@/Components/Button/IconButton.vue';
import IconButtonRaw                 from '@/Components/Button/IconButton.vue?raw';
import IconPositionButton            from '@/Components/Button/IconPositionButton.vue';
import IconPositionButtonRaw         from '@/Components/Button/IconPositionButton.vue?raw';
import LoadingButton                 from '@/Components/Button/LoadingButton.vue';
import LoadingButtonRaw              from '@/Components/Button/LoadingButton.vue?raw';
import OutlineButton                 from '@/Components/Button/OutlineButton.vue';
import OutlineButtonRaw              from '@/Components/Button/OutlineButton.vue?raw';
import PilledButton                  from '@/Components/Button/PilledButton.vue';
import PilledButtonRaw               from '@/Components/Button/PilledButton.vue?raw';
import SocialButton                  from '@/Components/Button/SocialButton.vue';
import SocialButtonRaw               from '@/Components/Button/SocialButton.vue?raw';
import SocialButtonShape             from '@/Components/Button/SocialButtonShape.vue';
import SocialButtonShapeRaw          from '@/Components/Button/SocialButtonShape.vue?raw';
import SoftButton                    from '@/Components/Button/SoftButton.vue';
import SoftButtonRaw                 from '@/Components/Button/SoftButton.vue?raw';
import TextButton                    from '@/Components/Button/TextButton.vue';
import TextButtonRaw                 from '@/Components/Button/TextButton.vue?raw';
import { computed }                  from 'vue';

type Section = 'solid'
    | 'soft'
    | 'outline'
    | 'dash'
    | 'text'
    | 'gradient'
    | 'pilled'
    | 'validation-state'
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

const previews = computed(() => {
    return new Map<Section, ComponentDocsPreview>([
        [
            'solid',
            {
                code:      DefaultButtonRaw,
                component: DefaultButton,
            },
        ],
        [
            'soft',
            {
                code:      SoftButtonRaw,
                component: SoftButton,
            },
        ],
        [
            'outline',
            {
                code:      OutlineButtonRaw,
                component: OutlineButton,
            },
        ],
        [
            'dash',
            {
                code:      DashedButtonRaw,
                component: DashedButton,
            },
        ],
        [
            'text',
            {
                code:      TextButtonRaw,
                component: TextButton,
            },
        ],
        [
            'gradient',
            {
                code:      GradientButtonRaw,
                component: GradientButton,
            },
        ],
        [
            'pilled',
            {
                code:      PilledButtonRaw,
                component: PilledButton,
            },
        ],
        [
            'validation-state',
            {
                code:      ButtonStateRaw,
                component: ButtonState,
            },
        ],
        [
            'size',
            {
                code:      ButtonSizeRaw,
                component: ButtonSize,
            },
        ],
        [
            'layout',
            {
                code:      ButtonLayoutRaw,
                component: ButtonLayout,
            },
        ],
        [
            'icon',
            {
                code:      IconButtonRaw,
                component: IconButton,
            },
        ],
        [
            'icon-position',
            {
                code:      IconPositionButtonRaw,
                component: IconPositionButton,
            },
        ],
        [
            'social',
            {
                code:      SocialButtonRaw,
                component: SocialButton,
            },
        ],
        [
            'social-shape',
            {
                grid:      { columns: 4, rows: 3 },
                code:      SocialButtonShapeRaw,
                component: SocialButtonShape,
            },
        ],
        [
            'loading',
            {
                code:             LoadingButtonRaw,
                component:        LoadingButton,
                excludeFromTests: true,
            },
        ],
        [
            'glass',
            {
                code:      GlassButtonRaw,
                component: GlassButton,
            },
        ],
    ]);
});
</script>
