import { describe, expect, it } from 'vitest';
import { useFloatingLabel }     from '@/Lib/UseFloatingLabel/Internal';

describe('useFloatingLabel', () => {
    it('returns a floating label class', () => {
        expect(useFloatingLabel('FoSelect', 'floating').value).toBe('select-floating');
    });
});
