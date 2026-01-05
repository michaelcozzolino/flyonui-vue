import { createFlyonUIVueApp } from 'flyonui-vue';
import { createApp }           from 'vue';

// @ts-expect-error E.G.
createApp(App).use(createFlyonUIVueApp, {
    global: {
        textDirection: 'rtl',
    },
});
