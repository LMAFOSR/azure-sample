import express from 'express';
import bodyParser from 'body-parser';

import years from './api/years';

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

app.listen(port, () => {
  console.log(`I am running on ${port}`)
});