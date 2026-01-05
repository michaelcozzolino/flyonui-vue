import { createFlyonUIVueApp } from 'flyonui-vue';
import { createApp }           from 'vue';

// @ts-expect-error E.G.
createApp(App).use(createFlyonUIVueApp, {
    global: {
        color:              'accent',
        size:               'small',
        horizontalPosition: {
            icon:       'left',
            helperText: 'right',
        },
    },
    components: {
        FoButton: {
            size: 'large',
        },
        FoBadge: {
            color: 'info',
        },
    },
});
