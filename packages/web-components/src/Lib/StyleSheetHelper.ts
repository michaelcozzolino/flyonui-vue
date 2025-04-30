import type { FlyonUIWebComponent } from '@/Types/WebComponent.ts';

class StyleSheetHelper {
    public generate(css: string): CSSStyleSheet {
        const styleSheet = new CSSStyleSheet();

        styleSheet.replaceSync(css);

        return styleSheet;
    }

    public load(webComponent: FlyonUIWebComponent): void {
        const originalConnectedCallback = webComponent.component.prototype.connectedCallback;

        webComponent.component.prototype.connectedCallback = function () {
            const shadowRoot: ShadowRoot | null = this.shadowRoot;

            if (shadowRoot === null) {
                throw new Error(`The shadow root for ${webComponent.name} does not exist.`);
            }

            shadowRoot.adoptedStyleSheets = [webComponent.styleSheet, ...shadowRoot.adoptedStyleSheets];

            originalConnectedCallback.call(this);
        };
    }
}

export default new StyleSheetHelper();
