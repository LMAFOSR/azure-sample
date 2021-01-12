import express from 'express';
import bodyParser from 'body-parser';

import years from './api/years';
import divisions from './api/divisions';
import models from './api/models';
import styles from './api/styles';
import fullyConfigured from './api/fullyConfigured';
import toggleOption, {translatePost as translateToggleOption} from './api/toggleOption';
import getConfiguration, {translatePost as translateGetConfiguration} from './api/getConfiguration';

import {getStyleIdPost, getStyleIdGet, getX, buildDocument, sendDocument, retrieveClient, retrieveX, buildX} from './generateReport/index';
import { buildPDF } from './pdfBuilder';

const app = express();
app.use(bodyParser.json({limit: '50mb'}));
const port = process.env.PORT || 8081;

export const errorCheck = (err, req, res, next) => {

  const fullError = JSON.stringify({error: err.message});

  if (err) {
      // email(err.message);
      console.error(new Date(), err.message);
      res.status(400).send(fullError);
      return;
  }

  next();
};

app.get('/', (req, res) => {
  res.send(`Pulse`)
});

app.get('/years', [years, errorCheck]);

app.get('/divisions/:year', [divisions, errorCheck]);

app.get('/models/:year/:divisionId', [models, errorCheck]);

app.get('/styles/:modelId', [styles, errorCheck]);

app.get('/fullyConfigured/:styleId', [fullyConfigured, errorCheck]);

app.get('/fullyConfiguredv2/:styleId/:orderAvailibility/:priceSetting', [fullyConfigured, errorCheck]);

app.get('/toggleOption/:configurationState/:chromeOptionCode/:returnDeltaConfiguration', [toggleOption, errorCheck]);

app.get('/getConfiguration/:configurationState/:priceSetting', [getConfiguration, errorCheck]);

// GENERATE PDF HERE
app.get('/styleId/:styleId/priceSetting/:priceSetting/orderAvailability/:orderAvailability', [getX, retrieveX, buildX, buildPDF, errorCheck]);

app.use('/generatePDF', [buildPDF, errorCheck]);

app.use('/generateReport', [getStyleIdPost, retrieveClient, buildDocument, buildPDF, errorCheck]);

// GET THE DOC DEFINITION FOR WHAT CREATES THE PDF

app.get('/docDefinition/styleId/:styleId/priceSetting/:priceSetting/orderAvailability/:orderAvailability', [getStyleIdGet, retrieveClient, buildDocument, sendDocument, errorCheck]);

app.listen(port, () => {
  console.log(`I am running on ${port}`)
});