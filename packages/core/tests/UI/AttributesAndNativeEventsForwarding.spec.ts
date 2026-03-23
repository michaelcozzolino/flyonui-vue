import type { VueWrapper }                                                    from '@vue/test-utils';
import { FoButton, FoListGroup, FoLoading, FoSkeleton, FoStatus }             from '@/UI/Components';
import { FoBlockQuote, FoDivider, FoHeading, FoKeyboard, FoLink }             from '@/UI/Content';
import { FoCheckbox, FoInputFiles, FoInputText, FoJoin, FoRange, FoTextarea } from '@/UI/Forms';
import { mount }                                                              from '@vue/test-utils';
import { describe, expect, it, vi }                                           from 'vitest';

interface MountResult {
    /**
     * When not undefined, this is used to specify which element should have the attributes and events,
     * as there might be, for example, a FoFragment, that won't have those attributes in the root mounted element
     */
    targetElement?: string;
    wrapper:        VueWrapper;
}
// todo: names of the components must be camel case, eslint
describe('forwards attributes and native event listeners for', () => {
    const customAttributeName = 'custom-attribute';

    /**
     * For the sake of simplicity we use a custom attribute and the native click event
     */
    async function expectAttributesAndNativeEventsForwarding(
        mountComponent: (customAttributeValue: string, onClick: () => void) => MountResult,
    ): Promise<void> {
        const customAttributeValue = 'forwarded-value';
        const onClick         = vi.fn();

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
