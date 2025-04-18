import type { LabelType }           from '@/Components/Label';
import type { App, FunctionPlugin } from 'vue';

interface ConfigurationOptions {
    labelType?: LabelType;
}
const flyonUIVue: FunctionPlugin<ConfigurationOptions> = (app: App, options: ConfigurationOptions) => {
    const providedOptions: Required<ConfigurationOptions> = {
        labelType: options.labelType ?? 'text',
    };

    app.provide('flyonui-vue', providedOptions);
};

export default flyonUIVue;
