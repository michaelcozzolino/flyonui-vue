import { createFlyonUIVueApp } from 'flyonui-vue';
import { createApp }           from 'vue';

const app = createApp(App);

app.use(createFlyonUIVueApp, {
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
