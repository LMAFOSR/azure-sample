import models from '../webServices/models';

export default (req, res, next) => {
    return models(undefined, req.params.year, req.params.divisionId)
        .then((results) => {
            res.send(results);
        })
        .catch((error) => next(error));  
}