import type { WithRequiredTo }   from '@/Components';
import type { Id }               from '@/Shared';
import type { WithRequiredText } from '@/Shared/Utils/Types/Props.ts';

export type NavbarLink = Id
    & WithRequiredText
    & WithRequiredTo;
