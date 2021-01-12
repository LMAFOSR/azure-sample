import {noClient} from '../webServices/years';

export default (req, res, next) => {
    return noClient()
        .then( (results) => {
            res.send(results);
        });
}