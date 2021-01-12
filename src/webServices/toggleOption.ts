import * as soap from 'soap';

import accountInfo, {AccountInfo as AccountInfoInterface} from './accountInfo';
import {FullyConfigured} from './fullyConfiguredModel';
import url from './wsdl';

export interface ToggleOptionRequest {
    accountInfo: AccountInfoInterface;
    configurationState: string;
    chromeOptionCode: string;
    returnParameters: {
        includeStandards: boolean;
        includeOptions: boolean;
        includeOptionDescriptions: boolean;
        includeSpecialEquipmentOptions: boolean;
        includeExtendedOEMOptions: boolean;
        includeOEMFleetCodes?: boolean;
        includeEditorialContent?: boolean;
        includeConsumerInfo?: boolean;
        includeStructuredConsumerInfo?: boolean;
        includeConfigurationChecklist?: boolean;
        includeAdditionalImages?: boolean;
        includeTechSpecs?: boolean;
        filteredTechSpecTitleIds?: number[];
    }
    returnDeltaConfiguration: boolean
}

export interface ToggleOptionResponse {
    status: 'None' | 'UserConfirmationNeeded' | 'UserChoiceNeeded' | 'ConstrainedOptionToggleNotAllowed' | 'InvalidOption' | 'FatalError';
    originatingChromeOptionCode: string;
    originatingOptionAnAddition: boolean;
    additionAffectedChromeOptionCodes?: string[];
    deletionAffectedChromeOptionCodes?: string[];
    conflictResolvingChromeOptionCodes?: string[];
    requiresToggleToResolve: boolean;
    configuration: FullyConfigured;
}

export const toggleOptionRequestFactory = (configurationState = '', chromeOptionCode = '', returnDeltaConfiguration = false) => {
    return {
        accountInfo,
        configurationState,
        chromeOptionCode,
        returnParameters: {
            includeStandards: false,
            includeOptions: true,
            includeSpecialEquipmentOptions: false, //
            includeExtendedOEMOptions: false, //
            includeOEMFleetCodes: false, //
            includeEditorialContent: false,
            includeConsumerInfo: false,
            includeStructuredConsumerInfo: false,
            includeConfigurationChecklist: false,
            includeAdditionalImages: false,
            includeTechSpecs: false,
            filteredTechSpecTitleIds: []
        },
        returnDeltaConfiguration
    };
}

export default (client, configurationState = '', chromeOptionCode = '', returnDeltaConfiguration = false): Promise<ToggleOptionResponse> => {
    if (client) {
        return withClient(configurationState, chromeOptionCode, returnDeltaConfiguration, client) as Promise<ToggleOptionResponse>;
    } else {
        return noClient(configurationState, chromeOptionCode, returnDeltaConfiguration);
    }
}

export const withClient = (configurationState = '', chromeOptionCode = '', returnDeltaConfiguration = false, client): Promise<ToggleOptionResponse> => {

    return new Promise((resolve, reject) => {

        (client as any).toggleOption(toggleOptionRequestFactory(configurationState, chromeOptionCode, returnDeltaConfiguration), (err, result) => {

            if (err) {
                const invalidOptionCode = /Invalid serialized/i;

                if (invalidOptionCode.test(err.body)) {
                    reject({message: 'invalid configuration state'})
                } else {
                    reject(err);
                }                    
            }

            resolve((result as any));                           
        });
    });    
}

export const noClient = (configurationState = '', chromeOptionCode = '', returnDeltaConfiguration = false): Promise<ToggleOptionResponse> => {

    return new Promise((resolve, reject) => {

        soap.createClient(url, (err, client) => {

            if (err) {
                reject(err);
            }

            (client as any).toggleOption(toggleOptionRequestFactory(configurationState, chromeOptionCode, returnDeltaConfiguration), (err, result) => {

                if (err) {
                    const invalidOptionCode = /Invalid serialized/i;

                    if (invalidOptionCode.test(err.body)) {
                        reject({message: 'invalid configuration state'})
                    } else {
                        reject(err);
                    }                    
                }

                resolve((result as any));                           
            });
        });
    });
}