import type { ComponentName } from '@/Lib';

// todo: maybe we need to have overloads, check FoBrowser.vue
// todo: check everywhere it needs to be used
export function useRequiredSlotMessage(
    componentName: ComponentName,
    additionalMessage: string = '',
    slotName: string = 'default',
): string {
    return `${componentName}: ${slotName} slot is required. ${additionalMessage}`.trim();
}
