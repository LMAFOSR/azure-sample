import * as soap from 'soap';
import url from './wsdl';

export default () => {
    return new Promise((resolve, reject) => {
        soap.createClient(url, (err, client) => {
            if(err) {
                reject(err);
            } else {
                resolve(client);
            }
        });
    });
}
