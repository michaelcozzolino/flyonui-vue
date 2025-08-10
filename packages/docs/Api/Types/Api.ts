import type { ComponentName }          from 'flyonui-vue';
import type { PropertyMeta, SlotMeta } from 'vue-component-meta';

export interface ApiProps {
    componentName: ComponentName;
}

export interface Api<T extends SlotMeta | PropertyMeta> extends ApiProps {
    api: T[];
}

export type ApiType = 'props' | 'slots';
