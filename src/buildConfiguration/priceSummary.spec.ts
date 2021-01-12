import build from './priceSummary';
import retrieveFullyConfgured from '../webServices/fullyConfigured';
import retrieveOptionKinds from '../webServices/optionKinds';

jest.mock('../webServices/fullyConfigured');
jest.mock('../webServices/optionKinds');

it('Built with both latest price and initial price' , () => {
    return Promise.all([
        retrieveFullyConfgured(401733),
        retrieveFullyConfgured(401733),
        retrieveOptionKinds()
    ]). then((results) => {
        const primaryHeader = build(results[0], results[2], results[1]);

        expect(primaryHeader).toHaveLength(5);
    });
});

it('Built with just the latest price', () => {
    return Promise.all([
        retrieveFullyConfgured(401733),
        retrieveOptionKinds()
    ]). then((results) => {
        const primaryHeader = build(results[0], results[1]);

        expect(primaryHeader).toHaveLength(3);
    });    
});