import { describe, expect, it } from 'vitest';
import { useFloatingLabel }     from '@/Lib/UseFloatingLabel/Internal';

describe('useFloatingLabel', (): void => {
    it('returns a floating label class', (): void => {
        expect(useFloatingLabel('FoSelect', 'floating').value).toBe('select-floating');
    });
});
