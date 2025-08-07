import type { ComponentName } from 'flyonui-vue';

export interface ApiProps {
    componentName: ComponentName;
}

export interface Api<T> extends ApiProps {
    api: T[];
}
