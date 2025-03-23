<template>
    <FoListGroup class="w-96">
        <FoListGroupItem v-for="(item, index) in invoiceItems"
                         :key="item.id"
                         class="justify-between"
                         :is-striped="index === invoiceItems.length - 1"
        >
            {{ item.text }}

            <span class="text-base-content">
                &#8377; {{ item.amount }}
            </span>
        </FoListGroupItem>
    </FoListGroup>
</template>

<script setup lang="ts">
import type { Identifiable }            from 'flyonui-vue';
import { FoListGroup, FoListGroupItem } from 'flyonui-vue';
import { ref }                          from 'vue';

const invoiceItems = ref<(Identifiable & { text: string; amount: number })[]>([
    {
        id:     1,
        text:   'Payment to Front',
        amount: 264,
    },
    {
        id:     2,
        text:   'Discount',
        amount: 50,
    },
    {
        id:     3,
        text:   'Amount paid',
        amount: 214,
    },
]);
</script>
