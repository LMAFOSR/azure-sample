import divisions from '../webServices/divsions';

export default (req, res, next) => {
    return divisions(undefined, req.params.year)
        .then((results) => {
            res.send(results);
        })
        .catch((error) => next(error));
}