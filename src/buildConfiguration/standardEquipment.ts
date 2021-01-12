import fp from 'lodash/fp';

import {FullyConfigured, StandardEquipment} from '../webServices/fullyConfiguredModel';

export default (configuration: FullyConfigured) => {

    const se = fp.orderBy(['consumerFriendlyHeaderName', 'description'])(['asc','asc'])(configuration.standardEquipment);
    const output: any[] = [];

    se.reduce((acc: StandardEquipment, cur: any) => {

        if(acc.consumerFriendlyHeaderName === '' || acc.consumerFriendlyHeaderName !== cur.consumerFriendlyHeaderName) {
            output.push({
                text: cur.consumerFriendlyHeaderName, 
                bold: true, 
                fontSize: 11, 
                margin: [16, 8, 0, 8]
            });
            output.push({
                ul: [{text: cur.description, margin: [0,0,0,3]}],
                fontSize: 9, 
                margin: [16,0,0,0]
            });
        } else {
            output[output.length - 1].ul.push({text: cur.description, margin: [0,0,0,3]});
        }

        return cur;
    }, {
        headerId: 0,         
        headerName: '', 
        consumerFriendlyHeaderId: 0, 
        consumerFriendlyHeaderName: '',
        description: '',
        categories: [],
        upgrade: true
    });

    return output;
};