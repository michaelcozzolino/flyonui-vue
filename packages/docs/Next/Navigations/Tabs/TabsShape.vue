<template>
    <FoTabs v-model="activeTab"
            :tabs="tabs"
            shape="rounded"
    >
        <template #tabs>
            <FoTab :id="homeTab.id">
                Home
            </FoTab>

            <FoTab :id="profileTab.id">
                Profile
            </FoTab>

            <FoTab :id="messagesTab.id">
                Messages
            </FoTab>
        </template>

        <template #contents>
            <FoTabContent :tab-id="homeTab.id">
                <p class="text-base-content/80">
                    Welcome to the
                    <span class="text-base-content font-semibold">Home tab!</span>
                    Explore the latest updates and news here.
                </p>
            </FoTabContent>

            <FoTabContent :tab-id="profileTab.id">
                <p class="text-base-content/80">
                    This is your
                    <span class="text-base-content font-semibold">Profile</span> tab,
                    where you can update your personal information and manage your account details.
                </p>
            </FoTabContent>

            <FoTabContent :tab-id="messagesTab.id">
                <p class="text-base-content/80">
                    <span class="text-base-content font-semibold">Messages:</span>
                    View your recent messages, chat with friends, and manage your conversations.
                </p>
            </FoTabContent>
        </template>
    </FoTabs>

    <FoTabs v-model="activeTab"
            :tabs="tabs"
            shape="rounded"
            orientation="vertical"
    >
        <template #tabs>
            <FoTab :id="homeTab.id">
                Home
            </FoTab>

            <FoTab :id="profileTab.id">
                Profile
            </FoTab>

            <FoTab :id="messagesTab.id">
                Messages
            </FoTab>
        </template>

        <template #contents>
            <FoTabContent :tab-id="homeTab.id">
                <p class="text-base-content/80">
                    Welcome to the
                    <span class="text-base-content font-semibold">Home tab!</span>
                    Explore the latest updates and news here.
                </p>
            </FoTabContent>

            <FoTabContent :tab-id="profileTab.id">
                <p class="text-base-content/80">
                    This is your
                    <span class="text-base-content font-semibold">Profile</span> tab,
                    where you can update your personal information and manage your account details.
                </p>
            </FoTabContent>

            <FoTabContent :tab-id="messagesTab.id">
                <p class="text-base-content/80">
                    <span class="text-base-content font-semibold">Messages:</span>
                    View your recent messages, chat with friends, and manage your conversations.
                </p>
            </FoTabContent>
        </template>
    </FoTabs>

    <FoTabs v-model="activeTab"
            :tabs="tabs"
            shape="pilled"
    >
        <template #tabs>
            <FoTab :id="homeTab.id">
                Home
            </FoTab>

            <FoTab :id="profileTab.id">
                Profile
            </FoTab>

            <FoTab :id="messagesTab.id">
                Messages
            </FoTab>
        </template>

        <template #contents>
            <FoTabContent :tab-id="homeTab.id">
                <p class="text-base-content/80">
                    Welcome to the
                    <span class="text-base-content font-semibold">Home tab!</span>
                    Explore the latest updates and news here.
                </p>
            </FoTabContent>

            <FoTabContent :tab-id="profileTab.id">
                <p class="text-base-content/80">
                    This is your
                    <span class="text-base-content font-semibold">Profile</span> tab,
                    where you can update your personal information and manage your account details.
                </p>
            </FoTabContent>

            <FoTabContent :tab-id="messagesTab.id">
                <p class="text-base-content/80">
                    <span class="text-base-content font-semibold">Messages:</span>
                    View your recent messages, chat with friends, and manage your conversations.
                </p>
            </FoTabContent>
        </template>
    </FoTabs>

    <FoTabs v-model="activeTab"
            :tabs="tabs"
            shape="pilled"
            orientation="vertical"
    >
        <template #tabs>
            <FoTab :id="homeTab.id">
                Home
            </FoTab>

            <FoTab :id="profileTab.id">
                Profile
            </FoTab>

            <FoTab :id="messagesTab.id">
                Messages
            </FoTab>
        </template>

        <template #contents>
            <FoTabContent :tab-id="homeTab.id">
                <p class="text-base-content/80">
                    Welcome to the
                    <span class="text-base-content font-semibold">Home tab!</span>
                    Explore the latest updates and news here.
                </p>
            </FoTabContent>

            <FoTabContent :tab-id="profileTab.id">
                <p class="text-base-content/80">
                    This is your
                    <span class="text-base-content font-semibold">Profile</span> tab,
                    where you can update your personal information and manage your account details.
                </p>
            </FoTabContent>

            <FoTabContent :tab-id="messagesTab.id">
                <p class="text-base-content/80">
                    <span class="text-base-content font-semibold">Messages:</span>
                    View your recent messages, chat with friends, and manage your conversations.
                </p>
            </FoTabContent>
        </template>
    </FoTabs>
</template>

<script setup lang="ts">
import type { TabProps }                       from 'flyonui-vue';
import { FoTab, FoTabContent, FoTabs, useTab } from 'flyonui-vue';
import { ref }                                 from 'vue';

const tabs = ref<TabProps[]>([
    { id: 'home' },
    { id: 'profile' },
    { id: 'messages' },
]);

const homeTab     = useTab(tabs, 0);
const profileTab  = useTab(tabs, 1);
const messagesTab = useTab(tabs, 2);

const activeTab = ref<Readonly<TabProps>>(homeTab.value);
</script>
