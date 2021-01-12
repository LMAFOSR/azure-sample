import getClient from './clientFactory';
import retrieve, {withClientConfigure} from './fullyConfigured';
import returnParameters, {ReturnParameters} from './returnParameters';
import {OrderAvailibility} from './orderAvailibility';

test('retrieve a fully configured style', () => {

    return retrieve('405044')
            .then( (result) => {

                expect(result).toHaveProperty('configuredOptionsMsrp');
                expect(result).toHaveProperty('configuredOptionsInvoice');
                expect(result).toHaveProperty('configuredCustomEquipmentMsrp');
                expect(result).toHaveProperty('configuredCustomEquipmentInvoice');
                expect(result).toHaveProperty('advertisingAndAdjustmentsMsrp');
                expect(result).toHaveProperty('configuredTotalMsrp');
                expect(result).toHaveProperty('configuredTotalInvoice');
                expect(result).toHaveProperty('configuredPriceState');
                expect(result).toHaveProperty('style');
                expect(result).toHaveProperty('standardEquipment');
                expect(result).toHaveProperty('options');
                expect(result).toHaveProperty('configurationCheckListItems');
                expect(result).toHaveProperty('consumerInformation');
                expect(result).toHaveProperty('structuredConsumerInformation');
                expect(result).toHaveProperty('technicalSpecifications');
                // expect(result).toHaveProperty('editorialContentSources');
            });           

});

test('retrieve a fully configured style with order availability', () => {

    return retrieve('405044', 'Retail')
            .then( (result) => {

                expect(result).toHaveProperty('configuredOptionsMsrp');
                expect(result).toHaveProperty('configuredOptionsInvoice');
                expect(result).toHaveProperty('configuredCustomEquipmentMsrp');
                expect(result).toHaveProperty('configuredCustomEquipmentInvoice');
                expect(result).toHaveProperty('advertisingAndAdjustmentsMsrp');
                expect(result).toHaveProperty('configuredTotalMsrp');
                expect(result).toHaveProperty('configuredTotalInvoice');
                expect(result).toHaveProperty('configuredPriceState');
                expect(result).toHaveProperty('style');
                expect(result).toHaveProperty('standardEquipment');
                expect(result).toHaveProperty('options');
                expect(result).toHaveProperty('configurationCheckListItems');
                expect(result).toHaveProperty('consumerInformation');
                expect(result).toHaveProperty('structuredConsumerInformation');
                expect(result).toHaveProperty('technicalSpecifications');
                // expect(result).toHaveProperty('editorialContentSources');
            });           

});

test('retrieve a fully configured style with order availability & price setting', () => {

    return retrieve('405044', 'Retail', 'InitialPrice')
            .then( (result) => {

                expect(result).toHaveProperty('configuredOptionsMsrp');
                expect(result).toHaveProperty('configuredOptionsInvoice');
                expect(result).toHaveProperty('configuredCustomEquipmentMsrp');
                expect(result).toHaveProperty('configuredCustomEquipmentInvoice');
                expect(result).toHaveProperty('advertisingAndAdjustmentsMsrp');
                expect(result).toHaveProperty('configuredTotalMsrp');
                expect(result).toHaveProperty('configuredTotalInvoice');
                expect(result).toHaveProperty('configuredPriceState');
                expect(result).toHaveProperty('style');
                expect(result).toHaveProperty('standardEquipment');
                expect(result).toHaveProperty('options');
                expect(result).toHaveProperty('configurationCheckListItems');
                expect(result).toHaveProperty('consumerInformation');
                expect(result).toHaveProperty('structuredConsumerInformation');
                expect(result).toHaveProperty('technicalSpecifications');
                // expect(result).toHaveProperty('editorialContentSources');
            });           
});

test('retrieve a fully configured style with price setting', () => {

    return retrieve('405044', undefined, 'InitialPrice')
            .then( (result) => {

                expect(result).toHaveProperty('configuredOptionsMsrp');
                expect(result).toHaveProperty('configuredOptionsInvoice');
                expect(result).toHaveProperty('configuredCustomEquipmentMsrp');
                expect(result).toHaveProperty('configuredCustomEquipmentInvoice');
                expect(result).toHaveProperty('advertisingAndAdjustmentsMsrp');
                expect(result).toHaveProperty('configuredTotalMsrp');
                expect(result).toHaveProperty('configuredTotalInvoice');
                expect(result).toHaveProperty('configuredPriceState');
                expect(result).toHaveProperty('style');
                expect(result).toHaveProperty('standardEquipment');
                expect(result).toHaveProperty('options');
                expect(result).toHaveProperty('configurationCheckListItems');
                expect(result).toHaveProperty('consumerInformation');
                expect(result).toHaveProperty('structuredConsumerInformation');
                expect(result).toHaveProperty('technicalSpecifications');
                // expect(result).toHaveProperty('editorialContentSources');
            });           
});

test('retrieve with client', (done) => {
    getClient()
        .then((client) => {
            retrieve('401718', undefined, undefined, client)
                .then((result) => {
                    expect(result).toHaveProperty('configuredOptionsMsrp');
                    expect(result).toHaveProperty('configuredOptionsInvoice');
                    expect(result).toHaveProperty('configuredCustomEquipmentMsrp');
                    expect(result).toHaveProperty('configuredCustomEquipmentInvoice');
                    expect(result).toHaveProperty('advertisingAndAdjustmentsMsrp');
                    expect(result).toHaveProperty('configuredTotalMsrp');
                    expect(result).toHaveProperty('configuredTotalInvoice');
                    expect(result).toHaveProperty('configuredPriceState');
                    expect(result).toHaveProperty('style');
                    expect(result).toHaveProperty('standardEquipment');
                    expect(result).toHaveProperty('options');
                    expect(result).toHaveProperty('configurationCheckListItems');
                    expect(result).toHaveProperty('consumerInformation');
                    expect(result).toHaveProperty('structuredConsumerInformation');
                    expect(result).toHaveProperty('technicalSpecifications');
                    expect(result).toHaveProperty('editorialContentSources');

                    done();
                });
        });    
});

// test('retrieve a fully configured style', () => {

//     return retrieve('40171899')
//             .catch( (result) => {
//                 expect(result).toHaveProperty('invalid');
//             });

// });

// test('withClientConfigure', (done) => {

//     const orderAvailibility = OrderAvailibility.Retail;

//     getClient()
//         .then((client) => {
//             withClientConfigure('401718', orderAvailibility, returnParameters, client)
//                 .then((result) => {
//                     expect(result).toHaveProperty('configuredOptionsMsrp');
//                     expect(result).toHaveProperty('configuredOptionsInvoice');
//                     expect(result).toHaveProperty('configuredCustomEquipmentMsrp');
//                     expect(result).toHaveProperty('configuredCustomEquipmentInvoice');
//                     expect(result).toHaveProperty('advertisingAndAdjustmentsMsrp');
//                     expect(result).toHaveProperty('configuredTotalMsrp');
//                     expect(result).toHaveProperty('configuredTotalInvoice');
//                     expect(result).toHaveProperty('configuredPriceState');
//                     expect(result).toHaveProperty('style');
//                     expect(result).toHaveProperty('standardEquipment');
//                     expect(result).toHaveProperty('options');
//                     expect(result).toHaveProperty('configurationCheckListItems');
//                     expect(result).toHaveProperty('consumerInformation');
//                     expect(result).toHaveProperty('structuredConsumerInformation');
//                     expect(result).toHaveProperty('technicalSpecifications');
//                     expect(result).toHaveProperty('editorialContentSources');

//                     done();
//                 });
//         });     
// });