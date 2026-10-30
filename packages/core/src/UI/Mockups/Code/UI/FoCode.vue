<template>
    <div class="mockup-code">
        <slot>
            {{ useRequiredSlotMessage('FoCode') }}
        </slot>
    </div>
</template>

<script setup lang="ts">
import { useRequiredSlotMessage } from '@/Lib/Utils/Internal';
</script>
