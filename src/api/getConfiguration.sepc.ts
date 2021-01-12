import getConfiguration from './getConfiguration';
import retrieveGetConfiguration from '../webServices/getConfiguration';

jest.mock('../webServices/getConfiguration');

test('getConfiguration api', () => {

    const req = {
        params: {
            configurationState: 'H4sIAAAAAAAAAGNgYJBjYKi4wcDGO4eBKTWPgSk0mAEkhsJnzJGoutnAyMgIlGJgZ2D2NHQCEkHmDMwGhoYMzIbhIUDCLJSB2cPPjYHZ2cToPxAwQAAHA7OysjKQAdYM0QHngDQhOEBj4BygIQgOyFg4B2Q5ggN0BIwD5DIYMDgyODMgCWEBUH8wMAAAR5Xz7f0AAAA=',
            priceSetting: 'initialPrice',
        }
    };
    
    const res = {
        send: jest.fn()
    };

    const next = jest.fn();    

    return getConfiguration(req, res, next)
        .then((results) => {
            expect(res.send).toBeCalled();
            expect(next).not.toBeCalled();
        });

})