import {generatePDF} from './generatePDF';

export function buildPDF(req, res)  {

    const message = { error: 'pdf processor failed', client: req.get('Content-Url') };

    try {
        generatePDF(req.parsedPayload, (result) => {
            res.setHeader('Content-Type', 'application/pdf');
            console.log(new Date(), 'PDF Generated');
            res.send(result);
        }, (error) => {
            console.error(error);
            throw new Error('PDF stream failed');
        });
    } catch (error) {
        console.error(new Date(), JSON.stringify(error));
        throw new Error('PDF Generator failed');
    }
}