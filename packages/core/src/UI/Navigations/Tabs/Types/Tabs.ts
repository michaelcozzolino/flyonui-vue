import type { Orientable, Responsive, Shape, Shapeable, Sizable, StringId } from '@/Lib';
import type { Alignable }                                                   from '@/Lib/UseAlignment';
import type { ButtonProps }                                                 from '@/UI/Components';

export type TabsShape = Extract<Shape, 'rounded' | 'pilled'>;

export interface TabsProps<T extends TabProps> extends Alignable, Orientable, Responsive, Sizable, Shapeable<TabsShape> {
    /** The tabs to be used. This is needed in order to be able to switch tabs through the keyboard buttons */
    tabs: T[];

    /** If true, no need to click on each tab to activate it, a mouse hover will be enough */
    activateOnHover?: boolean;
    // isLifted?: boolean; todo: not working at the moment

    /** If true, the tabs will occupy the whole screen */
    isFilled?: boolean;
}

export type TabProps = StringId & Pick<ButtonProps, 'icon' | 'isDisabled' | 'size'>;

export interface TabContentProps {
    /** The tab id that will be used for the tab content as "tab-content-{tabId}" */
    tabId: string;
}
