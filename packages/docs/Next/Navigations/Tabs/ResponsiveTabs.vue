<template>
    <FoTabs v-model="activeTab"
            :tabs="tabs"
            class="w-sm"
            is-responsive
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

            <FoTab :id="settingsTab.id">
                Settings
            </FoTab>

            <FoTab :id="helpTab.id">
                Help
            </FoTab>

            <FoTab :id="notificationsTab.id">
                Notifications
            </FoTab>

            <FoTab :id="feedbackTab.id">
                Feedback
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

            <FoTabContent :tab-id="settingsTab.id">
                <p class="text-base-content/80">
                    <span class="text-base-content font-semibold">Settings:</span>
                    Adjust your preferences, manage your account, and configure your privacy settings here.
                </p>
            </FoTabContent>

            <FoTabContent :tab-id="helpTab.id">
                <p class="text-base-content/80">
                    <span class="text-base-content font-semibold">Help:</span>
                    Find answers to frequently asked questions, get in touch with support, or read through user guides.
                </p>
            </FoTabContent>

            <FoTabContent :tab-id="notificationsTab.id">
                <p class="text-base-content/80">
                    <span class="text-base-content font-semibold">Notifications:</span>
                    Manage your notifications, set preferences, and view your notification history.
                </p>
            </FoTabContent>

            <FoTabContent :tab-id="feedbackTab.id">
                <p class="text-base-content/80">
                    <span class="text-base-content font-semibold">Feedback:</span> Share your thoughts, report issues, or suggest new features to improve the platform.
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
    { id: 'settings' },
    { id: 'help' },
    { id: 'notifications' },
    { id: 'feedback' },
]);

const homeTab          = useTab(tabs, 0);
const profileTab       = useTab(tabs, 1);
const messagesTab      = useTab(tabs, 2);
const settingsTab      = useTab(tabs, 3);
const helpTab          = useTab(tabs, 4);
const notificationsTab = useTab(tabs, 5);
const feedbackTab      = useTab(tabs, 6);

const activeTab = ref<Readonly<TabProps>>(homeTab.value);
</script>
