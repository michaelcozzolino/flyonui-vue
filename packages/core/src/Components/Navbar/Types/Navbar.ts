import type { WithTo }   from '@/Components';
import type { Id }       from '@/Shared';
import type { WithText } from '@/Shared/Utils/Types/Props.ts';

export type NavbarLink = Id
    & WithText
    & Required<WithTo>;
