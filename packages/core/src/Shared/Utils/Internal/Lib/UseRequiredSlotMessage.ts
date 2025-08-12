import type { ComponentName } from '@/Shared';

// todo: check everywhere it needs to be used
export function useRequiredSlotMessage(
    componentName: ComponentName,
    additionalMessage: string = '',
    slotName: string = 'default',
): string {
    return `${componentName}: ${slotName} slot is required. ${additionalMessage}`.trim();
}
