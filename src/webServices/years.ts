import * as soap from 'soap';

import accountInfo from './accountInfo';
import url from './wsdl';
import {OrderAvailibility} from './orderAvailibility';

export const noClient = (orderAvailibility: OrderAvailibility = OrderAvailibility.Retail): Promise<Number[]> => {
    return new Promise((resolve, reject) => {

        soap.createClient(url, (err, client) => {

            if (err) {
                reject(err);
            }

            const load = {
                accountInfo, 
                filterRules: { 
                    orderAvailibility: orderAvailibility,
                    msrpRange: {
                        minimumPrice: 0,
                        maximumPrice: 1000000
                    }
                }
            };

            (client as any).getModelYears(load, (err, result) => {

                if (err) {
                    reject(err);                 
                }

                resolve((result as any ).i);                           
            });
        });
    });
}