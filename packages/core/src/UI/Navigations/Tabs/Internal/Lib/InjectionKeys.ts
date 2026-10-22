import type { ComputedRef, InjectionKey, ModelRef } from 'vue';
import type { TabProps, TabsProps }                 from '@/UI/Navigations';

export const activeTabInjectionKey: InjectionKey<ModelRef<TabProps>>               = Symbol('activeTab');
export const tabsPropsInjectionKey: InjectionKey<ComputedRef<TabsProps<TabProps>>> = Symbol('tabsProps');
