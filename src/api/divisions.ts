import divisions from '../webServices/divisions';

export default (req, res, next) => {
    return divisions(undefined, req.params.year)
        .then((results) => {
            res.send(results);
        })
        .catch((error) => next(error));
};