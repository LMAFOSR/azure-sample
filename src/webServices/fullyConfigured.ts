/*tslint:disable*/
import * as soap from 'soap';

import accountInfo from './accountInfo';
import {FullyConfigured} from './fullyConfiguredModel';
import url from './wsdl';
import returnParameters, {ReturnParameters, PriceSetting} from './returnParameters';
import {OrderAvailibility} from './orderAvailibility';

export default (styleId, orderAvailibility?, priceSetting?, client?): Promise<FullyConfigured> => {
    if (client) {
        return (withClient(styleId, client, orderAvailibility, priceSetting) as Promise<FullyConfigured>);
    } else {
        return noClient(styleId, orderAvailibility, priceSetting);
    }
}

export const withClientConfigure = (styleId: number | string, orderAvailability: OrderAvailibility = OrderAvailibility.Retail, returnParameters: ReturnParameters, client) => {
    return new Promise((resolve, reject) => {
        (client as any).getStyleFullyConfiguredByStyleId({accountInfo, orderAvailability, styleId, returnParameters}, (err, result) => {

            if (err) {
                const invalidId = /Style was not found for id/i;

                if (invalidId.test(err.body)) {
                    reject({message: 'invalid styleId'})
                } else {
                    reject(err);
                }                    
            }
            resolve((result as any).configuration);                           
        });        
    });
};

export const withClient = (styleId, client, orderAvailability = OrderAvailibility.Retail, priceSetting = PriceSetting.LatestPrice, disableOptionOrderLogic = false) => {

    return new Promise((resolve, reject) => {

        returnParameters.priceSetting = priceSetting;
        returnParameters.disableOptionOrderLogic = disableOptionOrderLogic;

        (client as any).getStyleFullyConfiguredByStyleId({accountInfo, orderAvailability, styleId, returnParameters}, (err, result) => {

            if (err) {
                const invalidId = /Style was not found for id/i;

                if (invalidId.test(err.body)) {
                    reject({message: 'invalid styleId'})
                } else {
                    reject(err);
                }                    
            }
            resolve((result as any).configuration);                           
        });
    });
};

export const noClient = (styleId: number, orderAvailability = OrderAvailibility.Retail, priceSetting = PriceSetting.LatestPrice, disableOptionOrderLogic = false): Promise<FullyConfigured> => {

    return new Promise((resolve, reject) => {

        soap.createClient(url, (err, client) => {

            if (err) {
                reject(err);
            }

            returnParameters.priceSetting = priceSetting;
            returnParameters.disableOptionOrderLogic = disableOptionOrderLogic;

            (client as any).getStyleFullyConfiguredByStyleId({accountInfo, orderAvailability, styleId, returnParameters}, (err, result) => {

                if (err) {

                    const invalidId = /Style was not found for id/i;

                    if (invalidId.test(err.body)) {
                        reject({message: 'invalid styleId'})
                    } else {
                        reject(err);
                    }                    
                }

                resolve((result as any).configuration);                           
            });
        });
    });
}