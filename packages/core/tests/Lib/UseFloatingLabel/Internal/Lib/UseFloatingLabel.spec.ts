import { useFloatingLabel }     from '@/Lib/UseFloatingLabel/Internal';
import { describe, expect, it } from 'vitest';

describe('useFloatingLabel', () => {
    it('returns a floating label class', () => {
        expect(useFloatingLabel('FoSelect', 'floating').value).toBe('select-floating');
    });
});
