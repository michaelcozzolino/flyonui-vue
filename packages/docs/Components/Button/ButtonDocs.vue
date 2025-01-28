<template>
    <CodeSnippet v-if="section === 'solid'"
                 :code="SolidButtonRaw"
                 :component="SolidButton"
    />

    <CodeSnippet v-else-if="section === 'soft'"
                 :code="SoftButtonRaw"
                 :component="SoftButton"
    />

    <CodeSnippet v-else-if="section === 'outline'"
                 :code="OutlineButtonRaw"
                 :component="OutlineButton"
    />

    <CodeSnippet v-else-if="section === 'text'"
                 :code="TextButtonRaw"
                 :component="TextButton"
    />

    <CodeSnippet v-else-if="section === 'gradient'"
                 :code="GradientButtonRaw"
                 :component="GradientButton"
    />

    <CodeSnippet v-else-if="section === 'pilled'"
                 :code="PilledButtonRaw"
                 :component="PilledButton"
    />

    <CodeSnippet v-else-if="section === 'state'"
                 :code="ButtonStateRaw"
                 :component="ButtonState"
    />

    <CodeSnippet v-else-if="section === 'size'"
                 :code="ButtonSizeRaw"
                 :component="ButtonSize"
    />

    <CodeSnippet v-else-if="section === 'layout'"
                 :code="ButtonLayoutRaw"
                 :component="ButtonLayout"
    />

    <CodeSnippet v-else-if="section === 'social'"
                 :preview="{ columns: 4, rows: 3 }"
                 :code="SocialButtonRaw"
                 :component="SocialButton"
    />

    <CodeSnippet v-else-if="section === 'social-shape'"
                 :preview="{ columns: 4, rows: 3 }"
                 :code="SocialButtonShapeRaw"
                 :component="SocialButtonShape"
    />

    <CodeSnippet v-else-if="section === 'loading'"
                 :code="LoadingButtonRaw"
                 :component="LoadingButton"
    />

    <CodeSnippet v-else-if="section === 'glass'"
                 :code="GlassButtonRaw"
                 :component="GlassButton"
    />

    <CodeSnippet v-else-if="section === 'no-animation'"
                 :code="NoAnimationButtonRaw"
                 :component="NoAnimationButton"
    />
</template>

<script setup lang="ts">
import CodeSnippet          from '../../.vitepress/theme/Components/CodeSnippet.vue';
import ButtonLayout         from './ButtonLayout.vue';
import ButtonLayoutRaw      from './ButtonLayout.vue?raw';
import ButtonSize           from './ButtonSize.vue';
import ButtonSizeRaw        from './ButtonSize.vue?raw';
import ButtonState          from './ButtonState.vue';
import ButtonStateRaw       from './ButtonState.vue?raw';
import GlassButton          from './GlassButton.vue';
import GlassButtonRaw       from './GlassButton.vue?raw';
import GradientButton       from './GradientButton.vue';
import GradientButtonRaw    from './GradientButton.vue?raw';
import LoadingButton        from './LoadingButton.vue';
import LoadingButtonRaw     from './LoadingButton.vue?raw';
import NoAnimationButton    from './NoAnimationButton.vue';
import NoAnimationButtonRaw from './NoAnimationButton.vue?raw';
import OutlineButton        from './OutlineButton.vue';
import OutlineButtonRaw     from './OutlineButton.vue?raw';
import PilledButton         from './PilledButton.vue';
import PilledButtonRaw      from './PilledButton.vue?raw';
import SocialButton         from './SocialButton.vue';
import SocialButtonRaw      from './SocialButton.vue?raw';
import SocialButtonShape    from './SocialButtonShape.vue';
import SocialButtonShapeRaw from './SocialButtonShape.vue?raw';
import SoftButton           from './SoftButton.vue';
import SoftButtonRaw        from './SoftButton.vue?raw';
import SolidButton          from './SolidButton.vue';
import SolidButtonRaw       from './SolidButton.vue?raw';
import TextButton           from './TextButton.vue';
import TextButtonRaw        from './TextButton.vue?raw';

interface Props {
    section: 'solid' | 'soft' | 'outline' | 'text' | 'gradient' | 'pilled' | 'state' | 'size' | 'layout' | 'social' | 'social-shape' | 'loading' | 'glass' | 'no-animation';
}

defineProps<Props>();
</script>
