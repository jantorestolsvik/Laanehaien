import reducer from './loans';
import {addLoan, addLoans, postLoan} from './loans'

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

describe('postLoan', () => {
    test('calls fetch', () => {
        const mockFetch = jest.fn().mockImplementation(() => Promise.resolve({
            json: () => ({
                "message": "saved",
                "loan": 1
            })
        }));
        const mockDispatch = jest.fn();
        global.fetch = mockFetch;
        const promise = postLoan(1)(mockDispatch);
        expect(mockFetch.mock.calls).toHaveLength(1);
        promise.then(() => {
            expect(mockDispatch.mock.calls).toHaveLength(1);
        });
    });
})
;