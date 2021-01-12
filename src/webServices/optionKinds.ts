import * as soap from 'soap';

import accountInfo from './accountInfo';
import url from './wsdl';

export interface OptionKind {
    optionKindId: number;
    optionKindName: string;
}


export default (client?): Promise<Map<number, string>> => {
    if(client) {
        return (withClient(client) as Promise<Map<number, string>>);
    } else {
        return noClient();
    }
};

export const withClient = (client) => {
    return new Promise((resolve, reject) => {
        (client as any).getOptionKinds({accountInfo}, (err, result) => {

            if (err) {
                reject(err);                   
            }

            const optionKinds = new Map();

            (result as any).optionKind.forEach(item => optionKinds.set(item.optionKindId, item.optionKindName))

            resolve(optionKinds);                         
        });        
    })
}

export const noClient = (): Promise<Map<number, string>> => {
    return new Promise((resolve, reject) => {

        soap.createClient(url, (err, client) => {

            if (err) {
                reject(err);
            }

            (client as any).getOptionKinds({accountInfo}, (err, result) => {

                if (err) {
                    reject(err);                   
                }

                const optionKinds = new Map();

                (result as any).optionKind.forEach(item => optionKinds.set(item.optionKindId, item.optionKindName))


                resolve(optionKinds);                         
            });
        });
    });
}