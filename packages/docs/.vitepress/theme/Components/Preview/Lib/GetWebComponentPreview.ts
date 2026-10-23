import type { VNode }                                                      from 'vue';
import type { AngularComponent, ReactComponent, WebComponentPreviewProps } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import { h }                                                               from 'vue';
import WebComponentPreview                                                 from '@/.vitepress/theme/Components/Preview/UI/WebComponentPreview.vue';

function getWebComponentPreview<T extends WebComponentPreviewProps>(props: T): VNode {
    return h(WebComponentPreview, props);
}

export function getAngularWebComponentPreview<T extends AngularComponent>(component: T): VNode {
    return getWebComponentPreview({ framework: 'angular', component });
}

export function getHtmlWebComponentPreview(html: string): VNode {
    return getWebComponentPreview({ framework: 'html', html });
}

export function getReactWebComponentPreview<T extends ReactComponent>(component: T): VNode {
    return getWebComponentPreview({ framework: 'react', component });
}
