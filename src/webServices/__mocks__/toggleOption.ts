export default jest.fn((client, configurationState, chromeOptionCode, returnDeltaConfiguration) => {
    return Promise.resolve(fullyConfiguredFactory());
});

export function fullyConfiguredFactory() {
    return {
        "style": {
          "model": {
            "modelYear": 2019,
            "divisionId": 8,
            "divisionName": "Chevrolet",
            "subdivisionId": 9045,
            "subdivisionName": "Chevy Medium Duty",
            "modelId": 30936,
            "modelName": "5500XD LCF Diesel",
            "dataReleaseDate": "2019-07-22T07:00:00.000Z",
            "initialPriceDate": "2017-09-12T07:00:00.000Z",
            "dataEffectiveDate": "2019-07-24T07:00:00.000Z",
            "dataComment": ""
          },
          "styleId": 396700,
          "styleName": "2WD Reg Cab 150\"",
          "styleNameWithoutTrim": "2WD Reg Cab 150\"",
          "trimName": "",
          "manufacturerModelCode": "CT63003",
          "styleGroupStyleIds": [
            396698,
            396699,
            396700,
            396701,
            396702,
            396703
          ],
          "styleGroupBase": false,
          "baseMsrp": "59965.0",
          "baseInvoice": "47912.04",
          "destination": "1125.0",
          "trueBasePrice": true,
          "priceState": "Actual",
          "bodyTypes": [
            {
              "bodyTypeId": 10,
              "bodyTypeName": "Regular Cab Chassis-Cab",
              "primary": true
            }
          ],
          "passengerDoors": 2,
          "marketClassId": 9,
          "marketClassName": "Medium-Duty Trucks",
          "allocationGroup": [
            "LCFDSL"
          ],
          "stockPhotoUrl": "http://media.carbook.com/autoBuilderData/stockPhotos/24174.jpg",
          "consumerFriendlyModelName": "5500XD LCF Diesel",
          "consumerFriendlyStyleName": "2WD Reg Cab 150\"",
          "consumerFriendlyDrivetrain": "Rear Wheel Drive",
          "consumerFriendlyBodyType": "Regular Cab Chassis-Cab",
          "configurationState": {
            "dataVersion": "2019-07-22T07:00:00.000Z",
            "styleId": 396700,
            "fullyConfigured": false,
            "orderAvailability": "Retail",
            "specialEquipmentEnabled": true,
            "optionOrderLogicDisabled": false,
            "initialPricingEnabled": false,
            "chromeOptionCodeToggleStream": [
              "I1B",
              "IR7",
              "011",
              "1WT",
              "16U",
              "HNF",
              "C42",
              "41U"
            ],
            "selectedChromeOptionCodes": [
              "HNF",
              "41U",
              "IR7",
              "UIZ",
              "I1B",
              "011",
              "C60",
              "1WT",
              "A1F"
            ],
            "serializedValue": "H4sIAAAAAAAAAI2OsQrCMBRFb/qkCOLu5JIfaKRU16ZSrINDNRTc3cRZnPwQP0y/Rt9rQoq4eCGPnBtu7gMwB65PpNMHktMFidtDvC9W59ntdYdS/IQxqDGWR7sEZcaATHfgUTjQZleDqnwByo17s+A1AWmt+dL/4GMRJB6BcwOUpg4gZxTcqsiEgpv6hr46BmXBAXjRCO1qG0JskBU3Abnm+FskHSUsKqzxpz6l+v9iTwEAAA=="
          }
        },
        "configuredOptionsMsrp": "1645.0",
        "configuredOptionsInvoice": "1332.45",
        "configuredCustomEquipmentMsrp": "0.0",
        "configuredCustomEquipmentInvoice": "0.0",
        "advertisingAndAdjustmentsMsrp": "0.0",
        "advertisingAndAdjustmentsInvoice": "0.0",
        "taxItems": [
          {
            "name": "2012 Tire Weight Tax Total",
            "value": "7.94",
            "id": 309381000
          }
        ],
        "configuredTotalMsrp": "62735.0",
        "configuredTotalInvoice": "50369.49",
        "configuredPriceState": "Actual",
        "options": [
          {
            "chromeOptionCode": "I1B",
            "oemOptionCode": "I1B",
            "headerId": 1160,
            "headerName": "ENGINE",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "optionKindId": 6,
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1048
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1058
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1033
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1048
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1054
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1058
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "ENG",
            "optionFamilyName": "ENGINE",
            "selectionState": "Selected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "IR7",
            "oemOptionCode": "IR7",
            "headerId": 1379,
            "headerName": "TRANSMISSION",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "optionKindId": 7,
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1104
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1130
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "TRN",
            "optionFamilyName": "TRANSMISSION",
            "selectionState": "Selected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "011",
            "oemOptionCode": "011",
            "headerId": 1108,
            "headerName": "AXLE",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "optionKindId": 8,
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Selected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "1WT",
            "oemOptionCode": "1WT",
            "headerId": 1292,
            "headerName": "PREFERRED EQUIPMENT GROUP",
            "consumerFriendlyHeaderId": 4,
            "consumerFriendlyHeaderName": "Package",
            "optionKindId": 16,
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "SPP",
            "optionFamilyName": "PACKAGE",
            "selectionState": "Selected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "16U",
            "oemOptionCode": "16U",
            "headerId": 1256,
            "headerName": "PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "CCU",
            "optionFamilyName": "PRIMARY COLOR",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "A",
            "rgbValue": "FFFFFF",
            "genericColors": [
              {
                "primary": true,
                "name": "White"
              }
            ]
          },
          {
            "chromeOptionCode": "41U",
            "oemOptionCode": "41U",
            "headerId": 1256,
            "headerName": "PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "msrp": "370.0",
            "invoice": "299.7",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "370.0",
                "invoice": "299.7",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "370.0",
                "invoice": "299.7",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "CCU",
            "optionFamilyName": "PRIMARY COLOR",
            "selectionState": "Selected",
            "uniqueTypeFilter": "A",
            "rgbValue": "000000",
            "genericColors": [
              {
                "primary": true,
                "name": "Black"
              }
            ]
          },
          {
            "chromeOptionCode": "46U",
            "oemOptionCode": "46U",
            "headerId": 1256,
            "headerName": "PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "msrp": "370.0",
            "invoice": "299.7",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "370.0",
                "invoice": "299.7",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "370.0",
                "invoice": "299.7",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "CCU",
            "optionFamilyName": "PRIMARY COLOR",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "A",
            "rgbValue": "00311C",
            "genericColors": [
              {
                "primary": true,
                "name": "Green"
              }
            ]
          },
          {
            "chromeOptionCode": "47U",
            "oemOptionCode": "47U",
            "headerId": 1256,
            "headerName": "PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "msrp": "370.0",
            "invoice": "299.7",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "370.0",
                "invoice": "299.7",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "370.0",
                "invoice": "299.7",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "CCU",
            "optionFamilyName": "PRIMARY COLOR",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "A",
            "rgbValue": "0C0031",
            "genericColors": [
              {
                "primary": true,
                "name": "Blue"
              }
            ]
          },
          {
            "chromeOptionCode": "74U",
            "oemOptionCode": "74U",
            "headerId": 1256,
            "headerName": "PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "msrp": "370.0",
            "invoice": "299.7",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "370.0",
                "invoice": "299.7",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "370.0",
                "invoice": "299.7",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "CCU",
            "optionFamilyName": "PRIMARY COLOR",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "A",
            "rgbValue": "990000",
            "genericColors": [
              {
                "primary": true,
                "name": "Red"
              }
            ]
          },
          {
            "chromeOptionCode": "86U",
            "oemOptionCode": "86U",
            "headerId": 1256,
            "headerName": "PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "msrp": "370.0",
            "invoice": "299.7",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "370.0",
                "invoice": "299.7",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "370.0",
                "invoice": "299.7",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "CCU",
            "optionFamilyName": "PRIMARY COLOR",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "A",
            "rgbValue": "D88900",
            "genericColors": [
              {
                "primary": true,
                "name": "Yellow"
              }
            ]
          },
          {
            "chromeOptionCode": "A1F",
            "oemOptionCode": "A1F",
            "headerId": 1348,
            "headerName": "SEAT TYPE",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 74,
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Deleted",
                "categoryId": 1080
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1081
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1082
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "STS",
            "optionFamilyName": "SEAT",
            "selectionState": "Selected",
            "uniqueTypeFilter": "B"
          },
          {
            "chromeOptionCode": "A1G",
            "oemOptionCode": "A1G",
            "headerId": 1348,
            "headerName": "SEAT TYPE",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 74,
            "msrp": "975.0",
            "invoice": "789.75",
            "frontWeight": "18.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "975.0",
                "invoice": "789.75",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "975.0",
                "invoice": "789.75",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "STS",
            "optionFamilyName": "SEAT",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "B"
          },
          {
            "chromeOptionCode": "HNF",
            "oemOptionCode": "HNF",
            "headerId": 1347,
            "headerName": "SEAT TRIM",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 72,
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1077
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1078
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1079
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1309
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "ITC",
            "optionFamilyName": "INTERIOR TRIM CONFIG",
            "selectionState": "Selected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "C42",
            "oemOptionCode": "C42",
            "headerId": 1092,
            "headerName": "AIR CONDITIONING",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 32,
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1011
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "HTR",
            "optionFamilyName": "HVAC SYSTEM",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "C"
          },
          {
            "chromeOptionCode": "C60",
            "oemOptionCode": "C60",
            "headerId": 1092,
            "headerName": "AIR CONDITIONING",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 32,
            "msrp": "1275.0",
            "invoice": "1032.75",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "1275.0",
                "invoice": "1032.75",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "1275.0",
                "invoice": "1032.75",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "41U",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1011
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "HTR",
            "optionFamilyName": "HVAC SYSTEM",
            "selectionState": "Required",
            "uniqueTypeFilter": "C"
          },
          {
            "chromeOptionCode": "UIZ",
            "oemOptionCode": "UIZ",
            "headerId": 1301,
            "headerName": "RADIO",
            "consumerFriendlyHeaderId": 1,
            "consumerFriendlyHeaderName": "Entertainment",
            "optionKindId": 33,
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1014
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1017
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1150
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1211
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1230
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "RDO",
            "optionFamilyName": "RADIO",
            "selectionState": "Selected",
            "uniqueTypeFilter": "D"
          },
          {
            "chromeOptionCode": "UL5",
            "oemOptionCode": "UL5",
            "headerId": 1301,
            "headerName": "RADIO",
            "consumerFriendlyHeaderId": 1,
            "consumerFriendlyHeaderName": "Entertainment",
            "optionKindId": 33,
            "msrp": "-135.0",
            "invoice": "-109.35",
            "frontWeight": "-3.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "-135.0",
                "invoice": "-109.35",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "-135.0",
                "invoice": "-109.35",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Deleted",
                "categoryId": 1014
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1016
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1017
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1150
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1230
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "RDO",
            "optionFamilyName": "RADIO",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "D"
          },
          {
            "chromeOptionCode": "V10",
            "oemOptionCode": "V10",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 4,
            "consumerFriendlyHeaderName": "Package",
            "optionKindId": 0,
            "msrp": "235.0",
            "invoice": "190.35",
            "frontWeight": "1.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "235.0",
                "invoice": "190.35",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "235.0",
                "invoice": "190.35",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "KPJ",
            "oemOptionCode": "KPJ",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "optionKindId": 0,
            "msrp": "100.0",
            "invoice": "81.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "100.0",
                "invoice": "81.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "100.0",
                "invoice": "81.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "KQJ",
            "oemOptionCode": "KQJ",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "optionKindId": 0,
            "msrp": "100.0",
            "invoice": "81.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "100.0",
                "invoice": "81.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "100.0",
                "invoice": "81.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "E"
          },
          {
            "chromeOptionCode": "KQN",
            "oemOptionCode": "KQN",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "optionKindId": 0,
            "msrp": "100.0",
            "invoice": "81.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "100.0",
                "invoice": "81.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "100.0",
                "invoice": "81.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "E"
          },
          {
            "chromeOptionCode": "PTO",
            "oemOptionCode": "PTO",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "optionKindId": 0,
            "msrp": "50.0",
            "invoice": "40.5",
            "frontWeight": "1.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "50.0",
                "invoice": "40.5",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "50.0",
                "invoice": "40.5",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "KPK",
            "oemOptionCode": "KPK",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "optionKindId": 0,
            "msrp": "175.0",
            "invoice": "141.75",
            "frontWeight": "2.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "175.0",
                "invoice": "141.75",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "175.0",
                "invoice": "141.75",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "9D2",
            "oemOptionCode": "9D2",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "optionKindId": 0,
            "msrp": "100.0",
            "invoice": "81.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "100.0",
                "invoice": "81.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "100.0",
                "invoice": "81.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "GRS",
            "optionFamilyName": "GOVERNOR",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "F"
          },
          {
            "chromeOptionCode": "KYR",
            "oemOptionCode": "KYR",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "optionKindId": 0,
            "msrp": "100.0",
            "invoice": "81.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "100.0",
                "invoice": "81.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "100.0",
                "invoice": "81.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "GRS",
            "optionFamilyName": "GOVERNOR",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "F"
          },
          {
            "chromeOptionCode": "9E2",
            "oemOptionCode": "9E2",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "optionKindId": 0,
            "msrp": "100.0",
            "invoice": "81.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "100.0",
                "invoice": "81.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "100.0",
                "invoice": "81.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "GRS",
            "optionFamilyName": "GOVERNOR",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "F"
          },
          {
            "chromeOptionCode": "VNM",
            "oemOptionCode": "VNM",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "optionKindId": 0,
            "msrp": "100.0",
            "invoice": "81.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "100.0",
                "invoice": "81.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "100.0",
                "invoice": "81.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "GRS",
            "optionFamilyName": "GOVERNOR",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "F"
          },
          {
            "chromeOptionCode": "G86",
            "oemOptionCode": "G86",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "optionKindId": 0,
            "msrp": "840.0",
            "invoice": "680.4",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "840.0",
                "invoice": "680.4",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "840.0",
                "invoice": "680.4",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1036
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "NLX",
            "oemOptionCode": "NLX",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "optionKindId": 0,
            "msrp": "1940.0",
            "invoice": "1571.4",
            "frontWeight": "122.0",
            "rearWeight": "238.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "1940.0",
                "invoice": "1571.4",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "1940.0",
                "invoice": "1571.4",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "KQS",
            "oemOptionCode": "KQS",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "optionKindId": 0,
            "msrp": "80.0",
            "invoice": "64.8",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "80.0",
                "invoice": "64.8",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "80.0",
                "invoice": "64.8",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "H"
          },
          {
            "chromeOptionCode": "KPG",
            "oemOptionCode": "KPG",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "optionKindId": 0,
            "msrp": "80.0",
            "invoice": "64.8",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "80.0",
                "invoice": "64.8",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "80.0",
                "invoice": "64.8",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "H"
          },
          {
            "chromeOptionCode": "NPV",
            "oemOptionCode": "NPV",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "optionKindId": 0,
            "msrp": "3920.0",
            "invoice": "3175.2",
            "frontWeight": "100.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "3920.0",
                "invoice": "3175.2",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "3920.0",
                "invoice": "3175.2",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "EXH",
            "optionFamilyName": "EXHAUST SYSTEM",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "I"
          },
          {
            "chromeOptionCode": "G7M",
            "oemOptionCode": "G7M",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 0,
            "msrp": "995.0",
            "invoice": "805.95",
            "frontWeight": "64.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "995.0",
                "invoice": "805.95",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "995.0",
                "invoice": "805.95",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "V22",
            "oemOptionCode": "V22",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 0,
            "msrp": "400.0",
            "invoice": "324.0",
            "frontWeight": "1.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "400.0",
                "invoice": "324.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "400.0",
                "invoice": "324.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "DB8",
            "oemOptionCode": "DB8",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 0,
            "msrp": "105.0",
            "invoice": "85.05",
            "frontWeight": "1.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "105.0",
                "invoice": "85.05",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "105.0",
                "invoice": "85.05",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1064
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "MIR",
            "optionFamilyName": "MIRROR O/S",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "J"
          },
          {
            "chromeOptionCode": "XWL",
            "oemOptionCode": "XWL",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 0,
            "msrp": "135.0",
            "invoice": "109.35",
            "frontWeight": "1.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "135.0",
                "invoice": "109.35",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "135.0",
                "invoice": "109.35",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "9W8",
            "oemOptionCode": "9W8",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "msrp": "280.0",
            "invoice": "226.8",
            "frontWeight": "6.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "280.0",
                "invoice": "226.8",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "280.0",
                "invoice": "226.8",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "K"
          },
          {
            "chromeOptionCode": "9VS",
            "oemOptionCode": "9VS",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "msrp": "300.0",
            "invoice": "243.0",
            "frontWeight": "6.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": false,
                "msrp": "300.0",
                "invoice": "243.0",
                "priceState": "Actual"
              },
              {
                "active": true,
                "msrp": "300.0",
                "invoice": "243.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "K"
          },
          {
            "chromeOptionCode": "24J",
            "oemOptionCode": "24J",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "msrp": "92.0",
            "invoice": "74.52",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "92.0",
                "invoice": "74.52",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "92.0",
                "invoice": "74.52",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "BLT",
            "optionFamilyName": "SEAT BELT COLOR",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "L"
          },
          {
            "chromeOptionCode": "24K",
            "oemOptionCode": "24K",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "msrp": "184.0",
            "invoice": "149.04",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "184.0",
                "invoice": "149.04",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "184.0",
                "invoice": "149.04",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "BLT",
            "optionFamilyName": "SEAT BELT COLOR",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "L"
          },
          {
            "chromeOptionCode": "E8C",
            "oemOptionCode": "E8C",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "msrp": "332.0",
            "invoice": "268.92",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "332.0",
                "invoice": "268.92",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "332.0",
                "invoice": "268.92",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "UZF",
            "oemOptionCode": "UZF",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "msrp": "115.0",
            "invoice": "93.15",
            "frontWeight": "0.0",
            "rearWeight": "2.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "115.0",
                "invoice": "93.15",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "115.0",
                "invoice": "93.15",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "ATG",
            "oemOptionCode": "ATG",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "msrp": "315.0",
            "invoice": "255.15",
            "frontWeight": "3.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "315.0",
                "invoice": "255.15",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "315.0",
                "invoice": "255.15",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1062
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1063
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "IX2",
            "oemOptionCode": "IX2",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "msrp": "30.0",
            "invoice": "24.3",
            "frontWeight": "1.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "30.0",
                "invoice": "24.3",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "30.0",
                "invoice": "24.3",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "MTE",
            "oemOptionCode": "MTE",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "optionKindId": 0,
            "msrp": "90.0",
            "invoice": "72.9",
            "frontWeight": "19.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "90.0",
                "invoice": "72.9",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "90.0",
                "invoice": "72.9",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "UVC",
            "oemOptionCode": "UVC",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "optionKindId": 0,
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Unknown",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1224
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "PDI",
            "oemOptionCode": "PDI",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 0,
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "ZXE",
            "oemOptionCode": "ZXE",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 0,
            "msrp": "1300.0",
            "invoice": "1053.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "1300.0",
                "invoice": "1053.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "1300.0",
                "invoice": "1053.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "NEX",
            "optionFamilyName": "WARRANTY EXTENDED",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "W"
          },
          {
            "chromeOptionCode": "R8Q",
            "oemOptionCode": "R8Q",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 98,
            "msrp": "0.0",
            "invoice": "1112.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "1112.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "1112.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "+"
          },
          {
            "chromeOptionCode": "R6M",
            "oemOptionCode": "R6M",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 98,
            "msrp": "0.0",
            "invoice": "122.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "122.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "122.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "+"
          },
          {
            "chromeOptionCode": "R6N",
            "oemOptionCode": "R6N",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 98,
            "msrp": "0.0",
            "invoice": "249.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "249.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "195.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "+"
          },
          {
            "chromeOptionCode": "R8D",
            "oemOptionCode": "R8D",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 98,
            "msrp": "0.0",
            "invoice": "279.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "279.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "279.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "+"
          },
          {
            "chromeOptionCode": "R6K",
            "oemOptionCode": "R6K",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 98,
            "msrp": "0.0",
            "invoice": "178.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "178.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "178.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "+"
          },
          {
            "chromeOptionCode": "SVE",
            "oemOptionCode": "SVE",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 156,
            "msrp": "0.0",
            "invoice": "1300.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "HLG",
            "optionFamilyName": "HANDLING CHARGE",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "&"
          },
          {
            "chromeOptionCode": "SV9",
            "oemOptionCode": "SV9",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 156,
            "msrp": "0.0",
            "invoice": "1300.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "HLG",
            "optionFamilyName": "HANDLING CHARGE",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "&"
          },
          {
            "chromeOptionCode": "SVK",
            "oemOptionCode": "SVK",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 156,
            "msrp": "0.0",
            "invoice": "1300.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "HLG",
            "optionFamilyName": "HANDLING CHARGE",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "&"
          },
          {
            "chromeOptionCode": "SV8",
            "oemOptionCode": "SV8",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 156,
            "msrp": "0.0",
            "invoice": "1300.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "HLG",
            "optionFamilyName": "HANDLING CHARGE",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "&"
          },
          {
            "chromeOptionCode": "SVN",
            "oemOptionCode": "SVN",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 156,
            "msrp": "0.0",
            "invoice": "1300.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "HLG",
            "optionFamilyName": "HANDLING CHARGE",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "&"
          },
          {
            "chromeOptionCode": "SV5",
            "oemOptionCode": "SV5",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 156,
            "msrp": "0.0",
            "invoice": "1300.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "HLG",
            "optionFamilyName": "HANDLING CHARGE",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "&"
          },
          {
            "chromeOptionCode": "SV2",
            "oemOptionCode": "SV2",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 156,
            "msrp": "0.0",
            "invoice": "1300.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "HLG",
            "optionFamilyName": "HANDLING CHARGE",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "&"
          },
          {
            "chromeOptionCode": "SV7",
            "oemOptionCode": "SV7",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 156,
            "msrp": "0.0",
            "invoice": "1300.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "HLG",
            "optionFamilyName": "HANDLING CHARGE",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "&"
          },
          {
            "chromeOptionCode": "SV3",
            "oemOptionCode": "SV3",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 156,
            "msrp": "0.0",
            "invoice": "1300.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "HLG",
            "optionFamilyName": "HANDLING CHARGE",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "&"
          },
          {
            "chromeOptionCode": "SV0",
            "oemOptionCode": "SV0",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 156,
            "msrp": "0.0",
            "invoice": "1300.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "HLG",
            "optionFamilyName": "HANDLING CHARGE",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "&"
          },
          {
            "chromeOptionCode": "SV1",
            "oemOptionCode": "SV1",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 156,
            "msrp": "0.0",
            "invoice": "1300.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "HLG",
            "optionFamilyName": "HANDLING CHARGE",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "&"
          },
          {
            "chromeOptionCode": "SV6",
            "oemOptionCode": "SV6",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 156,
            "msrp": "0.0",
            "invoice": "1300.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "HLG",
            "optionFamilyName": "HANDLING CHARGE",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "&"
          },
          {
            "chromeOptionCode": "SV4",
            "oemOptionCode": "SV4",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 156,
            "msrp": "0.0",
            "invoice": "1300.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": true,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              },
              {
                "active": false,
                "msrp": "0.0",
                "invoice": "1300.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "HLG",
            "optionFamilyName": "HANDLING CHARGE",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "&"
          },
          {
            "chromeOptionCode": "B0A",
            "oemOptionCode": "B0A",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 0,
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": true,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "VGM",
            "optionFamilyName": "VEHICLE GM",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "Ô"
          },
          {
            "chromeOptionCode": "B0F",
            "oemOptionCode": "B0F",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 0,
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": true,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "VGM",
            "optionFamilyName": "VEHICLE GM",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "Ô"
          },
          {
            "chromeOptionCode": "B0K",
            "oemOptionCode": "B0K",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 0,
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": true,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "VGM",
            "optionFamilyName": "VEHICLE GM",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "Ô"
          },
          {
            "chromeOptionCode": "B0P",
            "oemOptionCode": "B0P",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 0,
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": true,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "VGM",
            "optionFamilyName": "VEHICLE GM",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "Ô"
          },
          {
            "chromeOptionCode": "B0U",
            "oemOptionCode": "B0U",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 0,
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": true,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "VGM",
            "optionFamilyName": "VEHICLE GM",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "Ô"
          },
          {
            "chromeOptionCode": "B8Q",
            "oemOptionCode": "B8Q",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 0,
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": true,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "VGM",
            "optionFamilyName": "VEHICLE GM",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "Ô"
          },
          {
            "chromeOptionCode": "B8V",
            "oemOptionCode": "B8V",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 0,
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": true,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "VGM",
            "optionFamilyName": "VEHICLE GM",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "Ô"
          },
          {
            "chromeOptionCode": "B8Z",
            "oemOptionCode": "B8Z",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 0,
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": true,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "VGM",
            "optionFamilyName": "VEHICLE GM",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "Ô"
          },
          {
            "chromeOptionCode": "R8B",
            "oemOptionCode": "R8B",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 0,
            "msrp": "0.0",
            "invoice": "195.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": true,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "R8J",
            "oemOptionCode": "R8J",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 0,
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": true,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Excluded",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "R9S",
            "oemOptionCode": "R9S",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 0,
            "msrp": "0.0",
            "invoice": "149.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": true,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "R9Q",
            "oemOptionCode": "R9Q",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 0,
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": true,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "5H1",
            "oemOptionCode": "5H1",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 0,
            "msrp": "52.0",
            "invoice": "42.12",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": true,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "PDY",
            "oemOptionCode": "PDY",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 0,
            "msrp": "36.0",
            "invoice": "29.16",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": true,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "PDZ",
            "oemOptionCode": "PDZ",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 0,
            "msrp": "27.0",
            "invoice": "21.87",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": true,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "R6Y",
            "oemOptionCode": "R6Y",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 0,
            "msrp": "200.0",
            "invoice": "162.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": true,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "WC2",
            "oemOptionCode": "WC2",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 0,
            "msrp": "212.0",
            "invoice": "171.72",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": true,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "WFZ",
            "oemOptionCode": "WFZ",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 0,
            "msrp": "208.0",
            "invoice": "168.48",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": true,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "Q92",
            "oemOptionCode": "Q92",
            "headerId": 10196,
            "headerName": "SHIP THRU CODES",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 0,
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": true,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          }
        ]
      };
}