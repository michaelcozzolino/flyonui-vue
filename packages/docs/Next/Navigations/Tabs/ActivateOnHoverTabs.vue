<template>
    <FoTabs v-model="activeTab"
            :tabs="tabs"
            activate-on-hover
    >
        <template #[homeTab.id]>
            Home
        </template>

        <template #[`content-${homeTab.id}`]>
            <p class="text-base-content/80">
                Welcome to the
                <span class="text-base-content font-semibold">Home tab!</span>
                Explore the latest updates and news here.
            </p>
        </template>

        <template #[profileTab.id]>
            Profile
        </template>

        <template #[`content-${profileTab.id}`]>
            <p class="text-base-content/80">
                This is your
                <span class="text-base-content font-semibold">Profile</span> tab,
                where you can update your personal information and manage your account details.
            </p>
        </template>

        <template #[messagesTab.id]>
            Messages
        </template>

        <template #[`content-${messagesTab.id}`]>
            <p class="text-base-content/80">
                <span class="text-base-content font-semibold">Messages:</span>
                View your recent messages, chat with friends, and manage your conversations.
            </p>
        </template>
    </FoTabs>
</template>

<script setup lang="ts">
import type { TabProps } from 'flyonui-vue';
import { FoTabs }        from 'flyonui-vue';
import { reactive, ref } from 'vue';

const homeTab     = reactive<TabProps>({ id: 'home' });
const profileTab  = reactive<TabProps>({ id: 'profile' });
const messagesTab = reactive<TabProps>({ id: 'messages' });

const tabs = ref<TabProps[]>([
    homeTab,
    profileTab,
    messagesTab,
]);

const activeTab = ref<Readonly<TabProps>>(homeTab);
</script>
