import retrieve from '../webServices/fullyConfigured';
import {optionsMSRPTotal, optionsInvoiceTotal} from './calculations'

jest.mock('../webServices/fullyConfigured.ts');

test('MSRP', () => {
    return retrieve(401718)
        .then(res => {
            const totalMSRP = optionsMSRPTotal(res);
            expect(totalMSRP).toEqual(6205);
        });
});

test('Invoice', () => {
    return retrieve(401718)
        .then(res => {
            const totalInvoice = optionsInvoiceTotal(res);
            expect(totalInvoice).toEqual(4089);
        });    
});
