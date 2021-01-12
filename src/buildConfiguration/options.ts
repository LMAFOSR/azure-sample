import fp from 'lodash/fp';
import format from 'format-number';

import {FullyConfigured, Option, Description} from '../webServices/fullyConfiguredModel';
import { OptionKind } from '../webServices/optionKinds';

export const process = (configuration: FullyConfigured, optionKinds: Map<number, string>) => {
    
    const options: Option[] = configuration.options;    
    const sortedOptions = prepareOptions(options, optionKinds);

    const documentOptions = fp.pipe(
        fp.keys,
        fp.filter(key => key !== 'NO OPTION KIND'),
        fp.map((key: string) => optionGroupTable((sortedOptions[key] as any), key)),
        fp.flatten,
    )(sortedOptions)

    if ('NO OPTION KIND' in sortedOptions) {
        return [
            ...optionGroupTable((sortedOptions as any)['NO OPTION KIND']),
            ...documentOptions
        ];
    } else {
        return [
            ...documentOptions
        ];
    }
};

export const priceNotSet = (option: Option) => {

    return option.descriptions.find( item => item.type === 'PriceNote' && item.description === '*PRICE TO FOLLOW*') ?
        true :
        false;
}

export const discontinued = (option: Option) => {
    return option.discontinued ? '(Discontinued)' : '';
}

export const selected = (option: Option, optionKindName) => {

    const requiredTester = /required option/i;

    if (requiredTester.test(optionKindName)) {
        return option.selectionState === 'Selected' ?
            '(Configured with this option)' : 
            ''
    } else {
        return '';
    }

}

export const optionGroupTable = (options: Option[], optionKindName?: string) => {

    const output: any[] = [];
    let start = 0;

    if (optionKindName) {
        output.push({text: optionKindName, 'bold': true, margin: [0,10,0,10]});
        start = 1;
    }
    
    output.push({
        layout: 'headerLineOnly',
        table: {
            headerRows: 1,
            widths: ['10%', '64%', '13%', '13%'],
            body: [
                [
                    {text: 'Code', bold: true, alignment: "left"},    
                    {text: 'Description', bold: true, alignment: "left"},
                    {text: 'MSRP', bold: true, alignment: "right"},
                    {text: 'Invoice', bold: true, alignment: "right"}
                ]                
            ]
        }
    });   
    
    options.forEach( (cur: Option) =>  {

        const primary = cur.descriptions.find( item => item.type == 'PrimaryName' )
        const description = primary ? primary : cur.descriptions[0];  

        const noPrice = priceNotSet(cur);

        output[start].table.body.push([
            {text: cur.oemOptionCode},
            {text: `${description.description} ${selected(cur, optionKindName)} ${discontinued(cur)}`},
            {text: `${noPrice ? 'N/A': format({prefix: '$', round: 2})(parseFloat(cur.msrp))}`, alignment: 'right'},
            {text: `${noPrice ? 'N/A': format({prefix: '$', round: 2})(parseFloat(cur.invoice))}`, alignment: 'right'}
        ]);


        if (cur.consumerFriendlyHeaderId === 4) {

            const extended = cur.descriptions.find( item => item.type == 'Extended' );

            if (extended) {
                output[start].table.body.push([
                    {text: '', fontSize: 9},
                    {text: extended.description.replace('-inc: ', ''), fontSize: 9},
                    {text: '', fontSize: 9},
                    {text: '', fontSize: 9}
                ]);
            }
        }

    });

    return output;    
}

export const addOptionKindNameV2 = (optionKinds: Map<number, string>) => {
    return (option: Option) => {
        if('optionKindId' in option) {
            const optionKindName = optionKinds.get(option.optionKindId);
            return {...option, optionKindName};
        } else {
            return {...(option as Option), optionKindName: null};
        }
    }
}

export const addOptionKindName = (optionKinds: Map<number, string>) => {
    return (options: Option[]): Option[] => {
        return options.map( (item) => {
            if('optionKindId' in item) {                
                const optionKindName = optionKinds.get(item.optionKindId);
                return {...item, optionKindName}
            } else {
                return {...(item as Option), optionKindName: null};
            } 
        });
    }
};

export const prepareOptions = (options: Option[], optionKinds: Map<number, string>)=> {

    const prepare = fp.pipe(
        (options) => addOptionKindName(optionKinds)(options),
        // (options) => fp.orderBy(['optionKindName', 'chromeOptionCode'])(['asc', 'asc'])(options),
        (options) => fp.orderBy(['optionKindName'])(['asc'])(options),
        (options) => fp.groupBy('optionKindName')(options)
    );

    return prepare(options);
};

export const requireOptionTypes = (optionKinds: Map<number, string>): OptionKind[] => {

    const requiredTester = /required option/i;

    const prepare = fp.pipe(
        (options: Map<number, string>) => Array.from(options),
        (options) => options.filter((item) => requiredTester.test(item[1])),
        (options) => options.map((item) => ({optionKindId: item[0], optionKindName: item[1]}))
    );

    return prepare(optionKinds);
}

export const requiredOptions = (options: Option[], optionKinds: Map<number, string>) => {

    const requiredOptionTypes = requireOptionTypes(optionKinds);

    return options.filter((item) => requiredOptionTypes.find( cur => cur.optionKindId === item.optionKindId ) )
}

export const requiredOptionsSelected = (options: Option[], optionKinds: Map<number, string>) => {
    return requiredOptions(options, optionKinds)
        .filter((option) => {
            return option.selectionState === 'Selected';
        });
}
