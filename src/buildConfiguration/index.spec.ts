import build from './index';
import retrieveFullyConfgured from '../webServices/fullyConfigured';
import retrieveOptionKinds from '../webServices/optionKinds';

jest.mock('../webServices/fullyConfigured');
jest.mock('../webServices/optionKinds');

it('Get the correct configuration object', () => {

    return Promise.all([
        retrieveFullyConfgured(401733),
        retrieveOptionKinds()
    ])
    .then(([configuration, optionKinds]) => {
        const dd = build(configuration, optionKinds);

        expect(dd).toHaveProperty('pageSize');
        expect(dd).toHaveProperty('pageOrientation');
        expect(dd).toHaveProperty('pageMargins');
        expect(dd).toHaveProperty('header');
        
        expect(dd.header).toHaveProperty('stack');
        expect(dd.header.stack).toHaveLength(5);
        expect(dd.header.stack[4]).toHaveProperty('columns');
        expect(dd).toHaveProperty('content');
        expect(dd).toHaveProperty('footer');

        expect(dd.pageSize).toEqual('LEGAL');
        expect(dd.pageOrientation).toEqual('portrait');
        expect( Array.isArray(dd.pageMargins)).toBeTruthy;
        expect(Array.isArray(dd.header.stack[4].columns)).toBeTruthy;
        expect(typeof dd.footer).toEqual('function');
    });
});
