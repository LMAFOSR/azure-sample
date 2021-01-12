import getConfiguration from '../webServices/getConfiguration';

export const translatePost = (req, res, next) => {
    req.params = {
        configurationState: req.body.configurationState,
        priceSetting: req.body.priceSetting
    }

    next();    
};

export default (req, res, next) => {
    return getConfiguration(undefined, req.params.configurationState, req.params.priceSetting)
        .then((results) => {
            res.send(results);
        })
        .catch((error) => next(error));
};