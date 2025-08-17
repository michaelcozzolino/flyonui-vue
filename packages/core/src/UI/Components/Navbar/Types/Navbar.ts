import type { Id }               from '@/Lib';
import type { WithRequiredText } from '@/Types';
import type { WithRequiredTo }   from '@/UI/Content';

export type NavbarLink = Id
    & WithRequiredText
    & WithRequiredTo;
