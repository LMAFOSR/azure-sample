import getClient from './clientFactory';
import {noClient, withClient} from './divisions'

it('all the divisions in the Chrome Construct with client', (done) => {
    getClient()
        .then( (client) => {
            withClient(client, 2019)
                .then((results) => {
                    expect( Array.isArray(results)).toBeTruthy();
                    done();
                });
        });
});

it('all the divsions in the Chrome Construct with no client', () => {
    return noClient(2019)
        .then((results) => {
            expect( Array.isArray(results)).toBeTruthy();
        });
});