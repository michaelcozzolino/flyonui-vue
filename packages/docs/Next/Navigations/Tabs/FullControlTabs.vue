<template>
    <FoTabs v-model="activeTab"
            :tabs="tabs"
    >
        <template #tabs>
            <FoTab :id="homeTab.id">
                Home

                <FoBadge class="ms-3" preset="soft"
                         color="primary"
                         size="small"
                         shape="pilled"
                >
                    +99
                </FoBadge>
            </FoTab>

            <FoTab :id="profileTab.id">
                Profile
            </FoTab>

            <FoTab :id="messagesTab.id">
                Messages

                <FoBadge class="ms-3" preset="soft"
                         color="primary"
                         size="small"
                         shape="pilled"
                >
                    +200
                </FoBadge>
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
import type { TabProps }                         from 'flyonui-vue';
import { FoBadge, FoTab, FoTabContent, FoTabs  } from 'flyonui-vue';
import { reactive, ref }                         from 'vue';

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
