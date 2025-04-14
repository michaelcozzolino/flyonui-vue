<template>
    <FoInputText v-model="name"
                 :label="{ text: 'Name', type: 'inline' }"
                 :icon="{ left: 'tabler:user' }"
                 placeholder="John Doe"
    />

    <FoInputText v-model="email"
                 :label="{ text: 'Email', type: 'floating' }"
                 :icon="{ left: 'tabler:brand-mailgun' }"
                 placeholder="admin@site.com"
    />

    <FoInputText v-model="cardNumber"
                 :label="{ text: 'Card Number', type: 'inline' }"
                 :icon="{ right: 'tabler:brand-mastercard' }"
                 placeholder="xxxx-xxxx-xxxx-xxxx"
    />

    <FoInputText v-model="cardNumber"
                 :label="{ text: 'Card Number', type: 'floating' }"
                 :icon="{ right: 'tabler:brand-mastercard' }"
                 placeholder="xxxx-xxxx-xxxx-xxxx"
    />

    <FoInputText v-model="customDomain"
                 :label="{ text: 'Domain', type: 'floating' }"
                 :icon="{ left: 'gridicons:domains' }"
                 placeholder="My custom domain"
    >
        <template #append>
            <FoLabel type="inline">
                .com
            </FoLabel>
        </template>
    </FoInputText>

    <FoInputText v-model="customDomain"
                 :label="{ text: 'Domain', type: 'floating' }"
                 placeholder="My custom domain"
    >
        <template #prepend>
            <FoLabel type="inline">
                www.
            </FoLabel>
        </template>
        <template #append>
            <FoLabel type="inline">
                .com
            </FoLabel>
        </template>
    </FoInputText>

    <!--    todo: add kbd -->

    <FoInputText v-model="customDomain"
                 placeholder="John Doe"
    >
        <template #prepend>
            <FoCheckbox v-model="isChecked"
                        color="primary"
            />
        </template>
    </FoInputText>
    <!--    todo: add radio -->
</template>

<script setup lang="ts">
import { FoCheckbox, FoInputText, FoLabel } from 'flyonui-vue';
import { ref }                              from 'vue';

const name         = ref<string>('');
const email        = ref<string>('');
const cardNumber   = ref<string>('');
const customDomain = ref<string>('');
const isChecked    = ref<boolean>(false);
</script>
