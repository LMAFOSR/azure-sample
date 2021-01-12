import {FullyConfigured, StandardEquipment} from '../webServices/fullyConfiguredModel';
import {process as options} from '../buildConfiguration/options';
import priceSummary from './priceSummary';
import standardEquipment from './standardEquipment';

export default (latestConfiguration: FullyConfigured, optionKinds: Map<number, string>, initialCofiguration?: FullyConfigured) => {
    
    if (initialCofiguration) {
        return {
            content: {
                stack: [
                    ...priceSummary(latestConfiguration, optionKinds, initialCofiguration),
                    {'text': 'STANDARD EQUIPMENT', 'bold': true},
                    ...standardEquipment(latestConfiguration),
                    {'text': 'CURRENT OPTIONAL EQUIPMENT', 'bold': true, "margin": [0,12,0,0]},
                    ...options(latestConfiguration, optionKinds),
                    {'text': 'INITIAL OPTIONAL EQUIPMENT', 'bold': true, "margin": [0,18,0,0]},
                    ...options(initialCofiguration, optionKinds)
                ]
            }
        };
    } else {
        return {
            content: {
                stack: [
                    ...priceSummary(latestConfiguration, optionKinds),
                    {'text': 'STANDARD EQUIPMENT', 'bold': true},
                    ...standardEquipment(latestConfiguration),
                    {'text': 'OPTIONAL EQUIPMENT', 'bold': true, "margin": [0,12,0,12]},
                    ...options(latestConfiguration, optionKinds)
                ]
            }
        };
    }    
};
