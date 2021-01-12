import {requiredOptionsSelected ,prepareOptions, process, requireOptionTypes, requiredOptions, priceNotSet, discontinued} from './options';
import retrieveFullyConfgured from '../webServices/fullyConfigured';
import retrieveOptionKinds from '../webServices/optionKinds';

jest.mock('../webServices/fullyConfigured');
jest.mock('../webServices/optionKinds');

it('required options selected', () => {

    return Promise.all([
        retrieveFullyConfgured(402727, false),
        retrieveOptionKinds()
    ])
    .then(([configuration, optionKinds]) => {
        const requiredOptionsResults = requiredOptionsSelected(configuration.options, optionKinds);
        expect(Array.isArray(requiredOptionsResults)).toBeTruthy();
        expect(requiredOptionsResults).toHaveLength(1);
    });
});

it('test prepare options', () => {

    return Promise.all([
        retrieveFullyConfgured(401733, false),
        retrieveOptionKinds()
    ])
    .then(([configuration, optionKinds]) => {

        const sortedOptions = prepareOptions(configuration.options, optionKinds);
        
        expect(sortedOptions).toHaveProperty('Primary Exterior Color');
        expect(sortedOptions).toHaveProperty('Seat Color');
        expect(sortedOptions).toHaveProperty('NO OPTION KIND');
    });
});

it('process works to get formatted options with NO OPTION KIND', () => {

    return Promise.all([
        retrieveFullyConfgured(401733, false),
        retrieveOptionKinds()
    ])
    .then(([configuration, optionKinds]) => {

        const dd = process(configuration, optionKinds);

        expect(Array.isArray(dd)).toBeTruthy();
        expect(dd).toHaveLength(11);
    });
});

it('process works to get formatted options without NO OPTION KIND', () => {

    return Promise.all([
        retrieveFullyConfgured(404010, true),
        retrieveOptionKinds()
    ])
    .then(([configuration, optionKinds]) => {

        const dd = process(configuration, optionKinds);

        expect(Array.isArray(dd)).toBeTruthy();
        expect(dd).toHaveLength(8);
    });
});

it('Identify all required options', () => {

    return retrieveOptionKinds()
        .then((optionKinds) => {
            const required = requireOptionTypes(optionKinds);
            
            expect(Array.isArray(required)).toBeTruthy();
            expect(required[0]).toHaveProperty('optionKindId');
            expect(required[0]).toHaveProperty('optionKindName');
        });
});

it('Get all required options', () => {

    return Promise.all([retrieveFullyConfgured(402236, false), retrieveOptionKinds()])
        .then((results) => {
            const options = requiredOptions(results[0].options, results[1]);
            expect(options).toHaveLength(1);
        });
});

it('Price is not set', () => {
    return Promise.all([retrieveFullyConfgured(405044), retrieveOptionKinds()])
        .then((results) => {
            const option = results[0].options.find(item => item.chromeOptionCode === '9H');
            expect(priceNotSet((option as any))).toBeTruthy();
        });
});

it('Recognize discontinued option', () => {
    return Promise.all([retrieveFullyConfgured(405044), retrieveOptionKinds()])
        .then((results) => {
            const option = results[0].options.find(item => item.chromeOptionCode === '2L');
            expect(discontinued(option as any)).toEqual('(Discontinued)')
        });
});