import * as soap from 'soap';

import accountInfo from './accountInfo';
import msrpRange from './msrpRange';
import url from './wsdl';
import {OrderAvailibility} from './orderAvailibility';

import {Model} from './fullyConfiguredModel';

export default (client, modelYear: number, divisionId: number, orderAvailibility: OrderAvailibility = OrderAvailibility.Retail): Promise<Model[]> => {
    
    if (client) {
        return withClient(client, modelYear, divisionId, orderAvailibility);
    } else {
        return noClient(modelYear, divisionId, orderAvailibility);
    }
};

export const withClient = (client, modelYear: number, divisionId: number, orderAvailibility: OrderAvailibility = OrderAvailibility.Retail): Promise<Model[]> => {
    return new Promise((resolve, reject) => {
        const load = {
            accountInfo, 
            modelYear,
            divisionId,
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

export const noClient = (modelYear: number, divisionId: number, orderAvailibility: OrderAvailibility = OrderAvailibility.Retail): Promise<Model[]> => {
    return new Promise((resolve, reject) => {

        soap.createClient(url, (err, client) => {

            if (err) {
                reject(err);
            }

            const load = {
                accountInfo, 
                modelYear,
                divisionId,
                filterRules: { 
                    orderAvailibility: orderAvailibility,
                    msrpRange: {
                        minimumPrice: 0,
                        maximumPrice: 1000000
                    }
                }
            };

            (client as any).getModelsByDivision(load, (err, result) => {

                if (err) {
                    reject(err);                 
                }

                resolve((result as any ).model);                           
            });
        });
    });
}