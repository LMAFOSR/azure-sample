import express from 'express';
import bodyParser from 'body-parser';

import years from './api/years';
import divisions from './api/divisions';
import models from './api/models';
import styles from './api/styles';
import fullyConfigured from './api/fullyConfigured';

import { getX, retrieveX, buildX } from './generateReport';
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

// GENERATE PDF HERE
app.get('/styleId/:styleId/priceSetting/:priceSetting/orderAvailability/:orderAvailability', [getX, retrieveX, buildX, buildPDF, errorCheck]);

app.listen(port, () => {
  console.log(`I am running on ${port}`)
});