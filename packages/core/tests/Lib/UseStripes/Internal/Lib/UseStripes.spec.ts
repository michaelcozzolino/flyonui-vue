import { describe, expect, it } from 'vitest';
import { useStripes }           from '@/Lib/UseStripes/Internal';

describe('useStripes', (): void => {
    it('returns a stripes class', (): void => {
        expect(useStripes('FoListGroupItem', true).value).toBe('bg-base-200');
    });
});
