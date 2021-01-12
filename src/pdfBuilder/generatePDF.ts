import pdfMakePrinter from 'pdfmake/src/printer';

import fonts from './fontDescriptors';

type cb = (event?) => void;

export function generatePDF(docDefinition, callBack: cb, errorCallBack?: cb) {

    const fontDescriptors = fonts();

    const printer = new pdfMakePrinter(fontDescriptors);
    const doc = printer.createPdfKitDocument(docDefinition);

    const chunks = [];

    doc.on('data', (chunk: never) => {
        chunks.push(chunk);
    });

    if (errorCallBack) {
        doc.on('error', errorCallBack);
    }

    doc.on('end', () => {
        callBack(Buffer.concat(chunks));
    });

    doc.end();
}
