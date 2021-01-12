import pageSize from './pageSize';
import pageOrientation from './pageOrientation';
import pageMargins from './pageMargins';
import header from './header';
import content from './content';
import footer from './footer';
import {FullyConfigured} from '../webServices/fullyConfiguredModel';

export default (configuration: FullyConfigured, optionKinds: Map<number, string>) => {
    return {
        ...pageSize(),
        ...pageOrientation(),
        ...pageMargins(),
        ...header(configuration.style),
        ...content(configuration, optionKinds),
        ...footer()
    };
};

export const buildComparison = (latestConfiguration: FullyConfigured, optionKinds: Map<number, string>, initialConfiguration: FullyConfigured) => {
    return {
        ...pageSize(),
        ...pageOrientation(),
        ...pageMargins(),
        ...header(latestConfiguration.style),
        ...content(latestConfiguration, optionKinds, initialConfiguration),
        ...footer()
    };    
};