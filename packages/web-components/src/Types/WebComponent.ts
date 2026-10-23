import type { DefineComponent, VueElementConstructor } from 'vue';

export interface FlyonUIVueComponent {
    readonly component: DefineComponent<Record<string, any>, any, any>;
    readonly styles:    string[];
}

export interface FlyonUIWebComponent {
    readonly name:      string;
    readonly component: VueElementConstructor;
}
