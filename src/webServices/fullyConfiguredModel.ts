export interface FullyConfigured {
    configuredOptionsMsrp: string;
    configuredOptionsInvoice: string;
    configuredCustomEquipmentMsrp: string;
    configuredCustomEquipmentInvoice: string;
    advertisingAndAdjustmentsMsrp: string;
    advertisingAndAdjustmentsInvoice: string;
    configuredTotalMsrp: string;
    configuredTotalInvoice: string;
    configuredPriceState: string;    
    style: Style;
    standardEquipment: StandardEquipment[];
    options: Option[];
    configurationCheckListItems: any[];
    consumerInformation: any;
    structuredConsumerInformation: any[];
    technicalSpecifications: any[];
    editorialContentSources: any[]
}

export interface Style {
    model: Model;
    styleId: number;
    styleName: string;
    styleNameWithoutTrim: string;
    trimName: string;
    manufacturerModelCode: string;
    styleGroupStyleIds: number[];
    styleGroupBase: boolean;
    baseMsrp: string;
    baseInvoice: string;
    destination: string;
    trueBasePrice: boolean;
    priceState: string;
    bodyTypes: BodyType[];
    passengerDoors: number;
    marketClassId: number;
    marketClassName: string;
    stockPhotoUrl: string;
    consumerFriendlyModelName: string;
    consumerFriendlyStyleName: string;
    consumerFriendlyDrivetrain: string;
    consumerFriendlyBodyType: string;
    configurationState: any;
    allocationGroup: number[];
}

export interface Model {
    modelYear: number;
    divisionId: number;
    divisionName: string;
    subdivisionId: number;
    subdivisionName: string;
    modelId: number;
    modelName: string;
    dataReleaseDate: string;
    initialPriceDate: string;
    dataEffectiveDate: string;
    dataComment: string;
}

export interface BodyType {
    bodyTypeId: number;
    bodyTypeName: string;
    primary: boolean;
}

export interface Category {
    categoryFlag: string;
    categoryId: number;
}

export interface Description {
    description: string;
    type: string;
}

export interface StandardEquipment {
    headerId: number;
    headerName: string;
    consumerFriendlyHeaderId: number;
    consumerFriendlyHeaderName: string;
    description: string;
    categories?: Category[];
    upgrade: boolean;
}

export interface Color {
    primary: boolean;
    name: string;
}

export interface Option {
    chromeOptionCode: string;
    oemOptionCode: string;
    headerId: number;
    headerName: string;
    consumerFriendlyHeaderId: number;
    consumerFriendlyHeaderName: string;
    optionKindId: number;
    descriptions: Description[];
    msrp: string;
    invoice: string;
    frontWeight: string;
    rearWeight: string;
    priceState: string;
    affectingOptionCode: string;
    categories?: Category[];
    specialEquipment: boolean;
    extendedEquipment: boolean;
    customEquipment: boolean;
    optionPackage: boolean;
    optionPackageContentOnly: boolean;
    discontinued: boolean;
    optionFamilyCode: string;
    optionFamilyName: string;
    selectionState: string;
    uniqueTypeFilter: string;
    rgbValue?: string;
    genericColors?: Color[];
}

export interface Division {
    divisionId: number;
    divisionName: string;
}