import type { MenuTextProps }             from '@/Components/Menu';
import type { ComputedRef, InjectionKey } from 'vue';

export const menuTextPropsInjectionKey: InjectionKey<ComputedRef<MenuTextProps>> = Symbol('props related to the text of the items in the menu');

export const isInMenuItemInjectionKey:  InjectionKey<boolean> = Symbol('is in menu item');
