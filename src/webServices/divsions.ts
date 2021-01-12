import * as soap from 'soap';

import accountInfo from './accountInfo';
import msrpRange from './msrpRange';
import url from './wsdl';
import {OrderAvailibility} from './orderAvailibility';

import {Division} from './fullyConfiguredModel';

export default (client, modelYear: number, orderAvailibility: OrderAvailibility = OrderAvailibility.Retail): Promise<Division[]> => {
    if (client) {
        return withClient(client, modelYear, orderAvailibility);
    } else {
        return noClient(modelYear, orderAvailibility);
    }
};

export const withClient = (client, modelYear: number, orderAvailibility: OrderAvailibility = OrderAvailibility.Retail): Promise<Division[]> => {
    return new Promise((resolve, reject) => {
        const load = {
            accountInfo, 
            modelYear,
            filterRules: { 
                orderAvailibility: orderAvailibility,
                msrpRange
            }
        };

        (client as any).getDivisions(load, (err, result) => {

            if (err) {
                reject(err);                 
            }

            resolve((result as any ).division);                           
        });       
    });
}

export const noClient = (modelYear: number, orderAvailibility: OrderAvailibility = OrderAvailibility.Retail): Promise<Division[]> => {
    return new Promise((resolve, reject) => {

        soap.createClient(url, (err, client) => {

            if (err) {
                reject(err);
            }

            const load = {
                accountInfo, 
                modelYear,
                filterRules: { 
                    orderAvailibility: orderAvailibility,
                    msrpRange: {
                        minimumPrice: 0,
                        maximumPrice: 1000000
                    }
                }
            };

            (client as any).getDivisions(load, (err, result) => {

                if (err) {
                    reject(err);                 
                }

                resolve((result as any ).division);                           
            });
        });
    });
}