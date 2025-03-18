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
                 :label="{ text: 'Card Number' }"
                 :icon="{ right: 'tabler:brand-mastercard' }"
                 placeholder="xxxx-xxxx-xxxx-xxxx"
    />

    <FoInputText v-model="cardNumber"
                 :label="{ text: 'Card Number', type: 'floating' }"
                 :icon="{ right: 'tabler:brand-mastercard' }"
                 placeholder="xxxx-xxxx-xxxx-xxxx"
    />

    <FoInputText v-model="name"
                 :label="{ text: 'Full Name', type: 'filled' }"
                 :icon="{ left: 'tabler:user' }"
                 placeholder="John Doe"
    />

    <FoInputText v-model="name"
                 :label="{ text: 'Card Number', type: 'filled' }"
                 :icon="{ right: 'tabler:brand-mastercard' }"
                 placeholder="xxxx-xxxx-xxxx-xxxx"
    />

    <FoInputText v-model="customDomain"
                 :label="{ text: 'Domain', type: 'floating' }"
                 :icon="{ left: 'gridicons:domains' }"
                 placeholder="My custom domain"
    >
        <template #append>
            .com
        </template>
    </FoInputText>

    <FoInputText v-model="customDomain"
                 :label="{ text: 'Domain', type: 'floating' }"
                 placeholder="My custom domain"
    >
        <template #prepend>
            www.
        </template>
        <template #append>
            .com
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
import { FoCheckbox, FoInputText } from 'flyonui-vue';
import { ref }                     from 'vue';

const name         = ref<string>('');
const email        = ref<string>('');
const cardNumber   = ref<string>('');
const customDomain = ref<string>('');
const isChecked    = ref<boolean>(false);
</script>
