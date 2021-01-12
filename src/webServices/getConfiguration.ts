import * as soap from 'soap';

import accountInfo, {AccountInfo as AccountInfoInterface} from './accountInfo';
import returnParameters, {ReturnParameters, PriceSetting} from './returnParameters'
import {FullyConfigured} from './fullyConfiguredModel';
import url from './wsdl';

export interface ConfigurationRequest {
    accountInfo: AccountInfoInterface;
    configurationState: string;
    returnParameters: ReturnParameters;   
}

export const configurationRequestFactory = (configurationState, priceSetting: PriceSetting) => {
    return {
        accountInfo,
        configurationState,
        returnParameters: {...returnParameters, priceSetting}
    };
}

export default (client, configurationState, priceSetting: PriceSetting): Promise<FullyConfigured> => {
    if (client) {
        return withClient(configurationState, priceSetting, client) as Promise<FullyConfigured>;
    } else {
        return noClient(configurationState, priceSetting) as Promise<FullyConfigured>;
    }    
}

export const withClient = (configurationState = '', priceSetting: PriceSetting = PriceSetting.LatestPrice, client): Promise<FullyConfigured> => {

    return new Promise((resolve, reject) => {

        (client as any).getConfiguration(configurationRequestFactory(configurationState, priceSetting), (err, result) => {

            if (err) {
                const invalidOptionCode = /Invalid serialized/i;

                if (invalidOptionCode.test(err.body)) {
                    reject({message: 'invalid configuration state'})
                } else {
                    reject(err);
                }                    
            }

            resolve((result as any).configuration);                           
        });
    }); 
};

export const noClient = (configurationState = '', priceSetting: PriceSetting  = PriceSetting.LatestPrice): Promise<FullyConfigured> => {

    return new Promise((resolve, reject) => {

        soap.createClient(url, (err, client) => {

            if (err) {
                reject(err);
            }

            (client as any).getConfiguration(configurationRequestFactory(configurationState, priceSetting), (err, result) => {

                if (err) {

                    const invalidOptionCode = /Invalid serialized/i;

                    if (invalidOptionCode.test(err.body)) {
                        reject({message: 'invalid configuration state'})
                    } else {
                        reject(err);
                    }                    
                }

                resolve((result as any).configuration);                           
            });
        });
    });
}