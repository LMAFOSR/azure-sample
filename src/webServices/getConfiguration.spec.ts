import getClient from './clientFactory';

import {noClient, withClient} from './getConfiguration';
import {PriceSetting} from './returnParameters'

describe('Getting a configuration', () => {

    it('noClient', () => {

        const configurationState = 'H4sIAAAAAAAAAGNgYJBjYKi4wcDGO4eBKTWPgSk0mAEkhsJnzFF/+7aBkZERKMXAzsDsaegEJILMGZgNDA0ZmA3DQ4CEWSgDs4efGwOzs4nRfyBggAAOBmZlZWUgA6wZogPOAWlCcIDGwDlAQxAckLFwDshyBAfoCBgHyGUwYHBkcGZAEsICoP5gYAAASKaB2f0AAAA=';
        const priceSetting = PriceSetting.InitialPrice;

        return noClient(configurationState, priceSetting)
            .then((res) => {
                expect(typeof res).toBe('object');
            })
            .catch((err) => {
                console.log(err)
            });
    });

    it('withClient', (done) => {

        const configurationState = 'H4sIAAAAAAAAAGNgYJBjYKi4wcDGO4eBKTWPgSk0mAEkhsJnzFF/+7aBkZERKMXAzsDsaegEJILMGZgNDA0ZmA3DQ4CEWSgDs4efGwOzs4nRfyBggAAOBmZlZWUgA6wZogPOAWlCcIDGwDlAQxAckLFwDshyBAfoCBgHyGUwYHBkcGZAEsICoP5gYAAASKaB2f0AAAA=';
        const priceSetting = PriceSetting.InitialPrice;
        
        getClient()
        .then( (client) => {
            withClient(configurationState, priceSetting, client)
                .then((res) => {
                    expect( typeof res).toBe('object');
                    done();
                });
        });        
    });

});