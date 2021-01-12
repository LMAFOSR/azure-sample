import models from './models';

import retrieveModels from '../webServices/models';

jest.mock('../webServices/models')

test('models api', () => {

    const req = {
        params: {
            year: 2019,
            divisionId: 12
        }
    };
    
    const res = {
        send: jest.fn()
    };

    const next = jest.fn();     

    return models(req, res, next)
        .then((results) => {
            expect(res.send).toBeCalled();
            expect(next).not.toBeCalled();
        });    

});