import styles from '../webServices/styles';

export default (req, res, next) => {

    return styles(undefined, req.params.modelId)
        .then((results) => {
            res.send(results);
        })
        .catch((error) => next(error));
}