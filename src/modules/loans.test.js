import reducer from './loans';
import {addLoan, addLoans} from './loans'

describe('loans reducer', () => {

    test('returns array as default case', () => {
        expect(reducer()).toEqual([]);
    });

    test('can add a loan', () => {
        expect(reducer([1], addLoan(2))).toEqual([1, 2]);
    });

    test('can override loans', () => {
        expect(reducer([1], addLoans([2, 3]))).toEqual([2, 3]);
    });


});
