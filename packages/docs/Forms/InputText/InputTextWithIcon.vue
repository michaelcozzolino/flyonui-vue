<template>
    <FoInputText v-model="name"
                 class="max-w-sm"
                 :label="{ text: 'Name', type: 'inline' }"
                 icon="tabler:user"
                 placeholder="John Doe"
    />

    <FoInputText v-model="email"
                 class="max-w-sm"
                 :label="{ text: 'Email', type: 'floating' }"
                 :icon="{ left: 'tabler:brand-mailgun' }"
                 placeholder="admin@site.com"
    />

    <FoInputText v-model="cardNumber"
                 class="max-w-sm"
                 :label="{ text: 'Card Number', type: 'inline' }"
                 :icon="{ right: 'tabler:brand-mastercard' }"
                 placeholder="xxxx-xxxx-xxxx-xxxx"
    />

    <FoInputText v-model="cardNumber"
                 class="max-w-sm"
                 :label="{ text: 'Card Number', type: 'floating' }"
                 :icon="{ right: 'tabler:brand-mastercard' }"
                 placeholder="xxxx-xxxx-xxxx-xxxx"
    />

    <FoInputText v-model="customDomain"
                 class="max-w-sm"
                 :label="{ text: 'Domain', type: 'floating' }"
                 :icon="{ left: 'gridicons:domains' }"
                 placeholder="My custom domain"
    >
        <template #append>
            <FoInlineLabel type="inline">
                .com
            </FoInlineLabel>
        </template>
    </FoInputText>

    <FoInputText v-model="customDomain"
                 class="max-w-sm"
                 :label="{ text: 'Domain', type: 'floating' }"
                 placeholder="My custom domain"
    >
        <template #prepend>
            <FoInlineLabel type="inline">
                www.
            </FoInlineLabel>
        </template>
        <template #append>
            <FoInlineLabel type="inline">
                .com
            </FoInlineLabel>
        </template>
    </FoInputText>

    <!--    todo: add kbd -->

    <FoInputText v-model="customDomain"
                 class="max-w-sm"
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
import { FoCheckbox, FoInlineLabel, FoInputText } from 'flyonui-vue';
import { ref }                                    from 'vue';

const name         = ref<string>('');
const email        = ref<string>('');
const cardNumber   = ref<string>('');
const customDomain = ref<string>('');
const isChecked    = ref<boolean>(false);
</script>
