import toggleOption from './toggleOption';
import retrieveToggleOption from '../webServices/toggleOption';

jest.mock('../webServices/toggleOption');

test('toggleOption api', () => {

    const req = {
        params: {
            configurationState: 'H4sIAAAAAAAAAGNgYJBjYKi4wcDGO4eBKTWPgSk0mAEkhsJnzJGoutnAyMgIlGJgZ2D2NHQCEkHmDMwGhoYMzIbhIUDCLJSB2cPPjYHZ2cToPxAwQAAHA7OysjKQAdYM0QHngDQhOEBj4BygIQgOyFg4B2Q5ggN0BIwD5DIYMDgyODMgCWEBUH8wMAAAR5Xz7f0AAAA=',
            chromeOptionCode: 'YG9',
            returnDeltaConfiguration: false
        }
    };
    
    const res = {
        send: jest.fn()
    };

    const next = jest.fn();    

    return toggleOption(req, res, next)
        .then((results) => {
            expect(res.send).toBeCalled();
            expect(next).not.toBeCalled();
        });

})