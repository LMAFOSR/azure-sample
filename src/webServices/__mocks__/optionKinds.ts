export default jest.fn( () => { 

    const optionKinds = new Map();
    optionKindsFactory().forEach(item => optionKinds.set(item[0], item[1]))
    
    return Promise.resolve(optionKinds); 
});

export function optionKindsFactory() {
    return [
        [162,"Required Option 4"],
        [104,"Bid Assistance"],
        [46,"Glass Package"],
        [127,"Passenger Seat"],
        [69,"Secondary Exterior Color"],
        [150,"Bumper"],[11,"Spare Tires"],
        [34,"Rear Defogger"],[115,"Battery"],
        [57,"Fleet Processing Code"],[80,"Required Fee"],
        [161,"Urea Tank"],[22,"Select-A-Unit"],
        [242,"Special Equipment Options"],[103,"VQ_ Fleet Options"],
        [45,"Ambulance Package"],[126,"Driver Seat"],[68,"Primary Exterior Color"],
        [149,"Rear Seat"],[10,"Rear Tires"],[33,"Radio"],[114,"Cooling System"],
        [56,"Upfitter Package"],[79,"Generic Future Tax ID"],[160,"Required Option 3"],
        [21,"Option Package"],[44,"Roof Type"],[125,"Fuel Tank"],[67,"3rd Row Seat Type"],
        [148,"Dealer Installed Options"],[9,"Front Tires"],[229,"Special Equipment Options"],
        [32,"Air Cond Option"],[113,"Air Cleaner"],[55,"Owner Follow-up"],[136,"Air Compressor"],
        [78,"Roof Color"],[159,"Required Option 2"],[20,"P.E.P."],[43,"Chassis Package"],
        [124,"Rear Wheels"],[66,"2nd Row Seat Type"],[147,"Exterior Lighting"],[8,"Axle Ratio"],
        [31,"Steering Type"],[251,"Special Equipment Options"],[112,"Exhaust System"],
        [54,"Communications Plus"],[135,"Spare Tire Tread"],[77,"Stripe Color"],[158,"Fuel Equipment"],
        [19,"Quick-Order Package"],[100,"Fleet Incentive"],[42,"Battery"],[123,"Front Wheels"],
        [204,"Special Equipment Options"],[65,"Required Option"],[146,"Temporary Fuel Tank"],
        [7,"Transmission"],[227,"Special Equipment Options"],[30,"Striping Option"],
        [250,"Special Equipment Options"],[111,"Brake System"],[53,"SDS Charges"],
        [134,"Spare Wheel"],[76,"Interior Color"],[157,"Assembly Plant Codes"],
        [18,"Powertrain"],[99,"Deletion"],[41,"Wheel Type"],[122,"Frame Type"],
        [203,"Special Equipment Options"],[64,"Luggage"],[145,"Rear Stabilizer Bar"],[6,"Engine"],
        [29,"Paint Type"],[249,"Special Equipment Options"],[110,"Vehicle Application"],
        [52,"Retail Amenity Delete"],[133,"Rear Tire Brand"],[75,"Exterior Paint Scheme"],
        [156,"Ship Thru Code"],[17,"Man Trans Bonus Pkg"],[98,"State-Specific Cost Surcharge"],
        [40,"Differential"],[121,"Wheelbase"],[63,"Customer Choice"],[144,"Rear Shock Absorber"],
        [5,"Emission System"],[28,"Seat Trim"],[109,"Fleet Net Invoice"],[51,"Special Paint on Bumpers"],
        [132,"Front Tire Brand"],[74,"Seat Type"],[155,"GM Fleet Code"],[16,"PEG"],
        [97,"Ford Special Fleet Account Credit"],[39,"Payload Package"],[120,"Rear Suspension"],
        [62,"Air Conditioning Excise Tax"],[143,"Power Take Off"],[4,"Rear Wheel Config"],[27,"Seat Type"],
        [108,"Retail Only"],[50,"Special Paint on Wheels"],[131,"Interior Trim"],[73,"Roof Type"],
        [154,"Rear Wheel Seal"],[15,"Decor Level"],[38,"Union City Body"],[119,"Rear Axle"],
        [200,"Special Equipment Options"],[61,"Parts Pkg"],[142,"Block Heater"],[3,"GVWR"],
        [26,"Seating Arrangement"],[49,"9W_ and 9V_ Paints"],[130,"Rear Tire Tread"],
        [211,"Special Equipment Options"],[72,"Seat Color"],[153,"Bolted or Riveted Suspension"],
        [14,"Rear Door Type"],[37,"Top Color"],[118,"Front Suspension"],[60,"Gas Guzzler Tax"],
        [141,"Side Mirrors"],[2,"Model Option"],[106,"Fleet Only"],[48,"Key Locking System"],
        [129,"Front Tire Tread"],[210,"Special Equipment Options"],[71,"Stripe Color"],[152,"Radiator"],
        [13,"Side Door Type"],[36,"Rear Bumper"],[117,"Front Axle"],[59,"Regional Dest Chrg Adj"],
        [140,"Airbags"],[1,"Body Code"],[47,"Region"],[128,"Hood Type"],[209,"Special Equipment Options"],
        [70,"Color Order Code"],[151,"Front Stabilizer Bar"],[12,"Tires"],[35,"Wheel Carrier Type"],
        [116,"Alternator"],[58,"Region"],[0,"NO OPTION KIND"]];
}