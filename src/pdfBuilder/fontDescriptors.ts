import path from 'path';

export default () => {
    return {
        Roboto: {
            bold: path.join(__dirname, '../..', 'fonts', '/Roboto-Medium.ttf'),
            bolditalics: path.join(__dirname, '../..', 'fonts', '/Roboto-MediumItalic.ttf'),
            italics: path.join(__dirname, '../..', 'fonts', '/Roboto-Italic.ttf'),
            normal: path.join(__dirname, '../..', 'fonts', '/Roboto-Regular.ttf'),
        },
    };
};