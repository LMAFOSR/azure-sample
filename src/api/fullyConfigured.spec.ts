import fullyConfigured from './fullyConfigured';
import retrieveFullyConfigured from '../webServices/fullyConfigured';

jest.mock('../webServices/fullyConfigured');

test('fullyConfigured', () => {

    const req = {
        params: {
            styleId: 44444
        }
    };
    
    const res = {
        send: jest.fn()
    };

    const next = jest.fn();

    return fullyConfigured(req, res, next)
        .then(() => {
            expect(res.send).toBeCalled();
            expect(next).not.toBeCalled();
        });
})