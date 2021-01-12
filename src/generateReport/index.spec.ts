import {getStyleIdPost, getStyleIdGet, retrieve, retrieveClient} from './index';

test('getStyleIdPost', () => {
    const req = {body : {styleId: 401733}};
    const res = {};
    const next = jest.fn();

    getStyleIdPost(req, res, next);

    expect(req).toHaveProperty('styleId')
    expect(next).toHaveBeenCalledTimes(1);
});

test('getStyleIdGet', () => {
    const req = {params : {id: 401733}};
    const res = {};
    const next = jest.fn();

    getStyleIdGet(req, res, next);

    expect(req).toHaveProperty('styleId')
    expect(next).toHaveBeenCalledTimes(1);
});

test('does the response properly have the properties on it', () => {

    const req = {styleId: 401733, priceSetting: 'LatestPrice'};
    const res = {};
    const next = jest.fn();

    return retrieve(req, res, next)
        .then( () => {
            expect(req).toHaveProperty('fullyConfigured');
            expect(req).toHaveProperty('optionKinds');
            expect(next).toHaveBeenCalledTimes(1);
        });
});

test('Client - does the response properly have the properties on it', () => {

    const req = {styleId: 401733};
    const res = {};
    const next = jest.fn();

    return retrieveClient(req, res, next)
        .then( () => {
            expect(req).toHaveProperty('fullyConfigured');
            expect(req).toHaveProperty('optionKinds');
            expect(next).toHaveBeenCalledTimes(1);
        });
});