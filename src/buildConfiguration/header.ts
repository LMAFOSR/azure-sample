import {Style} from '../webServices/fullyConfiguredModel'

export default (style: Style) => {

    const fullName = `${style.model.modelYear} ${style.model.divisionName} ${style.model.modelName}`;

    return { header: {
        'stack': [
            {'text': 'Prepared By:', 'bold': true, 'alignment': 'right', 'fontSize': 11}, 
            {'text': 'CarBargains', 'alignment': 'right', 'fontSize': 10},
            {'text': 'District of Columbia','alignment': 'right', 'fontSize': 10},
            {'text': `${fullName}`, 'margin': [0,10,0,0], 'alignment': 'right', 'fontSize': 10},
            {'columns': [ 
                {'text': 'VEHICLE REPORT', 'margin': [0,0,0,0], 'bold': true}, 
                {'text': `${fullName} ${style.manufacturerModelCode} ${style.styleNameWithoutTrim} ${style.trimName}`, 'fontSize': 8, 'alignment': 'right', 'width': '*'} 
            ], 'margin': [0,20,0,0]},
        ],
        'margin': [30,30,20,0],        
    } };
};