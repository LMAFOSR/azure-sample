import getClient from './clientFactory';
import {noClient, withClient} from './styles'

it('all the styles in the Chrome Construct with client', (done) => {
    getClient()
        .then( (client) => {
            withClient(client, 30615)
                .then((results) => {
                    expect( Array.isArray(results)).toBeTruthy();
                    done();
                });
        });
});

it('all the styles in the Chrome Construct with no client', () => {
    return noClient(30615)
        .then((results) => {
            expect( Array.isArray(results)).toBeTruthy();
        });
});