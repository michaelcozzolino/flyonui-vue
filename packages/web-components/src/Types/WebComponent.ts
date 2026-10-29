import type { ComponentOptions, VueElementConstructor } from 'vue';

export interface FlyonUIVueComponent {
    readonly component: ComponentOptions<any>;
    readonly styles:    string[];
}

export interface FlyonUIWebComponent {
    readonly name:      string;
    readonly component: VueElementConstructor;
}
