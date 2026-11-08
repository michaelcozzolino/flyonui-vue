import type { Slot }                                       from 'vue';
import type { Borderable, Orientable, Sizable, WithGlass } from '@/Lib';
import type { Alignable }                                  from '@/Lib/UseAlignment';
import type { WithRequiredDefaultSlot }                    from '@/Types';
import type { AlertProps }                                 from '@/UI/Components';

export type CardProps = Alignable & Borderable & Orientable & Sizable & WithGlass;

export interface CardBodySlots extends WithRequiredDefaultSlot {
    actions?: Slot;
}

export type CardAlertProps = Omit<AlertProps, 'isDismissible'>;
