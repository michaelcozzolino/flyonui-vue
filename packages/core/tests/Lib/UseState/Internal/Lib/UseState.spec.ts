import { useState }             from '@/Lib/UseState/Internal';
import { describe, expect, it } from 'vitest';

describe('useState', () => {
    it('returns a state class', () => {
        expect(useState('FoButton', 'disabled').value).toBe('btn-disabled');
    });
});
