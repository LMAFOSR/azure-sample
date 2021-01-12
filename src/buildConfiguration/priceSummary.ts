import format from 'format-number';

import {FullyConfigured} from '../webServices/fullyConfiguredModel';
import {baseMSRP, baseInvoice, destinationMSRP, destinationInvoice, totalVehicleMSRP, totalVehicleInvoice, advertAdjustments} from '../webServices/calculations';

export default (latestConfiguration: FullyConfigured, optionKinds: Map<number, string>, initialCofiguration?: FullyConfigured) => {
    const summary = [
        {text: 'PRICING SUMMARY', 'bold': true}
    ];

    if (initialCofiguration) {
        return [
            ...summary,
            ...buildSummary(latestConfiguration, optionKinds, 'Latest Price'),
            ...buildSummary(initialCofiguration, optionKinds, 'Initial Price')
        ];
    } else {
        return [
            ...summary,
            ...buildSummary(latestConfiguration, optionKinds)
        ];
    }
}

export const buildSummary = (configuration: FullyConfigured, optionKinds: Map<number, string>, title?: string) => {
    return [
        componenTitle(title),
        {
            layout: 'headerLineOnly',
            table : {
                headerRows: 1,
                widths: ['*', '*', '*'],
                body: [
                    [
                        {text: 'Price Component', bold: true},
                        {text: 'MSRP', 'bold': true, alignment: 'right'},
                        {text: 'Invoice', 'bold': true, alignment: 'right'}
                    ],
                    [
                        {text: 'Base Price'},
                        {text: format({prefix: '$', round: 2})(baseMSRP(configuration)), alignment: 'right'},
                        {text: format({prefix: '$', round: 2})(baseInvoice(configuration)), alignment: 'right'}
                    ],
                    // [
                    //     {text: 'Total Options'},
                    //     {text: format({prefix: '$', round: 2})(optionsMSRPTotal(configuration)), alignment: 'right'},
                    //     {text: format({prefix: '$', round: 2})(optionsInvoiceTotal(configuration)), alignment: 'right'}
                    // ],
                    // [
                    //     {text: 'Vehicle Subtotal'},
                    //     {text: format({prefix: '$', round: 2})(subtotalMSRP(configuration)), alignment: 'right'},
                    //     {text: format({prefix: '$', round: 2})(subtotalInvoice(configuration)), alignment: 'right'}
                    // ],
                    [
                        {text: 'Advert/Adjustments'},
                        {text: format({prefix: '$', round: 2})(advertAdjustments(configuration, optionKinds).msrp), alignment: 'right'},
                        {text: format({prefix: '$', round: 2})(advertAdjustments(configuration, optionKinds).invoice), alignment: 'right'}
                    ],
                    [
                        {text: 'Destination Charge'},
                        {text: format({prefix: '$', round: 2})(destinationMSRP(configuration)), alignment: 'right'},
                        {text: format({prefix: '$', round: 2})(destinationInvoice(configuration)), alignment: 'right'}
                    ],
                    [
                        {text: 'TOTAL VEHICLE PRICE', italics: true, margin: [0,10,0,0]},
                        {text: format({prefix: '$', round: 2})(totalVehicleMSRP(configuration, optionKinds)), alignment: 'right', italics: true, margin: [0,10,0,0]},
                        {text: format({prefix: '$', round: 2})(totalVehicleInvoice(configuration, optionKinds)), alignment: 'right', italics: true, margin: [0,10,0,0]}
                    ]                     
                ]
            }, 
            margin: [40,tableTopMargin(title),0,0],             
            ...pageBreak(title)
        }        
    ];
};

export const tableTopMargin = (title: string | undefined = undefined) => {
    if (title) {
        return 11;
    } else {
        return 20;
    }
};

export const componenTitle = (title: string | undefined = undefined) => {
    if (title) {
        return {
            text: title,
            bold: true,
            fontSize: 11, 
            margin: [16, 12, 0, 0]            
        };
    } else {
        return { };
    }    
}

export const pageBreak = (title: string | undefined = undefined) => {
    if (title && title !== 'Initial Price' ) {
        return {};
    } else {
        return { pageBreak: 'after' };
    }
}