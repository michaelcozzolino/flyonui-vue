import type { TabProps, TabsProps }                 from '@/UI/Navigations';
import type { ComputedRef, InjectionKey, ModelRef } from 'vue';

export const activeTabInjectionKey: InjectionKey<ModelRef<TabProps>>               = Symbol('activeTab');
export const tabsPropsInjectionKey: InjectionKey<ComputedRef<TabsProps<TabProps>>> = Symbol('tabsProps');
