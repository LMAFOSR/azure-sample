import express from 'express';
const app = express()
const port = process.env.PORT || 8081;

app.get('/', (req, res) => {
  res.send(`I am listenning ${process.env.TEST} !!! ${process.env.ACCOUNTNUMBER} @@@ HHHH`)
});

app.listen(port, () => {
  console.log(`I am running on ${port}`)
});