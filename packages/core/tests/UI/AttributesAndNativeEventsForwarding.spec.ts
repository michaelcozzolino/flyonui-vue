import type { VueWrapper }                                                    from '@vue/test-utils';
import { FoButton, FoListGroup, FoLoading, FoSkeleton, FoStatus }             from '@/UI/Components';
import { FoBlockQuote, FoDivider, FoHeading, FoKeyboard, FoLink }             from '@/UI/Content';
import { FoCheckbox, FoInputFiles, FoInputText, FoJoin, FoRange, FoTextarea } from '@/UI/Forms';
import { mount }                                                              from '@vue/test-utils';
import { describe, expect, it, vi }                                           from 'vitest';

// todo: names of the components must be camel case, eslint
describe('forwards attributes and native event listeners for', () => {
    interface MountResult {
        /**
         * When not undefined, this is used to specify which element should have the attributes and events,
         * as there might be, for example, a FoFragment, that won't have those attributes in the root mounted element
         */
        targetElement?: string;
        wrapper:        VueWrapper;
    }

    const customAttributeName = 'custom-attribute';

    /**
     * For the sake of simplicity we use a custom attribute and the native click event
     */
    async function expectAttributesAndNativeEventsForwarding(
        mountComponent: (customAttributeValue: string, onClick: () => void) => MountResult,
    ): Promise<void> {
        const customAttributeValue = 'forwarded-value';
        const onClick              = vi.fn();

        const { wrapper, targetElement } = mountComponent(customAttributeValue, onClick);
        const target                     = targetElement === undefined ? wrapper : wrapper.get(targetElement);

        expect(target.attributes(customAttributeName)).toBe(customAttributeValue);

        await target.trigger('click');

        expect(onClick).toHaveBeenCalledTimes(1);
    }

    it('foButton', async () => {
        await expectAttributesAndNativeEventsForwarding((customAttributeValue: string, onClick: () => void): MountResult => ({
            wrapper: mount(FoButton, {
                attrs: { [customAttributeName]: customAttributeValue, onClick },
                slots: { default: 'Button' },
            }),
        }));
    });

    it('foRange', async () => {
        await expectAttributesAndNativeEventsForwarding((customAttribute: string, onClick: () => void): MountResult => ({
            wrapper: mount(FoRange, {
                props: { modelValue: 50 },
                attrs: { [customAttributeName]: customAttribute, onClick },
            }),
            targetElement: 'input',
        }));
    });

    it('foRange with steps', async () => {
        await expectAttributesAndNativeEventsForwarding((customAttribute: string, onClick: () => void): MountResult => ({
            wrapper: mount(FoRange, {
                props: { modelValue: 50 },
                attrs: { [customAttributeName]: customAttribute, onClick },
                slots: {
                    steps: '<span>0</span><span>50</span><span>100</span>',
                },
            }),
            targetElement: 'input',
        }));
    });

    it('foCheckbox', async () => {
        await expectAttributesAndNativeEventsForwarding((customAttribute: string, onClick: () => void): MountResult => ({
            wrapper: mount(FoCheckbox, {
                props: { modelValue: true },
                attrs: { [customAttributeName]: customAttribute, onClick },
            }),
            targetElement: 'input[type="checkbox"]',
        }));
    });

    it('foInputText', async () => {
        await expectAttributesAndNativeEventsForwarding((customAttribute: string, onClick: () => void): MountResult => ({
            wrapper: mount(FoInputText, {
                props: { modelValue: 'Input text' },
                attrs: { [customAttributeName]: customAttribute, onClick },
            }),
            targetElement: 'input',
        }));
    });

    it('foInputText with input container', async () => {
        await expectAttributesAndNativeEventsForwarding((customAttribute: string, onClick: () => void): MountResult => ({
            wrapper: mount(FoInputText, {
                props: {
                    modelValue: 'Input text',
                    icon:       { left: 'tabler:search' },
                    label:      { text: 'Search', type: 'floating' },
                },
                attrs: { [customAttributeName]: customAttribute, onClick },
            }),
            targetElement: 'input',
        }));
    });

    it('foTextarea', async () => {
        await expectAttributesAndNativeEventsForwarding((customAttribute: string, onClick: () => void): MountResult => ({
            wrapper: mount(FoTextarea, {
                props: { modelValue: 'Textarea value' },
                attrs: { [customAttributeName]: customAttribute, onClick },
            }),
            targetElement: 'textarea',
        }));
    });

    it('foTextarea with input container', async () => {
        await expectAttributesAndNativeEventsForwarding((customAttribute: string, onClick: () => void): MountResult => ({
            wrapper: mount(FoTextarea, {
                props: {
                    modelValue: 'Textarea value',
                    icon:       { left: 'tabler:pencil' },
                    label:      { text: 'Description', type: 'floating' },
                },
                attrs: { [customAttributeName]: customAttribute, onClick },
            }),
            targetElement: 'textarea',
        }));
    });

    it('foInputFiles', async () => {
        await expectAttributesAndNativeEventsForwarding((customAttribute: string, onClick: () => void): MountResult => ({
            wrapper: mount(FoInputFiles, {
                attrs: { [customAttributeName]: customAttribute, onClick },
            }),
            targetElement: 'input[type="file"]',
        }));
    });

    it('foJoin', async () => {
        await expectAttributesAndNativeEventsForwarding((customAttribute: string, onClick: () => void): MountResult => ({
            wrapper: mount(FoJoin, {
                attrs: { [customAttributeName]: customAttribute, onClick },
                slots: { default: '<button>Join item</button>' },
            }),
        }));
    });

    it('foLink', async () => {
        await expectAttributesAndNativeEventsForwarding((customAttribute: string, onClick: () => void): MountResult => ({
            wrapper: mount(FoLink, {
                props: { to: '#section' },
                attrs: { [customAttributeName]: customAttribute, onClick },
                slots: { default: 'Link' },
            }),
            targetElement: 'a',
        }));
    });

    it('foBlockQuote', async () => {
        await expectAttributesAndNativeEventsForwarding((customAttribute: string, onClick: () => void): MountResult => ({
            wrapper: mount(FoBlockQuote, {
                attrs: { [customAttributeName]: customAttribute, onClick },
                slots: { default: 'Block quote' },
            }),
        }));
    });

    it('foHeading', async () => {
        await expectAttributesAndNativeEventsForwarding((customAttribute: string, onClick: () => void): MountResult => ({
            wrapper: mount(FoHeading, {
                props: { level: '4' },
                attrs: { [customAttributeName]: customAttribute, onClick },
                slots: { default: 'Heading' },
            }),
        }));
    });

    it('foKeyboard', async () => {
        await expectAttributesAndNativeEventsForwarding((customAttribute: string, onClick: () => void): MountResult => ({
            wrapper: mount(FoKeyboard, {
                attrs: { [customAttributeName]: customAttribute, onClick },
                slots: { default: 'K' },
            }),
        }));
    });

    it('foDivider', async () => {
        await expectAttributesAndNativeEventsForwarding((customAttribute: string, onClick: () => void): MountResult => ({
            wrapper: mount(FoDivider, {
                attrs: { [customAttributeName]: customAttribute, onClick },
                slots: { default: 'Divider' },
            }),
            targetElement: '.divider',
        }));
    });

    it('foDivider horizontal', async () => {
        await expectAttributesAndNativeEventsForwarding((customAttribute: string, onClick: () => void): MountResult => ({
            wrapper: mount(FoDivider, {
                props: { orientation: 'horizontal' },
                attrs: { [customAttributeName]: customAttribute, onClick },
                slots: { default: 'Divider' },
            }),
        }));
    });

    it('foListGroup', async () => {
        await expectAttributesAndNativeEventsForwarding((customAttribute: string, onClick: () => void): MountResult => ({
            wrapper: mount(FoListGroup, {
                attrs: { [customAttributeName]: customAttribute, onClick },
                slots: { default: '<li>Item</li>' },
            }),
            targetElement: 'ul',
        }));
    });

    it('foListGroup horizontal', async () => {
        await expectAttributesAndNativeEventsForwarding((customAttribute: string, onClick: () => void): MountResult => ({
            wrapper: mount(FoListGroup, {
                props: { orientation: 'horizontal' },
                attrs: { [customAttributeName]: customAttribute, onClick },
                slots: { default: '<li>Item</li>' },
            }),
        }));
    });

    it('foLoading', async () => {
        await expectAttributesAndNativeEventsForwarding((customAttribute: string, onClick: () => void): MountResult => ({
            wrapper: mount(FoLoading, {
                attrs: { [customAttributeName]: customAttribute, onClick },
            }),
        }));
    });

    it('foSkeleton', async () => {
        await expectAttributesAndNativeEventsForwarding((customAttribute: string, onClick: () => void): MountResult => ({
            wrapper: mount(FoSkeleton, {
                attrs: { [customAttributeName]: customAttribute, onClick },
            }),
        }));
    });

    it('foStatus', async () => {
        await expectAttributesAndNativeEventsForwarding((customAttribute: string, onClick: () => void): MountResult => ({
            wrapper: mount(FoStatus, {
                attrs: { [customAttributeName]: customAttribute, onClick },
            }),
            targetElement: '.status',
        }));
    });

    it('foStatus ping', async () => {
        await expectAttributesAndNativeEventsForwarding((customAttribute: string, onClick: () => void): MountResult => ({
            wrapper: mount(FoStatus, {
                props: { animation: 'ping' },
                attrs: { [customAttributeName]: customAttribute, onClick },
                slots: { default: 'Status' },
            }),
        }));
    });

    it('foStatus with content', async () => {
        await expectAttributesAndNativeEventsForwarding((customAttribute: string, onClick: () => void): MountResult => ({
            wrapper: mount(FoStatus, {
                attrs: { [customAttributeName]: customAttribute, onClick },
                slots: { default: 'Status' },
            }),
        }));
    });
});

describe('forwards class and style attributes on the right elements for', () => {
    interface MountResult {
        /** When not undefined, the class attribute must stay on this element */
        classTargetElement?: string;

        /** When not undefined, the style attribute must stay on this element */
        styleTargetElement?: string;

        wrapper: VueWrapper;
    }

    const customClass = 'custom-class';
    const customStyle = 'color: rgb(255, 0, 0);';

    async function expectClassAndStyleForwarding(
        mountComponent: () => MountResult,
    ): Promise<void> {
        const { wrapper, classTargetElement, styleTargetElement } = mountComponent();

        const classTarget = classTargetElement === undefined ? wrapper : wrapper.get(classTargetElement);
        const styleTarget = styleTargetElement === undefined ? wrapper : wrapper.get(styleTargetElement);

        expect(classTarget.classes()).toContain(customClass);
        expect(styleTarget.attributes('style')).toContain('color: rgb(255, 0, 0)');
    }

    it('foRange with steps', async () => {
        await expectClassAndStyleForwarding((): MountResult => ({
            wrapper: mount(FoRange, {
                props: { modelValue: 50 },
                attrs: {
                    class: customClass,
                    style: customStyle,
                },
                slots: {
                    steps: '<span>0</span><span>50</span><span>100</span>',
                },
            }),
            classTargetElement: 'input',
        }));
    });

    it('foInputText', async () => {
        await expectClassAndStyleForwarding((): MountResult => ({
            wrapper: mount(FoInputText, {
                props: { modelValue: 'Input text' },
                attrs: {
                    class: customClass,
                    style: customStyle,
                },
            }),
            classTargetElement: 'input',
        }));
    });

    it('foInputText with input container', async () => {
        await expectClassAndStyleForwarding((): MountResult => ({
            wrapper: mount(FoInputText, {
                props: {
                    modelValue: 'Input text',
                    icon:       { left: 'tabler:search' },
                    label:      { text: 'Search', type: 'floating' },
                },
                attrs: {
                    class: customClass,
                    style: customStyle,
                },
            }),
            classTargetElement: 'input',
        }));
    });

    it('foTextarea', async () => {
        await expectClassAndStyleForwarding((): MountResult => ({
            wrapper: mount(FoTextarea, {
                props: { modelValue: 'Textarea value' },
                attrs: {
                    class: customClass,
                    style: customStyle,
                },
            }),
            classTargetElement: 'textarea',
        }));
    });

    it('foTextarea with input container', async () => {
        await expectClassAndStyleForwarding((): MountResult => ({
            wrapper: mount(FoTextarea, {
                props: {
                    modelValue: 'Textarea value',
                    icon:       { left: 'tabler:pencil' },
                    label:      { text: 'Description', type: 'floating' },
                },
                attrs: {
                    class: customClass,
                    style: customStyle,
                },
            }),
            classTargetElement: 'textarea',
        }));
    });

    it('foInputFiles', async () => {
        await expectClassAndStyleForwarding((): MountResult => ({
            wrapper: mount(FoInputFiles, {
                attrs: {
                    class: customClass,
                    style: customStyle,
                },
            }),
            classTargetElement: 'input[type="file"]',
        }));
    });

    it('foCheckbox', async () => {
        await expectClassAndStyleForwarding((): MountResult => ({
            wrapper: mount(FoCheckbox, {
                props: { modelValue: true },
                attrs: {
                    class: customClass,
                    style: customStyle,
                },
            }),
            classTargetElement: 'input[type="checkbox"]',
        }));
    });

    it('foLink', async () => {
        await expectClassAndStyleForwarding((): MountResult => ({
            wrapper: mount(FoLink, {
                props: { to: '#section' },
                attrs: {
                    class: customClass,
                    style: customStyle,
                },
                slots: { default: 'Link' },
            }),
            classTargetElement: 'a',
            styleTargetElement: 'a',
        }));
    });

    it('foBlockQuote', async () => {
        await expectClassAndStyleForwarding((): MountResult => ({
            wrapper: mount(FoBlockQuote, {
                attrs: {
                    class: customClass,
                    style: customStyle,
                },
                slots: { default: 'Block quote' },
            }),
        }));
    });

    it('foButton', async () => {
        await expectClassAndStyleForwarding((): MountResult => ({
            wrapper: mount(FoButton, {
                attrs: {
                    class: customClass,
                    style: customStyle,
                },
                slots: { default: 'Button' },
            }),
        }));
    });

    it('foKeyboard', async () => {
        await expectClassAndStyleForwarding((): MountResult => ({
            wrapper: mount(FoKeyboard, {
                attrs: {
                    class: customClass,
                    style: customStyle,
                },
                slots: { default: 'K' },
            }),
        }));
    });

    it('foDivider', async () => {
        await expectClassAndStyleForwarding((): MountResult => ({
            wrapper: mount(FoDivider, {
                attrs: {
                    class: customClass,
                    style: customStyle,
                },
                slots: { default: 'Divider' },
            }),
            classTargetElement: '.divider',
            styleTargetElement: '.divider',
        }));
    });

    it('foDivider horizontal', async () => {
        await expectClassAndStyleForwarding((): MountResult => ({
            wrapper: mount(FoDivider, {
                props: { orientation: 'horizontal' },
                attrs: {
                    class: customClass,
                    style: customStyle,
                },
                slots: { default: 'Divider' },
            }),
        }));
    });

    it('foListGroup', async () => {
        await expectClassAndStyleForwarding((): MountResult => ({
            wrapper: mount(FoListGroup, {
                attrs: {
                    class: customClass,
                    style: customStyle,
                },
                slots: { default: '<li>Item</li>' },
            }),
            classTargetElement: 'ul',
            styleTargetElement: 'ul',
        }));
    });

    it('foJoin', async () => {
        await expectClassAndStyleForwarding((): MountResult => ({
            wrapper: mount(FoJoin, {
                attrs: {
                    class: customClass,
                    style: customStyle,
                },
                slots: { default: '<button>Join item</button>' },
            }),
        }));
    });

    it('foHeading', async () => {
        await expectClassAndStyleForwarding((): MountResult => ({
            wrapper: mount(FoHeading, {
                props: { level: '4' },
                attrs: {
                    class: customClass,
                    style: customStyle,
                },
                slots: { default: 'Heading' },
            }),
        }));
    });

    it('foLoading', async () => {
        await expectClassAndStyleForwarding((): MountResult => ({
            wrapper: mount(FoLoading, {
                attrs: {
                    class: customClass,
                    style: customStyle,
                },
            }),
        }));
    });

    it('foSkeleton', async () => {
        await expectClassAndStyleForwarding((): MountResult => ({
            wrapper: mount(FoSkeleton, {
                attrs: {
                    class: customClass,
                    style: customStyle,
                },
            }),
        }));
    });

    it('foStatus', async () => {
        await expectClassAndStyleForwarding((): MountResult => ({
            wrapper: mount(FoStatus, {
                attrs: {
                    class: customClass,
                    style: customStyle,
                },
            }),
            classTargetElement: '.status',
            styleTargetElement: '.status',
        }));
    });

    it('foStatus ping', async () => {
        await expectClassAndStyleForwarding((): MountResult => ({
            wrapper: mount(FoStatus, {
                props: { animation: 'ping' },
                attrs: {
                    class: customClass,
                    style: customStyle,
                },
                slots: { default: 'Status' },
            }),
        }));
    });

    it('foStatus with content', async () => {
        await expectClassAndStyleForwarding((): MountResult => ({
            wrapper: mount(FoStatus, {
                attrs: {
                    class: customClass,
                    style: customStyle,
                },
                slots: { default: 'Status' },
            }),
        }));
    });
});
