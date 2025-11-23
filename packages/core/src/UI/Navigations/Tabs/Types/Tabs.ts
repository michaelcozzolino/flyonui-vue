import type { Orientable, Responsive, Shape, Shapeable, Sizable, StringId } from '@/Lib';
import type { Alignable }                                                   from '@/Lib/UseAlignment';
import type { ButtonProps }                                                 from '@/UI/Components';

export type TabsShape = Extract<Shape, 'rounded' | 'pilled'>;

export interface TabsProps<T extends TabProps> extends Alignable, Orientable, Responsive, Sizable, Shapeable<TabsShape> {
    tabs:             T[]; // todo: useless at the moment but i put it to make it useful when i will implement the keyboard controls
    activateOnHover?: boolean;
    // isLifted?: boolean; todo: not working at the moment
    isFilled?:        boolean;
}

export type TabProps = StringId & Pick<ButtonProps, 'icon' | 'isDisabled'>;

export interface TabContentProps {
    tabId: string;
}
