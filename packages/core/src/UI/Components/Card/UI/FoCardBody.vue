<template>
    <div class="card-body">
        <slot>
            {{ useRequiredSlotMessage('FoCardBody') }}
        </slot>

        <slot name="actions" />
    </div>
</template>

<script setup lang="ts">
import type { CardBodySlots }     from '@/UI/Components';
import { useRequiredSlotMessage } from '@/Lib/Utils/Internal';

defineSlots<CardBodySlots>();
</script>
