import type { ComponentName }     from '@/Lib';
import { describe, expect, it }   from 'vitest';
import { useRequiredSlotMessage } from '@/Lib/Utils/Internal';

describe('useRequiredSlotMessage', (): void => {
    it('returns a message for a required slot', (): void => {
        const componentName: ComponentName = 'FoStat';

        expect(useRequiredSlotMessage(componentName)).toBe(`${componentName}: default slot is required.`);
    });

    it('returns a message and a custom one for a required slot', (): void => {
        const componentName: ComponentName = 'FoStat';
        const additionalMessage = 'Check docs.';
        const slotName = 'test-slot';

        expect(
            useRequiredSlotMessage(componentName, additionalMessage, slotName),
        ).toBe(`${componentName}: ${slotName} slot is required. ${additionalMessage}`);
    });
});
