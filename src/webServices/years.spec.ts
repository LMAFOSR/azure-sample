import getClient from './clientFactory';
import {noClient, withClient} from './years';

it('all the years in the Chrome Construct with client', (done) => {
    getClient()
        .then( (client) => {
            withClient(client)
                .then((results) => {
                    expect( Array.isArray(results)).toBeTruthy();
                    done();
                });
        });
});

it('all the years in the Chrome Construct with no client', () => {
    return noClient()
        .then((results) => {
            expect( Array.isArray(results)).toBeTruthy();
        });
});