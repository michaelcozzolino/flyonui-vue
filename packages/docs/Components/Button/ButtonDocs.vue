<template>
    <CodeSnippet v-if="section === 'solid'"
                 :data-test-screenshot="section"
                 :code="DefaultButtonRaw"
                 :component="DefaultButton"
    />

    <CodeSnippet v-else-if="section === 'soft'"
                 :data-test-screenshot="section"
                 :code="SoftButtonRaw"
                 :component="SoftButton"
    />

    <CodeSnippet v-else-if="section === 'outline'"
                 :data-test-screenshot="section"
                 :code="OutlineButtonRaw"
                 :component="OutlineButton"
    />

    <CodeSnippet v-else-if="section === 'dash'"
                 :data-test-screenshot="section"
                 :code="DashedButtonRaw"
                 :component="DashedButton"
    />

    <CodeSnippet v-else-if="section === 'text'"
                 :data-test-screenshot="section"
                 :code="TextButtonRaw"
                 :component="TextButton"
    />

    <CodeSnippet v-else-if="section === 'gradient'"
                 :data-test-screenshot="section"
                 :code="GradientButtonRaw"
                 :component="GradientButton"
    />

    <CodeSnippet v-else-if="section === 'pilled'"
                 :data-test-screenshot="section"
                 :code="PilledButtonRaw"
                 :component="PilledButton"
    />

    <CodeSnippet v-else-if="section === 'validation-state'"
                 :data-test-screenshot="section"
                 :code="ButtonStateRaw"
                 :component="ButtonState"
    />

    <CodeSnippet v-else-if="section === 'size'"
                 :data-test-screenshot="section"
                 :code="ButtonSizeRaw"
                 :component="ButtonSize"
    />

    <CodeSnippet v-else-if="section === 'layout'"
                 :data-test-screenshot="section"
                 :code="ButtonLayoutRaw"
                 :component="ButtonLayout"
    />

    <CodeSnippet v-else-if="section === 'icon'"
                 :data-test-screenshot="section"
                 :code="IconButtonRaw"
                 :component="IconButton"
    />

    <CodeSnippet v-else-if="section === 'icon-position'"
                 :data-test-screenshot="section"
                 :code="IconPositionButtonRaw"
                 :component="IconPositionButton"
    />

    <CodeSnippet v-else-if="section === 'social'"
                 :data-test-screenshot="section"
                 :code="SocialButtonRaw"
                 :component="SocialButton"
    />

    <CodeSnippet v-else-if="section === 'social-shape'"
                 :data-test-screenshot="section"
                 :preview="{ columns: 4, rows: 3 }"
                 :code="SocialButtonShapeRaw"
                 :component="SocialButtonShape"
    />

    <CodeSnippet v-else-if="section === 'loading'"
                 :code="LoadingButtonRaw"
                 :component="LoadingButton"
    />

    <CodeSnippet v-else-if="section === 'glass'"
                 :data-test-screenshot="section"
                 :code="GlassButtonRaw"
                 :component="GlassButton"
    />

    <ComponentsApiDocs v-else
                       :section="section"
                       :component-names="['FoButton', 'FoLoadingButton', 'FoSocialButton']"
    />
</template>

<script setup lang="ts">
import type { ApiType }      from '@/Api/Types/Api.ts';
import CodeSnippet           from '@/.vitepress/theme/Components/CodeSnippet/UI/CodeSnippet.vue';
import ComponentsApiDocs     from '@/Api/UI/ComponentsApiDocs.vue';
import ButtonLayout          from '@/Components/Button/ButtonLayout.vue';
import ButtonLayoutRaw       from '@/Components/Button/ButtonLayout.vue?raw';
import ButtonSize            from '@/Components/Button/ButtonSize.vue';
import ButtonSizeRaw         from '@/Components/Button/ButtonSize.vue?raw';
import ButtonState           from '@/Components/Button/ButtonState.vue';
import ButtonStateRaw        from '@/Components/Button/ButtonState.vue?raw';
import DashedButton          from '@/Components/Button/DashedButton.vue';
import DashedButtonRaw       from '@/Components/Button/DashedButton.vue?raw';
import DefaultButton         from '@/Components/Button/DefaultButton.vue';
import DefaultButtonRaw      from '@/Components/Button/DefaultButton.vue?raw';
import GlassButton           from '@/Components/Button/GlassButton.vue';
import GlassButtonRaw        from '@/Components/Button/GlassButton.vue?raw';
import GradientButton        from '@/Components/Button/GradientButton.vue';
import GradientButtonRaw     from '@/Components/Button/GradientButton.vue?raw';
import IconButton            from '@/Components/Button/IconButton.vue';
import IconButtonRaw         from '@/Components/Button/IconButton.vue?raw';
import IconPositionButton    from '@/Components/Button/IconPositionButton.vue';
import IconPositionButtonRaw from '@/Components/Button/IconPositionButton.vue?raw';
import LoadingButton         from '@/Components/Button/LoadingButton.vue';
import LoadingButtonRaw      from '@/Components/Button/LoadingButton.vue?raw';
import OutlineButton         from '@/Components/Button/OutlineButton.vue';
import OutlineButtonRaw      from '@/Components/Button/OutlineButton.vue?raw';
import PilledButton          from '@/Components/Button/PilledButton.vue';
import PilledButtonRaw       from '@/Components/Button/PilledButton.vue?raw';
import SocialButton          from '@/Components/Button/SocialButton.vue';
import SocialButtonRaw       from '@/Components/Button/SocialButton.vue?raw';
import SocialButtonShape     from '@/Components/Button/SocialButtonShape.vue';
import SocialButtonShapeRaw  from '@/Components/Button/SocialButtonShape.vue?raw';
import SoftButton            from '@/Components/Button/SoftButton.vue';
import SoftButtonRaw         from '@/Components/Button/SoftButton.vue?raw';
import TextButton            from '@/Components/Button/TextButton.vue';
import TextButtonRaw         from '@/Components/Button/TextButton.vue?raw';

interface Props {
    section: 'solid'
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
}

defineProps<Props>();
</script>
