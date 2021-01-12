import toggleOption from '../webServices/toggleOption';

export const translatePost = (req, res, next) => {
    req.params = {
        configurationState: req.body.configurationState,
        chromeOptionCode: req.body.chromeOptionCode,
        returnDeltaConfiguration: req.body.returnDeltaConfiguration
    }

    next();    
}

export default (req, res, next) => {
    return toggleOption(undefined, req.params.configurationState, req.params.chromeOptionCode, req.params.returnDeltaConfiguration)
        .then((results) => {
            res.send(results);
        })
        .catch((error) => next(error));
}