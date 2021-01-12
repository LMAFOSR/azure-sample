import * as soap from 'soap';

import accountInfo from './accountInfo';
import msrpRange from './msrpRange';
import url from './wsdl';
import {OrderAvailibility} from './orderAvailibility';

import {Style} from './fullyConfiguredModel';

export default (client, modelId: number, postalCode = '', orderAvailibility: OrderAvailibility = OrderAvailibility.Retail) => {
    if (client) {
        return withClient(client, modelId, postalCode, orderAvailibility);
    } else {
        return noClient(modelId, postalCode, orderAvailibility);
    }
}

export const withClient = (client, modelId: number, postalCode = '', orderAvailibility: OrderAvailibility = OrderAvailibility.Retail): Promise<Style[]> => {
    return new Promise((resolve, reject) => {
        const load = {
            accountInfo, 
            modelId,
            filterRules: { 
                orderAvailibility: orderAvailibility,
                postalCode,
                marketClassIds: [],
                vehicleTypes: [],                    
                msrpRange
            }
        };

        (client as any).getStyles(load, (err, result) => {

            if (err) {
                reject(err);                 
            }

            if(result.hasOwnProperty('style')) {
                resolve((result as any ).style);
            } else {
                reject(`Can't find styles for modelId ${modelId}`);
            }                                       
        });       
    });
}

export const noClient = (modelId: number, postalCode = '', orderAvailibility: OrderAvailibility = OrderAvailibility.Retail): Promise<Style[]> => {

    return new Promise((resolve, reject) => {

        soap.createClient(url, (err, client) => {
            const load = {
                accountInfo, 
                modelId,
                filterRules: { 
                    orderAvailibility: orderAvailibility,
                    postalCode,
                    marketClassIds: [],
                    vehicleTypes: [],                    
                    msrpRange
                }
            };            

            if (err) {
                reject(err);
            }

            (client as any).getStyles(load, (err, result) => {

                if (err) {
                    reject(err);
                }

                resolve(((result as any).style));
            });
        });        

    });
};
