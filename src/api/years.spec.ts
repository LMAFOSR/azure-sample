import years from './years';
import retrieveYears from '../webServices/years';

jest.mock('../webServices/years');

test('years api', () => {

    const req = {
        params: {}
    };
    
    const res = {
        send: jest.fn()
    };

    const next = jest.fn();    

    return years(res, res, next)
        .then((results) => {
            expect(res.send).toBeCalled();
            expect(next).not.toBeCalled();
        });

})