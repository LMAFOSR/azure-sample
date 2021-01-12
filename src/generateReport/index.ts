import getClient from '../webServices/clientFactory';
import fullyConfgured, {withClientConfigure} from '../webServices/fullyConfigured';
import optionKinds from '../webServices/optionKinds';
import build, {buildComparison} from '../buildConfiguration/index';

import returnParameters, {PriceSetting} from '../webServices/returnParameters';

export function getStyleIdPost(req, res, next) {
    // TODOD: CHECK ERROR HANDLING

    try {
        req.styleId = req.body.styleId;
        next();
    } catch (error) {
        next(new Error('request is missing styleId'));
    }
}

export function getStyleIdGet(req, res, next) {
    try {
        req.styleId = req.params.styleId;
        next();
    } catch (error) {
        next(new Error('request is missing styleId'));
    }    
}

export function getX(req, res, next){
    try {
        req.styleId = req.params.styleId;
        req.orderAvailability = req.params.orderAvailability;
        req.priceSetting = req.params.priceSetting;
        next();
    } catch (error) {
        next(new Error(error));
    }
}

export async function retrieveX(req, res, next) {

    const client = await getClient();

    if (req.priceSetting === PriceSetting.Both) {
        return Promise.all([
            optionKinds(client),
            withClientConfigure(
                req.styleId,
                req.orderAvailability,
                {...returnParameters, priceSetting: PriceSetting.InitialPrice},
                client
            ),
            withClientConfigure(
                req.styleId,
                req.orderAvailability,
                {...returnParameters, priceSetting: PriceSetting.LatestPrice},
                client
            )            
        ])
            .then(([optionkindResults, fullyConfiguredResultsInitial, fullyConfiguredResultsLatest]) => {
                req.fullyConfiguredInitial = fullyConfiguredResultsInitial;
                req.fullyConfiguredLatest = fullyConfiguredResultsLatest;
                req.optionKinds = optionkindResults;
                next();                
            });        

    } else {
        return Promise.all([
            optionKinds(client),
            withClientConfigure(
                req.styleId,
                req.orderAvailability,
                {...returnParameters, priceSetting: req.priceSetting},
                client
            )
        ])
            .then(([optionkindResults, fullyConfiguredResults]) => {
                req.fullyConfigured = fullyConfiguredResults;
                req.optionKinds = optionkindResults;
                next();                
            });
    }
}

export function buildX(req, res, next) {

    try {
        if( req.fullyConfiguredInitial && req.fullyConfiguredLatest ) {
            req.parsedPayload = buildComparison(req.fullyConfiguredLatest, req.optionKinds, req.fullyConfiguredInitial);    
        } else {
            req.parsedPayload = build(req.fullyConfigured, req.optionKinds)
        }        
    } catch (error) {
        if (typeof(error) === 'object') {
            console.log('failed to create processing document:', JSON.stringify(error));
        } else {
            console.log('failed to create processing document:')
        }  
        
        throw(error);
    }
    
    next();
}

export async function retrieveClient(req, res, next) {

    const client = await getClient();

    return Promise.all([
            fullyConfgured(req.styleId, req.orderAvailability, req.pricesSetting, client),
            optionKinds(client)
        ])
        .then( ([fullyConfiguredResults, optionkindResults]) => {

            req.fullyConfigured = fullyConfiguredResults;
            req.optionKinds = optionkindResults;
            next();
        })
        .catch((error) => {
            next(new Error('failed to retrieve styleId'));
        });    
}

export function retrieve(req, res, next) {
    return Promise.all([
        fullyConfgured(req.styleId),
        optionKinds()
    ])
    .then( ([fullyConfiguredResults, optionkindResults]) => {
        req.fullyConfigured = fullyConfiguredResults;
        req.optionKinds = optionkindResults;
        next();
    })
    .catch((error) => {
        next(new Error('failed to retrieve styleId'));
    });    
}

export function buildDocument(req, res, next) {

    try {
        req.parsedPayload = build(req.fullyConfigured, req.optionKinds);    
    } catch (error) {
        console.log(error);
        console.log('failed to create processing document');
    }
    
    next();
}

export function sendDocument(req, res, next) {
    res.send(req.parsedPayload);
}
