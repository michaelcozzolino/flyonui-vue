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

    <CodeSnippet v-else-if="section === 'icon'"
                 :code="IconButtonRaw"
                 :component="IconButton"
                 :preview="{ columns: 8, rows: 2 }"
    />

    <CodeSnippet v-else-if="section === 'icon-position'"
                 :code="IconPositionButtonRaw"
                 :component="IconPositionButton"
    />

    <CodeSnippet v-else-if="section === 'social'"
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
import CodeSnippet           from '@/.vitepress/theme/Components/CodeSnippet.vue';
import ButtonLayout          from '@/Components/Button/ButtonLayout.vue';
import ButtonLayoutRaw       from '@/Components/Button/ButtonLayout.vue?raw';
import ButtonSize            from '@/Components/Button/ButtonSize.vue';
import ButtonSizeRaw         from '@/Components/Button/ButtonSize.vue?raw';
import ButtonState           from '@/Components/Button/ButtonState.vue';
import ButtonStateRaw        from '@/Components/Button/ButtonState.vue?raw';
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
import NoAnimationButton     from '@/Components/Button/NoAnimationButton.vue';
import NoAnimationButtonRaw  from '@/Components/Button/NoAnimationButton.vue?raw';
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
import SolidButton           from '@/Components/Button/SolidButton.vue';
import SolidButtonRaw        from '@/Components/Button/SolidButton.vue?raw';
import TextButton            from '@/Components/Button/TextButton.vue';
import TextButtonRaw         from '@/Components/Button/TextButton.vue?raw';

interface Props {
    section: 'solid' | 'soft' | 'outline' | 'text' | 'gradient' | 'pilled' | 'state' | 'size' | 'layout' | 'icon' | 'icon-position' | 'social' | 'social-shape' | 'loading' | 'glass' | 'no-animation';
}

defineProps<Props>();
</script>
