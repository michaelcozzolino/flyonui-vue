import type { ElementName } from '@/Shared/Types';

// todo: check everywhere it needs to be used
export function useRequiredSlotMessage(elementName: ElementName, slotName: string = 'default'): string {
    return `${elementName}: ${slotName} slot is required`;
}
