<template>
    <FoSocialButton social="facebook" />
    <FoSocialButton social="x" />
    <FoSocialButton social="linkedin" />

    <FoSocialButton social="github"
                    to="https://github.com/michaelcozzolino/flyonui-vue"
    />

    <FoSocialButton preset="soft"
                    social="facebook"
    />

    <FoSocialButton preset="soft"
                    social="x"
    />

    <FoSocialButton preset="soft"
                    social="linkedin"
    />

    <FoSocialButton preset="soft"
                    social="github"
    />

    <FoSocialButton preset="outline"
                    social="facebook"
    />

    <FoSocialButton preset="outline"
                    social="x"
    />

    <FoSocialButton preset="outline"
                    social="linkedin"
    />

    <FoSocialButton preset="outline"
                    social="github"
    />

    <FoSocialButton preset="outline"
                    social="github"
    >
        Star us on GitHub!
    </FoSocialButton>
</template>

<script setup lang="ts">
import { FoSocialButton } from 'flyonui-vue';
</script>
