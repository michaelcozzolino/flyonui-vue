import { describe, expect, it } from 'vitest';
import { useState }             from '@/Lib/UseState/Internal';

describe('useState', (): void => {
    it('returns a state class', (): void => {
        expect(useState('FoButton', 'disabled').value).toBe('btn-disabled');
    });
});
