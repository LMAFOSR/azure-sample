import styles from './styles';

import retrieveStyles from '../webServices/styles';

jest.mock('../webServices/styles');

test('styles api', () => {

    const req = {
        params: {
            modelId: 29338
        }
    };
    
    const res = {
        send: jest.fn()
    };

    const next = jest.fn();     

    return styles(req, res, next)
        .then((results) => {
            expect(res.send).toBeCalled();
            expect(next).not.toBeCalled();
        }); 
});