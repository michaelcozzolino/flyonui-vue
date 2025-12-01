<template>
    <FoTabs v-model="activeTab"
            :tabs="tabs"
            class="w-sm"
            is-responsive
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

        <template #[settingsTab.id]>
            Settings
        </template>

        <template #[`content-${settingsTab.id}`]>
            <p class="text-base-content/80">
                <span class="text-base-content font-semibold">Settings:</span>
                Adjust your preferences, manage your account, and configure your privacy settings here.
            </p>
        </template>

        <template #[helpTab.id]>
            Help
        </template>

        <template #[`content-${helpTab.id}`]>
            <p class="text-base-content/80">
                <span class="text-base-content font-semibold">Help:</span>
                Find answers to frequently asked questions, get in touch with support, or read through user guides.
            </p>
        </template>

        <template #[notificationsTab.id]>
            Notifications
        </template>

        <template #[`content-${notificationsTab.id}`]>
            <p class="text-base-content/80">
                <span class="text-base-content font-semibold">Notifications:</span> Manage your notifications, set
                preferences, and view your notification history.
            </p>
        </template>

        <template #[feedbackTab.id]>
            Feedback
        </template>

        <template #[`content-${feedbackTab.id}`]>
            <p class="text-base-content/80">
                <span class="text-base-content font-semibold">Feedback:</span> Share your thoughts, report issues, or
                suggest new features to improve the platform.
            </p>
        </template>
    </FoTabs>
</template>

<script setup lang="ts">
import type { TabProps } from 'flyonui-vue';
import { FoTabs }        from 'flyonui-vue';
import { reactive, ref } from 'vue';

const homeTab          = reactive<TabProps>({ id: 'home' });
const profileTab       = reactive<TabProps>({ id: 'profile' });
const messagesTab      = reactive<TabProps>({ id: 'messages' });
const settingsTab      = reactive<TabProps>({ id: 'settings' });
const helpTab          = reactive<TabProps>({ id: 'help' });
const notificationsTab = reactive<TabProps>({ id: 'notifications' });
const feedbackTab      = reactive<TabProps>({ id: 'feedbacks' });

const tabs = ref<TabProps[]>([
    homeTab,
    profileTab,
    messagesTab,
    settingsTab,
    helpTab,
    notificationsTab,
    feedbackTab,
]);

const activeTab = ref<Readonly<TabProps>>(homeTab);
</script>
