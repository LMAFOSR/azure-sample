import {OrderAvailibility} from '../orderAvailibility';

export default (client, orderAvailibility: OrderAvailibility = OrderAvailibility.Retail) => {
    return Promise.resolve(yearFactory());
};

export const withClient = (client, orderAvailibility: OrderAvailibility = OrderAvailibility.Retail) => {
    return Promise.resolve(yearFactory());
}

export const noClient = jest.fn((orderAvailibility: OrderAvailibility = OrderAvailibility.Retail) => {
    return Promise.resolve(yearFactory());
});

export function yearFactory() {
    return [
        2020,
        2019,
        2018,
        2017,
        2016,
        2015,
        2014,
        2013,
        2012,
        2011,
        2010,
        2009,
        2008
    ];
}