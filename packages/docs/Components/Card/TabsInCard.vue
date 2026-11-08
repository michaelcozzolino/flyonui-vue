<template>
    <FoCard class="md:max-w-md">
        <FoCardBody>
            <FoTabs v-model="activeTab"
                    :tabs="tabs"
                    is-filled
            >
                <template #[homeTab.id]>
                    Home
                </template>

                <template #[`content-${homeTab.id}`]>
                    <p class="text-base-content/80">
                        Welcome to the
                        <span class="text-base-content font-semibold">Home tab!</span>
                        Here, you can explore the latest updates, news, and highlights.
                        Stay informed about what's happening and never miss out on important announcements.
                    </p>
                </template>

                <template #[profileTab.id]>
                    Profile
                </template>

                <template #[`content-${profileTab.id}`]>
                    <p class="text-base-content/80">
                        This is your
                        <span class="text-base-content font-semibold">Profile</span> tab.
                        Manage your personal information, update your account details,
                        and customize your settings to make your experience unique.
                    </p>
                </template>

                <template #[messagesTab.id]>
                    Messages
                </template>

                <template #[`content-${messagesTab.id}`]>
                    <p class="text-base-content/80">
                        <span class="text-base-content font-semibold">Messages:</span>
                        Check your recent messages, start new conversations, and stay connected with your friends and contacts.
                        Manage your chat history and keep the communication flowing.
                    </p>
                </template>
            </FoTabs>
        </FoCardBody>
    </FoCard>
</template>

<script setup lang="ts">
import type { TabProps }              from 'flyonui-vue';
import { FoCard, FoCardBody, FoTabs } from 'flyonui-vue';
import { reactive, ref }              from 'vue';

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
