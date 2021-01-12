import build from './content';

import retrieveFullyConfgured from '../webServices/fullyConfigured';
import retrieveOptionKinds from '../webServices/optionKinds';

jest.mock('../webServices/fullyConfigured');
jest.mock('../webServices/optionKinds');

it('Content is built correctly', () => {

    return Promise.all([
        retrieveFullyConfgured(401733),
        retrieveFullyConfgured(401733),
        retrieveOptionKinds()
    ]).then((results) => {
        const dd = build(results[0], results[2], results[1]);
            
        expect(dd).toHaveProperty('content');
        expect(dd.content).toHaveProperty('stack');
        expect(Array.isArray(dd.content.stack)).toBeTruthy();
    });
});