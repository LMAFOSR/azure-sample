export interface ReturnParameters {
    includeStandards: boolean;
    includeOptions: boolean;
    includeOptionDescriptions: boolean;
    includeDiscontinuedOptions: boolean;
    splitOptionsForAltDescription: boolean;
    includeSpecialEquipmentOptions: boolean;
    includeExtendedOEMOptions: boolean;
    includeOEMFleetCodes: boolean;
    includeEditorialContent: boolean;
    includeConsumerInfo: boolean;
    includeStructuredConsumerInfo: boolean;
    includeConfigurationChecklist: boolean;
    includeAdditionalImages: boolean;
    includeTechSpecs: boolean;
    filteredTechSpecTitleIds: any[],
    measurementSystem: string;
    includeEnhancedPrices: boolean;
    includeStylePackages: boolean;
    includeCustomEquipmentInTotalPrices: boolean;
    includeTaxesInTotalPrices: boolean;
    disableOptionOrderLogic: boolean;
    priceSetting: PriceSetting;    
}

export enum PriceSetting {
    LatestPrice = 'LatestPrice',
    InitialPrice = 'InitialPrice',
    NoChange = 'NoChange',
    Both = 'Both'
}

export default {
    includeStandards: true,
    includeOptions: true,
    includeOptionDescriptions: true,
    includeDiscontinuedOptions: true,
    splitOptionsForAltDescription: true,
    includeSpecialEquipmentOptions: true,
    includeExtendedOEMOptions: true,
    includeOEMFleetCodes: true,
    includeEditorialContent: true,
    includeConsumerInfo: true,
    includeStructuredConsumerInfo: true,
    includeConfigurationChecklist: true,
    includeAdditionalImages: true,
    includeTechSpecs: true,
    filteredTechSpecTitleIds: [],
    measurementSystem: 'SAE',
    includeEnhancedPrices: true,
    includeStylePackages: true,
    includeCustomEquipmentInTotalPrices: true,
    includeTaxesInTotalPrices: true,
    disableOptionOrderLogic: true,
    priceSetting: PriceSetting.LatestPrice
};

