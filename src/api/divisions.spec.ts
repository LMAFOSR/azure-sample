import divisions from './divisions';
import retrieveDivisions from '../webServices/divisions';

jest.mock('../webServices/divisions');

test('divisions api', () => {

    const req = {
        params: {
            year: 2019
        }
    };
    
    const res = {
        send: jest.fn()
    };

    const next = jest.fn();    

    return divisions(req, res, next)
        .then((results) => {
            expect(res.send).toBeCalled();
            expect(next).not.toBeCalled();
        });

})