import type { DefineComponent, VueElementConstructor } from 'vue';

export interface FlyonUIVueComponent {
    readonly component:  DefineComponent<Record<string, any>, any, any>;
    readonly styleSheet: CSSStyleSheet;
}

export interface FlyonUIWebComponent extends Pick<FlyonUIVueComponent, 'styleSheet'> {
    readonly name:      string;
    readonly component: VueElementConstructor;
}
