# Carbargains PDF Creation Backend

This is the backend portion of the PDF creation program.  It serves as both an itermediary to the Chrome SOAP based backend and a PDF creation service.

## End Points

GET /years

GET /divisions/:year

GET /models/:year/:divisionId

GET /styles/:modelId

GET /fullyConfigured/:styleId

### PDF Creation

GET /styleId/:styleId/priceSetting/:priceSetting/orderAvailability/:orderAvailability

## Building the application

`npm install`

`npm build`

## Running the application

`npm start`

## Testing

`npm test`
