<template>
    <FoJoin>
        <FoInputText v-model="email"
                     placeholder="Email"
                     shape="pilled"
        />

        <FoButton preset="soft"
                  color="primary"
                  shape="pilled"
        >
            Subscribe
        </FoButton>
    </FoJoin>
</template>

<script setup lang="ts">
import { FoButton, FoInputText, FoJoin } from 'flyonui-vue';
import { ref }                           from 'vue';

const email = ref<string>('');
</script>
