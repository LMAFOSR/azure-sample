export default (jest.fn((client, modelYear, orderAvailability) => {
    return Promise.resolve(divisionFactory());
}));

export function divisionFactory() {
    return [
        {
            "divisionId": 1,
            "divisionName": "Acura"
        },
        {
            "divisionId": 43,
            "divisionName": "Alfa Romeo"
        },
        {
            "divisionId": 44,
            "divisionName": "Aston Martin"
        },
        {
            "divisionId": 4,
            "divisionName": "Audi"
        },
        {
            "divisionId": 5,
            "divisionName": "BMW"
        },
        {
            "divisionId": 45,
            "divisionName": "Bentley"
        },
        {
            "divisionId": 6,
            "divisionName": "Buick"
        },
        {
            "divisionId": 7,
            "divisionName": "Cadillac"
        },
        {
            "divisionId": 8,
            "divisionName": "Chevrolet"
        },
        {
            "divisionId": 9,
            "divisionName": "Chrysler"
        },
        {
            "divisionId": 11,
            "divisionName": "Dodge"
        },
        {
            "divisionId": 59,
            "divisionName": "FIAT"
        },
        {
            "divisionId": 13,
            "divisionName": "Ford"
        },
        {
            "divisionId": 170,
            "divisionName": "Freightliner"
        },
        {
            "divisionId": 15,
            "divisionName": "GMC"
        },
        {
            "divisionId": 62,
            "divisionName": "Genesis"
        },
        {
            "divisionId": 16,
            "divisionName": "Honda"
        },
        {
            "divisionId": 17,
            "divisionName": "Hyundai"
        },
        {
            "divisionId": 18,
            "divisionName": "INFINITI"
        },
        {
            "divisionId": 20,
            "divisionName": "Jaguar"
        },
        {
            "divisionId": 21,
            "divisionName": "Jeep"
        },
        {
            "divisionId": 22,
            "divisionName": "Kia"
        },
        {
            "divisionId": 47,
            "divisionName": "Lamborghini"
        },
        {
            "divisionId": 23,
            "divisionName": "Land Rover"
        },
        {
            "divisionId": 24,
            "divisionName": "Lexus"
        },
        {
            "divisionId": 25,
            "divisionName": "Lincoln"
        },
        {
            "divisionId": 2,
            "divisionName": "MINI"
        },
        {
            "divisionId": 53,
            "divisionName": "Maserati"
        },
        {
            "divisionId": 26,
            "divisionName": "Mazda"
        },
        {
            "divisionId": 61,
            "divisionName": "McLaren"
        },
        {
            "divisionId": 27,
            "divisionName": "Mercedes-Benz"
        },
        {
            "divisionId": 29,
            "divisionName": "Mitsubishi"
        },
        {
            "divisionId": 30,
            "divisionName": "Nissan"
        },
        {
            "divisionId": 34,
            "divisionName": "Porsche"
        },
        {
            "divisionId": 57,
            "divisionName": "Ram"
        },
        {
            "divisionId": 49,
            "divisionName": "Rolls-Royce"
        },
        {
            "divisionId": 37,
            "divisionName": "Subaru"
        },
        {
            "divisionId": 56,
            "divisionName": "Tesla"
        },
        {
            "divisionId": 39,
            "divisionName": "Toyota"
        },
        {
            "divisionId": 40,
            "divisionName": "Volkswagen"
        },
        {
            "divisionId": 41,
            "divisionName": "Volvo"
        },
        {
            "divisionId": 42,
            "divisionName": "smart"
        }
    ];
}