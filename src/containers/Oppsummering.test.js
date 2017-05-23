import {mapStateToProps} from './Oppsummering';

describe('Oppsummering Container', () => {

    test('should calculate correct interestpayment', () => {
        expect(mapStateToProps({loans: [{amount: 100, interest: 0.12}]})).toEqual({
            loanSum: 100,
            nextInterestPayment: 1
        });
    });

});
