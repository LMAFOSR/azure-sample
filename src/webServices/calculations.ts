import {FullyConfigured} from './fullyConfiguredModel';
import {requiredOptionsSelected} from '../buildConfiguration/options'

export const advertAdjustments = (configuration: FullyConfigured, optionKinds: Map<number, string>) => {
    return requiredOptionsSelected(configuration.options, optionKinds).reduce((acc, cur) => {
        return {msrp: acc.msrp + parseInt(cur.msrp), invoice: acc.invoice + parseInt(cur.invoice)};
    }, {msrp: 0, invoice: 0})
};

export const baseMSRP = (configuration: FullyConfigured) => {
    return parseFloat(configuration.style.baseMsrp);
};

export const baseInvoice = (configuration: FullyConfigured) => {
    return parseFloat(configuration.style.baseInvoice);
};

export const destinationMSRP = (configuration: FullyConfigured) => {
    return parseFloat(configuration.style.destination);
}

export const destinationInvoice = (configuration: FullyConfigured) => {
    return parseFloat(configuration.style.destination);
}

export const optionsMSRPTotal = (configuration: FullyConfigured) => {
    return configuration.options.reduce((acc, cur) => {
        return acc + parseFloat(cur.msrp)
    }, 0);
};

export const optionsInvoiceTotal = (configuration: FullyConfigured) => {
    return configuration.options.reduce((acc, cur) => {
        return acc + parseFloat(cur.invoice);
    }, 0);    
};

export const subtotalMSRP = (configuration: FullyConfigured) => {
    return baseMSRP(configuration) + optionsMSRPTotal(configuration);
};

export const subtotalInvoice = (configuration: FullyConfigured) => {
    return baseInvoice(configuration) + optionsInvoiceTotal(configuration);    
};

export const totalVehicleMSRP = (configuration: FullyConfigured, optionKinds: Map<number, string>) => {
    // return subtotalMSRP(configuration) + destinationMSRP(configuration)
    return baseMSRP(configuration) + destinationMSRP(configuration) + advertAdjustments(configuration, optionKinds).msrp;
}

export const totalVehicleInvoice = (configuration: FullyConfigured, optionKinds: Map<number, string>) => {
    return baseInvoice(configuration) + destinationInvoice(configuration) + advertAdjustments(configuration, optionKinds).invoice;
    // return subtotalInvoice(configuration) + destinationInvoice(configuration)
}