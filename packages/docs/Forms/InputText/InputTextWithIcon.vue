<template>
    <div class="max-w-sm">
        <FoInputText v-model="name"
                     :label="{ text: 'Name', type: 'inline' }"
                     icon="tabler:user"
                     placeholder="John Doe"
        />
    </div>

    <div class="max-w-sm">
        <FoInputText v-model="email"
                     :label="{ text: 'Email', type: 'floating' }"
                     :icon="{ left: 'tabler:brand-mailgun' }"
                     placeholder="admin@site.com"
        />
    </div>

    <div class="max-w-sm">
        <FoInputText v-model="cardNumber"
                     :label="{ text: 'Card Number', type: 'inline' }"
                     :icon="{ right: 'tabler:brand-mastercard' }"
                     placeholder="xxxx-xxxx-xxxx-xxxx"
        />
    </div>

    <div class="max-w-sm">
        <FoInputText v-model="cardNumber"
                     :label="{ text: 'Card', type: 'floating' }"
                     :icon="{ right: 'tabler:brand-mastercard' }"
                     placeholder="xxxx-xxxx-xxxx-xxxx"
        />
    </div>

    <div class="max-w-sm">
        <FoInputText v-model="customDomain"
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
    </div>

    <div class="max-w-sm">
        <FoInputText v-model="customDomain"
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
    </div>

    <!--    todo: add kbd -->

    <div class="max-w-sm">
        <FoInputText v-model="customDomain"
                     placeholder="John Doe"
        >
            <template #prepend>
                <FoCheckbox v-model="isChecked"
                            color="primary"
                />
            </template>
        </FoInputText>
    </div>
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
