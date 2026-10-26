import type { Identifiable, WithIcon, WithLabel } from 'flyonui-vue';

export type FrameworkId = 'vue' | 'react' | 'html' | 'angular';

export type Framework = Identifiable<'id', FrameworkId> & Required<WithLabel & WithIcon>;
