import { TestScheduler } from 'jest';
import { isValidInput } from './isValidInput.js';

describe('Blogi variantai', () => {
    test('Prigauna neduotus abu parametrus', () => {
        expect(isValidInput().toEqual(false));
    })
    
    test('Prigauna neduota parametra', () => {
        expect(isValidInput('body').toEqual(false));
    })
});

describe('Tikrinamas antro parametro formatas (sudetis)', () => {
    test('Turi tureti data parametra (object key)', () => {
        expect(isValidInput('body', {data: 541})).toEqual(false);
        expect(isValidInput('body', {data: 'afds'})).toEqual(false);
        expect(isValidInput('body', {data: {} })).toEqual(false);
        expect(isValidInput('body', {data: true})).toEqual(false);
        expect(isValidInput('body', {data: false})).toEqual(false);
        expect(isValidInput('body', {data: null})).toEqual(false);
        expect(isValidInput('body', {data: [] })).toEqual(false);
    })
});