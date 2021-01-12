import retrieveFullyConfigured from '../webServices/fullyConfigured';

export default (req, res, next) => {

    const orderAvailibility = req.params.orderAvailibility ? req.params.orderAvailibility : undefined;
    const priceSetting = req.params.priceSetting ? req.params.priceSetting : undefined;

    return retrieveFullyConfigured(req.params.styleId, orderAvailibility, priceSetting)
        .then((results) => {
            res.send(results);
        })
        .catch((error) => next(error));;
}