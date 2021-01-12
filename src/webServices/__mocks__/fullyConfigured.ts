export default jest.fn( (styleId, NO_OPTION_KIND = false) => { 

    if (NO_OPTION_KIND) {
        return Promise.resolve(styleFactoryNO_OPTION_KIND());
    } else {
        if(styleId === 402236) {
            return Promise.resolve(styleFactoryBMW());
        } else if (styleId === 405044) {
          return Promise.resolve(StyleFactorySiennaToyota());
        } else if (styleId === 402727) {
            return Promise.resolve(styleFactoryFordEscape());
        } else  {
            return Promise.resolve(styleFactory());
        }        
    }     
});

export function styleFactory() {
    return {"style":{"model":{"modelYear":2019,"divisionId":39,"divisionName":"Toyota","subdivisionId":9151,"subdivisionName":"Toyota Trucks","modelId":31597,"modelName":"Highlander","dataReleaseDate":"2019-03-20T07:00:00.000Z","initialPriceDate":"2018-06-05T07:00:00.000Z","dataEffectiveDate":"2019-02-01T08:00:00.000Z","dataComment":""},"styleId":401718,"styleName":"Limited Platinum V6 AWD (Natl)","styleNameWithoutTrim":"V6 AWD (Natl)","trimName":"Limited Platinum","manufacturerModelCode":"6957","styleGroupStyleIds":[401690,401689,401688,401693,401692,401691,401696,401695,401694,401708,401707,401706,401705,401704,401703,401699,401698,401697,401702,401701,401700,401711,401710,401709,401714,401713,401712,401726,401725,401724,401723,401722,401721,401717,401716,401715,401720,401719,401718],"styleGroupBase":false,"baseMsrp":"47210.0","baseInvoice":"43103.0","destination":"1095.0","trueBasePrice":true,"priceState":"Actual","bodyTypes":[{"bodyTypeId":13,"bodyTypeName":"Sport Utility","primary":true}],"passengerDoors":4,"marketClassId":18,"marketClassName":"4WD Sport Utility Vehicles","stockPhotoUrl":"http://media.carbook.com/autoBuilderData/stockPhotos/28609.jpg","consumerFriendlyModelName":"Highlander","consumerFriendlyStyleName":"Limited Platinum V6 AWD (Natl)","consumerFriendlyDrivetrain":"All Wheel Drive","consumerFriendlyBodyType":"Sport Utility","configurationState":{"dataVersion":"2019-03-20T07:00:00.000Z","styleId":401718,"fullyConfigured":false,"orderAvailability":"Retail","specialEquipmentEnabled":true,"optionOrderLogicDisabled":true,"initialPricingEnabled":false,"chromeOptionCodeToggleStream":["FE-0","PT"],"selectedChromeOptionCodes":["PT","FE-0"],"serializedValue":"H4sIAAAAAAAAAGNgYJBjYKjOZWBTNGNgSs1jYAoNZgCJofAZM2c+82xgZGQESjEwMbC4ueoaMDAFhPwHAgYIYGZgVlZWBjLAaqBKYDygUjgbpNSAwZHBl4EAYISqBwAVc8vNowAAAA=="}},"configuredOptionsMsrp":"0.0","configuredOptionsInvoice":"0.0","configuredCustomEquipmentMsrp":"0.0","configuredCustomEquipmentInvoice":"0.0","advertisingAndAdjustmentsMsrp":"0.0","advertisingAndAdjustmentsInvoice":"0.0","configuredTotalMsrp":"48305.0","configuredTotalInvoice":"44198.0","configuredPriceState":"Actual","standardEquipment":[{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":3,"consumerFriendlyHeaderName":"Mechanical","description":"Engine: 3.5L V6 w/D-4S","categories":[{"categoryFlag":"Clean","categoryId":1051},{"categoryFlag":"Clean","categoryId":1059}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":3,"consumerFriendlyHeaderName":"Mechanical","description":"Engine Auto Stop-Start Feature","upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":3,"consumerFriendlyHeaderName":"Mechanical","description":"Transmission w/Oil Cooler","upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":3,"consumerFriendlyHeaderName":"Mechanical","description":"Transmission: Electronic 8-Speed Automatic (ECT-i) -inc: sequential shift mode w/dynamic rev management, snow mode and uphill/downhill shift logic","categories":[{"categoryFlag":"Clean","categoryId":1130},{"categoryFlag":"Clean","categoryId":1195},{"categoryFlag":"Clean","categoryId":1220}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":3,"consumerFriendlyHeaderName":"Mechanical","description":"Automatic Full-Time All-Wheel Drive","categories":[{"categoryFlag":"Clean","categoryId":1041}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":3,"consumerFriendlyHeaderName":"Mechanical","description":"3.003 Axle Ratio","upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":3,"consumerFriendlyHeaderName":"Mechanical","description":"Engine Oil Cooler","upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":3,"consumerFriendlyHeaderName":"Mechanical","description":"150 Amp Alternator","upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":3,"consumerFriendlyHeaderName":"Mechanical","description":"Towing Equipment -inc: Harness","upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":3,"consumerFriendlyHeaderName":"Mechanical","description":"1280# Maximum Payload","upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":3,"consumerFriendlyHeaderName":"Mechanical","description":"GVWR: 6,000 lbs","upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":3,"consumerFriendlyHeaderName":"Mechanical","description":"Gas-Pressurized Shock Absorbers","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":3,"consumerFriendlyHeaderName":"Mechanical","description":"Front And Rear Anti-Roll Bars","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":3,"consumerFriendlyHeaderName":"Mechanical","description":"Electric Power-Assist Speed-Sensing Steering","categories":[{"categoryFlag":"Clean","categoryId":1084}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":3,"consumerFriendlyHeaderName":"Mechanical","description":"19.2 Gal. Fuel Tank","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":3,"consumerFriendlyHeaderName":"Mechanical","description":"Single Stainless Steel Exhaust","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":3,"consumerFriendlyHeaderName":"Mechanical","description":"Permanent Locking Hubs","upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":3,"consumerFriendlyHeaderName":"Mechanical","description":"Strut Front Suspension w/Coil Springs","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":3,"consumerFriendlyHeaderName":"Mechanical","description":"Double Wishbone Rear Suspension w/Coil Springs","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":3,"consumerFriendlyHeaderName":"Mechanical","description":"4-Wheel Disc Brakes w/4-Wheel ABS, Front Vented Discs, Brake Assist, Hill Descent Control and Hill Hold Control","categories":[{"categoryFlag":"Clean","categoryId":1018},{"categoryFlag":"Clean","categoryId":1020},{"categoryFlag":"Clean","categoryId":1228}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Wheels: 19\" 5-Spoke Dark-Chromtec Alloy -inc: black center caps","categories":[{"categoryFlag":"Clean","categoryId":1124}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Tires: P245/55R19 105S AS","categories":[{"categoryFlag":"Clean","categoryId":1092},{"categoryFlag":"Clean","categoryId":1097}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Steel Spare Wheel","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Compact Spare Tire Stored Underbody w/Crankdown","categories":[{"categoryFlag":"Clean","categoryId":1098}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Clearcoat Paint","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Panoramic Moonroof","categories":[{"categoryFlag":"Clean","categoryId":1069},{"categoryFlag":"Clean","categoryId":1132},{"categoryFlag":"Clean","categoryId":1143}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Body-Colored Front Bumper","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Body-Colored Rear Bumper w/Black Rub Strip/Fascia Accent and Chrome Bumper Insert","upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Black Wheel Well Trim","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Chrome Side Windows Trim","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Body-Colored Door Handles","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Body-Colored Power Heated Side Mirrors w/Manual Folding and Turn Signal Indicator","categories":[{"categoryFlag":"Clean","categoryId":1064},{"categoryFlag":"Clean","categoryId":1065},{"categoryFlag":"Clean","categoryId":1174}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Flip-Up Rear Window w/Fixed Interval Wiper and Defroster","categories":[{"categoryFlag":"Clean","categoryId":1034}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Deep Tinted Glass","categories":[{"categoryFlag":"Clean","categoryId":1158}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Rain Detecting Variable Intermittent Wipers w/Heated Wiper Park","categories":[{"categoryFlag":"Clean","categoryId":1127},{"categoryFlag":"Clean","categoryId":1159},{"categoryFlag":"Clean","categoryId":1160}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Fully Galvanized Steel Panels","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Lip Spoiler","categories":[{"categoryFlag":"Clean","categoryId":1194}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Chrome Grille","upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Splash Guards","upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Power Liftgate Rear Cargo Access","categories":[{"categoryFlag":"Clean","categoryId":1198},{"categoryFlag":"Clean","categoryId":1225}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Tailgate/Rear Door Lock Included w/Power Door Locks","categories":[{"categoryFlag":"Clean","categoryId":1063}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Roof Rack Rails Only","upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Fully Automatic Projector Beam Halogen Auto High-Beam Daytime Running Lights Preference Setting Headlamps w/Delay-Off","categories":[{"categoryFlag":"Clean","categoryId":1061},{"categoryFlag":"Clean","categoryId":1169}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"LED Brakelights","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Front Fog Lamps","categories":[{"categoryFlag":"Clean","categoryId":1151}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","description":"Perimeter/Approach Lights","upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":1,"consumerFriendlyHeaderName":"Entertainment","description":"Radio w/Seek-Scan, Clock, Speed Compensated Volume Control, Steering Wheel Controls and Internal Memory","categories":[{"categoryFlag":"Clean","categoryId":1300},{"categoryFlag":"Clean","categoryId":1150},{"categoryFlag":"Clean","categoryId":1161}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":1,"consumerFriendlyHeaderName":"Entertainment","description":"Radio: Entune Premium JBL Audio w/Nav & App Suite -inc: the Entune Multimedia Bundle (8\" high resolution touch-screen w/split screen display, AM/FM CD player, MP3/WMA playback capability, 12 JBL GreenEdge speakers, auxiliary audio jack, USB 2.0 port w/iPod connectivity and control, advanced voice recognition, hands-free phone capability, phone book access and music streaming via Bluetooth wireless technology), Siri Eyes Free, Entune App Suite, Intelligent Touch controls, SiriusXM Satellite Radio w/3-month complimentary SiriusXM All Access trial, HD Radio, HD Radio predictive traffic and Doppler weather overlay, AM/FM cache radio, Gracenotes album cover art and integrated backup camera display w/dynamic gridlines","categories":[{"categoryFlag":"Clean","categoryId":1014},{"categoryFlag":"Clean","categoryId":1017},{"categoryFlag":"Clean","categoryId":1066},{"categoryFlag":"Clean","categoryId":1136},{"categoryFlag":"Clean","categoryId":1149},{"categoryFlag":"Clean","categoryId":1150},{"categoryFlag":"Clean","categoryId":1211},{"categoryFlag":"Clean","categoryId":1224},{"categoryFlag":"Clean","categoryId":1230},{"categoryFlag":"Clean","categoryId":1299},{"categoryFlag":"Clean","categoryId":1348}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":1,"consumerFriendlyHeaderName":"Entertainment","description":"Window Grid Diversity Antenna","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":1,"consumerFriendlyHeaderName":"Entertainment","description":"2 LCD Monitors In The Front","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"10-Way Driver Seat","upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Passenger Seat","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Bucket Folding Captain Front Facing Heated Manual Reclining Fold Forward Seatback Rear Seat w/Manual Fore/Aft","categories":[{"categoryFlag":"Clean","categoryId":1082},{"categoryFlag":"Clean","categoryId":1141},{"categoryFlag":"Clean","categoryId":1266}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Front Center Armrest and Rear Seat Mounted Armrest","upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Manual Tilt/Telescoping Steering Column","categories":[{"categoryFlag":"Clean","categoryId":1087}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Gauges -inc: Speedometer, Odometer, Engine Coolant Temp, Tachometer, Trip Odometer and Trip Computer","categories":[{"categoryFlag":"Clean","categoryId":1203}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Power Rear Windows, Fixed 3rd Row Windows and w/Manual Sun Blinds","categories":[{"categoryFlag":"Clean","categoryId":1126}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Heated/Ventilated Front Bucket Seats -inc: 8-way power adjustable memory driver's seat w/power thigh and lumbar support, 4-way power adjustable passenger seat","categories":[{"categoryFlag":"Clean","categoryId":1074},{"categoryFlag":"Clean","categoryId":1075},{"categoryFlag":"Clean","categoryId":1082},{"categoryFlag":"Clean","categoryId":1156},{"categoryFlag":"Clean","categoryId":1189},{"categoryFlag":"Clean","categoryId":1191},{"categoryFlag":"Clean","categoryId":1267}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Fixed 60-40 Split-Bench 3rd Row Seat Front, Manual Recline, Manual Fold Into Floor, 3 Manual and Adjustable Head Restraints","categories":[{"categoryFlag":"Clean","categoryId":1073}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Heated Leather/Metal-Look Steering Wheel","categories":[{"categoryFlag":"Clean","categoryId":1192},{"categoryFlag":"Clean","categoryId":1321}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Front Cupholder","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Rear Cupholder","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Valet Function","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Remote Keyless Entry w/4 Door Curb/Courtesy, Illuminated Entry, Illuminated Ignition Switch and Panic Button","categories":[{"categoryFlag":"Clean","categoryId":1062},{"categoryFlag":"Clean","categoryId":1063}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Remote Releases -Inc: Power Cargo Access, Mechanical Fuel and Keyfob Rear Window","categories":[{"categoryFlag":"Clean","categoryId":1198}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Proximity Key For Doors And Push Button Start","categories":[{"categoryFlag":"Clean","categoryId":1062},{"categoryFlag":"Clean","categoryId":1063},{"categoryFlag":"Clean","categoryId":1229}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Garage Door Transmitter","categories":[{"categoryFlag":"Clean","categoryId":1204}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Cruise Control w/Steering Wheel Controls","categories":[{"categoryFlag":"Clean","categoryId":1033}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Distance Pacing","categories":[{"categoryFlag":"Clean","categoryId":1346}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Rear HVAC w/Separate Controls","categories":[{"categoryFlag":"Clean","categoryId":1011},{"categoryFlag":"Clean","categoryId":1012}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"HVAC -inc: Underseat Ducts and Headliner/Pillar Ducts","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Dual Zone Front Automatic Air Conditioning","categories":[{"categoryFlag":"Clean","categoryId":1009},{"categoryFlag":"Clean","categoryId":1010},{"categoryFlag":"Clean","categoryId":1011}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Locking Glove Box","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Driver Foot Rest","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Full Cloth Headliner","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Leatherette Door Trim Insert","upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Leather/Metal-Look Gear Shift Knob","upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Interior Trim -inc: Simulated Wood/Metal-Look Instrument Panel Insert, Simulated Wood/Metal-Look Door Panel Insert and Chrome/Metal-Look Interior Accents","categories":[{"categoryFlag":"Clean","categoryId":1170}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Perforated Leather Seat Trim","categories":[{"categoryFlag":"Clean","categoryId":1078}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Driver And Passenger Visor Vanity Mirrors w/Driver And Passenger Illumination, Driver And Passenger Auxiliary Mirror","categories":[{"categoryFlag":"Clean","categoryId":1175},{"categoryFlag":"Clean","categoryId":1176},{"categoryFlag":"Clean","categoryId":1177},{"categoryFlag":"Clean","categoryId":1178}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Day-Night Auto-Dimming Rearview Mirror","categories":[{"categoryFlag":"Clean","categoryId":1173}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Full Floor Console w/Covered Storage, Mini Overhead Console w/Storage, Conversation Mirror, 2 12V DC Power Outlets and 1 AC Power Outlet","upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Front And Rear Map Lights","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Fade-To-Off Interior Lighting","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Full Carpet Floor Covering","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Carpet Floor Trim","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Trunk/Hatch Auto-Latch","upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Roll-Up Cargo Cover","categories":[{"categoryFlag":"Clean","categoryId":1272}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Cargo Space Lights","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"FOB Controls -inc: Trunk/Hatch/Tailgate","categories":[{"categoryFlag":"Clean","categoryId":1229}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Memory Settings -inc: Door Mirrors","categories":[{"categoryFlag":"Clean","categoryId":1179}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Safety Connect -inc: emergency assistance, stolen vehicle locator, roadside assistance and automatic collision notification, Available by subscription","categories":[{"categoryFlag":"Clean","categoryId":1212}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Panoramic View Monitor","categories":[{"categoryFlag":"Clean","categoryId":1224}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Instrument Panel Bin, Driver / Passenger And Rear Door Bins","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Delayed Accessory Power","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Power Door Locks w/Autolock Feature","categories":[{"categoryFlag":"Clean","categoryId":1063}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Power 1st Row Windows w/Front And Rear 1-Touch Up/Down","categories":[{"categoryFlag":"Clean","categoryId":1126}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Systems Monitor","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Trip Computer","categories":[{"categoryFlag":"Clean","categoryId":1203}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Outside Temp Gauge","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Analog Display","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Manual Adjustable Front Head Restraints and Manual Adjustable Rear Head Restraints","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"2 Seatback Storage Pockets","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Seats w/Leatherette Back Material","categories":[{"categoryFlag":"Clean","categoryId":1179}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Engine Immobilizer","categories":[{"categoryFlag":"Clean","categoryId":1166}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Perimeter Alarm","categories":[{"categoryFlag":"Clean","categoryId":1013}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"2 12V DC Power Outlets","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"Air Filtration","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","description":"2 12V DC Power Outlets and 1 AC Power Outlet","upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":9,"consumerFriendlyHeaderName":"Safety-Mechanical","description":"Electronic Stability Control (ESC)","categories":[{"categoryFlag":"Clean","categoryId":1100},{"categoryFlag":"Clean","categoryId":1227}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":9,"consumerFriendlyHeaderName":"Safety-Mechanical","description":"ABS And Driveline Traction Control","categories":[{"categoryFlag":"Clean","categoryId":1100}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":7,"consumerFriendlyHeaderName":"Safety-Exterior","description":"Side Impact Beams","upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":8,"consumerFriendlyHeaderName":"Safety-Interior","description":"Dual Stage Driver And Passenger Seat-Mounted Side Airbags","categories":[{"categoryFlag":"Clean","categoryId":1005}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":8,"consumerFriendlyHeaderName":"Safety-Interior","description":"Lane Departure Alert (lda) w/Steering Assist Lane Keeping Assist","categories":[{"categoryFlag":"Clean","categoryId":1314},{"categoryFlag":"Clean","categoryId":1323}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":8,"consumerFriendlyHeaderName":"Safety-Interior","description":"Lane Departure Alert (lda) w/Steering Assist Lane Departure Warning","categories":[{"categoryFlag":"Clean","categoryId":1314}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":8,"consumerFriendlyHeaderName":"Safety-Interior","description":"Blind Spot Monitor (BSM) Blind Spot Sensor","categories":[{"categoryFlag":"Clean","categoryId":1312}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":8,"consumerFriendlyHeaderName":"Safety-Interior","description":"Toyota Safety Sense P and Rear Cross-Traffic Alert (rcta)","categories":[{"categoryFlag":"Clean","categoryId":1322}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":8,"consumerFriendlyHeaderName":"Safety-Interior","description":"Front And Rear Parking Sensors","categories":[{"categoryFlag":"Clean","categoryId":1180}],"upgrade":true},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":8,"consumerFriendlyHeaderName":"Safety-Interior","description":"Low Tire Pressure Warning","categories":[{"categoryFlag":"Clean","categoryId":1202}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":8,"consumerFriendlyHeaderName":"Safety-Interior","description":"Dual Stage Driver And Passenger Front Airbags","categories":[{"categoryFlag":"Clean","categoryId":1001},{"categoryFlag":"Clean","categoryId":1002}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":8,"consumerFriendlyHeaderName":"Safety-Interior","description":"Curtain 1st, 2nd And 3rd Row Airbags","categories":[{"categoryFlag":"Clean","categoryId":1007},{"categoryFlag":"Clean","categoryId":1008}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":8,"consumerFriendlyHeaderName":"Safety-Interior","description":"Airbag Occupancy Sensor","categories":[{"categoryFlag":"Clean","categoryId":1310}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":8,"consumerFriendlyHeaderName":"Safety-Interior","description":"Driver Knee Airbag and Passenger Cushion Front Airbag","categories":[{"categoryFlag":"Clean","categoryId":1317}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":8,"consumerFriendlyHeaderName":"Safety-Interior","description":"Rear Child Safety Locks","categories":[{"categoryFlag":"Clean","categoryId":1039}],"upgrade":false},{"headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":8,"consumerFriendlyHeaderName":"Safety-Interior","description":"Outboard Front Lap And Shoulder Safety Belts -inc: Height Adjusters and Pretensioners","upgrade":true}],"options":[{"chromeOptionCode":"FE-0","oemOptionCode":"FE","headerId":1156,"headerName":"EMISSIONS","consumerFriendlyHeaderId":3,"consumerFriendlyHeaderName":"Mechanical","optionKindId":5,"descriptions":[{"description":"50 State Emissions","type":"PrimaryName"}],"msrp":"0.0","invoice":"0.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Selected","uniqueTypeFilter":"A"},{"chromeOptionCode":"PT","oemOptionCode":"PT","headerId":1249,"headerName":"OPTION PACKAGE","consumerFriendlyHeaderId":4,"consumerFriendlyHeaderName":"Package","optionKindId":21,"descriptions":[{"description":"Limited Platinum Package","type":"PrimaryName"}],"msrp":"0.0","invoice":"0.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":true,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Selected","uniqueTypeFilter":"M"},{"chromeOptionCode":"1H1","oemOptionCode":"1H1","headerId":10650,"headerName":"PRIMARY PAINT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","optionKindId":68,"descriptions":[{"description":"Predawn Gray Mica","type":"PrimaryName"}],"msrp":"0.0","invoice":"0.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"L","rgbValue":"494542","genericColors":[{"primary":true,"name":"Gray"}]},{"chromeOptionCode":"218","oemOptionCode":"218","headerId":10650,"headerName":"PRIMARY PAINT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","optionKindId":68,"descriptions":[{"description":"Midnight Black Metallic","type":"PrimaryName"}],"msrp":"0.0","invoice":"0.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"L","rgbValue":"000000","genericColors":[{"primary":true,"name":"Black"}]},{"chromeOptionCode":"8V5","oemOptionCode":"8V5","headerId":10650,"headerName":"PRIMARY PAINT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","optionKindId":68,"descriptions":[{"description":"Shoreline Blue Pearl","type":"PrimaryName"}],"msrp":"0.0","invoice":"0.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"L","rgbValue":"585E66","genericColors":[{"primary":true,"name":"Blue"}]},{"chromeOptionCode":"1J9","oemOptionCode":"1J9","headerId":10650,"headerName":"PRIMARY PAINT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","optionKindId":68,"descriptions":[{"description":"Celestial Silver Metallic","type":"PrimaryName"}],"msrp":"0.0","invoice":"0.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"L","rgbValue":"BBBCB5","genericColors":[{"primary":true,"name":"Silver"}]},{"chromeOptionCode":"3T0","oemOptionCode":"3T0","headerId":10650,"headerName":"PRIMARY PAINT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","optionKindId":68,"descriptions":[{"description":"Ooh La La Rouge Mica","type":"PrimaryName"}],"msrp":"0.0","invoice":"0.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"L","rgbValue":"43121A","genericColors":[{"primary":true,"name":"Red"}]},{"chromeOptionCode":"4W4","oemOptionCode":"4W4","headerId":10650,"headerName":"PRIMARY PAINT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","optionKindId":68,"descriptions":[{"description":"Toasted Walnut Pearl","type":"PrimaryName"}],"msrp":"0.0","invoice":"0.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"L","rgbValue":"473B32","genericColors":[{"primary":true,"name":"Brown"}]},{"chromeOptionCode":"6W4","oemOptionCode":"6W4","headerId":10650,"headerName":"PRIMARY PAINT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","optionKindId":68,"descriptions":[{"description":"Alumina Jade Metallic","type":"PrimaryName"}],"msrp":"0.0","invoice":"0.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"L","rgbValue":"4F504C","genericColors":[{"primary":true,"name":"Green"}]},{"chromeOptionCode":"070","oemOptionCode":"070","headerId":10650,"headerName":"PRIMARY PAINT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","optionKindId":68,"descriptions":[{"description":"Blizzard Pearl","type":"PrimaryName"}],"msrp":"0.0","invoice":"0.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"L","rgbValue":"DEDED2","genericColors":[{"primary":true,"name":"White"}]},{"chromeOptionCode":"LA40","oemOptionCode":"LA40","headerId":1347,"headerName":"SEAT TRIM","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","optionKindId":72,"descriptions":[{"description":"Saddle Tan, Perforated Leather Seat Trim","type":"PrimaryName"}],"msrp":"0.0","invoice":"0.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","categories":[{"categoryFlag":"Clean","categoryId":1078}],"specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"K"},{"chromeOptionCode":"LA00","oemOptionCode":"LA00","headerId":1347,"headerName":"SEAT TRIM","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","optionKindId":72,"descriptions":[{"description":"Almond, Perforated Leather Seat Trim","type":"PrimaryName"}],"msrp":"0.0","invoice":"0.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","categories":[{"categoryFlag":"Deleted","categoryId":1077},{"categoryFlag":"Clean","categoryId":1078},{"categoryFlag":"Deleted","categoryId":1079},{"categoryFlag":"Deleted","categoryId":1309}],"specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"K"},{"chromeOptionCode":"LA20","oemOptionCode":"LA20","headerId":1347,"headerName":"SEAT TRIM","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","optionKindId":72,"descriptions":[{"description":"Black, Perforated Leather Seat Trim","type":"PrimaryName"}],"msrp":"0.0","invoice":"0.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","categories":[{"categoryFlag":"Deleted","categoryId":1077},{"categoryFlag":"Clean","categoryId":1078},{"categoryFlag":"Deleted","categoryId":1079},{"categoryFlag":"Deleted","categoryId":1309}],"specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"K"},{"chromeOptionCode":"LA10-0","oemOptionCode":"LA10","headerId":1347,"headerName":"SEAT TRIM","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","optionKindId":72,"descriptions":[{"description":"Ash, Perforated Leather Seat Trim","type":"PrimaryName"}],"msrp":"0.0","invoice":"0.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","categories":[{"categoryFlag":"Deleted","categoryId":1077},{"categoryFlag":"Clean","categoryId":1078},{"categoryFlag":"Deleted","categoryId":1079},{"categoryFlag":"Deleted","categoryId":1309}],"specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"K"},{"chromeOptionCode":"PC-0","oemOptionCode":"PC","headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","optionKindId":0,"descriptions":[{"description":"Special Color","type":"PrimaryName"}],"msrp":"395.0","invoice":"352.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"0"},{"chromeOptionCode":"BS","oemOptionCode":"BS","headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","optionKindId":26,"descriptions":[{"description":"Seating for 8: Heated 2nd Row 60/40 Bench Seat","type":"PrimaryName"}],"msrp":"0.0","invoice":"0.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","categories":[{"categoryFlag":"Clean","categoryId":1076},{"categoryFlag":"Clean","categoryId":1266},{"categoryFlag":"Clean","categoryId":1304}],"specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"N"},{"chromeOptionCode":"CC","oemOptionCode":"CC","headerId":10750,"headerName":"ADDITIONAL EQUIPMENT","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","optionKindId":26,"descriptions":[{"description":"Seating for 7: Heated 2nd Row Captain Seats","type":"PrimaryName"},{"description":"-inc: folding side table w/two cupholders","type":"Extended"}],"msrp":"0.0","invoice":"0.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","categories":[{"categoryFlag":"Deleted","categoryId":1080},{"categoryFlag":"Deleted","categoryId":1081},{"categoryFlag":"Clean","categoryId":1082},{"categoryFlag":"Clean","categoryId":1141},{"categoryFlag":"Clean","categoryId":1266}],"specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"N"},{"chromeOptionCode":"Q3-0","oemOptionCode":"Q3","headerId":1281,"headerName":"PORT INSTALLED OPTIONS","consumerFriendlyHeaderId":4,"consumerFriendlyHeaderName":"Package","optionKindId":0,"descriptions":[{"description":"Protection Package #3","type":"PrimaryName"},{"description":"-inc: Rear Bumper Protector (TMS), Door Edge Guards, Alloy Wheel Locks, Body Side Molding (TMS)","type":"Extended"},{"description":"(PPO)","type":"UnenforcedLogic"}],"msrp":"553.0","invoice":"349.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","categories":[{"categoryFlag":"Package","categoryId":1205}],"specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":true,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"0"},{"chromeOptionCode":"DH-0","oemOptionCode":"DH","headerId":1281,"headerName":"PORT INSTALLED OPTIONS","consumerFriendlyHeaderId":4,"consumerFriendlyHeaderName":"Package","optionKindId":0,"descriptions":[{"description":"Tow Hitch Receiver & Wiring Harness Package","type":"PrimaryName"},{"description":"-inc: Tow Hitch, Wiring Harness","type":"Extended"},{"description":"(PPO)","type":"UnenforcedLogic"}],"msrp":"699.0","invoice":"530.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","categories":[{"categoryFlag":"Package","categoryId":1199}],"specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":true,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"0"},{"chromeOptionCode":"63-0","oemOptionCode":"63","headerId":1281,"headerName":"PORT INSTALLED OPTIONS","consumerFriendlyHeaderId":4,"consumerFriendlyHeaderName":"Package","optionKindId":0,"descriptions":[{"description":"3rd Row & Pass Thru All-Weather Floor Mat Package","type":"PrimaryName"},{"description":"-inc: 3rd Row All-Weather Floor Mats, Pass Thru All-Weather Floor Mat","type":"Extended"},{"description":"(PPO)","type":"UnenforcedLogic"}],"msrp":"49.0","invoice":"29.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","categories":[{"categoryFlag":"Package","categoryId":1055}],"specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":true,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"0"},{"chromeOptionCode":"Q1","oemOptionCode":"Q1","headerId":1281,"headerName":"PORT INSTALLED OPTIONS","consumerFriendlyHeaderId":4,"consumerFriendlyHeaderName":"Package","optionKindId":0,"descriptions":[{"description":"Protection Package #1","type":"PrimaryName"},{"description":"-inc: Mudguards (TMS), Door Edge Guards, Cargo Liner, Carpet Floor Mats","type":"Extended"},{"description":"(PPO)","type":"UnenforcedLogic"}],"msrp":"503.0","invoice":"300.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","categories":[{"categoryFlag":"Package","categoryId":1055}],"specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":true,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"O"},{"chromeOptionCode":"Z1","oemOptionCode":"Z1","headerId":1281,"headerName":"PORT INSTALLED OPTIONS","consumerFriendlyHeaderId":4,"consumerFriendlyHeaderName":"Package","optionKindId":0,"descriptions":[{"description":"Preferred Accessory Package","type":"PrimaryName"},{"description":"-inc: First Aid Kit, Cargo Net - Envelope, Cargo Liner, Carpet Floor Mats","type":"Extended"},{"description":"(PPO)","type":"UnenforcedLogic"}],"msrp":"328.0","invoice":"200.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","categories":[{"categoryFlag":"Package","categoryId":1055}],"specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":true,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"O"},{"chromeOptionCode":"C9","oemOptionCode":"C9","headerId":1281,"headerName":"PORT INSTALLED OPTIONS","consumerFriendlyHeaderId":4,"consumerFriendlyHeaderName":"Package","optionKindId":0,"descriptions":[{"description":"Four Season Floor Liner/Mat Package","type":"PrimaryName"},{"description":"-inc: Carpet Cargo Mat, All Weather Floor Liners, Carpet Floor Mats","type":"Extended"},{"description":"(PPO)","type":"UnenforcedLogic"}],"msrp":"433.0","invoice":"259.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","categories":[{"categoryFlag":"Package","categoryId":1055}],"specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":true,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"O"},{"chromeOptionCode":"2T-1","oemOptionCode":"2T","headerId":1281,"headerName":"PORT INSTALLED OPTIONS","consumerFriendlyHeaderId":4,"consumerFriendlyHeaderName":"Package","optionKindId":0,"descriptions":[{"description":"All-Weather Floor Liner Package (TMS)","type":"PrimaryName"},{"description":"-inc: Cargo Liner, All Weather Floor Liners","type":"Extended"},{"description":"(PPO)","type":"UnenforcedLogic"}],"msrp":"269.0","invoice":"194.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","categories":[{"categoryFlag":"Package","categoryId":1055}],"specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":true,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"O"},{"chromeOptionCode":"WL-0","oemOptionCode":"WL","headerId":1281,"headerName":"PORT INSTALLED OPTIONS","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","optionKindId":0,"descriptions":[{"description":"Alloy Wheel Locks","type":"PrimaryName"},{"description":"(PPO)","type":"UnenforcedLogic"}],"msrp":"80.0","invoice":"50.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","categories":[{"categoryFlag":"Clean","categoryId":1205}],"specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"0"},{"chromeOptionCode":"3Y","oemOptionCode":"3Y","headerId":1281,"headerName":"PORT INSTALLED OPTIONS","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","optionKindId":0,"descriptions":[{"description":"Rear Bumper Protector (TMS)","type":"PrimaryName"},{"description":"(PPO)","type":"UnenforcedLogic"}],"msrp":"139.0","invoice":"99.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"Q"},{"chromeOptionCode":"EF","oemOptionCode":"EF","headerId":1281,"headerName":"PORT INSTALLED OPTIONS","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","optionKindId":0,"descriptions":[{"description":"Rear Bumper Applique","type":"PrimaryName"},{"description":"(PPO)","type":"UnenforcedLogic"}],"msrp":"69.0","invoice":"39.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"Q"},{"chromeOptionCode":"BM","oemOptionCode":"BM","headerId":1281,"headerName":"PORT INSTALLED OPTIONS","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","optionKindId":0,"descriptions":[{"description":"Body Side Molding (TMS)","type":"PrimaryName"},{"description":"(PPO)","type":"UnenforcedLogic"}],"msrp":"209.0","invoice":"125.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"0"},{"chromeOptionCode":"V2","oemOptionCode":"V2","headerId":1281,"headerName":"PORT INSTALLED OPTIONS","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","optionKindId":0,"descriptions":[{"description":"Glass Breakage Sensor (TMS)","type":"PrimaryName"},{"description":"(PPO)","type":"UnenforcedLogic"}],"msrp":"299.0","invoice":"180.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"0"},{"chromeOptionCode":"RB-0","oemOptionCode":"RB","headerId":1281,"headerName":"PORT INSTALLED OPTIONS","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","optionKindId":0,"descriptions":[{"description":"Running Boards (TMS)","type":"PrimaryName"},{"description":"(PPO)","type":"UnenforcedLogic"}],"msrp":"599.0","invoice":"399.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","categories":[{"categoryFlag":"Clean","categoryId":1072}],"specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"0"},{"chromeOptionCode":"3P","oemOptionCode":"3P","headerId":1281,"headerName":"PORT INSTALLED OPTIONS","consumerFriendlyHeaderId":10,"consumerFriendlyHeaderName":"Exterior","optionKindId":0,"descriptions":[{"description":"Paint Protection Film (TMS)","type":"PrimaryName"},{"description":"-inc: hood & fenders","type":"Extended"},{"description":"(PPO)","type":"UnenforcedLogic"}],"msrp":"395.0","invoice":"219.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"0"},{"chromeOptionCode":"CF","oemOptionCode":"CF","headerId":1281,"headerName":"PORT INSTALLED OPTIONS","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","optionKindId":0,"descriptions":[{"description":"Carpet Mat Package (TMS)","type":"PrimaryName"},{"description":"-inc: Carpet Cargo Mat, Carpet Floor Mats","type":"Extended"},{"description":"(PPO)","type":"UnenforcedLogic"}],"msrp":"264.0","invoice":"165.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","categories":[{"categoryFlag":"Package","categoryId":1055}],"specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":true,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"P"},{"chromeOptionCode":"CT","oemOptionCode":"CT","headerId":1281,"headerName":"PORT INSTALLED OPTIONS","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","optionKindId":0,"descriptions":[{"description":"Carpet Floor Mats & Cargo Liner (TMS)","type":"PrimaryName"},{"description":"(PPO)","type":"UnenforcedLogic"}],"msrp":"269.0","invoice":"145.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","categories":[{"categoryFlag":"Clean","categoryId":1055}],"specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"P"},{"chromeOptionCode":"3T-0","oemOptionCode":"3T","headerId":1281,"headerName":"PORT INSTALLED OPTIONS","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","optionKindId":0,"descriptions":[{"description":"Roof Rack Cross Bars","type":"PrimaryName"},{"description":"(PPO)","type":"UnenforcedLogic"}],"msrp":"350.0","invoice":"250.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","categories":[{"categoryFlag":"Clean","categoryId":1172}],"specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"0"},{"chromeOptionCode":"GN","oemOptionCode":"GN","headerId":1281,"headerName":"PORT INSTALLED OPTIONS","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","optionKindId":0,"descriptions":[{"description":"Cargo Net - Envelope","type":"PrimaryName"},{"description":"(PPO)","type":"UnenforcedLogic"}],"msrp":"49.0","invoice":"35.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"0"},{"chromeOptionCode":"D5-0","oemOptionCode":"D5","headerId":1281,"headerName":"PORT INSTALLED OPTIONS","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","optionKindId":0,"descriptions":[{"description":"Door Edge Guards","type":"PrimaryName"},{"description":"(PPO)","type":"UnenforcedLogic"}],"msrp":"125.0","invoice":"75.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"0"},{"chromeOptionCode":"U7","oemOptionCode":"U7","headerId":1281,"headerName":"PORT INSTALLED OPTIONS","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","optionKindId":0,"descriptions":[{"description":"Universal Tablet Holder","type":"PrimaryName"},{"description":"(PPO)","type":"UnenforcedLogic"}],"msrp":"99.0","invoice":"75.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"0"},{"chromeOptionCode":"3Z","oemOptionCode":"3Z","headerId":1281,"headerName":"PORT INSTALLED OPTIONS","consumerFriendlyHeaderId":2,"consumerFriendlyHeaderName":"Interior","optionKindId":0,"descriptions":[{"description":"First Aid Kit","type":"PrimaryName"},{"description":"(PPO)","type":"UnenforcedLogic"}],"msrp":"30.0","invoice":"20.0","frontWeight":"0.0","rearWeight":"0.0","priceState":"Actual","affectingOptionCode":"","specialEquipment":false,"extendedEquipment":false,"customEquipment":false,"optionPackage":false,"optionPackageContentOnly":false,"discontinued":false,"optionFamilyCode":"","optionFamilyName":"","selectionState":"Unselected","uniqueTypeFilter":"0"}],"configurationCheckListItems":[{"itemName":"Emission System","optionKindId":0,"chromeOptionCodes":["FE-0"],"satisfied":true},{"itemName":"Option Package","optionKindId":0,"chromeOptionCodes":["PT"],"satisfied":true},{"itemName":"Primary Exterior Color","optionKindId":0,"chromeOptionCodes":["1H1","218","8V5","1J9","3T0","4W4","6W4","070"],"satisfied":false},{"itemName":"Seat Color","optionKindId":0,"chromeOptionCodes":["LA40","LA00","LA20","LA10-0"],"satisfied":false}],"consumerInformation":{"crashTestRating":"US NHTSA CRASH TEST RESULTS:\r\n\r\nOverall Rating: * * * * *\r\n\r\nOverall Frontal Barrier Crash Rating: * * * *\r\n\r\nOverall Side Crash Rating: * * * * *\r\n\r\nSide Barrier Rating: * * * * *\r\n\r\n\r\nCombined Side Barrier and Pole Ratings: \r\n        Front Seat Rating: * * * * *        Rear Seat Rating: * * * * *\r\n\r\nOverall Rollover Rating: * * * *\r\n        Dynamic Test Result: No Tip\r\n        Risk of Rollover: 18.50%\r\n\r\nNote Regarding Driver Rating: \r\n\r\nMale: Average sized adult male dummy in 35-MPH crash into fixed barrier. Rating is evaluation of injury to head, neck, chest, legs. Female: Small-sized adult female dummy in 35-mph crash into fixed barrier. Rating is evaluation of injury to head, neck, chest, legs.\r\n\r\nRollover Note: Dynamic (moving) test results (Tip or No Tip) and measured rollover-related properties determine vehicle's risk of rollover in single vehicle crash and its rollover rating. The Rollover Resistance Rating utilizes a \"fishhook\" maneuver which is a series of abrupt turns at varying speeds to see how \"top-heavy\" a vehicle is.","rebate":"One of the following incentives may apply to this vehicle.  Regional incentives may vary.\r\n\r\nCash Incentive: $1000 or financing\r\n\r\nFinancing Incentive: 3.9% to 4.9%\r\n\r\nExpiration Date: 04/01/2019\r\n\r\nResource: toyota.com 03/12/2019","warranty":"Basic: \r\n        3 Years/36,000 Miles\r\n\r\nDrivetrain: \r\n        5 Years/60,000 Miles\r\n\r\nCorrosion: \r\n        5 Years/Unlimited Miles\r\n\r\nRoadside Assistance: \r\n        2 Years/Unlimited Miles\r\n\r\nMaintenance: \r\n        2 Years/25,000 Miles"},"structuredConsumerInformation":[{"typeName":"Rebate","items":[{"name":"Incentive Note","sequence":100,"value":"One of the following incentives may apply to this vehicle.  Regional incentives may vary."},{"name":"Cash Incentive Minimum","sequence":200,"value":"1000"},{"name":"Cash Finance Rule","sequence":600,"value":"Or"},{"name":"Financing Incentive Min","sequence":700,"value":"3.9"},{"name":"Financing Incentive Max","sequence":800,"value":"4.9"},{"name":"Expiration Date","sequence":1100,"value":"04/01/2019"},{"name":"Resource Name","sequence":1200,"value":"toyota.com"},{"name":"Resource Date","sequence":1300,"value":"03/12/2019"}]},{"typeName":"Warranty","items":[{"name":"Basic Years","sequence":200,"value":"3"},{"name":"Basic Miles/km","sequence":300,"value":"36,000"},{"name":"Drivetrain Years","sequence":500,"value":"5"},{"name":"Drivetrain Miles/km","sequence":600,"value":"60,000"},{"name":"Corrosion Years","sequence":800,"value":"5"},{"name":"Corrosion Miles/km","sequence":900,"value":"Unlimited"},{"name":"Roadside Assistance Years","sequence":2300,"value":"2"},{"name":"Roadside Assistance Miles/km","sequence":2400,"value":"Unlimited"},{"name":"Maintenance Years","sequence":2600,"value":"2"},{"name":"Maintenance Miles/km","sequence":2700,"value":"25,000"}]},{"typeName":"Crash Test Results","items":[{"name":"Overall Rating","sequence":800,"value":"* * * * *"},{"name":"Overall Frontal Barrier Crash Rating","sequence":900,"value":"* * * *"},{"name":"Frontal Barrier Crash Rating Driver","sequence":1001,"conditionNote":"Male","value":"* * * *"},{"name":"Frontal Barrier Crash Rating Passenger","sequence":1101,"conditionNote":"Female","value":"* * * * *"},{"name":"Overall Side Crash Rating","sequence":1400,"value":"* * * * *"},{"name":"Side Barrier Rating","sequence":1500,"value":"* * * * *"},{"name":"Side Barrier Rating Driver","sequence":1601,"conditionNote":"Male","value":"* * * * *"},{"name":"Side Barrier Rating Passenger Rear Seat","sequence":1701,"conditionNote":"Female","value":"* * * * *"},{"name":"Side Pole Rating Driver Front Seat","sequence":1901,"conditionNote":"Female","value":"* * * * *"},{"name":"Male/Female Dummy Note","sequence":2000,"value":"Male: Average sized adult male dummy in 35-MPH crash into fixed barrier. Rating is evaluation of injury to head, neck, chest, legs. Female: Small-sized adult female dummy in 35-mph crash into fixed barrier. Rating is evaluation of injury to head, neck, chest, legs."},{"name":"Combined Side Rating Front Seat","sequence":2100,"value":"* * * * *"},{"name":"Combined Side Rating Rear Seat","sequence":2200,"value":"* * * * *"},{"name":"Rollover Rating","sequence":2300,"value":"* * * *"},{"name":"Rollover Rating Dynamic Test Result","sequence":2400,"value":"No Tip"},{"name":"Risk of Rollover","sequence":2500,"value":"18.50%"},{"name":"Rollover Note","sequence":2600,"value":"Dynamic (moving) test results (Tip or No Tip) and measured rollover-related properties determine vehicle's risk of rollover in single vehicle crash and its rollover rating. The Rollover Resistance Rating utilizes a \"fishhook\" maneuver which is a series of abrupt turns at varying speeds to see how \"top-heavy\" a vehicle is."}]}],"technicalSpecifications":[{"groupId":0,"groupName":"Vehicle","headerId":48,"headerName":"Emissions","titleId":81,"titleName":"Tons/yr of CO2 Emissions @ 15K mi/year","value":"8.0","upgrade":false,"sequence":1},{"groupId":6,"groupName":"Powertrain","headerId":15,"headerName":"Transmission","titleId":6,"titleName":"Drivetrain","value":"All Wheel Drive","upgrade":false,"sequence":6},{"groupId":0,"groupName":"Vehicle","headerId":0,"headerName":"Vehicle","titleId":7,"titleName":"EPA Classification","value":"Small Sport Utility Vehicles 4WD","upgrade":false,"sequence":7},{"groupId":5,"groupName":"Dimensions","headerId":1,"headerName":"Interior Dimensions","titleId":8,"titleName":"Passenger Capacity","value":"7","upgrade":false,"sequence":8},{"groupId":5,"groupName":"Dimensions","headerId":1,"headerName":"Interior Dimensions","titleId":9,"titleName":"Passenger Volume","value":"140.4","measurementUnit":"ft³","upgrade":false,"sequence":9},{"groupId":4,"groupName":"Chassis","headerId":9,"headerName":"Weight Information","titleId":10,"titleName":"Base Curb Weight","value":"4508","measurementUnit":"lbs","upgrade":false,"sequence":10},{"groupId":4,"groupName":"Chassis","headerId":9,"headerName":"Weight Information","titleId":14,"titleName":"Curb Weight - Front","value":"N/A","measurementUnit":"lbs","upgrade":false,"sequence":14},{"groupId":4,"groupName":"Chassis","headerId":9,"headerName":"Weight Information","titleId":15,"titleName":"Curb Weight - Rear","value":"N/A","measurementUnit":"lbs","upgrade":false,"sequence":15},{"groupId":4,"groupName":"Chassis","headerId":9,"headerName":"Weight Information","titleId":38,"titleName":"Maximum Payload Capacity","value":"N/A","measurementUnit":"lbs","upgrade":true,"sequence":23},{"groupId":6,"groupName":"Powertrain","headerId":14,"headerName":"Mileage","titleId":27,"titleName":"EPA Fuel Economy Est - Hwy","value":"26","measurementUnit":"MPG","upgrade":false,"sequence":23},{"groupId":0,"groupName":"Vehicle","headerId":48,"headerName":"Emissions","titleId":21,"titleName":"EPA Greenhouse Gas Score","value":"N/A","upgrade":false,"sequence":23},{"groupId":6,"groupName":"Powertrain","headerId":14,"headerName":"Mileage","titleId":28,"titleName":"Cruising Range - City","value":"384.00","measurementUnit":"mi","upgrade":true,"sequence":24},{"groupId":6,"groupName":"Powertrain","headerId":14,"headerName":"Mileage","titleId":26,"titleName":"EPA Fuel Economy Est - City","value":"20","measurementUnit":"MPG","upgrade":false,"sequence":24},{"groupId":6,"groupName":"Powertrain","headerId":14,"headerName":"Mileage","titleId":25,"titleName":"Fuel Economy Est-Combined","value":"22","measurementUnit":"MPG","upgrade":false,"sequence":24},{"groupId":6,"groupName":"Powertrain","headerId":14,"headerName":"Mileage","titleId":29,"titleName":"Cruising Range - Hwy","value":"499.20","measurementUnit":"mi","upgrade":true,"sequence":25},{"groupId":4,"groupName":"Chassis","headerId":8,"headerName":"Trailering","titleId":31,"titleName":"Dead Weight Hitch - Max Trailer Wt.","value":"5000","measurementUnit":"lbs","upgrade":false,"sequence":27},{"groupId":4,"groupName":"Chassis","headerId":8,"headerName":"Trailering","titleId":32,"titleName":"Dead Weight Hitch - Max Tongue Wt.","value":"500","measurementUnit":"lbs","upgrade":false,"sequence":28},{"groupId":4,"groupName":"Chassis","headerId":8,"headerName":"Trailering","titleId":33,"titleName":"Wt Distributing Hitch - Max Trailer Wt.","value":"5000","measurementUnit":"lbs","upgrade":false,"sequence":29},{"groupId":4,"groupName":"Chassis","headerId":8,"headerName":"Trailering","titleId":34,"titleName":"Wt Distributing Hitch - Max Tongue Wt.","value":"500","measurementUnit":"lbs","upgrade":false,"sequence":30},{"groupId":4,"groupName":"Chassis","headerId":8,"headerName":"Trailering","titleId":37,"titleName":"Maximum Trailering Capacity","value":"5000","measurementUnit":"lbs","upgrade":false,"sequence":33},{"groupId":6,"groupName":"Powertrain","headerId":13,"headerName":"Engine","titleId":40,"titleName":"Engine Order Code","value":"N/A","upgrade":false,"sequence":34},{"groupId":6,"groupName":"Powertrain","headerId":13,"headerName":"Engine","titleId":41,"titleName":"Engine Type","value":"Regular Unleaded V-6","upgrade":false,"sequence":35},{"groupId":6,"groupName":"Powertrain","headerId":13,"headerName":"Engine","titleId":42,"titleName":"Displacement","value":"3.5 L/211","upgrade":false,"sequence":36},{"groupId":6,"groupName":"Powertrain","headerId":13,"headerName":"Engine","titleId":43,"titleName":"Fuel System","value":"Port/Direct Injection","upgrade":false,"sequence":37},{"groupId":6,"groupName":"Powertrain","headerId":13,"headerName":"Engine","titleId":48,"titleName":"SAE Net Horsepower @ RPM","value":"295 @ 6600","upgrade":false,"sequence":38},{"groupId":6,"groupName":"Powertrain","headerId":13,"headerName":"Engine","titleId":49,"titleName":"SAE Net Torque @ RPM","value":"263 @ 4700","upgrade":false,"sequence":39},{"groupId":6,"groupName":"Powertrain","headerId":15,"headerName":"Transmission","titleId":51,"titleName":"Trans Order Code","value":"N/A","upgrade":false,"sequence":40},{"groupId":6,"groupName":"Powertrain","headerId":15,"headerName":"Transmission","titleId":52,"titleName":"Trans Type","value":"8","upgrade":false,"sequence":41},{"groupId":6,"groupName":"Powertrain","headerId":15,"headerName":"Transmission","titleId":53,"titleName":"Trans Description Cont.","value":"Automatic w/OD","upgrade":false,"sequence":42},{"groupId":6,"groupName":"Powertrain","headerId":15,"headerName":"Transmission","titleId":54,"titleName":"Trans Description Cont. Again","value":"N/A","upgrade":false,"sequence":43},{"groupId":6,"groupName":"Powertrain","headerId":15,"headerName":"Transmission","titleId":56,"titleName":"First Gear Ratio (:1)","value":"5.52","upgrade":false,"sequence":44},{"groupId":6,"groupName":"Powertrain","headerId":15,"headerName":"Transmission","titleId":57,"titleName":"Second Gear Ratio (:1)","value":"3.18","upgrade":false,"sequence":45},{"groupId":6,"groupName":"Powertrain","headerId":15,"headerName":"Transmission","titleId":58,"titleName":"Third Gear Ratio (:1)","value":"2.05","upgrade":false,"sequence":46},{"groupId":6,"groupName":"Powertrain","headerId":15,"headerName":"Transmission","titleId":59,"titleName":"Fourth Gear Ratio (:1)","value":"1.49","upgrade":false,"sequence":47},{"groupId":6,"groupName":"Powertrain","headerId":15,"headerName":"Transmission","titleId":60,"titleName":"Fifth Gear Ratio (:1)","value":"1.23","upgrade":false,"sequence":48},{"groupId":6,"groupName":"Powertrain","headerId":15,"headerName":"Transmission","titleId":61,"titleName":"Sixth Gear Ratio (:1)","value":"1.00","upgrade":false,"sequence":49},{"groupId":6,"groupName":"Powertrain","headerId":15,"headerName":"Transmission","titleId":62,"titleName":"Reverse Ratio (:1)","value":"4.22","upgrade":false,"sequence":50},{"groupId":6,"groupName":"Powertrain","headerId":15,"headerName":"Transmission","titleId":65,"titleName":"Clutch Size","value":"N/A","measurementUnit":"in","upgrade":false,"sequence":52},{"groupId":6,"groupName":"Powertrain","headerId":15,"headerName":"Transmission","titleId":69,"titleName":"Final Drive Axle Ratio (:1)","value":"3.00","upgrade":false,"sequence":56},{"groupId":6,"groupName":"Powertrain","headerId":15,"headerName":"Transmission","titleId":72,"titleName":"Transfer Case Gear Ratio (:1), High","value":"N/A","upgrade":false,"sequence":58},{"groupId":6,"groupName":"Powertrain","headerId":15,"headerName":"Transmission","titleId":73,"titleName":"Transfer Case Gear Ratio (:1), Low","value":"N/A","upgrade":false,"sequence":59},{"groupId":6,"groupName":"Powertrain","headerId":12,"headerName":"Electrical","titleId":76,"titleName":"Cold Cranking Amps @ 0° F (Primary)","value":"N/A","upgrade":false,"sequence":61},{"groupId":6,"groupName":"Powertrain","headerId":12,"headerName":"Electrical","titleId":84,"titleName":"Maximum Alternator Capacity (amps)","value":"150","upgrade":false,"sequence":66},{"groupId":6,"groupName":"Powertrain","headerId":11,"headerName":"Cooling System","titleId":91,"titleName":"Total Cooling System Capacity","value":"N/A","measurementUnit":"qts","upgrade":false,"sequence":69},{"groupId":4,"groupName":"Chassis","headerId":17,"headerName":"Suspension","titleId":105,"titleName":"Suspension Type - Front","value":"Strut","upgrade":false,"sequence":80},{"groupId":4,"groupName":"Chassis","headerId":17,"headerName":"Suspension","titleId":106,"titleName":"Suspension Type - Rear","value":"Double Wishbone","upgrade":false,"sequence":81},{"groupId":4,"groupName":"Chassis","headerId":17,"headerName":"Suspension","titleId":107,"titleName":"Suspension Type - Front (Cont.)","value":"Strut","upgrade":false,"sequence":82},{"groupId":4,"groupName":"Chassis","headerId":17,"headerName":"Suspension","titleId":108,"titleName":"Suspension Type - Rear (Cont.)","value":"Double Wishbone","upgrade":false,"sequence":83},{"groupId":6,"groupName":"Powertrain","headerId":14,"headerName":"Mileage","titleId":800,"titleName":"EPA MPG Equivalent - City","value":"N/A","upgrade":false,"sequence":100},{"groupId":4,"groupName":"Chassis","headerId":17,"headerName":"Suspension","titleId":131,"titleName":"Shock Absorber Diameter - Front","value":"N/A","measurementUnit":"mm","upgrade":false,"sequence":105},{"groupId":4,"groupName":"Chassis","headerId":17,"headerName":"Suspension","titleId":132,"titleName":"Shock Absorber Diameter - Rear","value":"N/A","measurementUnit":"mm","upgrade":false,"sequence":106},{"groupId":4,"groupName":"Chassis","headerId":17,"headerName":"Suspension","titleId":133,"titleName":"Stabilizer Bar Diameter - Front","value":"N/A","measurementUnit":"in","upgrade":false,"sequence":107},{"groupId":4,"groupName":"Chassis","headerId":17,"headerName":"Suspension","titleId":134,"titleName":"Stabilizer Bar Diameter - Rear","value":"N/A","measurementUnit":"in","upgrade":false,"sequence":108},{"groupId":4,"groupName":"Chassis","headerId":7,"headerName":"Tires","titleId":137,"titleName":"Front Tire Order Code","value":"N/A","upgrade":false,"sequence":109},{"groupId":4,"groupName":"Chassis","headerId":7,"headerName":"Tires","titleId":138,"titleName":"Rear Tire Order Code","value":"N/A","upgrade":false,"sequence":110},{"groupId":4,"groupName":"Chassis","headerId":7,"headerName":"Tires","titleId":139,"titleName":"Spare Tire Order Code","value":"N/A","upgrade":false,"sequence":111},{"groupId":4,"groupName":"Chassis","headerId":7,"headerName":"Tires","titleId":140,"titleName":"Front Tire Size","value":"P245/55SR19","upgrade":false,"sequence":112},{"groupId":4,"groupName":"Chassis","headerId":7,"headerName":"Tires","titleId":141,"titleName":"Rear Tire Size","value":"P245/55SR19","upgrade":false,"sequence":113},{"groupId":4,"groupName":"Chassis","headerId":7,"headerName":"Tires","titleId":142,"titleName":"Spare Tire Size","value":"Compact","upgrade":false,"sequence":114},{"groupId":4,"groupName":"Chassis","headerId":10,"headerName":"Wheels","titleId":156,"titleName":"Front Wheel Size","value":"19 X 7.5","measurementUnit":"in","upgrade":false,"sequence":121},{"groupId":4,"groupName":"Chassis","headerId":10,"headerName":"Wheels","titleId":157,"titleName":"Rear Wheel Size","value":"19 X 7.5","measurementUnit":"in","upgrade":false,"sequence":122},{"groupId":4,"groupName":"Chassis","headerId":10,"headerName":"Wheels","titleId":158,"titleName":"Spare Wheel Size","value":"Compact","measurementUnit":"in","upgrade":false,"sequence":123},{"groupId":4,"groupName":"Chassis","headerId":10,"headerName":"Wheels","titleId":165,"titleName":"Front Wheel Material","value":"Aluminum","upgrade":false,"sequence":130},{"groupId":4,"groupName":"Chassis","headerId":10,"headerName":"Wheels","titleId":166,"titleName":"Rear Wheel Material","value":"Aluminum","upgrade":false,"sequence":131},{"groupId":4,"groupName":"Chassis","headerId":10,"headerName":"Wheels","titleId":167,"titleName":"Spare Wheel Material","value":"Steel","upgrade":false,"sequence":132},{"groupId":4,"groupName":"Chassis","headerId":6,"headerName":"Steering","titleId":176,"titleName":"Steering Type","value":"Rack-Pinion","upgrade":false,"sequence":133},{"groupId":4,"groupName":"Chassis","headerId":6,"headerName":"Steering","titleId":178,"titleName":"Steering Ratio (:1), Overall","value":"N/A","upgrade":false,"sequence":134},{"groupId":4,"groupName":"Chassis","headerId":6,"headerName":"Steering","titleId":181,"titleName":"Lock to Lock Turns (Steering)","value":"N/A","upgrade":false,"sequence":137},{"groupId":4,"groupName":"Chassis","headerId":6,"headerName":"Steering","titleId":184,"titleName":"Turning Diameter - Curb to Curb","value":"38.7","measurementUnit":"ft","upgrade":false,"sequence":138},{"groupId":4,"groupName":"Chassis","headerId":6,"headerName":"Steering","titleId":185,"titleName":"Turning Diameter - Wall to Wall","value":"N/A","measurementUnit":"ft","upgrade":false,"sequence":139},{"groupId":4,"groupName":"Chassis","headerId":4,"headerName":"Brakes","titleId":186,"titleName":"Brake Type","value":"4-Wheel Disc","upgrade":false,"sequence":140},{"groupId":4,"groupName":"Chassis","headerId":4,"headerName":"Brakes","titleId":187,"titleName":"Brake ABS System","value":"4-Wheel","upgrade":false,"sequence":141},{"groupId":4,"groupName":"Chassis","headerId":4,"headerName":"Brakes","titleId":188,"titleName":"Brake ABS System (Second Line)","value":"N/A","upgrade":false,"sequence":142},{"groupId":4,"groupName":"Chassis","headerId":4,"headerName":"Brakes","titleId":190,"titleName":"Disc - Front (Yes or   )","value":"Yes","upgrade":false,"sequence":144},{"groupId":4,"groupName":"Chassis","headerId":4,"headerName":"Brakes","titleId":191,"titleName":"Disc - Rear (Yes or   )","value":"Yes","upgrade":false,"sequence":145},{"groupId":4,"groupName":"Chassis","headerId":4,"headerName":"Brakes","titleId":192,"titleName":"Front Brake Rotor Diam x Thickness","value":"12.9","measurementUnit":"in","upgrade":false,"sequence":146},{"groupId":4,"groupName":"Chassis","headerId":4,"headerName":"Brakes","titleId":193,"titleName":"Rear Brake Rotor Diam x Thickness","value":"12.2","measurementUnit":"in","upgrade":false,"sequence":147},{"groupId":4,"groupName":"Chassis","headerId":4,"headerName":"Brakes","titleId":196,"titleName":"Drum - Rear (Yes or   )","value":"N/A","upgrade":false,"sequence":150},{"groupId":4,"groupName":"Chassis","headerId":4,"headerName":"Brakes","titleId":197,"titleName":"Rear Drum Diam x Width","value":"N/A","measurementUnit":"in","upgrade":false,"sequence":151},{"groupId":4,"groupName":"Chassis","headerId":5,"headerName":"Fuel Tank","titleId":206,"titleName":"Fuel Tank Capacity, Approx","value":"19.2","measurementUnit":"gal","upgrade":false,"sequence":155},{"groupId":4,"groupName":"Chassis","headerId":5,"headerName":"Fuel Tank","titleId":207,"titleName":"Aux Fuel Tank Capacity, Approx","value":"N/A","measurementUnit":"gal","upgrade":false,"sequence":156},{"groupId":5,"groupName":"Dimensions","headerId":1,"headerName":"Interior Dimensions","titleId":256,"titleName":"Front Head Room","value":"39.8","measurementUnit":"in","upgrade":false,"sequence":161},{"groupId":5,"groupName":"Dimensions","headerId":1,"headerName":"Interior Dimensions","titleId":257,"titleName":"Front Leg Room","value":"44.2","measurementUnit":"in","upgrade":false,"sequence":162},{"groupId":5,"groupName":"Dimensions","headerId":1,"headerName":"Interior Dimensions","titleId":258,"titleName":"Front Shoulder Room","value":"59.3","measurementUnit":"in","upgrade":false,"sequence":163},{"groupId":5,"groupName":"Dimensions","headerId":1,"headerName":"Interior Dimensions","titleId":259,"titleName":"Front Hip Room","value":"57.2","measurementUnit":"in","upgrade":false,"sequence":164},{"groupId":5,"groupName":"Dimensions","headerId":1,"headerName":"Interior Dimensions","titleId":261,"titleName":"Second Head Room","value":"37.8","measurementUnit":"in","upgrade":false,"sequence":165},{"groupId":5,"groupName":"Dimensions","headerId":1,"headerName":"Interior Dimensions","titleId":262,"titleName":"Second Leg Room","value":"38.4","measurementUnit":"in","upgrade":false,"sequence":166},{"groupId":5,"groupName":"Dimensions","headerId":1,"headerName":"Interior Dimensions","titleId":263,"titleName":"Second Shoulder Room","value":"59.6","measurementUnit":"in","upgrade":false,"sequence":167},{"groupId":5,"groupName":"Dimensions","headerId":1,"headerName":"Interior Dimensions","titleId":264,"titleName":"Second Hip Room","value":"57.1","measurementUnit":"in","upgrade":false,"sequence":168},{"groupId":5,"groupName":"Dimensions","headerId":1,"headerName":"Interior Dimensions","titleId":266,"titleName":"Third Head Room","value":"35.9","measurementUnit":"in","upgrade":false,"sequence":169},{"groupId":5,"groupName":"Dimensions","headerId":1,"headerName":"Interior Dimensions","titleId":267,"titleName":"Third Leg Room","value":"27.7","measurementUnit":"in","upgrade":false,"sequence":170},{"groupId":5,"groupName":"Dimensions","headerId":1,"headerName":"Interior Dimensions","titleId":268,"titleName":"Third Shoulder Room","value":"55","measurementUnit":"in","upgrade":false,"sequence":171},{"groupId":5,"groupName":"Dimensions","headerId":1,"headerName":"Interior Dimensions","titleId":269,"titleName":"Third Hip Room","value":"45.6","measurementUnit":"in","upgrade":false,"sequence":172},{"groupId":5,"groupName":"Dimensions","headerId":2,"headerName":"Exterior Dimensions","titleId":301,"titleName":"Wheelbase","value":"109.8","measurementUnit":"in","upgrade":false,"sequence":181},{"groupId":5,"groupName":"Dimensions","headerId":2,"headerName":"Exterior Dimensions","titleId":304,"titleName":"Length, Overall","value":"N/A","measurementUnit":"in","upgrade":false,"sequence":184},{"groupId":5,"groupName":"Dimensions","headerId":2,"headerName":"Exterior Dimensions","titleId":305,"titleName":"Width, Max w/o mirrors","value":"75.8","measurementUnit":"in","upgrade":false,"sequence":185},{"groupId":5,"groupName":"Dimensions","headerId":2,"headerName":"Exterior Dimensions","titleId":306,"titleName":"Height, Overall","value":"68.1","measurementUnit":"in","upgrade":false,"sequence":186},{"groupId":5,"groupName":"Dimensions","headerId":2,"headerName":"Exterior Dimensions","titleId":309,"titleName":"Track Width, Front","value":"64.4","measurementUnit":"in","upgrade":false,"sequence":187},{"groupId":5,"groupName":"Dimensions","headerId":2,"headerName":"Exterior Dimensions","titleId":310,"titleName":"Track Width, Rear","value":"64.2","measurementUnit":"in","upgrade":false,"sequence":188},{"groupId":6,"groupName":"Powertrain","headerId":14,"headerName":"Mileage","titleId":801,"titleName":"EPA MPG Equivalent - Hwy","value":"N/A","upgrade":false,"sequence":200},{"groupId":5,"groupName":"Dimensions","headerId":2,"headerName":"Exterior Dimensions","titleId":326,"titleName":"Min Ground Clearance","value":"8","measurementUnit":"in","upgrade":false,"sequence":202},{"groupId":5,"groupName":"Dimensions","headerId":2,"headerName":"Exterior Dimensions","titleId":334,"titleName":"Rear Door Opening Height","value":"N/A","measurementUnit":"in","upgrade":false,"sequence":205},{"groupId":5,"groupName":"Dimensions","headerId":2,"headerName":"Exterior Dimensions","titleId":335,"titleName":"Rear Door Opening Width","value":"N/A","measurementUnit":"in","upgrade":false,"sequence":206},{"groupId":5,"groupName":"Dimensions","headerId":3,"headerName":"Cargo Area Dimensions","titleId":353,"titleName":"Cargo Area Length @ Floor to Seat 1","value":"N/A","measurementUnit":"in","upgrade":false,"sequence":214},{"groupId":5,"groupName":"Dimensions","headerId":3,"headerName":"Cargo Area Dimensions","titleId":354,"titleName":"Cargo Area Length @ Floor to Seat 2","value":"N/A","measurementUnit":"in","upgrade":false,"sequence":215},{"groupId":5,"groupName":"Dimensions","headerId":3,"headerName":"Cargo Area Dimensions","titleId":355,"titleName":"Cargo Area Length @ Floor to Seat 3","value":"N/A","measurementUnit":"in","upgrade":false,"sequence":216},{"groupId":5,"groupName":"Dimensions","headerId":3,"headerName":"Cargo Area Dimensions","titleId":362,"titleName":"Cargo Area Width @ Beltline","value":"N/A","measurementUnit":"in","upgrade":false,"sequence":219},{"groupId":5,"groupName":"Dimensions","headerId":3,"headerName":"Cargo Area Dimensions","titleId":364,"titleName":"Cargo Box Width @ Wheelhousings","value":"N/A","measurementUnit":"in","upgrade":false,"sequence":221},{"groupId":5,"groupName":"Dimensions","headerId":3,"headerName":"Cargo Area Dimensions","titleId":366,"titleName":"Cargo Box (Area) Height","value":"N/A","measurementUnit":"in","upgrade":false,"sequence":222},{"groupId":5,"groupName":"Dimensions","headerId":2,"headerName":"Exterior Dimensions","titleId":369,"titleName":"Liftover Height","value":"N/A","measurementUnit":"in","upgrade":false,"sequence":223},{"groupId":5,"groupName":"Dimensions","headerId":3,"headerName":"Cargo Area Dimensions","titleId":372,"titleName":"Cargo Volume to Seat 1","value":"78.6","measurementUnit":"ft³","upgrade":false,"sequence":226},{"groupId":5,"groupName":"Dimensions","headerId":3,"headerName":"Cargo Area Dimensions","titleId":373,"titleName":"Cargo Volume to Seat 2","value":"42.3","measurementUnit":"ft³","upgrade":false,"sequence":227},{"groupId":5,"groupName":"Dimensions","headerId":3,"headerName":"Cargo Area Dimensions","titleId":374,"titleName":"Cargo Volume to Seat 3","value":"13.6","measurementUnit":"ft³","upgrade":false,"sequence":228},{"groupId":6,"groupName":"Powertrain","headerId":15,"headerName":"Transmission","titleId":401,"titleName":"Seventh Gear Ratio (:1)","value":"0.80","upgrade":false,"sequence":234},{"groupId":6,"groupName":"Powertrain","headerId":15,"headerName":"Transmission","titleId":402,"titleName":"Eighth Gear Ratio (:1)","value":"0.67","upgrade":false,"sequence":235},{"groupId":6,"groupName":"Powertrain","headerId":14,"headerName":"Mileage","titleId":802,"titleName":"EPA MPG Equivalent - Combined","value":"N/A","upgrade":false,"sequence":300},{"groupId":4,"groupName":"Chassis","headerId":9,"headerName":"Weight Information","titleId":603,"titleName":"Curb Weight","value":"N/A","measurementUnit":"lbs","upgrade":true,"sequence":437},{"groupId":4,"groupName":"Chassis","headerId":9,"headerName":"Weight Information","titleId":605,"titleName":"Total Option Weight","value":"0.00","measurementUnit":"lbs","upgrade":true,"sequence":439}],"editorialContentSources":[{"sourceName":"Chrome Reviews","editorialContents":[{"description":"PROS","value":"Roomy, good ground clearance, stylish and technology-filled interior, sleek exterior styling, available hybrid power and all-wheel drive","mimeType":"text/plain"},{"description":"VALUE_WRITEUP","value":"The Toyota Highlander is a mid-sized near-luxury crossover competing in a crowded segment where just about every major auto manufacturer has a hat in the ring. What makes the Highlander successful is its blend of technology, convenience and Toyota durability at the right price. With plenty of standard features, plus a bevy of options, all wrapped in an attractive package, the Highlander stands out in a crowded field.","mimeType":"text/plain"},{"description":"MODEL_HIGHLIGHTS","value":"The base model LE trim comes with a 2.7L 4-cylinder engine making 185 horsepower. In this guise, the Highlander is rated at 20 mpg in the city and 24 mpg on the highway. An optional 3.5L 295-horse V6 upgrade is available but standard on all other trims. An available hybrid powertrain uses an electric motor in conjunction with the V6 to make 231 horsepower. The hybrid Highlander returns 30 mpg in the city and 28 mpg on the highway, extremely impressive numbers for a vehicle equipped with third-row seating. The Highlander comes standard in front-wheel drive, though all-wheel drive is an option for those who need it. <p><p>There are six trim levels offered on the 2018 Toyota Highlander: LE, LE Plus, XLE, SE, Limited and Limited Platinum trim levels<p><p>LE is the most basic trim, and is the only trim to feature the smaller 4-cylinder engine. However, it still comes loaded with 18-inch wheels, an Entune stereo with a 6.1-inch touchscreen, a backup camera, Bluetooth streaming, heated mirrors, 5 USB ports and third-row seating.<p><p>Stepping up to LE Plus adds several desirable items. Highlights include a height-adjustable power rear liftgate, a 10-way power adjustable driver's seat, satellite HD radio, 3-zone automatic climate control, fog lamps and a leather-wrapped steering wheel.<p><p>The XLE trim includes a smart key and push-button start, leather seating surfaces, heated front seats, roof rails to help secure extra luggage, rear window shades, an 8-inch touch screen, HomeLink, a navigation system and a moonroof.<p><p>The top-spec Limited trim offers 19-inch wheels, LED daytime running lights, various parking aids and a blind-spot monitor, perforated leather seating, heated and cooled front seats, and a powered passenger seat. The Limited Highlanders are also the only trim that can be equipped with the optional hybrid powertrain. <p>         <p>Options include an LE Plus, a Technology package that includes radar-controlled cruise control, a Lane Departure system and automatically dimming high beams; as well as a Limited Platinum package, which includes everything in the technology package along with a heated steering wheel, heated second-row seats, rain sensing windshield wipers and a panoramic moonroof. A Rear Seat Entertainment system is also optional.<p><p>Safety is aided by anti-lock brakes, stability control and traction control, as well as optional items like a blind-spot monitor. Of course, should an accident occur, the Highlander is equipped with eight airbags to help minimize any possible damage to its occupants.","mimeType":"text/plain"},{"description":"MODEL_NEWS","value":"The Highlander enters into 2019 mostly unchanged aside from aesthetic updates to the body-side rocker panels in black, chrome accents and darkened updates to the headlights, taillights and fog light housings.","mimeType":"text/plain"}]}]}
}


export function styleFactoryFordEscape() {
    return {
        "style": {
          "model": {
            "modelYear": 2019,
            "divisionId": 13,
            "divisionName": "Ford",
            "subdivisionId": 9192,
            "subdivisionName": "Ford Utility Vehicles",
            "modelId": 31773,
            "modelName": "Escape",
            "dataReleaseDate": "2019-08-05T07:00:00.000Z",
            "initialPriceDate": "2018-07-24T07:00:00.000Z",
            "dataEffectiveDate": "2018-12-26T08:00:00.000Z",
            "dataComment": "PLC 950"
          },
          "styleId": 402727,
          "styleName": "Titanium 4WD",
          "styleNameWithoutTrim": "4WD",
          "trimName": "Titanium",
          "manufacturerModelCode": "U9J",
          "styleGroupStyleIds": [
            402721,
            402722,
            402723,
            402724,
            402725,
            402726,
            402727
          ],
          "styleGroupBase": false,
          "baseMsrp": "34120.0",
          "baseInvoice": "32756.0",
          "destination": "1095.0",
          "trueBasePrice": true,
          "priceState": "Actual",
          "bodyTypes": [
            {
              "bodyTypeId": 13,
              "bodyTypeName": "Sport Utility",
              "primary": true
            }
          ],
          "passengerDoors": 4,
          "marketClassId": 18,
          "marketClassName": "4WD Sport Utility Vehicles",
          "stockPhotoUrl": "http://media.carbook.com/autoBuilderData/stockPhotos/28853.jpg",
          "consumerFriendlyModelName": "Escape",
          "consumerFriendlyStyleName": "Titanium 4WD",
          "consumerFriendlyDrivetrain": "Four Wheel Drive",
          "consumerFriendlyBodyType": "Sport Utility",
          "configurationState": {
            "dataVersion": "2019-08-05T07:00:00.000Z",
            "styleId": 402727,
            "fullyConfigured": true,
            "orderAvailability": "Retail",
            "specialEquipmentEnabled": true,
            "optionOrderLogicDisabled": false,
            "initialPricingEnabled": false,
            "chromeOptionCodeToggleStream": [
              "999",
              "-446",
              "400A",
              "BG",
              "DL",
              "17X"
            ],
            "selectedChromeOptionCodes": [
              "DL",
              "BG",
              "400A",
              "-446",
              "17X",
              "999"
            ],
            "serializedValue": "H4sIAAAAAAAAAGNgYJBjYKiRZWBTVWdgSs1jYAoNZgCJofAZcxImP2xgYGQESjGwMTBbWloysOiamJgxsJgYGDgyMDm5MzC5+DAwG5pH/AcCBghgZ2BWVlYGMsD6oDpgPJBahBTYGLgUyHwYB2Q2nA20A8YGOcSRwYnBmcGbwY/BnwFJAhtghEoCAGp4UTLxAAAA"
          }
        },
        "configuredOptionsMsrp": "0.0",
        "configuredOptionsInvoice": "0.0",
        "configuredCustomEquipmentMsrp": "0.0",
        "configuredCustomEquipmentInvoice": "0.0",
        "advertisingAndAdjustmentsMsrp": "0.0",
        "advertisingAndAdjustmentsInvoice": "0.0",
        "configuredTotalMsrp": "35215.0",
        "configuredTotalInvoice": "33851.0",
        "configuredPriceState": "Actual",
        "standardEquipment": [
          {
            "headerId": 1236,
            "headerName": "MECHANICAL",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Engine: 2.0L EcoBoost -inc: auto start-stop technology (STD)",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1048
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1054
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1059
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 1236,
            "headerName": "MECHANICAL",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Transmission: 6-Speed Automatic w/SelectShift (STD)",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1104
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1130
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1195
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "50-State Emissions System",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Transmission w/Oil Cooler",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Automatic Full-Time Four-Wheel Drive",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1040
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "3.07 Axle Ratio",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Battery w/Run Down Protection",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "GVWR: TBD",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Gas-Pressurized Shock Absorbers",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Front And Rear Anti-Roll Bars",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Electric Power-Assist Speed-Sensing Steering",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1084
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "15.7 Gal. Fuel Tank",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Quasi-Dual Stainless Steel Exhaust w/Chrome Tailpipe Finisher",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Permanent Locking Hubs",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Strut Front Suspension w/Coil Springs",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Short And Long Arm Rear Suspension w/Coil Springs",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "4-Wheel Disc Brakes w/4-Wheel ABS, Front Vented Discs, Brake Assist, Hill Hold Control and Electric Parking Brake",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1018
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1020
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1228
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Brake Actuated Limited Slip Differential",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1347
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 1397,
            "headerName": "WHEELS",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Wheels: 19\" Bright-Machined Aluminum -inc: luster nickel-painted spokes and pockets",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1123
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Tires: P235/45R19 A/S BSW -inc: mini spare",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1092
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1097
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1098
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Steel Spare Wheel",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Spare Tire Mounted Inside Under Cargo",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Clearcoat Paint",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Body-Colored Front Bumper w/Metal-Look Rub Strip/Fascia Accent",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Body-Colored Rear Bumper w/Gray Rub Strip/Fascia Accent and Metal-Look Bumper Insert",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Gray Bodyside Cladding and Gray Wheel Well Trim",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Chrome Side Windows Trim",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Body-Colored Door Handles",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Body-Colored Power Heated Side Mirrors w/Convex Spotter, Manual Folding and Turn Signal Indicator",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1064
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1065
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1174
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Fixed Rear Window w/Fixed Interval Wiper, Heated Wiper Park and Defroster",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1034
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Variable Intermittent Wipers",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1127
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1159
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Deep Tinted Glass",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1158
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Fully Galvanized Steel Panels",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Lip Spoiler",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1194
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Chrome Grille",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Power Liftgate Rear Cargo Access",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1198
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1225
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Tailgate/Rear Door Lock Included w/Power Door Locks",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1063
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Roof Rack Rails Only",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "LED Brakelights",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Front Fog Lamps",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1151
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Fully Automatic Projector Beam High Intensity Low/High Beam Daytime Running Headlamps w/Delay-Off",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1061
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1168
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1169
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Perimeter/Approach Lights",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Laminated Glass",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 1,
            "consumerFriendlyHeaderName": "Entertainment",
            "description": "Radio w/Seek-Scan, Clock, Steering Wheel Controls and Radio Data System",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1161
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 1,
            "consumerFriendlyHeaderName": "Entertainment",
            "description": "Radio: AM/FM Stereo w/MP3 Capable -inc: 10-speaker Sony audio system, HD Radio, speed compensated volume and SiriusXM radio w/a 6 month prepaid subscription, Note: SiriusXM audio and data services each require a subscription sold separately, or as a package, by Sirius XM Radio Inc, If you decide to continue service after your trial, the subscription plan you choose will automatically renew thereafter and you will be charged according to your chosen payment method at then-current rates, Fees and taxes apply, To cancel you must call SiriusXM at 1-866-635-2349, See SiriusXM Customer Agreement for complete terms at www.siriusxm.com, All fees and programming subject to change, Sirius, XM and all related marks and logos are trademarks of Sirius XM Radio Inc SiriusXM service is not available in Alaska and Hawaii.",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1014
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1136
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1149
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1299
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1381
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 1,
            "consumerFriendlyHeaderName": "Entertainment",
            "description": "Integrated Roof Antenna",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 1,
            "consumerFriendlyHeaderName": "Entertainment",
            "description": "390w Regular Amplifier",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 1,
            "consumerFriendlyHeaderName": "Entertainment",
            "description": "SYNC 3 Communications & Entertainment System -inc: enhanced voice recognition, 8\" LCD capacitive touchscreen in center stack w/swipe capability, AppLink, 911 Assist, Apple CarPlay, Android Auto compatibility and 2 smart-charging multimedia USB ports",
            "categories": [
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
                "categoryId": 1212
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1230
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1348
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1381
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "8-Way Driver Seat",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "8-Way Passenger Seat",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "60-40 Folding Split-Bench Front Facing Manual Reclining Fold Forward Seatback Leather Rear Seat",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1076
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1304
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Manual Tilt/Telescoping Steering Column",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1087
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Gauges -inc: Speedometer, Odometer, Engine Coolant Temp, Tachometer, Trip Odometer and Trip Computer",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1203
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Power Rear Windows and Fixed 3rd Row Windows",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1126
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Heated Leather/Metal-Look Steering Wheel",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1192
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1321
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Front Cupholder",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Rear Cupholder",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "2 12V DC Power Outlets",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Compass",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Keypad",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Proximity Key For Doors And Push Button Start",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1062
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1063
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1229
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Remote Keyless Entry w/Integrated Key Transmitter, Illuminated Entry, Illuminated Ignition Switch and Panic Button",
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
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Remote Releases -Inc: Proximity Cargo Access",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1319
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "FordPass Connect -inc: 4G LTE Wi-Fi hotspot that connects up to 10 devices (includes a complimentary trial subscription of 3 months or 3 gigabytes - whichever comes first, Wireless service plan required after trial subscription ends, Visit www.att.com/ford to start complimentary trail and sign up for a wireless service plan), Remote start w/specific time scheduling, lock and unlock, locate parked vehicle and check vehicle status ( service for 1 year from the vehicle sale date as recorded by the dealer)",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1221
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1324
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Garage Door Transmitter",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1204
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Cruise Control w/Steering Wheel Controls",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1033
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "HVAC -inc: Underseat Ducts and Console Ducts",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Voice Activated Dual Zone Front Automatic Air Conditioning",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1009
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1010
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1011
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Illuminated Locking Glove Box",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Driver Foot Rest",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Full Cloth Headliner",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Leatherette Door Trim Insert",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Leather/Metal-Look Gear Shift Knob",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Interior Trim -inc: Piano Black Instrument Panel Insert, Metal-Look Door Panel Insert, Piano Black Console Insert and Chrome/Metal-Look Interior Accents",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Heated Leather-Trimmed Front Bucket Seats -inc: 10-way power driver and passenger seat (includes power lumbar and power recline) and driver's side memory",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1074
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1075
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1078
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1082
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1156
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1189
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1190
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1191
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Driver And Passenger Visor Vanity Mirrors w/Driver And Passenger Illumination, Driver And Passenger Auxiliary Mirror",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1175
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1176
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1177
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1178
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Day-Night Auto-Dimming Rearview Mirror",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1173
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Full Floor Console w/Covered Storage, Mini Overhead Console w/Storage, 2 12V DC Power Outlets and 1 AC Power Outlet",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Fade-To-Off Interior Lighting",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Front And Rear Map Lights",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Full Carpet Floor Covering -inc: Carpet Front And Rear Floor Mats",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1055
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Carpet Floor Trim",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Cargo Area Concealed Storage",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Trunk/Hatch Auto-Latch",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Cargo Space Lights",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "FOB Controls -inc: Trunk/Hatch/Tailgate",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1229
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Memory Settings -inc: Door Mirrors",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1179
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Voice-Activated Touchscreen Navigation System -inc: pinch-to-zoom capability, SiriusXM Traffic and Travel Link, SiriusXM Traffic and Travel Link includes a five-year prepaid subscription, SiriusXM audio and data services each require a subscription sold separately, or as a package, by Sirius XM Radio Inc, If you decide to continue service after your trial, the subscription plan you choose will automatically renew thereafter and you will be charged according to your chosen payment method at then-current rates, Fees and taxes apply, To cancel you must call SiriusXM at 1-866-635-2349, See SiriusXM Customer Agreement for complete terms at www.siriusxm.com, All fees and programming subject to change, Sirius, XM and all related marks and logos are trademarks of Sirius XM Radio Inc",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1066
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Instrument Panel Bin, Interior Concealed Storage, Driver / Passenger And Rear Door Bins, 2nd Row Underseat Storage and Audio Media Storage",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Delayed Accessory Power",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Power Door Locks w/Autolock Feature",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1063
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Power 1st Row Windows w/Front And Rear 1-Touch Up/Down",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1126
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Systems Monitor",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Trip Computer",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1203
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Outside Temp Gauge",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Analog Display",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Manual w/Tilt Front Head Restraints and Manual Adjustable Rear Head Restraints",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Front Center Armrest and Rear Center Armrest",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "2 Seatback Storage Pockets",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Seats w/Leatherette Back Material",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1179
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Securilock Anti-Theft Ignition (pats) Engine Immobilizer",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1166
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Perimeter Alarm",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1013
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Air Filtration",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "2 12V DC Power Outlets and 1 AC Power Outlet",
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 9,
            "consumerFriendlyHeaderName": "Safety-Mechanical",
            "description": "AdvanceTrac w/Roll Stability Control Electronic Stability Control (ESC) And Roll Stability Control (RSC)",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1100
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1227
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 9,
            "consumerFriendlyHeaderName": "Safety-Mechanical",
            "description": "ABS And Driveline Traction Control",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1100
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 7,
            "consumerFriendlyHeaderName": "Safety-Exterior",
            "description": "Side Impact Beams",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Dual Stage Driver And Passenger Seat-Mounted Side Airbags",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1005
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Active Park Assist Automated Parking Sensors",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1320
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Blind Spot Sensor",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1312
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Rear Collision Warning",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1322
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Low Tire Pressure Warning",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1202
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Dual Stage Driver And Passenger Front Airbags",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1001
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1002
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Safety Canopy System Curtain 1st And 2nd Row Airbags",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1007
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1008
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Airbag Occupancy Sensor",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1310
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Driver Knee Airbag",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1317
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Mykey System -inc: Top Speed Limiter, Audio Volume Limiter, Early Low Fuel Warning, Programmable Sound Chimes and Beltminder w/Audio Mute",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1350
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Rear Child Safety Locks",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1039
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Outboard Front Lap And Shoulder Safety Belts -inc: Rear Center 3 Point, Height Adjusters and Pretensioners",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Back-Up Camera",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1224
              }
            ],
            "upgrade": false
          }
        ],
        "options": [
          {
            "chromeOptionCode": "999",
            "oemOptionCode": "999",
            "headerId": 1160,
            "headerName": "ENGINE",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "optionKindId": 6,
            "descriptions": [
              {
                "description": "Engine: 2.0L EcoBoost",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: auto start-stop technology",
                "type": "Extended"
              },
              {
                "description": "(STD)",
                "type": "Extended"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1048
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1054
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1059
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
            "selectionState": "Selected",
            "uniqueTypeFilter": "B"
          },
          {
            "chromeOptionCode": "-446",
            "oemOptionCode": "___",
            "headerId": 1379,
            "headerName": "TRANSMISSION",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "optionKindId": 7,
            "descriptions": [
              {
                "description": "Transmission: 6-Speed Automatic w/SelectShift",
                "type": "PrimaryName"
              },
              {
                "description": "(STD)",
                "type": "Extended"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1104
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1130
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1195
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
            "selectionState": "Selected",
            "uniqueTypeFilter": "C"
          },
          {
            "chromeOptionCode": "400A",
            "oemOptionCode": "400A",
            "headerId": 1249,
            "headerName": "OPTION PACKAGE",
            "consumerFriendlyHeaderId": 4,
            "consumerFriendlyHeaderName": "Package",
            "optionKindId": 20,
            "descriptions": [
              {
                "description": "Equipment Group 400A",
                "type": "PrimaryName"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Selected",
            "uniqueTypeFilter": "A"
          },
          {
            "chromeOptionCode": "BG",
            "oemOptionCode": "BG",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Baltic Sea Green Metallic",
                "type": "PrimaryName"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "O",
            "rgbValue": "585954",
            "genericColors": [
              {
                "primary": true,
                "name": "Green"
              }
            ]
          },
          {
            "chromeOptionCode": "BP",
            "oemOptionCode": "BP",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Sedona Orange Metallic",
                "type": "PrimaryName"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "O",
            "rgbValue": "BE3105",
            "genericColors": [
              {
                "primary": true,
                "name": "Orange"
              }
            ]
          },
          {
            "chromeOptionCode": "J7",
            "oemOptionCode": "J7",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Magnetic Metallic",
                "type": "PrimaryName"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "O",
            "rgbValue": "454744",
            "genericColors": [
              {
                "primary": true,
                "name": "Gray"
              }
            ]
          },
          {
            "chromeOptionCode": "N6",
            "oemOptionCode": "N6",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Lightning Blue Metallic",
                "type": "PrimaryName"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "O",
            "rgbValue": "1C3D58",
            "genericColors": [
              {
                "primary": true,
                "name": "Blue"
              }
            ]
          },
          {
            "chromeOptionCode": "UM",
            "oemOptionCode": "UM",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Agate Black Metallic",
                "type": "PrimaryName"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "O",
            "rgbValue": "0A0A0C",
            "genericColors": [
              {
                "primary": true,
                "name": "Black"
              }
            ]
          },
          {
            "chromeOptionCode": "UX",
            "oemOptionCode": "UX",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Ingot Silver Metallic",
                "type": "PrimaryName"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "O",
            "rgbValue": "A1A1A1",
            "genericColors": [
              {
                "primary": true,
                "name": "Silver"
              }
            ]
          },
          {
            "chromeOptionCode": "RR",
            "oemOptionCode": "RR",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Ruby Red Metallic Tinted Clearcoat",
                "type": "PrimaryName"
              }
            ],
            "msrp": "395.0",
            "invoice": "371.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "O",
            "rgbValue": "570512",
            "genericColors": [
              {
                "primary": true,
                "name": "Red"
              }
            ]
          },
          {
            "chromeOptionCode": "UG",
            "oemOptionCode": "UG",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "White Platinum Metallic Tri-Coat",
                "type": "PrimaryName"
              }
            ],
            "msrp": "595.0",
            "invoice": "559.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "O",
            "rgbValue": "D2CECE",
            "genericColors": [
              {
                "primary": true,
                "name": "White"
              }
            ]
          },
          {
            "chromeOptionCode": "DL",
            "oemOptionCode": "DL",
            "headerId": 1348,
            "headerName": "SEAT TYPE",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 72,
            "descriptions": [
              {
                "description": "Medium Light Stone, Heated Leather-Trimmed Front Bucket Seats",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: 10-way power driver and passenger seat (includes power lumbar and power recline) and driver's side memory",
                "type": "Extended"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1074
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1075
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1078
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1082
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1156
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1189
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1190
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1191
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
            "selectionState": "Selected",
            "uniqueTypeFilter": "N"
          },
          {
            "chromeOptionCode": "DB",
            "oemOptionCode": "DB",
            "headerId": 1348,
            "headerName": "SEAT TYPE",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 72,
            "descriptions": [
              {
                "description": "Charcoal Black, Heated Leather-Trimmed Front Bucket Seats",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: 10-way power driver and passenger seat (includes power lumbar and power recline) and driver's side memory",
                "type": "Extended"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1074
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1075
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1077
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1078
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1079
              },
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
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1156
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1189
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1190
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1191
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
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "N"
          },
          {
            "chromeOptionCode": "17X",
            "oemOptionCode": "17X",
            "headerId": 1333,
            "headerName": "REQUIRED OPTION",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 65,
            "descriptions": [
              {
                "description": "U9J01 - Titanium Base",
                "type": "PrimaryName"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Selected",
            "uniqueTypeFilter": "K"
          },
          {
            "chromeOptionCode": "17Y",
            "oemOptionCode": "17Y",
            "headerId": 1333,
            "headerName": "REQUIRED OPTION",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 65,
            "descriptions": [
              {
                "description": "U9J02 - Titanium Safe & Smart",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: Ford Safe and Smart Titanium Plus Package, Auto High-Beam Headlamps, Adaptive Cruise Control & Fwd Collision Warning, brake support, Blind Spot Info System w/Cross-Traffic Alert (BLIS), Panoramic Vista Roof, power open/close w/power shade, Standard 2nd row dome light is replaced w/2 single lights, Switch located in each grab handle pocket, Lane-Keeping System, lane-keeping alert, lane-keeping assist and driver alert system, Rain-Sensing Wipers, front only",
                "type": "Extended"
              }
            ],
            "msrp": "1895.0",
            "invoice": "1781.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Package",
                "categoryId": 1033
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1069
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1127
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1132
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1143
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1159
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1160
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1312
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1314
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1322
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1323
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1346
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "K"
          },
          {
            "chromeOptionCode": "172",
            "oemOptionCode": "172",
            "headerId": 1333,
            "headerName": "REQUIRED OPTION",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 65,
            "descriptions": [
              {
                "description": "U9J03 - Titanium Tow Package",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: 2.0L EcoBoost Class II Trailer Tow Package, class II hitch receiver and trailer sway control, Max towing 3,500 lbs, Auxiliary Transmission Oil Cooler",
                "type": "Extended"
              }
            ],
            "msrp": "495.0",
            "invoice": "465.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Package",
                "categoryId": 1199
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "K"
          },
          {
            "chromeOptionCode": "173",
            "oemOptionCode": "173",
            "headerId": 1333,
            "headerName": "REQUIRED OPTION",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 65,
            "descriptions": [
              {
                "description": "U9J04 - Titanium Safe/Smart & Tow Package",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: 2.0L EcoBoost Class II Trailer Tow Package, class II hitch receiver and trailer sway control, Max towing 3,500 lbs, Auxiliary Transmission Oil Cooler, Ford Safe and Smart Titanium Plus Package, Auto High-Beam Headlamps, Adaptive Cruise Control & Fwd Collision Warning, brake support, Blind Spot Info System w/Cross-Traffic Alert (BLIS), Panoramic Vista Roof, power open/close w/power shade, Standard 2nd row dome light is replaced w/2 single lights, Switch located in each grab handle pocket, Lane-Keeping System, lane-keeping alert, lane-keeping assist and driver alert system, Rain-Sensing Wipers, front only",
                "type": "Extended"
              }
            ],
            "msrp": "2390.0",
            "invoice": "2247.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Package",
                "categoryId": 1033
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1069
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1127
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1132
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1143
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1159
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1160
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1199
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1312
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1314
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1322
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1323
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1346
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "K"
          },
          {
            "chromeOptionCode": "41H",
            "oemOptionCode": "41H",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Engine Block Heater",
                "type": "PrimaryName"
              }
            ],
            "msrp": "35.0",
            "invoice": "33.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "chromeOptionCode": "87D",
            "oemOptionCode": "87D",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 148,
            "descriptions": [
              {
                "description": "Wheel-Locking Lug Nuts (Dealer Installed)",
                "type": "PrimaryName"
              },
              {
                "description": "(LPO)",
                "type": "UnenforcedLogic"
              },
              {
                "description": "Factory invoiced accessory.",
                "type": "UnenforcedLogic"
              }
            ],
            "msrp": "75.0",
            "invoice": "70.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1205
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
            "chromeOptionCode": "153",
            "oemOptionCode": "153",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Front License Plate Bracket",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: Standard in states requiring two license plates and optional to all others",
                "type": "Extended"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "chromeOptionCode": "63S",
            "oemOptionCode": "63S",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 148,
            "descriptions": [
              {
                "description": "Splash Guards (Dealer Installed)",
                "type": "PrimaryName"
              },
              {
                "description": "(LPO)",
                "type": "UnenforcedLogic"
              },
              {
                "description": "Factory invoiced accessory.",
                "type": "UnenforcedLogic"
              }
            ],
            "msrp": "210.0",
            "invoice": "197.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "chromeOptionCode": "50C",
            "oemOptionCode": "50C",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Front & Rear Floor Liners",
                "type": "PrimaryName"
              },
              {
                "description": "(LPO)",
                "type": "UnenforcedLogic"
              }
            ],
            "msrp": "125.0",
            "invoice": "118.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1055
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
            "chromeOptionCode": "50Q",
            "oemOptionCode": "50Q",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Cargo Mat",
                "type": "PrimaryName"
              },
              {
                "description": "(LPO)",
                "type": "UnenforcedLogic"
              }
            ],
            "msrp": "90.0",
            "invoice": "85.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "chromeOptionCode": "85T",
            "oemOptionCode": "85T",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Interior Cargo Cover",
                "type": "PrimaryName"
              },
              {
                "description": "(LPO)",
                "type": "UnenforcedLogic"
              },
              {
                "description": "Factory invoiced accessory.",
                "type": "UnenforcedLogic"
              }
            ],
            "msrp": "135.0",
            "invoice": "127.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1272
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
            "chromeOptionCode": "61X",
            "oemOptionCode": "61X",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Black Roof-Rail Crossbars",
                "type": "PrimaryName"
              },
              {
                "description": "(LPO)",
                "type": "UnenforcedLogic"
              },
              {
                "description": "Factory invoiced accessory.",
                "type": "UnenforcedLogic"
              }
            ],
            "msrp": "145.0",
            "invoice": "136.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1172
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
          }
        ],
        "configurationCheckListItems": [
          {
            "itemName": "Engine",
            "optionKindId": 0,
            "chromeOptionCodes": [
              "999"
            ],
            "satisfied": true
          },
          {
            "itemName": "Transmission",
            "optionKindId": 0,
            "chromeOptionCodes": [
              "-446"
            ],
            "satisfied": true
          },
          {
            "itemName": "P.E.P.",
            "optionKindId": 0,
            "chromeOptionCodes": [
              "400A"
            ],
            "satisfied": true
          },
          {
            "itemName": "Primary Exterior Color",
            "optionKindId": 0,
            "chromeOptionCodes": [
              "BG",
              "BP",
              "J7",
              "N6",
              "UM",
              "UX",
              "RR",
              "UG"
            ],
            "satisfied": true
          },
          {
            "itemName": "Seat Color",
            "optionKindId": 0,
            "chromeOptionCodes": [
              "DL",
              "DB"
            ],
            "satisfied": true
          },
          {
            "itemName": "Required Option",
            "optionKindId": 0,
            "chromeOptionCodes": [
              "17X",
              "17Y",
              "172",
              "173"
            ],
            "satisfied": true
          }
        ],
        "consumerInformation": {
          "crashTestRating": "US NHTSA CRASH TEST RESULTS:\r\n\r\nOverall Rating: * * * * *\r\n\r\nOverall Frontal Barrier Crash Rating: * * * * *\r\n        Driver: * * * * *   Passenger: * * * *\r\n\r\nOverall Side Crash Rating: * * * * *\r\n\r\nSide Barrier Rating: * * * * *\r\n        Driver: * * * * *   Rear Passenger: * * * * *\r\n\r\nSide Pole Rating Driver Front Seat: * * * * *\r\n\r\nCombined Side Barrier and Pole Ratings: \r\n        Front Seat Rating: * * * * *        Rear Seat Rating: * * * * *\r\n\r\nOverall Rollover Rating: * * * *\r\n        Dynamic Test Result: No Tip\r\n        Risk of Rollover: 18.50\r\n\r\nNote Regarding Driver Rating: \r\n\r\nMale: Average sized adult male dummy in 35-MPH crash into fixed barrier. Rating is evaluation of injury to head, neck, chest, legs. Female: Small-sized adult female dummy in 35-mph crash into fixed barrier. Rating is evaluation of injury to head, neck, chest, legs.\r\n\r\nRollover Note: Dynamic (moving) test results (Tip or No Tip) and measured rollover-related properties determine vehicle's risk of rollover in single vehicle crash and its rollover rating. The Rollover Resistance Rating utilizes a \"fishhook\" maneuver which is a series of abrupt turns at varying speeds to see how \"top-heavy\" a vehicle is.",
          "rebate": "One of the following incentives may apply to this vehicle.  Regional incentives may vary.\r\n\r\nCash Incentive: $2750 or financing\r\n        plus $1175 bonus cash\r\n\r\nFinancing Incentive: 0.0% to 3.9%\r\n        plus $1175 bonus cash\r\n\r\nExpiration Date: 09/03/2019\r\n\r\nResource: ford.com 07/15/2019",
          "warranty": "Basic: \r\n        3 Years/36,000 Miles\r\n\r\nDrivetrain: \r\n        5 Years/60,000 Miles\r\n\r\nCorrosion: \r\n        5 Years/Unlimited Miles\r\n\r\nRoadside Assistance: \r\n        5 Years/60,000 Miles"
        },
        "structuredConsumerInformation": [
          {
            "typeName": "Rebate",
            "items": [
              {
                "name": "Incentive Note",
                "sequence": 100,
                "value": "One of the following incentives may apply to this vehicle.  Regional incentives may vary."
              },
              {
                "name": "Cash Incentive Minimum",
                "sequence": 200,
                "value": "2750"
              },
              {
                "name": "Cash Incentive Bonus Cash",
                "sequence": 400,
                "value": "1175"
              },
              {
                "name": "Cash Finance Rule",
                "sequence": 600,
                "value": "Or"
              },
              {
                "name": "Financing Incentive Min",
                "sequence": 700,
                "value": "0.0"
              },
              {
                "name": "Financing Incentive Max",
                "sequence": 800,
                "value": "3.9"
              },
              {
                "name": "Financing Bonus Cash",
                "sequence": 900,
                "value": "1175"
              },
              {
                "name": "Expiration Date",
                "sequence": 1100,
                "value": "09/03/2019"
              },
              {
                "name": "Resource Name",
                "sequence": 1200,
                "value": "ford.com"
              },
              {
                "name": "Resource Date",
                "sequence": 1300,
                "value": "07/15/2019"
              }
            ]
          },
          {
            "typeName": "Warranty",
            "items": [
              {
                "name": "Basic Years",
                "sequence": 200,
                "value": "3"
              },
              {
                "name": "Basic Miles/km",
                "sequence": 300,
                "value": "36,000"
              },
              {
                "name": "Drivetrain Years",
                "sequence": 500,
                "value": "5"
              },
              {
                "name": "Drivetrain Miles/km",
                "sequence": 600,
                "value": "60,000"
              },
              {
                "name": "Corrosion Years",
                "sequence": 800,
                "value": "5"
              },
              {
                "name": "Corrosion Miles/km",
                "sequence": 900,
                "value": "Unlimited"
              },
              {
                "name": "Roadside Assistance Years",
                "sequence": 2300,
                "value": "5"
              },
              {
                "name": "Roadside Assistance Miles/km",
                "sequence": 2400,
                "value": "60,000"
              }
            ]
          },
          {
            "typeName": "Crash Test Results",
            "items": [
              {
                "name": "Overall Rating",
                "sequence": 800,
                "value": "* * * * *"
              },
              {
                "name": "Overall Frontal Barrier Crash Rating",
                "sequence": 900,
                "value": "* * * * *"
              },
              {
                "name": "Frontal Barrier Crash Rating Driver",
                "sequence": 1000,
                "value": "* * * * *"
              },
              {
                "name": "Frontal Barrier Crash Rating Passenger",
                "sequence": 1100,
                "value": "* * * *"
              },
              {
                "name": "Overall Side Crash Rating",
                "sequence": 1400,
                "value": "* * * * *"
              },
              {
                "name": "Side Barrier Rating",
                "sequence": 1500,
                "value": "* * * * *"
              },
              {
                "name": "Side Barrier Rating Driver",
                "sequence": 1600,
                "value": "* * * * *"
              },
              {
                "name": "Side Barrier Rating Passenger Rear Seat",
                "sequence": 1700,
                "value": "* * * * *"
              },
              {
                "name": "Side Pole Rating Driver Front Seat",
                "sequence": 1900,
                "value": "* * * * *"
              },
              {
                "name": "Male/Female Dummy Note",
                "sequence": 2000,
                "value": "Male: Average sized adult male dummy in 35-MPH crash into fixed barrier. Rating is evaluation of injury to head, neck, chest, legs. Female: Small-sized adult female dummy in 35-mph crash into fixed barrier. Rating is evaluation of injury to head, neck, chest, legs."
              },
              {
                "name": "Combined Side Rating Front Seat",
                "sequence": 2100,
                "value": "* * * * *"
              },
              {
                "name": "Combined Side Rating Rear Seat",
                "sequence": 2200,
                "value": "* * * * *"
              },
              {
                "name": "Rollover Rating",
                "sequence": 2300,
                "value": "* * * *"
              },
              {
                "name": "Rollover Rating Dynamic Test Result",
                "sequence": 2400,
                "value": "No Tip"
              },
              {
                "name": "Risk of Rollover",
                "sequence": 2500,
                "value": "18.50"
              },
              {
                "name": "Rollover Note",
                "sequence": 2600,
                "value": "Dynamic (moving) test results (Tip or No Tip) and measured rollover-related properties determine vehicle's risk of rollover in single vehicle crash and its rollover rating. The Rollover Resistance Rating utilizes a \"fishhook\" maneuver which is a series of abrupt turns at varying speeds to see how \"top-heavy\" a vehicle is."
              }
            ]
          }
        ],
        "technicalSpecifications": [
          {
            "groupId": 0,
            "groupName": "Vehicle",
            "headerId": 48,
            "headerName": "Emissions",
            "titleId": 81,
            "titleName": "Tons/yr of CO2 Emissions @ 15K mi/year",
            "value": "7.7",
            "upgrade": false,
            "sequence": 1
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 6,
            "titleName": "Drivetrain",
            "value": "Four Wheel Drive",
            "upgrade": false,
            "sequence": 6
          },
          {
            "groupId": 0,
            "groupName": "Vehicle",
            "headerId": 0,
            "headerName": "Vehicle",
            "titleId": 7,
            "titleName": "EPA Classification",
            "value": "Small Sport Utility Vehicles 4WD",
            "upgrade": false,
            "sequence": 7
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 1,
            "headerName": "Interior Dimensions",
            "titleId": 8,
            "titleName": "Passenger Capacity",
            "value": "5",
            "upgrade": false,
            "sequence": 8
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 1,
            "headerName": "Interior Dimensions",
            "titleId": 9,
            "titleName": "Passenger Volume",
            "value": "98.7",
            "measurementUnit": "ft³",
            "upgrade": false,
            "sequence": 9
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 9,
            "headerName": "Weight Information",
            "titleId": 10,
            "titleName": "Base Curb Weight",
            "value": "3755",
            "measurementUnit": "lbs",
            "upgrade": false,
            "sequence": 10
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 9,
            "headerName": "Weight Information",
            "titleId": 14,
            "titleName": "Curb Weight - Front",
            "value": "N/A",
            "measurementUnit": "lbs",
            "upgrade": false,
            "sequence": 14
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 9,
            "headerName": "Weight Information",
            "titleId": 15,
            "titleName": "Curb Weight - Rear",
            "value": "N/A",
            "measurementUnit": "lbs",
            "upgrade": false,
            "sequence": 15
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 9,
            "headerName": "Weight Information",
            "titleId": 38,
            "titleName": "Maximum Payload Capacity",
            "value": "N/A",
            "measurementUnit": "lbs",
            "upgrade": true,
            "sequence": 23
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 14,
            "headerName": "Mileage",
            "titleId": 27,
            "titleName": "EPA Fuel Economy Est - Hwy",
            "value": "27",
            "measurementUnit": "MPG",
            "upgrade": false,
            "sequence": 23
          },
          {
            "groupId": 0,
            "groupName": "Vehicle",
            "headerId": 48,
            "headerName": "Emissions",
            "titleId": 21,
            "titleName": "EPA Greenhouse Gas Score",
            "value": "N/A",
            "upgrade": false,
            "sequence": 23
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 14,
            "headerName": "Mileage",
            "titleId": 28,
            "titleName": "Cruising Range - City",
            "value": "329.70",
            "measurementUnit": "mi",
            "upgrade": true,
            "sequence": 24
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 14,
            "headerName": "Mileage",
            "titleId": 26,
            "titleName": "EPA Fuel Economy Est - City",
            "value": "21",
            "measurementUnit": "MPG",
            "upgrade": false,
            "sequence": 24
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 14,
            "headerName": "Mileage",
            "titleId": 25,
            "titleName": "Fuel Economy Est-Combined",
            "value": "23",
            "measurementUnit": "MPG",
            "upgrade": false,
            "sequence": 24
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 14,
            "headerName": "Mileage",
            "titleId": 29,
            "titleName": "Cruising Range - Hwy",
            "value": "423.90",
            "measurementUnit": "mi",
            "upgrade": true,
            "sequence": 25
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 8,
            "headerName": "Trailering",
            "titleId": 31,
            "titleName": "Dead Weight Hitch - Max Trailer Wt.",
            "value": "2000",
            "measurementUnit": "lbs",
            "upgrade": false,
            "sequence": 27
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 8,
            "headerName": "Trailering",
            "titleId": 32,
            "titleName": "Dead Weight Hitch - Max Tongue Wt.",
            "value": "200",
            "measurementUnit": "lbs",
            "upgrade": false,
            "sequence": 28
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 8,
            "headerName": "Trailering",
            "titleId": 33,
            "titleName": "Wt Distributing Hitch - Max Trailer Wt.",
            "value": "2000",
            "measurementUnit": "lbs",
            "upgrade": false,
            "sequence": 29
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 8,
            "headerName": "Trailering",
            "titleId": 34,
            "titleName": "Wt Distributing Hitch - Max Tongue Wt.",
            "value": "200",
            "measurementUnit": "lbs",
            "upgrade": false,
            "sequence": 30
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 8,
            "headerName": "Trailering",
            "titleId": 37,
            "titleName": "Maximum Trailering Capacity",
            "value": "2000",
            "measurementUnit": "lbs",
            "upgrade": false,
            "sequence": 33
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 13,
            "headerName": "Engine",
            "titleId": 40,
            "titleName": "Engine Order Code",
            "value": "999",
            "upgrade": false,
            "sequence": 34
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 13,
            "headerName": "Engine",
            "titleId": 41,
            "titleName": "Engine Type",
            "value": "Intercooled Turbo Premium Unleaded I-4",
            "upgrade": false,
            "sequence": 35
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 13,
            "headerName": "Engine",
            "titleId": 42,
            "titleName": "Displacement",
            "value": "2.0 L/122",
            "upgrade": false,
            "sequence": 36
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 13,
            "headerName": "Engine",
            "titleId": 43,
            "titleName": "Fuel System",
            "value": "Gasoline Direct Injection",
            "upgrade": false,
            "sequence": 37
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 13,
            "headerName": "Engine",
            "titleId": 48,
            "titleName": "SAE Net Horsepower @ RPM",
            "value": "245 @ 5500",
            "upgrade": false,
            "sequence": 38
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 13,
            "headerName": "Engine",
            "titleId": 49,
            "titleName": "SAE Net Torque @ RPM",
            "value": "275 @ 3000",
            "upgrade": false,
            "sequence": 39
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 51,
            "titleName": "Trans Order Code",
            "value": "N/A",
            "upgrade": false,
            "sequence": 40
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 52,
            "titleName": "Trans Type",
            "value": "6",
            "upgrade": false,
            "sequence": 41
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 53,
            "titleName": "Trans Description Cont.",
            "value": "Automatic w/OD",
            "upgrade": false,
            "sequence": 42
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 54,
            "titleName": "Trans Description Cont. Again",
            "value": "N/A",
            "upgrade": false,
            "sequence": 43
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 56,
            "titleName": "First Gear Ratio (:1)",
            "value": "4.58",
            "upgrade": false,
            "sequence": 44
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 57,
            "titleName": "Second Gear Ratio (:1)",
            "value": "2.96",
            "upgrade": false,
            "sequence": 45
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 58,
            "titleName": "Third Gear Ratio (:1)",
            "value": "1.91",
            "upgrade": false,
            "sequence": 46
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 59,
            "titleName": "Fourth Gear Ratio (:1)",
            "value": "1.44",
            "upgrade": false,
            "sequence": 47
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 60,
            "titleName": "Fifth Gear Ratio (:1)",
            "value": "1.00",
            "upgrade": false,
            "sequence": 48
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 61,
            "titleName": "Sixth Gear Ratio (:1)",
            "value": "0.74",
            "upgrade": false,
            "sequence": 49
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 62,
            "titleName": "Reverse Ratio (:1)",
            "value": "2.94",
            "upgrade": false,
            "sequence": 50
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 65,
            "titleName": "Clutch Size",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 52
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 69,
            "titleName": "Final Drive Axle Ratio (:1)",
            "value": "3.07",
            "upgrade": false,
            "sequence": 56
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 72,
            "titleName": "Transfer Case Gear Ratio (:1), High",
            "value": "N/A",
            "upgrade": false,
            "sequence": 58
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 73,
            "titleName": "Transfer Case Gear Ratio (:1), Low",
            "value": "N/A",
            "upgrade": false,
            "sequence": 59
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 12,
            "headerName": "Electrical",
            "titleId": 76,
            "titleName": "Cold Cranking Amps @ 0° F (Primary)",
            "value": "N/A",
            "upgrade": false,
            "sequence": 61
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 12,
            "headerName": "Electrical",
            "titleId": 84,
            "titleName": "Maximum Alternator Capacity (amps)",
            "value": "N/A",
            "upgrade": false,
            "sequence": 66
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 11,
            "headerName": "Cooling System",
            "titleId": 91,
            "titleName": "Total Cooling System Capacity",
            "value": "N/A",
            "measurementUnit": "qts",
            "upgrade": false,
            "sequence": 69
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 17,
            "headerName": "Suspension",
            "titleId": 105,
            "titleName": "Suspension Type - Front",
            "value": "Strut",
            "upgrade": false,
            "sequence": 80
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 17,
            "headerName": "Suspension",
            "titleId": 106,
            "titleName": "Suspension Type - Rear",
            "value": "Short And Long Arm",
            "upgrade": false,
            "sequence": 81
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 17,
            "headerName": "Suspension",
            "titleId": 107,
            "titleName": "Suspension Type - Front (Cont.)",
            "value": "Strut",
            "upgrade": false,
            "sequence": 82
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 17,
            "headerName": "Suspension",
            "titleId": 108,
            "titleName": "Suspension Type - Rear (Cont.)",
            "value": "Short And Long Arm",
            "upgrade": false,
            "sequence": 83
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 14,
            "headerName": "Mileage",
            "titleId": 800,
            "titleName": "EPA MPG Equivalent - City",
            "value": "N/A",
            "upgrade": false,
            "sequence": 100
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 17,
            "headerName": "Suspension",
            "titleId": 131,
            "titleName": "Shock Absorber Diameter - Front",
            "value": "N/A",
            "measurementUnit": "mm",
            "upgrade": false,
            "sequence": 105
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 17,
            "headerName": "Suspension",
            "titleId": 132,
            "titleName": "Shock Absorber Diameter - Rear",
            "value": "N/A",
            "measurementUnit": "mm",
            "upgrade": false,
            "sequence": 106
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 17,
            "headerName": "Suspension",
            "titleId": 133,
            "titleName": "Stabilizer Bar Diameter - Front",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 107
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 17,
            "headerName": "Suspension",
            "titleId": 134,
            "titleName": "Stabilizer Bar Diameter - Rear",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 108
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 7,
            "headerName": "Tires",
            "titleId": 137,
            "titleName": "Front Tire Order Code",
            "value": "N/A",
            "upgrade": false,
            "sequence": 109
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 7,
            "headerName": "Tires",
            "titleId": 138,
            "titleName": "Rear Tire Order Code",
            "value": "N/A",
            "upgrade": false,
            "sequence": 110
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 7,
            "headerName": "Tires",
            "titleId": 139,
            "titleName": "Spare Tire Order Code",
            "value": "N/A",
            "upgrade": false,
            "sequence": 111
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 7,
            "headerName": "Tires",
            "titleId": 140,
            "titleName": "Front Tire Size",
            "value": "P235/45HR19",
            "upgrade": false,
            "sequence": 112
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 7,
            "headerName": "Tires",
            "titleId": 141,
            "titleName": "Rear Tire Size",
            "value": "P235/45HR19",
            "upgrade": false,
            "sequence": 113
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 7,
            "headerName": "Tires",
            "titleId": 142,
            "titleName": "Spare Tire Size",
            "value": "Compact",
            "upgrade": false,
            "sequence": 114
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 10,
            "headerName": "Wheels",
            "titleId": 156,
            "titleName": "Front Wheel Size",
            "value": "19 X 7.5",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 121
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 10,
            "headerName": "Wheels",
            "titleId": 157,
            "titleName": "Rear Wheel Size",
            "value": "19 X 7.5",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 122
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 10,
            "headerName": "Wheels",
            "titleId": 158,
            "titleName": "Spare Wheel Size",
            "value": "Compact",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 123
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 10,
            "headerName": "Wheels",
            "titleId": 165,
            "titleName": "Front Wheel Material",
            "value": "Aluminum",
            "upgrade": false,
            "sequence": 130
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 10,
            "headerName": "Wheels",
            "titleId": 166,
            "titleName": "Rear Wheel Material",
            "value": "Aluminum",
            "upgrade": false,
            "sequence": 131
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 10,
            "headerName": "Wheels",
            "titleId": 167,
            "titleName": "Spare Wheel Material",
            "value": "Steel",
            "upgrade": false,
            "sequence": 132
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 6,
            "headerName": "Steering",
            "titleId": 176,
            "titleName": "Steering Type",
            "value": "Rack-Pinion",
            "upgrade": false,
            "sequence": 133
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 6,
            "headerName": "Steering",
            "titleId": 178,
            "titleName": "Steering Ratio (:1), Overall",
            "value": "N/A",
            "upgrade": false,
            "sequence": 134
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 6,
            "headerName": "Steering",
            "titleId": 181,
            "titleName": "Lock to Lock Turns (Steering)",
            "value": "N/A",
            "upgrade": false,
            "sequence": 137
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 6,
            "headerName": "Steering",
            "titleId": 184,
            "titleName": "Turning Diameter - Curb to Curb",
            "value": "38.8",
            "measurementUnit": "ft",
            "upgrade": false,
            "sequence": 138
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 6,
            "headerName": "Steering",
            "titleId": 185,
            "titleName": "Turning Diameter - Wall to Wall",
            "value": "N/A",
            "measurementUnit": "ft",
            "upgrade": false,
            "sequence": 139
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 4,
            "headerName": "Brakes",
            "titleId": 186,
            "titleName": "Brake Type",
            "value": "4-Wheel Disc",
            "upgrade": false,
            "sequence": 140
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 4,
            "headerName": "Brakes",
            "titleId": 187,
            "titleName": "Brake ABS System",
            "value": "4-Wheel",
            "upgrade": false,
            "sequence": 141
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 4,
            "headerName": "Brakes",
            "titleId": 188,
            "titleName": "Brake ABS System (Second Line)",
            "value": "N/A",
            "upgrade": false,
            "sequence": 142
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 4,
            "headerName": "Brakes",
            "titleId": 190,
            "titleName": "Disc - Front (Yes or   )",
            "value": "Yes",
            "upgrade": false,
            "sequence": 144
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 4,
            "headerName": "Brakes",
            "titleId": 191,
            "titleName": "Disc - Rear (Yes or   )",
            "value": "Yes",
            "upgrade": false,
            "sequence": 145
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 4,
            "headerName": "Brakes",
            "titleId": 192,
            "titleName": "Front Brake Rotor Diam x Thickness",
            "value": "12.8",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 146
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 4,
            "headerName": "Brakes",
            "titleId": 193,
            "titleName": "Rear Brake Rotor Diam x Thickness",
            "value": "12",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 147
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 4,
            "headerName": "Brakes",
            "titleId": 196,
            "titleName": "Drum - Rear (Yes or   )",
            "value": "N/A",
            "upgrade": false,
            "sequence": 150
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 4,
            "headerName": "Brakes",
            "titleId": 197,
            "titleName": "Rear Drum Diam x Width",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 151
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 5,
            "headerName": "Fuel Tank",
            "titleId": 206,
            "titleName": "Fuel Tank Capacity, Approx",
            "value": "15.7",
            "measurementUnit": "gal",
            "upgrade": false,
            "sequence": 155
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 5,
            "headerName": "Fuel Tank",
            "titleId": 207,
            "titleName": "Aux Fuel Tank Capacity, Approx",
            "value": "N/A",
            "measurementUnit": "gal",
            "upgrade": false,
            "sequence": 156
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 1,
            "headerName": "Interior Dimensions",
            "titleId": 256,
            "titleName": "Front Head Room",
            "value": "39.9",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 161
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 1,
            "headerName": "Interior Dimensions",
            "titleId": 257,
            "titleName": "Front Leg Room",
            "value": "43.1",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 162
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 1,
            "headerName": "Interior Dimensions",
            "titleId": 258,
            "titleName": "Front Shoulder Room",
            "value": "56",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 163
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 1,
            "headerName": "Interior Dimensions",
            "titleId": 259,
            "titleName": "Front Hip Room",
            "value": "55.9",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 164
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 1,
            "headerName": "Interior Dimensions",
            "titleId": 261,
            "titleName": "Second Head Room",
            "value": "39",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 165
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 1,
            "headerName": "Interior Dimensions",
            "titleId": 262,
            "titleName": "Second Leg Room",
            "value": "37.3",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 166
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 1,
            "headerName": "Interior Dimensions",
            "titleId": 263,
            "titleName": "Second Shoulder Room",
            "value": "55.3",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 167
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 1,
            "headerName": "Interior Dimensions",
            "titleId": 264,
            "titleName": "Second Hip Room",
            "value": "55.2",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 168
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 2,
            "headerName": "Exterior Dimensions",
            "titleId": 301,
            "titleName": "Wheelbase",
            "value": "105.9",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 181
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 2,
            "headerName": "Exterior Dimensions",
            "titleId": 304,
            "titleName": "Length, Overall",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 184
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 2,
            "headerName": "Exterior Dimensions",
            "titleId": 305,
            "titleName": "Width, Max w/o mirrors",
            "value": "75",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 185
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 2,
            "headerName": "Exterior Dimensions",
            "titleId": 306,
            "titleName": "Height, Overall",
            "value": "66.3",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 186
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 2,
            "headerName": "Exterior Dimensions",
            "titleId": 309,
            "titleName": "Track Width, Front",
            "value": "61.5",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 187
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 2,
            "headerName": "Exterior Dimensions",
            "titleId": 310,
            "titleName": "Track Width, Rear",
            "value": "61.6",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 188
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 14,
            "headerName": "Mileage",
            "titleId": 801,
            "titleName": "EPA MPG Equivalent - Hwy",
            "value": "N/A",
            "upgrade": false,
            "sequence": 200
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 2,
            "headerName": "Exterior Dimensions",
            "titleId": 326,
            "titleName": "Min Ground Clearance",
            "value": "7.9",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 202
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 2,
            "headerName": "Exterior Dimensions",
            "titleId": 334,
            "titleName": "Rear Door Opening Height",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 205
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 2,
            "headerName": "Exterior Dimensions",
            "titleId": 335,
            "titleName": "Rear Door Opening Width",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 206
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 3,
            "headerName": "Cargo Area Dimensions",
            "titleId": 353,
            "titleName": "Cargo Area Length @ Floor to Seat 1",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 214
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 3,
            "headerName": "Cargo Area Dimensions",
            "titleId": 354,
            "titleName": "Cargo Area Length @ Floor to Seat 2",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 215
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 3,
            "headerName": "Cargo Area Dimensions",
            "titleId": 355,
            "titleName": "Cargo Area Length @ Floor to Seat 3",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 216
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 3,
            "headerName": "Cargo Area Dimensions",
            "titleId": 362,
            "titleName": "Cargo Area Width @ Beltline",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 219
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 3,
            "headerName": "Cargo Area Dimensions",
            "titleId": 364,
            "titleName": "Cargo Box Width @ Wheelhousings",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 221
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 3,
            "headerName": "Cargo Area Dimensions",
            "titleId": 366,
            "titleName": "Cargo Box (Area) Height",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 222
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 2,
            "headerName": "Exterior Dimensions",
            "titleId": 369,
            "titleName": "Liftover Height",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 223
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 3,
            "headerName": "Cargo Area Dimensions",
            "titleId": 372,
            "titleName": "Cargo Volume to Seat 1",
            "value": "68",
            "measurementUnit": "ft³",
            "upgrade": false,
            "sequence": 226
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 3,
            "headerName": "Cargo Area Dimensions",
            "titleId": 373,
            "titleName": "Cargo Volume to Seat 2",
            "value": "34",
            "measurementUnit": "ft³",
            "upgrade": false,
            "sequence": 227
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 3,
            "headerName": "Cargo Area Dimensions",
            "titleId": 374,
            "titleName": "Cargo Volume to Seat 3",
            "value": "34",
            "measurementUnit": "ft³",
            "upgrade": false,
            "sequence": 228
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 14,
            "headerName": "Mileage",
            "titleId": 802,
            "titleName": "EPA MPG Equivalent - Combined",
            "value": "N/A",
            "upgrade": false,
            "sequence": 300
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 9,
            "headerName": "Weight Information",
            "titleId": 603,
            "titleName": "Curb Weight",
            "value": "N/A",
            "measurementUnit": "lbs",
            "upgrade": true,
            "sequence": 437
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 9,
            "headerName": "Weight Information",
            "titleId": 605,
            "titleName": "Total Option Weight",
            "value": "0.00",
            "measurementUnit": "lbs",
            "upgrade": true,
            "sequence": 439
          }
        ],
        "editorialContentSources": [
          {
            "sourceName": "Chrome Reviews",
            "editorialContents": [
              {
                "description": "PROS",
                "value": "Sporty handling; sleek exterior design; excellent \"SYNC 3\" infotainment system; excellent fuel economy; impressive maneuverability; spacious interior; great driver-assist features",
                "mimeType": "text/plain"
              },
              {
                "description": "MODEL_HIGHLIGHTS",
                "value": "The 2019 Ford Escape is offered in 4 trim levels; S, SE, SEL and Titanium. Three different engines are offered, plus the option of front-wheel drive or all-wheel drive. The base powertrain is a 2.5L 4-cylinder engine, which makes 168 horsepower. Next in line is a 181-horsepower, 1.5L turbocharged EcoBoost 4-cylinder engine, which provides a combined 30-mpg on the front-wheel drive models. The third and most powerful engine is a 2.0L turbocharged EcoBoost 4-cylinder engine that makes an impressive 245 horsepower and 275 pound-feet of torque. Even with the added horsepower, this engine has great fuel efficiency with a combine 25-mpg. All engines are paired to a SelectShift 6-speed automatic transmission.<p><p>Several technologies help the Escape not only tackle slick road conditions but also improve cornering. AdvanceTrac with Roll Stability Control uses gyroscopic sensors to control body roll and monitors wheel-slip and steering. Curve Control and Torque Vectoring Control help improve stability, while the \"Intelligent\" 4-wheel drive system uses sensor inputs to actively maintain stability, utilizing an electromagnetic clutch system to send power to the wheels where traction is needed most. The Escape can handle gravel roads and modest forest trails just fine, and when properly equipped, it can tow up to 3,500 pounds. On all models, 4-wheel disc brakes provide strong stopping power, while an electric rack-and-pinion steering system is precise and well-weighted. <p><p>The Escape's rakish design doesn't get in the way of interior space either. The model has supportive bucket seats in front with a good view out, as well as space for three passengers in back. There's a generous 34.3 cubic feet of cargo capacity behind the back seat--thanks to a low, 2-position cargo floor -- and that can be expanded to 68.1 cubic feet by flipping forward the second row seatbacks. <p><p>Escape S trim come with a generous list of features for a base model, including 17-inch steel wheels, SYNC voice recognition infotainment system, smart device integration, remote keyless entry, steering-wheel audio controls, cruise control, power windows and mirrors, a 6-speaker audio system and a rearview camera system. <p><p>The SE trim adds 17-inch alloy wheels, upgraded exterior trim, fog lamps, 10-way power drivers seat, remote engine start, auto start/stop technology, blind spot monitoring, dual chrome exhaust tips, a keyless entry keypad and SiriusXM Satellite Radio compatibility. To keep the interior comfortable, a multi-zone climate control system is standard on the SE trim.<p><p>In addition to the SE features, the SEL trim adds leather-trimmed front seats, leather wrapped steering wheel and shift knob, heated mirrors, 10-speaker Sony audio system, LED lighting and power liftgate. The infotainment system is the SEL is also upgraded to Ford's SYNC 3 system and 8-inch display, which includes SYNC Connect, Apple CarPlay and Android Auto.<p><p>Finally, the top-of-the-line Titanium adds 19-inch alloy wheels, remote start, heated front seats, heated steering wheel, silver roof rails, a 12-speaker Sony premium audio system, navigation system, HID headlights, hands-free power liftgate and automatic parking. <p><p>The 2019 Escape incorporates many standard and available safety features, including a host of air bags, daytime running lights, traction control, stability control, brake assist, blind spot monitoring, lane departure warning and lane keeping assist.",
                "mimeType": "text/plain"
              },
              {
                "description": "MODEL_NEWS",
                "value": "The 2019 Ford Escape remains essentially unchanged from the prior year model.",
                "mimeType": "text/plain"
              },
              {
                "description": "VALUE_WRITEUP",
                "value": "The 2019 Ford Escape is a sleek, rakish, modern design, yet it is surprisingly roomy inside. The Escape's turbocharged powertrains standout in its class, offering more power than competitors such as the Nissan Rogue or Kia Sportage. Ford's technology in the Escape is impressive with the SYNC 3 infotainment system, driver assist features and AdvanceTrac stability control. With a starting price around $24,000, the Escape is very attractive to those who are looking for a practical and sporty crossover SUV.",
                "mimeType": "text/plain"
              }
            ]
          }
        ]
      }
      

}

export function styleFactoryBMW() {
    return {
        "style": {
          "model": {
            "modelYear": 2019,
            "divisionId": 5,
            "divisionName": "BMW",
            "subdivisionId": 9122,
            "subdivisionName": "BMW",
            "modelId": 31703,
            "modelName": "5 Series",
            "dataReleaseDate": "2019-06-20T07:00:00.000Z",
            "initialPriceDate": "2018-06-29T07:00:00.000Z",
            "dataEffectiveDate": "2018-06-06T07:00:00.000Z",
            "dataComment": ""
          },
          "styleId": 402236,
          "styleName": "530i xDrive Sedan",
          "styleNameWithoutTrim": "Sedan",
          "trimName": "530i xDrive",
          "manufacturerModelCode": "195B",
          "styleGroupStyleIds": [
            402235,
            402240,
            402237,
            402236,
            402239,
            402238,
            402448,
            402241
          ],
          "styleGroupBase": false,
          "baseMsrp": "55700.0",
          "baseInvoice": "52300.0",
          "destination": "995.0",
          "trueBasePrice": false,
          "priceState": "Actual",
          "bodyTypes": [
            {
              "bodyTypeId": 2,
              "bodyTypeName": "4dr Car",
              "primary": true
            }
          ],
          "passengerDoors": 4,
          "marketClassId": 44,
          "marketClassName": "4-door Mid-Size Passenger Car",
          "stockPhotoUrl": "http://media.carbook.com/autoBuilderData/stockPhotos/28749.jpg",
          "consumerFriendlyModelName": "530i xDrive",
          "consumerFriendlyStyleName": "Sedan",
          "consumerFriendlyDrivetrain": "All Wheel Drive",
          "consumerFriendlyBodyType": "4dr Car",
          "configurationState": {
            "dataVersion": "2019-06-20T07:00:00.000Z",
            "styleId": 402236,
            "fullyConfigured": true,
            "orderAvailability": "Retail",
            "specialEquipmentEnabled": true,
            "optionOrderLogicDisabled": true,
            "initialPricingEnabled": false,
            "chromeOptionCodeToggleStream": [
              "24X",
              "300-P",
              "K8FY",
              "-FEE"
            ],
            "selectedChromeOptionCodes": [
              "-FEE",
              "K8FY",
              "300-P",
              "24X"
            ],
            "serializedValue": "H4sIAAAAAAAAAGNgYJBjYKi+zsCmbMPAlJrHwBQazAASQ+EzZhevj2xgZGQESjGwMDAbmUQwsBobGOgGMLB4W7hFMrDourm6/gcCBghgZWBWVlYGMsA6INJwHlg7jAM1Bq4SbByMBzLIgMGFwY3Bk8GLAUkYG2CESgIANKbpN9MAAAA="
          }
        },
        "configuredOptionsMsrp": "0.0",
        "configuredOptionsInvoice": "180.0",
        "configuredCustomEquipmentMsrp": "0.0",
        "configuredCustomEquipmentInvoice": "0.0",
        "advertisingAndAdjustmentsMsrp": "0.0",
        "advertisingAndAdjustmentsInvoice": "0.0",
        "configuredTotalMsrp": "56695.0",
        "configuredTotalInvoice": "53475.0",
        "configuredPriceState": "Actual",
        "standardEquipment": [
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Engine: 2.0L 4 Cylinder Turbo",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1048
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1054
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1059
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Engine Auto Stop-Start Feature",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Transmission w/Driver Selectable Mode and STEPTRONIC Sequential Shift Control w/Steering Wheel Controls",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1195
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Transmission: Sport Automatic",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1130
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1195
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1220
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Full-Time All-Wheel Drive",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1041
              }
            ],
            "upgrade": true
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "2.93 Axle Ratio",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Engine Oil Cooler",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "105-Amp/Hr Maintenance-Free Battery",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Regenerative Alternator",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Gas-Pressurized Shock Absorbers",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Front And Rear Anti-Roll Bars",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Electric Power-Assist Speed-Sensing Steering",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1084
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "18 Gal. Fuel Tank",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Quasi-Dual Stainless Steel Exhaust w/Chrome Tailpipe Finisher",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Double Wishbone Front Suspension w/Coil Springs",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "Multi-Link Rear Suspension w/Coil Springs",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "description": "4-Wheel Disc Brakes w/4-Wheel ABS, Front And Rear Vented Discs, Brake Assist, Hill Hold Control and Electric Parking Brake",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1018
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1020
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1228
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 1176,
            "headerName": "EXTERIOR",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Wheels: 18\" x 8\" Double-Spoke (Style 634) (STD)",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1123
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Wheels w/Machined w/Painted Accents Accents",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Tires: 245/45R18 AS Run-Flat",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1092
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1097
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Clearcoat Paint",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Express Open/Close Sliding And Tilting Glass 1st Row Sunroof w/Power Sunshade",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1069
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1132
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Body-Colored Front Bumper",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Body-Colored Rear Bumper",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Metal-Look Side Windows Trim",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Body-Colored Door Handles",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Body-Colored Power Heated Side Mirrors w/Driver Auto Dimming, Power Folding and Turn Signal Indicator",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1064
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1065
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1174
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1273
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Fixed Rear Window w/Defroster",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1034
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Light Tinted Glass",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Speed Sensitive Rain Detecting Variable Intermittent Wipers w/Heated Jets",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1127
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1159
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1160
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Galvanized Steel/Aluminum Panels",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Black Grille w/Chrome Surround",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Trunk Rear Cargo Access",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Fully Automatic Projector Beam Led Low/High Beam Auto-Leveling Directionally Adaptive Daytime Running Lights Preference Setting Headlamps w/Delay-Off",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1061
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1169
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1313
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "Perimeter/Approach Lights",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "description": "LED Brakelights",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 1,
            "consumerFriendlyHeaderName": "Entertainment",
            "description": "Radio w/Seek-Scan, MP3 Player, Clock, Speed Compensated Volume Control, Aux Audio Input Jack, Steering Wheel Controls, Voice Activation, Radio Data System, External Memory Control and 20 Gb Internal Memory",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1300
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1150
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1161
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1230
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 1,
            "consumerFriendlyHeaderName": "Entertainment",
            "description": "Radio: AM/FM Audio System",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1014
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1299
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 1,
            "consumerFriendlyHeaderName": "Entertainment",
            "description": "Audio Theft Deterrent",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 1,
            "consumerFriendlyHeaderName": "Entertainment",
            "description": "Streaming Audio",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 1,
            "consumerFriendlyHeaderName": "Entertainment",
            "description": "Window Grid Diversity Antenna",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 1,
            "consumerFriendlyHeaderName": "Entertainment",
            "description": "In-Dash CD Player",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1017
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 1,
            "consumerFriendlyHeaderName": "Entertainment",
            "description": "HiFi Sound System",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 1,
            "consumerFriendlyHeaderName": "Entertainment",
            "description": "Satellite Radio Preparation",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1299
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 1,
            "consumerFriendlyHeaderName": "Entertainment",
            "description": "2 LCD Monitors In The Front",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 1,
            "consumerFriendlyHeaderName": "Entertainment",
            "description": "Real-Time Traffic Display",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Power Front Seats",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1074
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1075
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1191
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "4-Way Power Driver Seat -inc: Power Cushion Extension and Seatback Side Bolster Support",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1074
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "4-Way Power Passenger Seat -inc: Power Seatback Side Bolster Support and Cushion Extension",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1075
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "40-20-40 Folding Bench Front Facing Fold Forward Seatback Rear Seat",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1076
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1304
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Power Tilt/Telescoping Steering Column",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1087
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Gauges -inc: Speedometer, Odometer, Engine Coolant Temp, Tachometer, Trip Odometer and Trip Computer",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1203
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Power Rear Windows",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1126
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Sport Seats",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1082
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Sport Leather Steering Wheel w/Auto Tilt-Away",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1192
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Front Cupholder",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Rear Cupholder",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Proximity Key For Push Button Start Only",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1229
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Interior Lock Disable",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Valet Function",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Power Fuel Flap Locking Type",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Remote Keyless Entry w/Integrated Key Transmitter, 4 Door Curb/Courtesy, Illuminated Entry and Panic Button",
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
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Remote Releases -Inc: Power Cargo Access",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Garage Door Transmitter",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1204
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Cruise Control w/Steering Wheel Controls",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1033
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Dual Zone Front Automatic Air Conditioning",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1009
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1010
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1011
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "HVAC -inc: Underseat Ducts, Residual Heat Recirculation and Console Ducts",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Illuminated Locking Glove Box",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Driver Foot Rest",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Interior Trim -inc: Genuine Wood/Metal-Look Instrument Panel Insert, Genuine Wood/Metal-Look Door Panel Insert, Genuine Wood/Metal-Look Console Insert and Metal-Look Interior Accents",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1170
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Full Cloth Headliner",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Leatherette Door Trim Insert",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Leather/Metal-Look Gear Shift Knob",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "SensaTec Leatherette Upholstery",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1309
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Day-Night Auto-Dimming Rearview Mirror",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1173
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Driver And Passenger Visor Vanity Mirrors w/Driver And Passenger Illumination",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1175
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1176
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1177
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1178
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Full Floor Console w/Covered Storage and 5 12V DC Power Outlets",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Front And Rear Map Lights",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Fade-To-Off Interior Lighting",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Full Carpet Floor Covering -inc: Carpet Front And Rear Floor Mats",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1055
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Carpet Floor Trim and Carpet Trunk Lid/Rear Cargo Door Trim",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Cargo Area Concealed Storage",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Cargo Space Lights",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Memory Settings -inc: Door Mirrors and Steering Wheel",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1179
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "FOB Controls -inc: Trunk/Hatch/Tailgate, Windows and Sunroof/Convertible Roof",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1229
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Tracker System",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "WiFi Hotspot",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1324
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Navigation System",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1066
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Apple CarPlay Compatibility w/1 Year Trial",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1348
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Enhanced USB & Bluetooth -inc: smartphone integration",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1150
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1211
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Instrument Panel Covered Bin, Driver / Passenger And Rear Door Bins",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Power 1st Row Windows w/Front And Rear 1-Touch Up/Down",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1126
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Delayed Accessory Power",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Power Door Locks w/Autolock Feature",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1063
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Systems Monitor",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Trip Computer",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1203
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Outside Temp Gauge",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Digital/Analog Display",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Manual Adjustable Front Head Restraints and Manual Adjustable Rear Head Restraints",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Front Center Armrest and Rear Center Armrest w/Storage",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "2 Seatback Storage Pockets",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Lumbar Support",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1189
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1190
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Perimeter Alarm",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1013
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Engine Immobilizer",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1166
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "5 12V DC Power Outlets",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "description": "Air Filtration",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 9,
            "consumerFriendlyHeaderName": "Safety-Mechanical",
            "description": "Electronic Stability Control (ESC)",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1100
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1227
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 9,
            "consumerFriendlyHeaderName": "Safety-Mechanical",
            "description": "ABS And Driveline Traction Control",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1100
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 7,
            "consumerFriendlyHeaderName": "Safety-Exterior",
            "description": "Side Impact Beams",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Dual Stage Driver And Passenger Seat-Mounted Side Airbags",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1005
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "BMW Assist eCall Emergency Sos",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1212
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1381
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Park Distance Control Front And Rear Parking Sensors",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1180
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Active Blind Spot Detection Blind Spot Sensor",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1312
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Frontal Collision Warning w/City Collision Mitigation",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Lane Departure Warning",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1314
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Low Tire Pressure Warning",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1202
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Dual Stage Driver And Passenger Front Airbags",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1001
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1002
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Curtain 1st And 2nd Row Airbags",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1007
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1008
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Airbag Occupancy Sensor",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1310
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Rear Child Safety Locks",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1039
              }
            ],
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Outboard Front Lap And Shoulder Safety Belts -inc: Rear Center 3 Point and Pretensioners",
            "upgrade": false
          },
          {
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 8,
            "consumerFriendlyHeaderName": "Safety-Interior",
            "description": "Back-Up Camera",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1224
              }
            ],
            "upgrade": false
          }
        ],
        "options": [
          {
            "chromeOptionCode": "24X",
            "oemOptionCode": "24X",
            "headerId": 1397,
            "headerName": "WHEELS",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 41,
            "descriptions": [
              {
                "description": "Wheels: 18\" x 8\" Double-Spoke (Style 634)",
                "type": "PrimaryName"
              },
              {
                "description": "(STD)",
                "type": "Extended"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1123
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
            "selectionState": "Selected",
            "uniqueTypeFilter": "D"
          },
          {
            "chromeOptionCode": "21P",
            "oemOptionCode": "21P",
            "headerId": 1397,
            "headerName": "WHEELS",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 41,
            "descriptions": [
              {
                "description": "Wheels: 19\" x 8\" Fr & 19\" x 9\" Rr M Double-Spoke",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: (Style 664M), Increased Top Speed Limiter, Tires: 245/40R19 Fr & 275/35R19 Rr Perf Run-Flat",
                "type": "Extended"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1123
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1124
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1208
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "D"
          },
          {
            "chromeOptionCode": "22F",
            "oemOptionCode": "22F",
            "headerId": 1397,
            "headerName": "WHEELS",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 41,
            "descriptions": [
              {
                "description": "Wheels: 19\" x 8\" M Double-Spoke (Style 664M)",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: Tires: 245/40R19 AS Run-Flat",
                "type": "Extended"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1123
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1124
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1208
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1092
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1097
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": true,
            "optionPackageContentOnly": true,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "D"
          },
          {
            "chromeOptionCode": "24W",
            "oemOptionCode": "24W",
            "headerId": 1397,
            "headerName": "WHEELS",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 41,
            "descriptions": [
              {
                "description": "Wheels: 18\" x 8\" Double-Spoke",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: (Style 634), Tires: 245/45R18 AS, Space-Saver Spare",
                "type": "Extended"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1123
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1124
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1208
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1092
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1097
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1098
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1099
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "D"
          },
          {
            "chromeOptionCode": "2QY",
            "oemOptionCode": "2QY",
            "headerId": 1397,
            "headerName": "WHEELS",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 41,
            "descriptions": [
              {
                "description": "Wheels: 19\" x 8\" Fr & 19\" x 9\" Rr V-Spoke",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: (Style 635), Increased Top Speed Limiter, Tires: 245/40R19 Fr & 275/35R19 Rr Run-Flat Mixed performance",
                "type": "Extended"
              }
            ],
            "msrp": "600.0",
            "invoice": "550.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1123
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1124
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1208
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1092
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1097
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "D"
          },
          {
            "chromeOptionCode": "2QZ",
            "oemOptionCode": "2QZ",
            "headerId": 1397,
            "headerName": "WHEELS",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 41,
            "descriptions": [
              {
                "description": "Wheels: 19\" x 8\" V-Spoke (Style 635)",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: Tires: 245/40R19 AS Run-Flat",
                "type": "Extended"
              }
            ],
            "msrp": "600.0",
            "invoice": "550.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1123
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1124
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1208
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1092
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1097
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "D"
          },
          {
            "chromeOptionCode": "300-P",
            "oemOptionCode": "300",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Alpine White",
                "type": "PrimaryName"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "J",
            "rgbValue": "E9EEE8",
            "genericColors": [
              {
                "primary": true,
                "name": "White"
              }
            ]
          },
          {
            "chromeOptionCode": "668",
            "oemOptionCode": "668",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Jet Black",
                "type": "PrimaryName"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "J",
            "rgbValue": "000000",
            "genericColors": [
              {
                "primary": true,
                "name": "Black"
              }
            ]
          },
          {
            "chromeOptionCode": "416-P",
            "oemOptionCode": "416",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Carbon Black Metallic",
                "type": "PrimaryName"
              }
            ],
            "msrp": "550.0",
            "invoice": "505.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "J",
            "rgbValue": "13181C",
            "genericColors": [
              {
                "primary": true,
                "name": "Black"
              }
            ]
          },
          {
            "chromeOptionCode": "475",
            "oemOptionCode": "475",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Black Sapphire Metallic",
                "type": "PrimaryName"
              }
            ],
            "msrp": "550.0",
            "invoice": "505.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "J",
            "rgbValue": "121212",
            "genericColors": [
              {
                "primary": true,
                "name": "Black"
              }
            ]
          },
          {
            "chromeOptionCode": "A90",
            "oemOptionCode": "A90",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Dark Graphite Metallic",
                "type": "PrimaryName"
              }
            ],
            "msrp": "550.0",
            "invoice": "505.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "J",
            "rgbValue": "2D2D2D",
            "genericColors": [
              {
                "primary": true,
                "name": "Gray"
              }
            ]
          },
          {
            "chromeOptionCode": "C10",
            "oemOptionCode": "C10",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Mediterranean Blue Metallic",
                "type": "PrimaryName"
              }
            ],
            "msrp": "550.0",
            "invoice": "505.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "J",
            "rgbValue": "091C36",
            "genericColors": [
              {
                "primary": true,
                "name": "Blue"
              }
            ]
          },
          {
            "chromeOptionCode": "C2Y",
            "oemOptionCode": "C2Y",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Bluestone Metallic",
                "type": "PrimaryName"
              }
            ],
            "msrp": "550.0",
            "invoice": "505.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "J",
            "rgbValue": "091C36",
            "genericColors": [
              {
                "primary": true,
                "name": "Blue"
              }
            ]
          },
          {
            "chromeOptionCode": "A72",
            "oemOptionCode": "A72",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Cashmere Silver Metallic",
                "type": "PrimaryName"
              }
            ],
            "msrp": "550.0",
            "invoice": "505.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "J",
            "rgbValue": "9B928D",
            "genericColors": [
              {
                "primary": true,
                "name": "Silver"
              }
            ]
          },
          {
            "chromeOptionCode": "A83",
            "oemOptionCode": "A83",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Glacier Silver Metallic",
                "type": "PrimaryName"
              }
            ],
            "msrp": "550.0",
            "invoice": "505.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "J",
            "rgbValue": "ADB0B1",
            "genericColors": [
              {
                "primary": true,
                "name": "Silver"
              }
            ]
          },
          {
            "chromeOptionCode": "A89",
            "oemOptionCode": "A89",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Imperial Blue Metallic",
                "type": "PrimaryName"
              }
            ],
            "msrp": "550.0",
            "invoice": "505.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "J",
            "rgbValue": "12141B",
            "genericColors": [
              {
                "primary": true,
                "name": "Blue"
              }
            ]
          },
          {
            "chromeOptionCode": "A96",
            "oemOptionCode": "A96",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Mineral White Metallic",
                "type": "PrimaryName"
              }
            ],
            "msrp": "550.0",
            "invoice": "505.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "J",
            "rgbValue": "CACACA",
            "genericColors": [
              {
                "primary": true,
                "name": "White"
              }
            ]
          },
          {
            "chromeOptionCode": "B65",
            "oemOptionCode": "B65",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Jatoba Brown Metallic",
                "type": "PrimaryName"
              }
            ],
            "msrp": "550.0",
            "invoice": "505.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "J",
            "rgbValue": "2A2421",
            "genericColors": [
              {
                "primary": true,
                "name": "Brown"
              }
            ]
          },
          {
            "chromeOptionCode": "C2P",
            "oemOptionCode": "C2P",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Atlas Cedar Metallic",
                "type": "PrimaryName"
              }
            ],
            "msrp": "550.0",
            "invoice": "505.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "J",
            "rgbValue": "5A5B50",
            "genericColors": [
              {
                "primary": true,
                "name": "Green"
              }
            ]
          },
          {
            "chromeOptionCode": "S34",
            "oemOptionCode": "S34",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Azurite Black Metallic",
                "type": "PrimaryName"
              },
              {
                "description": "Priority 1. Build Out: 05/31/2019",
                "type": "UnenforcedLogic"
              }
            ],
            "msrp": "1950.0",
            "invoice": "1795.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "J",
            "rgbValue": "0E1119",
            "genericColors": [
              {
                "primary": true,
                "name": "Black"
              }
            ]
          },
          {
            "chromeOptionCode": "X08",
            "oemOptionCode": "X08",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Champagne Quartz Metallic",
                "type": "PrimaryName"
              },
              {
                "description": "Priority 1. Build Out: 05/31/2019",
                "type": "UnenforcedLogic"
              }
            ],
            "msrp": "1950.0",
            "invoice": "1795.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "J",
            "rgbValue": "605548",
            "genericColors": [
              {
                "primary": true,
                "name": "Tan"
              }
            ]
          },
          {
            "chromeOptionCode": "X14",
            "oemOptionCode": "X14",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Almandine Brown Metallic",
                "type": "PrimaryName"
              },
              {
                "description": "Priority 1. Build Out: 05/31/2019",
                "type": "UnenforcedLogic"
              }
            ],
            "msrp": "1950.0",
            "invoice": "1795.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "J",
            "rgbValue": "231914",
            "genericColors": [
              {
                "primary": true,
                "name": "Brown"
              }
            ]
          },
          {
            "chromeOptionCode": "X17",
            "oemOptionCode": "X17",
            "headerId": 10650,
            "headerName": "PRIMARY PAINT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 68,
            "descriptions": [
              {
                "description": "Rhodonite Silver Metallic",
                "type": "PrimaryName"
              },
              {
                "description": "Priority 1",
                "type": "UnenforcedLogic"
              }
            ],
            "msrp": "1950.0",
            "invoice": "1795.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "J",
            "rgbValue": "C1C2C4",
            "genericColors": [
              {
                "primary": true,
                "name": "Silver"
              }
            ]
          },
          {
            "chromeOptionCode": "K8FY",
            "oemOptionCode": "K8FY",
            "headerId": 1347,
            "headerName": "SEAT TRIM",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 72,
            "descriptions": [
              {
                "description": "Canberra Beige/Black, SensaTec Leatherette Upholstery",
                "type": "PrimaryName"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1309
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
            "selectionState": "Selected",
            "uniqueTypeFilter": "I"
          },
          {
            "chromeOptionCode": "K8SW",
            "oemOptionCode": "K8SW",
            "headerId": 1347,
            "headerName": "SEAT TRIM",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 72,
            "descriptions": [
              {
                "description": "Black, SensaTec Leatherette Upholstery",
                "type": "PrimaryName"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Deleted",
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
                "categoryFlag": "Clean",
                "categoryId": 1309
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
            "uniqueTypeFilter": "I"
          },
          {
            "chromeOptionCode": "LCEA",
            "oemOptionCode": "LCEA",
            "headerId": 1347,
            "headerName": "SEAT TRIM",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 72,
            "descriptions": [
              {
                "description": "Canberra Beige/Black, Dakota Leather Upholstery",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: contrast stitching and piping",
                "type": "Extended"
              }
            ],
            "msrp": "1450.0",
            "invoice": "1335.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": false,
                "reason": "w/ZMP or ZPL",
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              },
              {
                "active": true,
                "reason": "Otherwise",
                "msrp": "1450.0",
                "invoice": "1335.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Deleted",
                "categoryId": 1077
              },
              {
                "categoryFlag": "Clean",
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
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "I"
          },
          {
            "chromeOptionCode": "LCNL",
            "oemOptionCode": "LCNL",
            "headerId": 1347,
            "headerName": "SEAT TRIM",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 72,
            "descriptions": [
              {
                "description": "Black w/Blue, Dakota Leather Upholstery",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: contrast stitching and piping",
                "type": "Extended"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Deleted",
                "categoryId": 1077
              },
              {
                "categoryFlag": "Clean",
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
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "I"
          },
          {
            "chromeOptionCode": "LCFI",
            "oemOptionCode": "LCFI",
            "headerId": 1347,
            "headerName": "SEAT TRIM",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 72,
            "descriptions": [
              {
                "description": "Ivory White, Dakota Leather Upholstery",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: contrast stitching and piping",
                "type": "Extended"
              }
            ],
            "msrp": "1450.0",
            "invoice": "1335.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": false,
                "reason": "w/ZMP or ZPL",
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              },
              {
                "active": true,
                "reason": "Otherwise",
                "msrp": "1450.0",
                "invoice": "1335.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Deleted",
                "categoryId": 1077
              },
              {
                "categoryFlag": "Clean",
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
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "I"
          },
          {
            "chromeOptionCode": "LCFK",
            "oemOptionCode": "LCFK",
            "headerId": 1347,
            "headerName": "SEAT TRIM",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 72,
            "descriptions": [
              {
                "description": "Black, Dakota Leather Upholstery",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: contrast stitching and piping",
                "type": "Extended"
              }
            ],
            "msrp": "1450.0",
            "invoice": "1335.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": false,
                "reason": "w/ZMP or ZPL",
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              },
              {
                "active": true,
                "reason": "Otherwise",
                "msrp": "1450.0",
                "invoice": "1335.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Deleted",
                "categoryId": 1077
              },
              {
                "categoryFlag": "Clean",
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
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "I"
          },
          {
            "chromeOptionCode": "LCRO",
            "oemOptionCode": "LCRO",
            "headerId": 1347,
            "headerName": "SEAT TRIM",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 72,
            "descriptions": [
              {
                "description": "Cognac, Dakota Leather Upholstery",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: contrast stitching and piping",
                "type": "Extended"
              }
            ],
            "msrp": "1450.0",
            "invoice": "1335.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": false,
                "reason": "w/ZMP or ZPL",
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              },
              {
                "active": true,
                "reason": "Otherwise",
                "msrp": "1450.0",
                "invoice": "1335.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Deleted",
                "categoryId": 1077
              },
              {
                "categoryFlag": "Clean",
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
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "I"
          },
          {
            "chromeOptionCode": "LCTJ",
            "oemOptionCode": "LCTJ",
            "headerId": 1347,
            "headerName": "SEAT TRIM",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 72,
            "descriptions": [
              {
                "description": "Night Blue, Dakota Leather Upholstery",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: contrast stitching and piping",
                "type": "Extended"
              }
            ],
            "msrp": "1450.0",
            "invoice": "1335.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": false,
                "reason": "w/ZMP or ZPL",
                "msrp": "0.0",
                "invoice": "0.0",
                "priceState": "Actual"
              },
              {
                "active": true,
                "reason": "Otherwise",
                "msrp": "1450.0",
                "invoice": "1335.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Deleted",
                "categoryId": 1077
              },
              {
                "categoryFlag": "Clean",
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
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "I"
          },
          {
            "chromeOptionCode": "LZFI",
            "oemOptionCode": "LZFI",
            "headerId": 1347,
            "headerName": "SEAT TRIM",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 72,
            "descriptions": [
              {
                "description": "Ivory White, Nappa Leather Upholstery",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: contrast stitching and piping",
                "type": "Extended"
              }
            ],
            "msrp": "2450.0",
            "invoice": "2255.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": false,
                "reason": "w/ZMP or ZPL",
                "msrp": "1000.0",
                "invoice": "920.0",
                "priceState": "Actual"
              },
              {
                "active": true,
                "reason": "Otherwise",
                "msrp": "2450.0",
                "invoice": "2255.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Deleted",
                "categoryId": 1077
              },
              {
                "categoryFlag": "Clean",
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
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "I"
          },
          {
            "chromeOptionCode": "LZFK",
            "oemOptionCode": "LZFK",
            "headerId": 1347,
            "headerName": "SEAT TRIM",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 72,
            "descriptions": [
              {
                "description": "Black, Nappa Leather Upholstery",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: contrast stitching and piping",
                "type": "Extended"
              }
            ],
            "msrp": "2450.0",
            "invoice": "2255.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": false,
                "reason": "w/ZMP or ZPL",
                "msrp": "1000.0",
                "invoice": "920.0",
                "priceState": "Actual"
              },
              {
                "active": true,
                "reason": "Otherwise",
                "msrp": "2450.0",
                "invoice": "2255.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Deleted",
                "categoryId": 1077
              },
              {
                "categoryFlag": "Clean",
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
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "I"
          },
          {
            "chromeOptionCode": "LZNI",
            "oemOptionCode": "LZNI",
            "headerId": 1347,
            "headerName": "SEAT TRIM",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 72,
            "descriptions": [
              {
                "description": "Mocha, Nappa Leather Upholstery",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: contrast stitching and piping",
                "type": "Extended"
              }
            ],
            "msrp": "2450.0",
            "invoice": "2255.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": false,
                "reason": "w/ZMP or ZPL",
                "msrp": "1000.0",
                "invoice": "920.0",
                "priceState": "Actual"
              },
              {
                "active": true,
                "reason": "Otherwise",
                "msrp": "2450.0",
                "invoice": "2255.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Deleted",
                "categoryId": 1077
              },
              {
                "categoryFlag": "Clean",
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
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "I"
          },
          {
            "chromeOptionCode": "ZBCR",
            "oemOptionCode": "ZBCR",
            "headerId": 1347,
            "headerName": "SEAT TRIM",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 72,
            "descriptions": [
              {
                "description": "Caramel/Black, BMW Individual Full Merino Leather Upholstery",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: Leather Dashboard",
                "type": "Extended"
              },
              {
                "description": "Priority 1.",
                "type": "UnenforcedLogic"
              }
            ],
            "msrp": "5150.0",
            "invoice": "4740.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": false,
                "reason": "w/ZMP or ZPL",
                "msrp": "3700.0",
                "invoice": "3405.0",
                "priceState": "Actual"
              },
              {
                "active": true,
                "reason": "Otherwise",
                "msrp": "5150.0",
                "invoice": "4740.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Deleted",
                "categoryId": 1077
              },
              {
                "categoryFlag": "Clean",
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
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "I"
          },
          {
            "chromeOptionCode": "ZBFU",
            "oemOptionCode": "ZBFU",
            "headerId": 1347,
            "headerName": "SEAT TRIM",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 72,
            "descriptions": [
              {
                "description": "Smoke White/Black, BMW Individual Full Merino Leather Upholstery",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: Leather Dashboard",
                "type": "Extended"
              },
              {
                "description": "Priority 1.",
                "type": "UnenforcedLogic"
              }
            ],
            "msrp": "5150.0",
            "invoice": "4740.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": false,
                "reason": "w/ZMP or ZPL",
                "msrp": "3700.0",
                "invoice": "3405.0",
                "priceState": "Actual"
              },
              {
                "active": true,
                "reason": "Otherwise",
                "msrp": "5150.0",
                "invoice": "4740.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Deleted",
                "categoryId": 1077
              },
              {
                "categoryFlag": "Clean",
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
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "I"
          },
          {
            "chromeOptionCode": "ZBTQ",
            "oemOptionCode": "ZBTQ",
            "headerId": 1347,
            "headerName": "SEAT TRIM",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 72,
            "descriptions": [
              {
                "description": "Tartufo, BMW Individual Full Merino Leather Upholstery",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: Leather Dashboard",
                "type": "Extended"
              },
              {
                "description": "Priority 1.",
                "type": "UnenforcedLogic"
              }
            ],
            "msrp": "5150.0",
            "invoice": "4740.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": false,
                "reason": "w/ZMP or ZPL",
                "msrp": "3700.0",
                "invoice": "3405.0",
                "priceState": "Actual"
              },
              {
                "active": true,
                "reason": "Otherwise",
                "msrp": "5150.0",
                "invoice": "4740.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Deleted",
                "categoryId": 1077
              },
              {
                "categoryFlag": "Clean",
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
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "I"
          },
          {
            "chromeOptionCode": "-FEE",
            "oemOptionCode": "___",
            "headerId": 1333,
            "headerName": "REQUIRED OPTION",
            "consumerFriendlyHeaderId": 6,
            "consumerFriendlyHeaderName": "Processing-Other",
            "optionKindId": 65,
            "descriptions": [
              {
                "description": "Training Service Fee",
                "type": "PrimaryName"
              }
            ],
            "msrp": "0.0",
            "invoice": "180.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "F"
          },
          {
            "chromeOptionCode": "ZP2",
            "oemOptionCode": "ZP2",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 4,
            "consumerFriendlyHeaderName": "Package",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Premium Package 2",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: Gesture Control, Head-Up Display, Wireless Charging, Enhanced USB & Bluetooth (ZEB)",
                "type": "Extended"
              }
            ],
            "msrp": "1250.0",
            "invoice": "1150.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Package",
                "categoryId": 1150
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1211
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1298
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "ZDB",
            "oemOptionCode": "ZDB",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 4,
            "consumerFriendlyHeaderName": "Package",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Driving Assistance Plus Package",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: Active Driving Assistant Plus, active cruise control w/stop and go, active lane keeping assistant w/side collision avoidance, traffic jam assistant, evasion aid and cross-traffic alert front in addition to the contents of active driving assistant",
                "type": "Extended"
              }
            ],
            "msrp": "1700.0",
            "invoice": "1565.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Package",
                "categoryId": 1314
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1323
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1346
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "ZDH",
            "oemOptionCode": "ZDH",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 4,
            "consumerFriendlyHeaderName": "Package",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Dynamic Handling Package",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: Dynamic Damper Control, Integral Active Steering, M Sport Brakes",
                "type": "Extended"
              }
            ],
            "msrp": "1950.0",
            "invoice": "1795.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": false,
                "reason": "w/ZMP",
                "msrp": "1650.0",
                "invoice": "1520.0",
                "priceState": "Actual"
              },
              {
                "active": true,
                "reason": "Otherwise",
                "msrp": "1950.0",
                "invoice": "1795.0",
                "priceState": "Actual"
              }
            ],
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Package",
                "categoryId": 1270
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "ZLS",
            "oemOptionCode": "ZLS",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 4,
            "consumerFriendlyHeaderName": "Package",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Luxury Seating Package",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: Front Ventilated Seats, Multi-Contour Seats, Front Massaging Seats",
                "type": "Extended"
              }
            ],
            "msrp": "1600.0",
            "invoice": "1470.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Package",
                "categoryId": 1074
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1075
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1080
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1081
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1082
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1156
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1191
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1267
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1325
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "ZPK",
            "oemOptionCode": "ZPK",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 4,
            "consumerFriendlyHeaderName": "Package",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Parking Assistance Package",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: Active Park Distance Control, Surround View w/3D View, Rear View Camera, Parking Assistant Plus",
                "type": "Extended"
              }
            ],
            "msrp": "700.0",
            "invoice": "645.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Package",
                "categoryId": 1224
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1320
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "ZPL",
            "oemOptionCode": "ZPL",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 4,
            "consumerFriendlyHeaderName": "Package",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Luxury Package",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: Luxury Line",
                "type": "Extended"
              }
            ],
            "msrp": "1450.0",
            "invoice": "1335.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "ZPP",
            "oemOptionCode": "ZPP",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 4,
            "consumerFriendlyHeaderName": "Package",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Premium Package",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: Active Park Distance Control, Surround View w/3D View, Head-Up Display, Rear View Camera, Gesture Control, Parking Assistant Plus, Wireless Charging, Enhanced USB & Bluetooth (ZEB)",
                "type": "Extended"
              },
              {
                "description": "(DISC)",
                "type": "UnenforcedLogic"
              },
              {
                "description": "No longer available for factory ordering as of August 31, 2018.",
                "type": "UnenforcedLogic"
              }
            ],
            "msrp": "1950.0",
            "invoice": "1795.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Package",
                "categoryId": 1150
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1211
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1224
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1298
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1320
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": true,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "0"
          },
          {
            "chromeOptionCode": "ZLP",
            "oemOptionCode": "ZLP",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 4,
            "consumerFriendlyHeaderName": "Package",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Lighting Package",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: Icon Adaptive Full LED Headlights, Automatic High Beams",
                "type": "Extended"
              }
            ],
            "msrp": "1050.0",
            "invoice": "965.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "K"
          },
          {
            "chromeOptionCode": "ZPX",
            "oemOptionCode": "ZPX",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 4,
            "consumerFriendlyHeaderName": "Package",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Executive Package",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: Dynamic Digital Instrument Cluster, Power Rear Sunshade, rear side window shades, Icon Adaptive Full LED Headlights, Soft-Close Automatic Doors, Automatic High Beams",
                "type": "Extended"
              }
            ],
            "msrp": "1850.0",
            "invoice": "1700.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "K"
          },
          {
            "chromeOptionCode": "ZCV",
            "oemOptionCode": "ZCV",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 4,
            "consumerFriendlyHeaderName": "Package",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Convenience Package",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: Power Tailgate, Comfort Access Keyless Entry, SiriusXM Satellite Radio, 1 year All Access subscription, Heated Front Seats",
                "type": "Extended"
              }
            ],
            "msrp": "1400.0",
            "invoice": "1290.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Package",
                "categoryId": 1062
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1063
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1149
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1156
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1198
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1229
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1299
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1319
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1381
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "L"
          },
          {
            "chromeOptionCode": "ZMP",
            "oemOptionCode": "ZMP",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 4,
            "consumerFriendlyHeaderName": "Package",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "M Sport Package",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: Aluminum Rhombicle Interior Trim, LED Fog Lights, Wheels: 19\" x 8\" M Double-Spoke (Style 664M), Tires: 245/40R19 AS Run-Flat, Without Lines Designation Outside, Heated Front Seats, Shadowline Exterior Trim, Comfort Access Keyless Entry, SiriusXM Satellite Radio, 1 year All Access subscription, M Steering Wheel, M Sport Pkg, Power Tailgate, M Sport Suspension, Aerodynamic Kit",
                "type": "Extended"
              }
            ],
            "msrp": "5050.0",
            "invoice": "4645.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Package",
                "categoryId": 1062
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1063
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1092
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1097
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1123
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1124
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1149
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1151
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1156
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1198
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1208
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1229
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1299
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1319
              },
              {
                "categoryFlag": "Package",
                "categoryId": 1381
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": true,
            "optionPackageContentOnly": false,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "L"
          },
          {
            "chromeOptionCode": "223",
            "oemOptionCode": "223",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 3,
            "consumerFriendlyHeaderName": "Mechanical",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Dynamic Damper Control",
                "type": "PrimaryName"
              }
            ],
            "msrp": "1000.0",
            "invoice": "920.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "priceVariations": [
              {
                "active": false,
                "reason": "w/ZMP",
                "msrp": "700.0",
                "invoice": "645.0",
                "priceState": "Actual"
              },
              {
                "active": true,
                "reason": "Otherwise",
                "msrp": "1000.0",
                "invoice": "920.0",
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
            "chromeOptionCode": "-NONTR0",
            "oemOptionCode": "___",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 12,
            "descriptions": [
              {
                "description": "Tires: 245/40R19 Fr & 275/35R19 Rr Run-Flat",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: Mixed performance",
                "type": "Extended"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1092
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1097
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": true,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "C"
          },
          {
            "chromeOptionCode": "-NONTR1",
            "oemOptionCode": "___",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 12,
            "descriptions": [
              {
                "description": "Tires: 245/45R18 AS",
                "type": "PrimaryName"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1092
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1097
              }
            ],
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": true,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "C"
          },
          {
            "chromeOptionCode": "-NONTR2",
            "oemOptionCode": "___",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 12,
            "descriptions": [
              {
                "description": "Tires: 245/40R19 AS Run-Flat",
                "type": "PrimaryName"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1092
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1097
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
            "uniqueTypeFilter": "C"
          },
          {
            "chromeOptionCode": "-NONTR3",
            "oemOptionCode": "___",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 12,
            "descriptions": [
              {
                "description": "Tires: 245/40R19 Fr & 275/35R19 Rr Perf Run-Flat",
                "type": "PrimaryName"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "specialEquipment": false,
            "extendedEquipment": false,
            "customEquipment": false,
            "optionPackage": false,
            "optionPackageContentOnly": true,
            "discontinued": false,
            "optionFamilyCode": "",
            "optionFamilyName": "",
            "selectionState": "Unselected",
            "uniqueTypeFilter": "C"
          },
          {
            "chromeOptionCode": "300-A",
            "oemOptionCode": "300",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Space-Saver Spare",
                "type": "PrimaryName"
              }
            ],
            "msrp": "150.0",
            "invoice": "140.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1098
              },
              {
                "categoryFlag": "Deleted",
                "categoryId": 1099
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
            "chromeOptionCode": "416-A",
            "oemOptionCode": "416",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 10,
            "consumerFriendlyHeaderName": "Exterior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Power Rear Sunshade",
                "type": "PrimaryName"
              },
              {
                "description": "-inc: rear side window shades",
                "type": "Extended"
              }
            ],
            "msrp": "575.0",
            "invoice": "530.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "chromeOptionCode": "688",
            "oemOptionCode": "688",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 1,
            "consumerFriendlyHeaderName": "Entertainment",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "harman/kardon Surround Sound System",
                "type": "PrimaryName"
              }
            ],
            "msrp": "875.0",
            "invoice": "805.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1136
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
            "chromeOptionCode": "6F1",
            "oemOptionCode": "6F1",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 1,
            "consumerFriendlyHeaderName": "Entertainment",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Bowers & Wilkins Diamond Surround Sound System",
                "type": "PrimaryName"
              }
            ],
            "msrp": "4200.0",
            "invoice": "3865.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1136
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
            "chromeOptionCode": "494",
            "oemOptionCode": "494",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Heated Front Seats",
                "type": "PrimaryName"
              }
            ],
            "msrp": "500.0",
            "invoice": "460.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1156
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
            "chromeOptionCode": "710",
            "oemOptionCode": "710",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "M Steering Wheel",
                "type": "PrimaryName"
              }
            ],
            "msrp": "150.0",
            "invoice": "140.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "chromeOptionCode": "248",
            "oemOptionCode": "248",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Heated Steering Wheel",
                "type": "PrimaryName"
              }
            ],
            "msrp": "190.0",
            "invoice": "175.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1321
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
            "chromeOptionCode": "5DF",
            "oemOptionCode": "5DF",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Active Cruise Control",
                "type": "PrimaryName"
              }
            ],
            "msrp": "1200.0",
            "invoice": "1105.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1346
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
            "chromeOptionCode": "4M5",
            "oemOptionCode": "4M5",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Leather Dashboard",
                "type": "PrimaryName"
              }
            ],
            "msrp": "1200.0",
            "invoice": "1105.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "chromeOptionCode": "4LG",
            "oemOptionCode": "4LG",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Burl Walnut Wood Trim",
                "type": "PrimaryName"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1170
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
            "uniqueTypeFilter": "M"
          },
          {
            "chromeOptionCode": "4LH",
            "oemOptionCode": "4LH",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Fineline Cove Matte Finish Wood Trim",
                "type": "PrimaryName"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1170
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
            "uniqueTypeFilter": "M"
          },
          {
            "chromeOptionCode": "4LQ",
            "oemOptionCode": "4LQ",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Gray Poplar Wood Trim",
                "type": "PrimaryName"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1170
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
            "uniqueTypeFilter": "M"
          },
          {
            "chromeOptionCode": "4ML",
            "oemOptionCode": "4ML",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Individual Piano Finish Black Trim",
                "type": "PrimaryName"
              },
              {
                "description": "Priority 1.",
                "type": "UnenforcedLogic"
              }
            ],
            "msrp": "1080.0",
            "invoice": "995.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "uniqueTypeFilter": "M"
          },
          {
            "chromeOptionCode": "4WY",
            "oemOptionCode": "4WY",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Plum Brown Wood Trim",
                "type": "PrimaryName"
              },
              {
                "description": "Priority 1.",
                "type": "UnenforcedLogic"
              }
            ],
            "msrp": "1080.0",
            "invoice": "995.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1170
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
            "uniqueTypeFilter": "M"
          },
          {
            "chromeOptionCode": "4LF",
            "oemOptionCode": "4LF",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Fineline Ridge Wood Trim",
                "type": "PrimaryName"
              }
            ],
            "msrp": "0.0",
            "invoice": "0.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1170
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
            "uniqueTypeFilter": "N"
          },
          {
            "chromeOptionCode": "6FH",
            "oemOptionCode": "6FH",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Rear-Seat Entertainment Professional",
                "type": "PrimaryName"
              }
            ],
            "msrp": "2200.0",
            "invoice": "2025.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1162
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1215
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
            "chromeOptionCode": "6UK",
            "oemOptionCode": "6UK",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Night Vision w/Pedestrian Detection",
                "type": "PrimaryName"
              }
            ],
            "msrp": "2300.0",
            "invoice": "2115.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1142
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
            "chromeOptionCode": "4U1",
            "oemOptionCode": "4U1",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Ceramic Controls",
                "type": "PrimaryName"
              }
            ],
            "msrp": "650.0",
            "invoice": "600.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "chromeOptionCode": "316",
            "oemOptionCode": "316",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Power Tailgate",
                "type": "PrimaryName"
              }
            ],
            "msrp": "500.0",
            "invoice": "460.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
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
            "chromeOptionCode": "610",
            "oemOptionCode": "610",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Head-Up Display",
                "type": "PrimaryName"
              }
            ],
            "msrp": "1100.0",
            "invoice": "1010.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1298
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
            "chromeOptionCode": "456",
            "oemOptionCode": "456",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Multi-Contour Seats",
                "type": "PrimaryName"
              }
            ],
            "msrp": "750.0",
            "invoice": "690.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1074
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1075
              },
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
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1191
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
            "chromeOptionCode": "4HA",
            "oemOptionCode": "4HA",
            "headerId": 10750,
            "headerName": "ADDITIONAL EQUIPMENT",
            "consumerFriendlyHeaderId": 2,
            "consumerFriendlyHeaderName": "Interior",
            "optionKindId": 0,
            "descriptions": [
              {
                "description": "Front & Rear Heated Seats",
                "type": "PrimaryName"
              }
            ],
            "msrp": "350.0",
            "invoice": "320.0",
            "frontWeight": "0.0",
            "rearWeight": "0.0",
            "priceState": "Actual",
            "affectingOptionCode": "",
            "categories": [
              {
                "categoryFlag": "Clean",
                "categoryId": 1156
              },
              {
                "categoryFlag": "Clean",
                "categoryId": 1266
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
          }
        ],
        "configurationCheckListItems": [
          {
            "itemName": "Wheel Type",
            "optionKindId": 0,
            "chromeOptionCodes": [
              "24X",
              "21P",
              "22F",
              "24W",
              "2QY",
              "2QZ"
            ],
            "satisfied": true
          },
          {
            "itemName": "Primary Exterior Color",
            "optionKindId": 0,
            "chromeOptionCodes": [
              "300-P",
              "668",
              "416-P",
              "475",
              "A90",
              "C10",
              "C2Y",
              "A72",
              "A83",
              "A89",
              "A96",
              "B65",
              "C2P",
              "S34",
              "X08",
              "X14",
              "X17"
            ],
            "satisfied": true
          },
          {
            "itemName": "Seat Color",
            "optionKindId": 0,
            "chromeOptionCodes": [
              "K8FY",
              "K8SW",
              "LCEA",
              "LCNL",
              "LCFI",
              "LCFK",
              "LCRO",
              "LCTJ",
              "LZFI",
              "LZFK",
              "LZNI",
              "ZBCR",
              "ZBFU",
              "ZBTQ"
            ],
            "satisfied": true
          },
          {
            "itemName": "Required Option",
            "optionKindId": 0,
            "chromeOptionCodes": [
              "-FEE"
            ],
            "satisfied": true
          }
        ],
        "consumerInformation": {
          "recall": "US NHTSA CAMPAIGN ID:\r\n        18V652000\r\n\r\nMfg's Report Date:\r\n        SEP 19, 2018\r\n\r\nComponent:\r\n        EQUIPMENT:ELECTRICAL\r\n\r\nPotential Number Of Units Affected:\r\n        3501\r\n\r\nSummary:\r\n BMW of North America, LLC (BMW) is recalling certain 2018 BMW 330e iPerformance, i3 Rex, i3 Sport Rex, X5 xDrive40e, i3 BEV, i3 Sport BEV and 2019 i8 and i8 Roadster vehicles and 2018-2019 530e iPerformance, 530e xDrive iPerformance and 740Le xDrive iPerformance vehicles. Capacitors within the TurboCord Portable Chargers may fail, possibly resulting in a shock hazard or a fire.\r\n\r\nConsequence:\r\n An electrical shock or a fire can increase the risk of injury or death.\r\n\r\nRemedy:\r\n BMW will notify owners, and dealers will inspect the charging cable, and replace it if necessary, free of charge. An interim notification was mailed to owners on November 19, 2018. A second notification will be sent when the remedy is available. Owners may contact BMW customer service at 1-800-525-7417.\r\n\r\nDates of Manufacture:\r\n        MAR 14, 2018 to AUG 16, 2018",
          "warranty": "Basic: \r\n        4 Years/50,000 Miles\r\n\r\nDrivetrain: \r\n        4 Years/50,000 Miles\r\n\r\nCorrosion: \r\n        12 Years/Unlimited Miles\r\n\r\nRoadside Assistance: \r\n        4 Years/Unlimited Miles\r\n\r\nMaintenance: \r\n        3 Years/36,000 Miles"
        },
        "structuredConsumerInformation": [
          {
            "typeName": "Warranty",
            "items": [
              {
                "name": "Basic Years",
                "sequence": 200,
                "value": "4"
              },
              {
                "name": "Basic Miles/km",
                "sequence": 300,
                "value": "50,000"
              },
              {
                "name": "Drivetrain Years",
                "sequence": 500,
                "value": "4"
              },
              {
                "name": "Drivetrain Miles/km",
                "sequence": 600,
                "value": "50,000"
              },
              {
                "name": "Corrosion Years",
                "sequence": 800,
                "value": "12"
              },
              {
                "name": "Corrosion Miles/km",
                "sequence": 900,
                "value": "Unlimited"
              },
              {
                "name": "Roadside Assistance Years",
                "sequence": 2300,
                "value": "4"
              },
              {
                "name": "Roadside Assistance Miles/km",
                "sequence": 2400,
                "value": "Unlimited"
              },
              {
                "name": "Maintenance Years",
                "sequence": 2600,
                "value": "3"
              },
              {
                "name": "Maintenance Miles/km",
                "sequence": 2700,
                "value": "36,000"
              }
            ]
          },
          {
            "typeName": "Recall",
            "items": [
              {
                "name": "NHTSA CAMPAIGN ID",
                "sequence": 100,
                "value": "18V652000"
              },
              {
                "name": "Mfg's Report Date",
                "sequence": 200,
                "value": "SEP 19, 2018"
              },
              {
                "name": "Component",
                "sequence": 300,
                "value": "EQUIPMENT:ELECTRICAL"
              },
              {
                "name": "Potential Number of Units Affected",
                "sequence": 400,
                "value": "3501"
              },
              {
                "name": "Summary",
                "sequence": 500,
                "value": "BMW of North America, LLC (BMW) is recalling certain 2018 BMW 330e iPerformance, i3 Rex, i3 Sport Rex, X5 xDrive40e, i3 BEV, i3 Sport BEV and 2019 i8 and i8 Roadster vehicles and 2018-2019 530e iPerformance, 530e xDrive iPerformance and 740Le xDrive iPerformance vehicles. Capacitors within the TurboCord Portable Chargers may fail, possibly resulting in a shock hazard or a fire."
              },
              {
                "name": "Consequence",
                "sequence": 600,
                "value": "An electrical shock or a fire can increase the risk of injury or death."
              },
              {
                "name": "Remedy",
                "sequence": 700,
                "value": "BMW will notify owners, and dealers will inspect the charging cable, and replace it if necessary, free of charge. An interim notification was mailed to owners on November 19, 2018. A second notification will be sent when the remedy is available. Owners may contact BMW customer service at 1-800-525-7417."
              },
              {
                "name": "Dates of Manufacture",
                "sequence": 900,
                "value": "MAR 14, 2018 to AUG 16, 2018"
              }
            ]
          }
        ],
        "technicalSpecifications": [
          {
            "groupId": 0,
            "groupName": "Vehicle",
            "headerId": 48,
            "headerName": "Emissions",
            "titleId": 81,
            "titleName": "Tons/yr of CO2 Emissions @ 15K mi/year",
            "value": "6.6",
            "upgrade": false,
            "sequence": 1
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 6,
            "titleName": "Drivetrain",
            "value": "All Wheel Drive",
            "upgrade": false,
            "sequence": 6
          },
          {
            "groupId": 0,
            "groupName": "Vehicle",
            "headerId": 0,
            "headerName": "Vehicle",
            "titleId": 7,
            "titleName": "EPA Classification",
            "value": "Mid-Size Cars",
            "upgrade": false,
            "sequence": 7
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 1,
            "headerName": "Interior Dimensions",
            "titleId": 8,
            "titleName": "Passenger Capacity",
            "value": "5",
            "upgrade": false,
            "sequence": 8
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 1,
            "headerName": "Interior Dimensions",
            "titleId": 9,
            "titleName": "Passenger Volume",
            "value": "98.8",
            "measurementUnit": "ft³",
            "upgrade": false,
            "sequence": 9
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 9,
            "headerName": "Weight Information",
            "titleId": 10,
            "titleName": "Base Curb Weight",
            "value": "3878",
            "measurementUnit": "lbs",
            "upgrade": false,
            "sequence": 10
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 14,
            "headerName": "Mileage",
            "titleId": 27,
            "titleName": "EPA Fuel Economy Est - Hwy",
            "value": "33",
            "measurementUnit": "MPG",
            "upgrade": false,
            "sequence": 23
          },
          {
            "groupId": 0,
            "groupName": "Vehicle",
            "headerId": 48,
            "headerName": "Emissions",
            "titleId": 21,
            "titleName": "EPA Greenhouse Gas Score",
            "value": "N/A",
            "upgrade": false,
            "sequence": 23
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 14,
            "headerName": "Mileage",
            "titleId": 28,
            "titleName": "Cruising Range - City",
            "value": "414.00",
            "measurementUnit": "mi",
            "upgrade": true,
            "sequence": 24
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 14,
            "headerName": "Mileage",
            "titleId": 26,
            "titleName": "EPA Fuel Economy Est - City",
            "value": "23",
            "measurementUnit": "MPG",
            "upgrade": false,
            "sequence": 24
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 14,
            "headerName": "Mileage",
            "titleId": 25,
            "titleName": "Fuel Economy Est-Combined",
            "value": "27",
            "measurementUnit": "MPG",
            "upgrade": false,
            "sequence": 24
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 14,
            "headerName": "Mileage",
            "titleId": 29,
            "titleName": "Cruising Range - Hwy",
            "value": "594.00",
            "measurementUnit": "mi",
            "upgrade": true,
            "sequence": 25
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 8,
            "headerName": "Trailering",
            "titleId": 31,
            "titleName": "Dead Weight Hitch - Max Trailer Wt.",
            "value": "N/A",
            "measurementUnit": "lbs",
            "upgrade": false,
            "sequence": 27
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 8,
            "headerName": "Trailering",
            "titleId": 32,
            "titleName": "Dead Weight Hitch - Max Tongue Wt.",
            "value": "N/A",
            "measurementUnit": "lbs",
            "upgrade": false,
            "sequence": 28
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 8,
            "headerName": "Trailering",
            "titleId": 33,
            "titleName": "Wt Distributing Hitch - Max Trailer Wt.",
            "value": "N/A",
            "measurementUnit": "lbs",
            "upgrade": false,
            "sequence": 29
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 8,
            "headerName": "Trailering",
            "titleId": 34,
            "titleName": "Wt Distributing Hitch - Max Tongue Wt.",
            "value": "N/A",
            "measurementUnit": "lbs",
            "upgrade": false,
            "sequence": 30
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 13,
            "headerName": "Engine",
            "titleId": 40,
            "titleName": "Engine Order Code",
            "value": "N/A",
            "upgrade": false,
            "sequence": 34
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 13,
            "headerName": "Engine",
            "titleId": 41,
            "titleName": "Engine Type",
            "value": "Intercooled Turbo Premium Unleaded I-4",
            "upgrade": false,
            "sequence": 35
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 13,
            "headerName": "Engine",
            "titleId": 42,
            "titleName": "Displacement",
            "value": "2.0 L/122",
            "upgrade": false,
            "sequence": 36
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 13,
            "headerName": "Engine",
            "titleId": 43,
            "titleName": "Fuel System",
            "value": "Gasoline Direct Injection",
            "upgrade": false,
            "sequence": 37
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 13,
            "headerName": "Engine",
            "titleId": 48,
            "titleName": "SAE Net Horsepower @ RPM",
            "value": "248 @ 5200",
            "upgrade": false,
            "sequence": 38
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 13,
            "headerName": "Engine",
            "titleId": 49,
            "titleName": "SAE Net Torque @ RPM",
            "value": "258 @ 1450",
            "upgrade": false,
            "sequence": 39
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 51,
            "titleName": "Trans Order Code",
            "value": "2TB",
            "upgrade": false,
            "sequence": 40
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 52,
            "titleName": "Trans Type",
            "value": "8",
            "upgrade": false,
            "sequence": 41
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 53,
            "titleName": "Trans Description Cont.",
            "value": "Automatic w/OD",
            "upgrade": false,
            "sequence": 42
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 54,
            "titleName": "Trans Description Cont. Again",
            "value": "N/A",
            "upgrade": false,
            "sequence": 43
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 56,
            "titleName": "First Gear Ratio (:1)",
            "value": "5.00",
            "upgrade": false,
            "sequence": 44
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 57,
            "titleName": "Second Gear Ratio (:1)",
            "value": "3.20",
            "upgrade": false,
            "sequence": 45
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 58,
            "titleName": "Third Gear Ratio (:1)",
            "value": "2.14",
            "upgrade": false,
            "sequence": 46
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 59,
            "titleName": "Fourth Gear Ratio (:1)",
            "value": "1.72",
            "upgrade": false,
            "sequence": 47
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 60,
            "titleName": "Fifth Gear Ratio (:1)",
            "value": "1.31",
            "upgrade": false,
            "sequence": 48
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 61,
            "titleName": "Sixth Gear Ratio (:1)",
            "value": "1.00",
            "upgrade": false,
            "sequence": 49
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 62,
            "titleName": "Reverse Ratio (:1)",
            "value": "3.46",
            "upgrade": false,
            "sequence": 50
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 65,
            "titleName": "Clutch Size",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 52
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 69,
            "titleName": "Final Drive Axle Ratio (:1)",
            "value": "2.93",
            "upgrade": false,
            "sequence": 56
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 12,
            "headerName": "Electrical",
            "titleId": 76,
            "titleName": "Cold Cranking Amps @ 0° F (Primary)",
            "value": "N/A",
            "upgrade": false,
            "sequence": 61
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 12,
            "headerName": "Electrical",
            "titleId": 84,
            "titleName": "Maximum Alternator Capacity (amps)",
            "value": "N/A",
            "upgrade": false,
            "sequence": 66
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 11,
            "headerName": "Cooling System",
            "titleId": 91,
            "titleName": "Total Cooling System Capacity",
            "value": "N/A",
            "measurementUnit": "qts",
            "upgrade": false,
            "sequence": 69
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 17,
            "headerName": "Suspension",
            "titleId": 105,
            "titleName": "Suspension Type - Front",
            "value": "Double Wishbone",
            "upgrade": false,
            "sequence": 80
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 17,
            "headerName": "Suspension",
            "titleId": 106,
            "titleName": "Suspension Type - Rear",
            "value": "Multi-Link",
            "upgrade": false,
            "sequence": 81
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 17,
            "headerName": "Suspension",
            "titleId": 107,
            "titleName": "Suspension Type - Front (Cont.)",
            "value": "Double Wishbone",
            "upgrade": false,
            "sequence": 82
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 17,
            "headerName": "Suspension",
            "titleId": 108,
            "titleName": "Suspension Type - Rear (Cont.)",
            "value": "Multi-Link",
            "upgrade": false,
            "sequence": 83
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 14,
            "headerName": "Mileage",
            "titleId": 800,
            "titleName": "EPA MPG Equivalent - City",
            "value": "N/A",
            "upgrade": false,
            "sequence": 100
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 17,
            "headerName": "Suspension",
            "titleId": 131,
            "titleName": "Shock Absorber Diameter - Front",
            "value": "N/A",
            "measurementUnit": "mm",
            "upgrade": false,
            "sequence": 105
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 17,
            "headerName": "Suspension",
            "titleId": 132,
            "titleName": "Shock Absorber Diameter - Rear",
            "value": "N/A",
            "measurementUnit": "mm",
            "upgrade": false,
            "sequence": 106
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 17,
            "headerName": "Suspension",
            "titleId": 133,
            "titleName": "Stabilizer Bar Diameter - Front",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 107
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 17,
            "headerName": "Suspension",
            "titleId": 134,
            "titleName": "Stabilizer Bar Diameter - Rear",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 108
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 7,
            "headerName": "Tires",
            "titleId": 137,
            "titleName": "Front Tire Order Code",
            "value": "N/A",
            "upgrade": false,
            "sequence": 109
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 7,
            "headerName": "Tires",
            "titleId": 138,
            "titleName": "Rear Tire Order Code",
            "value": "N/A",
            "upgrade": false,
            "sequence": 110
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 7,
            "headerName": "Tires",
            "titleId": 139,
            "titleName": "Spare Tire Order Code",
            "value": "N/A",
            "upgrade": false,
            "sequence": 111
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 7,
            "headerName": "Tires",
            "titleId": 140,
            "titleName": "Front Tire Size",
            "value": "P245/45HR18",
            "upgrade": false,
            "sequence": 112
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 7,
            "headerName": "Tires",
            "titleId": 141,
            "titleName": "Rear Tire Size",
            "value": "P245/45HR18",
            "upgrade": false,
            "sequence": 113
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 7,
            "headerName": "Tires",
            "titleId": 142,
            "titleName": "Spare Tire Size",
            "value": "N/A",
            "upgrade": false,
            "sequence": 114
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 10,
            "headerName": "Wheels",
            "titleId": 156,
            "titleName": "Front Wheel Size",
            "value": "18 X 8",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 121
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 10,
            "headerName": "Wheels",
            "titleId": 157,
            "titleName": "Rear Wheel Size",
            "value": "18 X 8",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 122
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 10,
            "headerName": "Wheels",
            "titleId": 158,
            "titleName": "Spare Wheel Size",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 123
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 10,
            "headerName": "Wheels",
            "titleId": 165,
            "titleName": "Front Wheel Material",
            "value": "Aluminum",
            "upgrade": false,
            "sequence": 130
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 10,
            "headerName": "Wheels",
            "titleId": 166,
            "titleName": "Rear Wheel Material",
            "value": "Aluminum",
            "upgrade": false,
            "sequence": 131
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 10,
            "headerName": "Wheels",
            "titleId": 167,
            "titleName": "Spare Wheel Material",
            "value": "N/A",
            "upgrade": false,
            "sequence": 132
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 6,
            "headerName": "Steering",
            "titleId": 176,
            "titleName": "Steering Type",
            "value": "Rack-Pinion",
            "upgrade": false,
            "sequence": 133
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 6,
            "headerName": "Steering",
            "titleId": 178,
            "titleName": "Steering Ratio (:1), Overall",
            "value": "N/A",
            "upgrade": false,
            "sequence": 134
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 6,
            "headerName": "Steering",
            "titleId": 181,
            "titleName": "Lock to Lock Turns (Steering)",
            "value": "N/A",
            "upgrade": false,
            "sequence": 137
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 6,
            "headerName": "Steering",
            "titleId": 184,
            "titleName": "Turning Diameter - Curb to Curb",
            "value": "40.1",
            "measurementUnit": "ft",
            "upgrade": false,
            "sequence": 138
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 6,
            "headerName": "Steering",
            "titleId": 185,
            "titleName": "Turning Diameter - Wall to Wall",
            "value": "N/A",
            "measurementUnit": "ft",
            "upgrade": false,
            "sequence": 139
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 4,
            "headerName": "Brakes",
            "titleId": 186,
            "titleName": "Brake Type",
            "value": "4-Wheel Disc",
            "upgrade": false,
            "sequence": 140
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 4,
            "headerName": "Brakes",
            "titleId": 187,
            "titleName": "Brake ABS System",
            "value": "4-Wheel",
            "upgrade": false,
            "sequence": 141
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 4,
            "headerName": "Brakes",
            "titleId": 188,
            "titleName": "Brake ABS System (Second Line)",
            "value": "N/A",
            "upgrade": false,
            "sequence": 142
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 4,
            "headerName": "Brakes",
            "titleId": 190,
            "titleName": "Disc - Front (Yes or   )",
            "value": "Yes",
            "upgrade": false,
            "sequence": 144
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 4,
            "headerName": "Brakes",
            "titleId": 191,
            "titleName": "Disc - Rear (Yes or   )",
            "value": "Yes",
            "upgrade": false,
            "sequence": 145
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 4,
            "headerName": "Brakes",
            "titleId": 192,
            "titleName": "Front Brake Rotor Diam x Thickness",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 146
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 4,
            "headerName": "Brakes",
            "titleId": 193,
            "titleName": "Rear Brake Rotor Diam x Thickness",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 147
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 4,
            "headerName": "Brakes",
            "titleId": 196,
            "titleName": "Drum - Rear (Yes or   )",
            "value": "N/A",
            "upgrade": false,
            "sequence": 150
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 4,
            "headerName": "Brakes",
            "titleId": 197,
            "titleName": "Rear Drum Diam x Width",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 151
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 5,
            "headerName": "Fuel Tank",
            "titleId": 206,
            "titleName": "Fuel Tank Capacity, Approx",
            "value": "18",
            "measurementUnit": "gal",
            "upgrade": false,
            "sequence": 155
          },
          {
            "groupId": 4,
            "groupName": "Chassis",
            "headerId": 5,
            "headerName": "Fuel Tank",
            "titleId": 207,
            "titleName": "Aux Fuel Tank Capacity, Approx",
            "value": "N/A",
            "measurementUnit": "gal",
            "upgrade": false,
            "sequence": 156
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 1,
            "headerName": "Interior Dimensions",
            "titleId": 256,
            "titleName": "Front Head Room",
            "value": "38.8",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 161
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 1,
            "headerName": "Interior Dimensions",
            "titleId": 257,
            "titleName": "Front Leg Room",
            "value": "41.4",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 162
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 1,
            "headerName": "Interior Dimensions",
            "titleId": 258,
            "titleName": "Front Shoulder Room",
            "value": "58.7",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 163
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 1,
            "headerName": "Interior Dimensions",
            "titleId": 259,
            "titleName": "Front Hip Room",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 164
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 1,
            "headerName": "Interior Dimensions",
            "titleId": 261,
            "titleName": "Second Head Room",
            "value": "37.5",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 165
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 1,
            "headerName": "Interior Dimensions",
            "titleId": 262,
            "titleName": "Second Leg Room",
            "value": "36.5",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 166
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 1,
            "headerName": "Interior Dimensions",
            "titleId": 263,
            "titleName": "Second Shoulder Room",
            "value": "55.9",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 167
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 1,
            "headerName": "Interior Dimensions",
            "titleId": 264,
            "titleName": "Second Hip Room",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 168
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 2,
            "headerName": "Exterior Dimensions",
            "titleId": 301,
            "titleName": "Wheelbase",
            "value": "117.1",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 181
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 2,
            "headerName": "Exterior Dimensions",
            "titleId": 304,
            "titleName": "Length, Overall",
            "value": "194.6",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 184
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 2,
            "headerName": "Exterior Dimensions",
            "titleId": 305,
            "titleName": "Width, Max w/o mirrors",
            "value": "73.5",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 185
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 2,
            "headerName": "Exterior Dimensions",
            "titleId": 306,
            "titleName": "Height, Overall",
            "value": "58.2",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 186
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 2,
            "headerName": "Exterior Dimensions",
            "titleId": 309,
            "titleName": "Track Width, Front",
            "value": "63",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 187
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 2,
            "headerName": "Exterior Dimensions",
            "titleId": 310,
            "titleName": "Track Width, Rear",
            "value": "63.9",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 188
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 14,
            "headerName": "Mileage",
            "titleId": 801,
            "titleName": "EPA MPG Equivalent - Hwy",
            "value": "N/A",
            "upgrade": false,
            "sequence": 200
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 2,
            "headerName": "Exterior Dimensions",
            "titleId": 326,
            "titleName": "Min Ground Clearance",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 202
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 2,
            "headerName": "Exterior Dimensions",
            "titleId": 369,
            "titleName": "Liftover Height",
            "value": "N/A",
            "measurementUnit": "in",
            "upgrade": false,
            "sequence": 223
          },
          {
            "groupId": 5,
            "groupName": "Dimensions",
            "headerId": 3,
            "headerName": "Cargo Area Dimensions",
            "titleId": 379,
            "titleName": "Trunk Volume",
            "value": "18.7",
            "measurementUnit": "ft³",
            "upgrade": false,
            "sequence": 232
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 401,
            "titleName": "Seventh Gear Ratio (:1)",
            "value": "0.82",
            "upgrade": false,
            "sequence": 234
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 15,
            "headerName": "Transmission",
            "titleId": 402,
            "titleName": "Eighth Gear Ratio (:1)",
            "value": "0.64",
            "upgrade": false,
            "sequence": 235
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 14,
            "headerName": "Mileage",
            "titleId": 802,
            "titleName": "EPA MPG Equivalent - Combined",
            "value": "N/A",
            "upgrade": false,
            "sequence": 300
          },
          {
            "groupId": 6,
            "groupName": "Powertrain",
            "headerId": 14,
            "headerName": "Mileage",
            "titleId": 803,
            "titleName": "Battery Range",
            "value": "N/A",
            "measurementUnit": "mi",
            "upgrade": false,
            "sequence": 400
          }
        ],
        "editorialContentSources": [
          {
            "sourceName": "Chrome Reviews",
            "editorialContents": [
              {
                "description": "PROS",
                "value": "Bold styling; powerful engine options; luxurious and tech-laden interior; sporty handling; hybrid engine availability",
                "mimeType": "text/plain"
              },
              {
                "description": "MODEL_HIGHLIGHTS",
                "value": "The 5 Series is available in a number of different configurations, with a total of 5 different engines available in the chassis. At the bottom is the 530i, powered by a turbocharged 2.0L, 4-cylinder engine making 248 horsepower. Next on the hierarchy is the 540i, powered by a turbocharged 3.0L, 6-cylinder engine making 335 horsepower. The 550i xDrive is powered by a twin-turbocharged V8 and makes 456 horsepower, good enough for a claimed 0-60 time of just 3.9 seconds. The BMW M5 sits at the top of the range and makes 600 horsepower from its twin-turbo V8, though a competition option boosts this to 617 horsepower. All 5 Series models utilize an 8-speed automatic transmission to send power to the rear wheels. All-wheel drive is optional on the 530i and 540i models, while it comes standard on the 550i xDrive and the M5.<p><p>Standard equipment on all 5 Series includes LED headlights, 16-way power adjustable front seats, as well as a sound absorbing headliner, a 10-inch screen located in the dashboard, a 205-watt 12-speaker stereo, dual-zone climate control, dynamic cruise control and 18-inch wheels. <p><p>Of course, the options list is where things really get fun. If those 16-way adjustable seats just aren't quite enough, 20-way adjustable multi-contour seats are available, which are trimmed in Nappa leather and equipped with ventilation. The optional seats also feature eight different massage functions using 20 different air chambers incorporated into the back of the seat cushion. Each of the eight massage programs has three different intensity levels.<p><p>A multi-color head-up display is also available for 2019, projecting things such as navigation instructions, audio tracks or even warnings up on the windshield where they would be more visible to the driver.<p><p>There are two optional stereos available for the BMW 5 Series. A 600-watt harmon/kardon sound system features 16 speakers and nine channels, whereas true audiophiles will want to spring for the Bowers & Wilkins stereo. It features diamond tweeters, 1400 watts and a 10-channel amplifier. The unit has speakers that subtly glow, as well as a microphone that measures ambient sound to tune sound quality just so. It is one of the most advanced audio systems to ever be installed in a car, according to BMW. <p><p>Besides standard safety features such as airbags, ABS and stability control, the BMW 5 Series has some innovative passive and active safety systems available. An evasion aid system operates at speeds of up to 100 mph. If the car detects a quick lane change, it will tighten up the steering and counter steering, allowing the driver to need fewer turns required to correct a skid. The car will also use information from the vehicle's sensors to detect how much unobstructed space is around the car. Those same sensors are used for the automatic parking system.",
                "mimeType": "text/plain"
              },
              {
                "description": "MODEL_NEWS",
                "value": "The BMW 5 Series returns for 2019 with a few minor updates and differences. In-car entertainment systems have been improved this year with the addition of Apple CarPlay, which now comes standard across all models. The service will allow owners to stream music and directions from Apple branded phones using the car's built-in screen, rather than the screen on their phone. On the safety front, a blind spot detection system is also now standard along with a forward collision warning system and a lane departure warning system.",
                "mimeType": "text/plain"
              },
              {
                "description": "VALUE_WRITEUP",
                "value": "The BMW 5 Series is a mid-sized luxury sedan, competing with the Mercedes E-Class, the Audi A6 and the Lexus GS series. Costing upwards of $50,000, the 5 Series offers all the luxury of its various competitors while giving drivers a significantly sportier driving experience than any of its peers. Handling is and always has been world-class for the line, with powerful engines, sharp steering and a playful chassis. The 5 Series is even offered with a hybrid electric engine model that achieves extraordinary gas mileage, even while carving corners.",
                "mimeType": "text/plain"
              }
            ]
          }
        ]
      };
}

export function styleFactoryNO_OPTION_KIND() {
    return {
        "style": {
            "model": {
                "modelYear": 2019,
                "divisionId": 16,
                "divisionName": "Honda",
                "subdivisionId": 9109,
                "subdivisionName": "Honda",
                "modelId": 32013,
                "modelName": "Civic Coupe",
                "dataReleaseDate": "2019-04-15T07:00:00.000Z",
                "initialPriceDate": "2018-10-17T07:00:00.000Z",
                "dataEffectiveDate": "2019-01-03T08:00:00.000Z",
                "dataComment": ""
            },
            "styleId": 404010,
            "styleName": "LX CVT",
            "styleNameWithoutTrim": "CVT",
            "trimName": "LX",
            "manufacturerModelCode": "FC4B6KEW",
            "styleGroupStyleIds": [
                404010,
                404011,
                404012,
                404013,
                404014
            ],
            "styleGroupBase": true,
            "baseMsrp": "20650.0",
            "baseInvoice": "19192.77",
            "destination": "920.0",
            "trueBasePrice": true,
            "priceState": "Actual",
            "bodyTypes": [
                {
                    "bodyTypeId": 1,
                    "bodyTypeName": "2dr Car",
                    "primary": true
                }
            ],
            "passengerDoors": 2,
            "marketClassId": 23,
            "marketClassName": "2-door Compact Passenger Car",
            "stockPhotoUrl": "http://media.carbook.com/autoBuilderData/stockPhotos/29338.jpg",
            "consumerFriendlyModelName": "Civic",
            "consumerFriendlyStyleName": "LX CVT Coupe",
            "consumerFriendlyDrivetrain": "Front Wheel Drive",
            "consumerFriendlyBodyType": "2dr Car",
            "configurationState": {
                "dataVersion": "2019-04-15T07:00:00.000Z",
                "styleId": 404010,
                "fullyConfigured": true,
                "orderAvailability": "Retail",
                "specialEquipmentEnabled": true,
                "optionOrderLogicDisabled": true,
                "initialPricingEnabled": false,
                "chromeOptionCodeToggleStream": [
                    "WX"
                ],
                "selectedChromeOptionCodes": [
                    "WX"
                ],
                "serializedValue": "H4sIAAAAAAAAAGNgYJBjYKjlZWDT0mJgSs1jYAoNZgCJofAZs+RPL2xgZGQESjEwMjCFR/wHAgYIYGJgVlZWBkuAueERcDZI0oDBkwFJABtghEoCAHGN91yNAAAA"
            }
        },
        "configuredOptionsMsrp": "0.0",
        "configuredOptionsInvoice": "0.0",
        "configuredCustomEquipmentMsrp": "0.0",
        "configuredCustomEquipmentInvoice": "0.0",
        "advertisingAndAdjustmentsMsrp": "0.0",
        "advertisingAndAdjustmentsInvoice": "0.0",
        "configuredTotalMsrp": "21570.0",
        "configuredTotalInvoice": "20112.77",
        "configuredPriceState": "Actual",
        "standardEquipment": [
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 3,
                "consumerFriendlyHeaderName": "Mechanical",
                "description": "Engine: 2.0L I-4 DOHC 16-Valve i-VTEC",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1048
                    },
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1059
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 3,
                "consumerFriendlyHeaderName": "Mechanical",
                "description": "Transmission w/Driver Selectable Mode",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 3,
                "consumerFriendlyHeaderName": "Mechanical",
                "description": "Transmission: Continuously Variable (CVT)",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1130
                    },
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1134
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 3,
                "consumerFriendlyHeaderName": "Mechanical",
                "description": "Front-Wheel Drive",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1042
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 3,
                "consumerFriendlyHeaderName": "Mechanical",
                "description": "3.94 Axle Ratio",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 3,
                "consumerFriendlyHeaderName": "Mechanical",
                "description": "Gas-Pressurized Shock Absorbers",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 3,
                "consumerFriendlyHeaderName": "Mechanical",
                "description": "Front And Rear Anti-Roll Bars",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 3,
                "consumerFriendlyHeaderName": "Mechanical",
                "description": "Electric Power-Assist Speed-Sensing Steering",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1084
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 3,
                "consumerFriendlyHeaderName": "Mechanical",
                "description": "12.4 Gal. Fuel Tank",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 3,
                "consumerFriendlyHeaderName": "Mechanical",
                "description": "Single Stainless Steel Exhaust",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 3,
                "consumerFriendlyHeaderName": "Mechanical",
                "description": "Strut Front Suspension w/Coil Springs",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 3,
                "consumerFriendlyHeaderName": "Mechanical",
                "description": "Multi-Link Rear Suspension w/Coil Springs",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 3,
                "consumerFriendlyHeaderName": "Mechanical",
                "description": "4-Wheel Disc Brakes w/4-Wheel ABS, Front Vented Discs, Brake Assist, Hill Hold Control and Electric Parking Brake",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1018
                    },
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1020
                    },
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1228
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "description": "Wheels w/Machined w/Painted Accents Accents",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "description": "Wheels: 16\" Alloy",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1123
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "description": "Tires: 215/55R16 93H AS",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1092
                    },
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1097
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "description": "Steel Spare Wheel",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "description": "Compact Spare Tire Mounted Inside Under Cargo",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1098
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "description": "Clearcoat Paint",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "description": "Body-Colored Front Bumper",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "description": "Body-Colored Rear Bumper",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "description": "Chrome Side Windows Trim",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "description": "Body-Colored Door Handles",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "description": "Body-Colored Power Side Mirrors w/Manual Folding",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1065
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "description": "Fixed Rear Window w/Defroster",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1034
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "description": "Light Tinted Glass",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "description": "Fixed Interval Wipers",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1127
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "description": "Fully Galvanized Steel Panels",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "description": "Grille w/Chrome Bar",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "description": "Trunk Rear Cargo Access",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "description": "Fully Automatic Projector Beam Halogen Daytime Running Auto High-Beam Headlamps w/Delay-Off",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1061
                    },
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1169
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 1,
                "consumerFriendlyHeaderName": "Entertainment",
                "description": "Radio w/Seek-Scan and Clock",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 1,
                "consumerFriendlyHeaderName": "Entertainment",
                "description": "Radio: 160-Watt AM/FM Audio System -inc: 4 speakers, 5-inch color LCD screen, Bluetooth HandsFreeLink, Bluetooth streaming audio, radio data system (RDS), speed-sensitive volume compensation (SVC), 1.0-amp USB audio interface port in lower front console, illuminated steering wheel-mounted audio controls and integrated rear-window antenna",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1014
                    },
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1150
                    },
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1161
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
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 1,
                "consumerFriendlyHeaderName": "Entertainment",
                "description": "1 LCD Monitor In The Front",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "6-Way Driver Seat -inc: Manual Fore/Aft Movement",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "4-Way Passenger Seat -inc: Manual Fore/Aft Movement",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "60-40 Folding Bench Front Facing Fold Forward Seatback Rear Seat",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1076
                    },
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1304
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Manual Tilt/Telescoping Steering Column",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1087
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Gauges -inc: Speedometer, Odometer, Tachometer, Trip Odometer and Trip Computer",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1203
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Fixed Rear Windows",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Reclining Front Bucket Seats -inc: driver's seat w/manual height adjustment and adjustable head restraints",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1082
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Front Cupholder",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Rear Cupholder",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Valet Function",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Power Fuel Flap Locking Type",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Remote Keyless Entry w/Integrated Key Transmitter, Illuminated Entry and Panic Button",
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
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Remote Releases -Inc: Power Cargo Access",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Cruise Control w/Steering Wheel Controls",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1033
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Distance Pacing w/Traffic Stop-Go",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1346
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Automatic Air Conditioning",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1009
                    },
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1011
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "HVAC -inc: Underseat Ducts",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Glove Box",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Driver Foot Rest",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Interior Trim -inc: Metal-Look Instrument Panel Insert, Metal-Look Door Panel Insert, Metal-Look Console Insert and Metal-Look Interior Accents",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Full Cloth Headliner",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Metal-Look Gear Shift Knob",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Cloth Seat Trim",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1077
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Day-Night Rearview Mirror",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Driver And Passenger Visor Vanity Mirrors w/Driver And Passenger Auxiliary Mirror",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1175
                    },
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1176
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Full Floor Console w/Covered Storage and 1 12V DC Power Outlet",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Front Map Lights",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Fade-To-Off Interior Lighting",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Full Carpet Floor Covering -inc: Carpet Front And Rear Floor Mats",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1055
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Carpet Floor Trim and Carpet Trunk Lid/Rear Cargo Door Trim",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Cargo Space Lights",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "FOB Controls -inc: Trunk/Hatch/Tailgate",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Instrument Panel Bin, Driver And Passenger Door Bins",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Power 1st Row Windows w/Driver And Passenger 1-Touch Up/Down",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1126
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Delayed Accessory Power",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Power Door Locks w/Autolock Feature",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1063
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Systems Monitor",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Trip Computer",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1203
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Outside Temp Gauge",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Digital/Analog Display",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Seats w/Cloth Back Material",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Fixed Rear Head Restraints",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Sliding Front Center Armrest",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Perimeter Alarm",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1013
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Engine Immobilizer",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1166
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "1 12V DC Power Outlet",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "description": "Air Filtration",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 9,
                "consumerFriendlyHeaderName": "Safety-Mechanical",
                "description": "VSA Electronic Stability Control (ESC)",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1100
                    },
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1227
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 9,
                "consumerFriendlyHeaderName": "Safety-Mechanical",
                "description": "ABS And Driveline Traction Control",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1100
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 7,
                "consumerFriendlyHeaderName": "Safety-Exterior",
                "description": "Side Impact Beams",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 8,
                "consumerFriendlyHeaderName": "Safety-Interior",
                "description": "Dual Stage Driver And Passenger Seat-Mounted Side Airbags",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1005
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 8,
                "consumerFriendlyHeaderName": "Safety-Interior",
                "description": "Collision Mitigation Braking System (CMBS) + FCW",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 8,
                "consumerFriendlyHeaderName": "Safety-Interior",
                "description": "Lane Keeping Assist System (LKAS) Lane Keeping Assist",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1314
                    },
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1323
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 8,
                "consumerFriendlyHeaderName": "Safety-Interior",
                "description": "Lane Keeping Assist System (LKAS) Lane Departure Warning",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1314
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 8,
                "consumerFriendlyHeaderName": "Safety-Interior",
                "description": "Low Tire Pressure Warning",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1202
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 8,
                "consumerFriendlyHeaderName": "Safety-Interior",
                "description": "Dual Stage Driver And Passenger Front Airbags",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1001
                    },
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1002
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 8,
                "consumerFriendlyHeaderName": "Safety-Interior",
                "description": "Curtain 1st And 2nd Row Airbags",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1007
                    },
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1008
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 8,
                "consumerFriendlyHeaderName": "Safety-Interior",
                "description": "Airbag Occupancy Sensor",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1310
                    }
                ],
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 8,
                "consumerFriendlyHeaderName": "Safety-Interior",
                "description": "Outboard Front Lap And Shoulder Safety Belts -inc: Rear Center 3 Point and Pretensioners",
                "upgrade": false
            },
            {
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 8,
                "consumerFriendlyHeaderName": "Safety-Interior",
                "description": "Back-Up Camera",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1224
                    }
                ],
                "upgrade": false
            }
        ],
        "options": [
            {
                "chromeOptionCode": "WX",
                "oemOptionCode": "WX",
                "headerId": 10650,
                "headerName": "PRIMARY PAINT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 68,
                "descriptions": [
                    {
                        "description": "Platinum White Pearl",
                        "type": "PrimaryName"
                    }
                ],
                "msrp": "0.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "uniqueTypeFilter": "I",
                "rgbValue": "E0DDD4",
                "genericColors": [
                    {
                        "primary": true,
                        "name": "White"
                    }
                ]
            },
            {
                "chromeOptionCode": "SI",
                "oemOptionCode": "SI",
                "headerId": 10650,
                "headerName": "PRIMARY PAINT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 68,
                "descriptions": [
                    {
                        "description": "Lunar Silver Metallic",
                        "type": "PrimaryName"
                    }
                ],
                "msrp": "0.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "uniqueTypeFilter": "I",
                "rgbValue": "A0A0A0",
                "genericColors": [
                    {
                        "primary": true,
                        "name": "Silver"
                    }
                ]
            },
            {
                "chromeOptionCode": "GY",
                "oemOptionCode": "GY",
                "headerId": 10650,
                "headerName": "PRIMARY PAINT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 68,
                "descriptions": [
                    {
                        "description": "Modern Steel Metallic",
                        "type": "PrimaryName"
                    }
                ],
                "msrp": "0.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "uniqueTypeFilter": "I",
                "rgbValue": "403F3F",
                "genericColors": [
                    {
                        "primary": true,
                        "name": "Gray"
                    }
                ]
            },
            {
                "chromeOptionCode": "BK-P",
                "oemOptionCode": "BK",
                "headerId": 10650,
                "headerName": "PRIMARY PAINT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 68,
                "descriptions": [
                    {
                        "description": "Crystal Black Pearl",
                        "type": "PrimaryName"
                    }
                ],
                "msrp": "0.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "uniqueTypeFilter": "I",
                "rgbValue": "1D1D1D",
                "genericColors": [
                    {
                        "primary": true,
                        "name": "Black"
                    }
                ]
            },
            {
                "chromeOptionCode": "BS",
                "oemOptionCode": "BS",
                "headerId": 10650,
                "headerName": "PRIMARY PAINT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 68,
                "descriptions": [
                    {
                        "description": "Aegean Blue Metallic",
                        "type": "PrimaryName"
                    }
                ],
                "msrp": "0.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "uniqueTypeFilter": "I",
                "rgbValue": "0A2E80",
                "genericColors": [
                    {
                        "primary": true,
                        "name": "Blue"
                    }
                ]
            },
            {
                "chromeOptionCode": "RE",
                "oemOptionCode": "RE",
                "headerId": 10650,
                "headerName": "PRIMARY PAINT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 68,
                "descriptions": [
                    {
                        "description": "Rallye Red",
                        "type": "PrimaryName"
                    }
                ],
                "msrp": "0.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "uniqueTypeFilter": "I",
                "rgbValue": "990019",
                "genericColors": [
                    {
                        "primary": true,
                        "name": "Red"
                    }
                ]
            },
            {
                "chromeOptionCode": "YF",
                "oemOptionCode": "YF",
                "headerId": 10650,
                "headerName": "PRIMARY PAINT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 68,
                "descriptions": [
                    {
                        "description": "Tonic Yellow Pearl",
                        "type": "PrimaryName"
                    }
                ],
                "msrp": "0.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "uniqueTypeFilter": "I",
                "rgbValue": "E8E300",
                "genericColors": [
                    {
                        "primary": true,
                        "name": "Yellow"
                    }
                ]
            },
            {
                "chromeOptionCode": "WY",
                "oemOptionCode": "WY",
                "headerId": 10650,
                "headerName": "PRIMARY PAINT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 68,
                "descriptions": [
                    {
                        "description": "Platinum White Pearl",
                        "type": "PrimaryName"
                    }
                ],
                "msrp": "0.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "uniqueTypeFilter": "I",
                "rgbValue": "E0DDD4",
                "genericColors": [
                    {
                        "primary": true,
                        "name": "White"
                    }
                ]
            },
            {
                "chromeOptionCode": "BX",
                "oemOptionCode": "BX",
                "headerId": 10650,
                "headerName": "PRIMARY PAINT",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 68,
                "descriptions": [
                    {
                        "description": "Crystal Black Pearl",
                        "type": "PrimaryName"
                    }
                ],
                "msrp": "0.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "uniqueTypeFilter": "I",
                "rgbValue": "1D1D1D",
                "genericColors": [
                    {
                        "primary": true,
                        "name": "Black"
                    }
                ]
            },
            {
                "chromeOptionCode": "BK-I",
                "oemOptionCode": "BK",
                "headerId": 1347,
                "headerName": "SEAT TRIM",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "optionKindId": 72,
                "descriptions": [
                    {
                        "description": "Black, Cloth Seat Trim",
                        "type": "PrimaryName"
                    }
                ],
                "msrp": "0.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
                "affectingOptionCode": "",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1077
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
                "uniqueTypeFilter": "H"
            },
            {
                "chromeOptionCode": "GR",
                "oemOptionCode": "GR",
                "headerId": 1347,
                "headerName": "SEAT TRIM",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "optionKindId": 72,
                "descriptions": [
                    {
                        "description": "Gray, Cloth Seat Trim",
                        "type": "PrimaryName"
                    }
                ],
                "msrp": "0.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "optionFamilyCode": "",
                "optionFamilyName": "",
                "selectionState": "Unselected",
                "uniqueTypeFilter": "H"
            },
            {
                "chromeOptionCode": "IV",
                "oemOptionCode": "IV",
                "headerId": 1347,
                "headerName": "SEAT TRIM",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "optionKindId": 72,
                "descriptions": [
                    {
                        "description": "Ivory, Cloth Seat Trim",
                        "type": "PrimaryName"
                    }
                ],
                "msrp": "0.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "optionFamilyCode": "",
                "optionFamilyName": "",
                "selectionState": "Unselected",
                "uniqueTypeFilter": "H"
            },
            {
                "chromeOptionCode": "-PZEV",
                "oemOptionCode": "___",
                "headerId": 10750,
                "headerName": "ADDITIONAL EQUIPMENT",
                "consumerFriendlyHeaderId": 3,
                "consumerFriendlyHeaderName": "Mechanical",
                "optionKindId": 5,
                "descriptions": [
                    {
                        "description": "Partial Zero-Emission Vehicle (PZEV)",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "CVT models are LEV3-SULEV30-rated in California and states that have adopted California vehicle emission regulations. CVT models in non-CARB states and 6MT models in all 50 states are LEV3-ULEV125-rated.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "0.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "**-NOTE2",
                "oemOptionCode": "**",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 6,
                "consumerFriendlyHeaderName": "Processing-Other",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "*Manufacturer suggested retail prices of dealer options do not include installation costs. Please contact your local dealer for more information.*",
                        "type": "PrimaryName"
                    }
                ],
                "msrp": "0.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-IKTB",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 4,
                "consumerFriendlyHeaderName": "Package",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Blue Illumination Kit",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "-inc: illuminated door sill trim, Blue Armrest Illumination, Blue Console Illuminations, Armrest for Illumination Kit, Blue Interior Illumination",
                        "type": "Extended"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "724.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
                "affectingOptionCode": "",
                "specialEquipment": false,
                "extendedEquipment": false,
                "customEquipment": false,
                "optionPackage": true,
                "optionPackageContentOnly": false,
                "discontinued": false,
                "optionFamilyCode": "",
                "optionFamilyName": "",
                "selectionState": "Unselected",
                "uniqueTypeFilter": "0"
            },
            {
                "chromeOptionCode": "-REMST",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 3,
                "consumerFriendlyHeaderName": "Mechanical",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Remote Engine Start System II",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "-inc: 1 transmitter",
                        "type": "Extended"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Requires Remote Engine Start Attachment.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "244.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
                "affectingOptionCode": "",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1221
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
                "chromeOptionCode": "-RMSAT",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 3,
                "consumerFriendlyHeaderName": "Mechanical",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Remote Engine Start Attachment",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "155.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-EBHTR",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 3,
                "consumerFriendlyHeaderName": "Mechanical",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Engine Block Heater",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "80.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-WHLCK0",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Wheel Locks",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "56.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
                "affectingOptionCode": "",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1205
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
                "chromeOptionCode": "-WHLCKB",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Black Wheel Locks",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "81.41",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
                "affectingOptionCode": "",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1205
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
                "chromeOptionCode": "-RRBUMP",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Rear Bumper Applique",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "62.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-BDYCB",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Crystal Black Pearl Body Side Molding",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "217.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-BDYMS",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Modern Steel Metallic Body Side Molding",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "217.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-BDYLS",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Lunar Silver Metallic Body Side Molding",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "217.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-BDYAB",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Aegean Blue Metallic Body Side Molding",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "217.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-BDYRR",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Rallye Red Body Side Molding",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "217.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-BDYPW",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Platinum White Pearl Body Side Molding",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "217.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-BDYTY",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Tonic Yellow Body Side Molding",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "217.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-SUBCB",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Crystal Black Pearl Side Underbody Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Splash guards cannot be installed with side and rear underbody spoilers.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "615.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-SUBMS",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Modern Steel Metallic Side Underbody Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Splash guards cannot be installed with side and rear underbody spoilers.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "615.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-SUBLS",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Lunar Silver Metallic Side Underbody Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Splash guards cannot be installed with side and rear underbody spoilers.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "615.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-SUBAB",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Aegean Blue Metallic Side Underbody Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Splash guards cannot be installed with side and rear underbody spoilers.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "615.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-SUBRR",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Rallye Red Side Underbody Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Splash guards cannot be installed with side and rear underbody spoilers.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "615.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-SUBPW",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Platinum White Pearl Side Underbody Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Splash guards cannot be installed with side and rear underbody spoilers.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "615.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-SUBTY",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Tonic Yellow Side Underbody Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Splash guards cannot be installed with side and rear underbody spoilers.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "615.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-WNGCB",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Crystal Black Pearl Wing Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "442.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
                "affectingOptionCode": "",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1194
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
                "chromeOptionCode": "-WNGMS",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Modern Steel Metallic Wing Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "442.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
                "affectingOptionCode": "",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1194
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
                "chromeOptionCode": "-WNGLS",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Lunar Silver Metallic Wing Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "442.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
                "affectingOptionCode": "",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1194
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
                "chromeOptionCode": "-WNGAB",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Aegean Blue Metallic Wing Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "442.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
                "affectingOptionCode": "",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1194
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
                "chromeOptionCode": "-WNGRR",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Rallye Red Wing Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "442.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
                "affectingOptionCode": "",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1194
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
                "chromeOptionCode": "-WNGPW",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Platinum White Pearl Wing Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "442.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
                "affectingOptionCode": "",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1194
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
                "chromeOptionCode": "-WNGTY",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Tonic Yellow Wing Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "442.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
                "affectingOptionCode": "",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1194
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
                "chromeOptionCode": "-SPLGD",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Splash Guard Set",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "104.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-PUDLT",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Puddle Light",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "185.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-PCBP",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Crystal Black Pearl Touch-Up Paint",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "12.64",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-PMSM",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Modern Steel Metallic Touch-Up Paint",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "12.64",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-PLSM",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Lunar Silver Metallic Touch-Up Paint",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "12.64",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-PABM",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Aegean Blue Metallic Touch-Up Paint",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "12.64",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-PRR",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Rallye Red Touch-Up Paint",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "12.64",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-PPWP",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Platinum White Pearl Touch-Up Paint",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "12.64",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-PTYP",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Tonic Yellow Pearl Touch-Up Paint",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "12.64",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-CARCOV",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Car Cover",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "230.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-DRFILM",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Door Edge Film",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Door Edge Film and Door Edge Guards cannot be installed together.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "26.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-DEGCB",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Crystal Black Pearl Door Edge Guards",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Door Edge Film and Door Edge Guards cannot be installed together.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "59.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-DEGMS",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Modern Steel Metallic Door Edge Guards",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Door Edge Film and Door Edge Guards cannot be installed together.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "59.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-DEGLS",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Lunar Silver Metallic Door Edge Guards",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Door Edge Film and Door Edge Guards cannot be installed together.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "59.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-DEGAB",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Aegean Blue Metallic Door Edge Guards",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Door Edge Film and Door Edge Guards cannot be installed together.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "59.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-DEGRR",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Rallye Red Door Edge Guards",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Door Edge Film and Door Edge Guards cannot be installed together.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "59.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-DEGPW",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Platinum White Pearl Door Edge Guards",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Door Edge Film and Door Edge Guards cannot be installed together.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "59.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-DEGTY",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Tonic Yellow Door Edge Guards",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Door Edge Film and Door Edge Guards cannot be installed together.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "59.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-FUBCB",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Crystal Black Pearl Front Underbody Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "400.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-FUBMS",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Modern Steel Metallic Front Underbody Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "400.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-FUBLS",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Lunar Silver Metallic Front Underbody Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "400.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-FUBAB",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Aegean Blue Metallic Front Underbody Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "400.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-FUBRR",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Rallye Red Front Underbody Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "400.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-FUBPW",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Platinum White Pearl Front Underbody Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "400.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-FUBTY",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Tonic Yellow Front Underbody Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "400.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-GARR",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Rallye Red Grille Accent",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "285.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-GAEG",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Energy Green Grille Accent",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "285.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-GAVS",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Vivid Sky Blue Grille Accent",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "285.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-RUBCB",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Crystal Black Pearl Rear Underbody Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Splash guards cannot be installed with side and rear underbody spoilers.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "400.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-RUBMS",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Modern Steel Metallic Rear Underbody Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Splash guards cannot be installed with side and rear underbody spoilers.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "400.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-RUBLS",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Lunar Silver Metallic Rear Underbody Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Splash guards cannot be installed with side and rear underbody spoilers.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "400.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-RUBAB",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Aegean Blue Metallic Rear Underbody Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Splash guards cannot be installed with side and rear underbody spoilers.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "400.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-RUBRR",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Rallye Red Rear Underbody Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Splash guards cannot be installed with side and rear underbody spoilers.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "400.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-RUBPW",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Platinum White Pearl Rear Underbody Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Splash guards cannot be installed with side and rear underbody spoilers.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "400.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-RUBTY",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Tonic Yellow Rear Underbody Spoiler",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Splash guards cannot be installed with side and rear underbody spoilers.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "400.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-WHLLUG",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Black Wheel Lugs",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "225.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-WL170",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Wheels: 17\" Alloy (1)",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Tire replacement required.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "299.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
                "affectingOptionCode": "",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1123
                    },
                    {
                        "categoryFlag": "Deleted",
                        "categoryId": 1124
                    },
                    {
                        "categoryFlag": "Deleted",
                        "categoryId": 1208
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
                "chromeOptionCode": "-WL17B",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Wheels: 17\" Black Alloy (1)",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Tire replacement required.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "299.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
                "affectingOptionCode": "",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1123
                    },
                    {
                        "categoryFlag": "Deleted",
                        "categoryId": 1124
                    },
                    {
                        "categoryFlag": "Deleted",
                        "categoryId": 1208
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
                "chromeOptionCode": "-TRS17",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 10,
                "consumerFriendlyHeaderName": "Exterior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Tires: P215/50R17",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Verify pricing at www.hondatires.com.",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "*PRICE TO FOLLOW*",
                        "type": "PriceNote"
                    }
                ],
                "msrp": "0.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Unknown",
                "affectingOptionCode": "",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1092
                    },
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1097
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
                "chromeOptionCode": "-RMSTM",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Remote Engine Start Transmitter II",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "96.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-SPTPD",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Sport Pedal",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "89.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-MIRATT",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Automatic Dimming Mirror w/HomeLink Attachment",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "50.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-ADNMHL",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Automatic Dimming Mirror w/HomeLink",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Requires automatic dimming mirror attachment.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "357.57",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
                "affectingOptionCode": "",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1173
                    },
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1204
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
                "chromeOptionCode": "-BILMCN",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Blue Console Illuminations",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "250.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-BINTIL",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Blue Interior Illumination",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "125.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-ASFM",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "All Season Floor Mats",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "155.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
                "affectingOptionCode": "",
                "categories": [
                    {
                        "categoryFlag": "Clean",
                        "categoryId": 1055
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
                "chromeOptionCode": "-TMAT0",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Trunk Carpet Mat",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "99.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-TRAY0",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Trunk Tray",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "114.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-CGNET",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Cargo Net",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "49.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-CHRGR",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Wireless Cell Phone Charger",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Requires Wireless Cell Phone Charger Attachment.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "250.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-CHRGAT",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Wireless Cell Phone Charger Attachment",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "55.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-ARM",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Armrest for Illumination Kit",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    },
                    {
                        "description": "Requires Armrest Illumination Blue or Red.",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "199.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-BARI",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Blue Armrest Illumination",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "150.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-HOOK",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Cargo Hook",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "12.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-FRSTAK",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "First Aid Kit",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "30.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-ITMR",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Rallye Red Instrument Panel Interior Trim",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "250.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-ITMG",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Energy Green Instrument Panel Interior Trim",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "250.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-ITMBL",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Vivid Sky Blue Instrument Panel Interior Trim",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "250.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
                "chromeOptionCode": "-ITMBK",
                "oemOptionCode": "___",
                "headerId": 10159,
                "headerName": "DEALER INSTALLED OPTIONS",
                "consumerFriendlyHeaderId": 2,
                "consumerFriendlyHeaderName": "Interior",
                "optionKindId": 148,
                "descriptions": [
                    {
                        "description": "Berlina Black Instrument Panel Interior Trim",
                        "type": "PrimaryName"
                    },
                    {
                        "description": "(DIO)",
                        "type": "UnenforcedLogic"
                    }
                ],
                "msrp": "250.0",
                "invoice": "0.0",
                "frontWeight": "0.0",
                "rearWeight": "0.0",
                "priceState": "Actual",
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
            }
        ],
        "configurationCheckListItems": [
            {
                "itemName": "Primary Exterior Color",
                "optionKindId": 0,
                "chromeOptionCodes": [
                    "WX",
                    "SI",
                    "GY",
                    "BK-P",
                    "BS",
                    "RE",
                    "YF",
                    "WY",
                    "BX"
                ],
                "satisfied": true
            },
            {
                "itemName": "Seat Color",
                "optionKindId": 0,
                "chromeOptionCodes": [
                    "BK-I",
                    "GR",
                    "IV"
                ],
                "satisfied": false
            }
        ],
        "consumerInformation": {
            "warranty": "Basic: \r\n        3 Years/36,000 Miles\r\n\r\nDrivetrain: \r\n        5 Years/60,000 Miles\r\n\r\nCorrosion: \r\n        5 Years/Unlimited Miles\r\n\r\nRoadside Assistance: \r\n        3 Years/36,000 Miles"
        },
        "structuredConsumerInformation": [
            {
                "typeName": "Warranty",
                "items": [
                    {
                        "name": "Basic Years",
                        "sequence": 200,
                        "value": "3"
                    },
                    {
                        "name": "Basic Miles/km",
                        "sequence": 300,
                        "value": "36,000"
                    },
                    {
                        "name": "Drivetrain Years",
                        "sequence": 500,
                        "value": "5"
                    },
                    {
                        "name": "Drivetrain Miles/km",
                        "sequence": 600,
                        "value": "60,000"
                    },
                    {
                        "name": "Corrosion Years",
                        "sequence": 800,
                        "value": "5"
                    },
                    {
                        "name": "Corrosion Miles/km",
                        "sequence": 900,
                        "value": "Unlimited"
                    },
                    {
                        "name": "Roadside Assistance Years",
                        "sequence": 2300,
                        "value": "3"
                    },
                    {
                        "name": "Roadside Assistance Miles/km",
                        "sequence": 2400,
                        "value": "36,000"
                    }
                ]
            }
        ],
        "technicalSpecifications": [
            {
                "groupId": 0,
                "groupName": "Vehicle",
                "headerId": 48,
                "headerName": "Emissions",
                "titleId": 81,
                "titleName": "Tons/yr of CO2 Emissions @ 15K mi/year",
                "value": "5.4",
                "upgrade": false,
                "sequence": 1
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 15,
                "headerName": "Transmission",
                "titleId": 6,
                "titleName": "Drivetrain",
                "value": "Front Wheel Drive",
                "upgrade": false,
                "sequence": 6
            },
            {
                "groupId": 0,
                "groupName": "Vehicle",
                "headerId": 0,
                "headerName": "Vehicle",
                "titleId": 7,
                "titleName": "EPA Classification",
                "value": "Compact Cars",
                "upgrade": false,
                "sequence": 7
            },
            {
                "groupId": 5,
                "groupName": "Dimensions",
                "headerId": 1,
                "headerName": "Interior Dimensions",
                "titleId": 8,
                "titleName": "Passenger Capacity",
                "value": "5",
                "upgrade": false,
                "sequence": 8
            },
            {
                "groupId": 5,
                "groupName": "Dimensions",
                "headerId": 1,
                "headerName": "Interior Dimensions",
                "titleId": 9,
                "titleName": "Passenger Volume",
                "value": "91",
                "measurementUnit": "ft³",
                "upgrade": false,
                "sequence": 9
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 9,
                "headerName": "Weight Information",
                "titleId": 10,
                "titleName": "Base Curb Weight",
                "value": "2763",
                "measurementUnit": "lbs",
                "upgrade": false,
                "sequence": 10
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 14,
                "headerName": "Mileage",
                "titleId": 27,
                "titleName": "EPA Fuel Economy Est - Hwy",
                "value": "38",
                "measurementUnit": "MPG",
                "upgrade": false,
                "sequence": 23
            },
            {
                "groupId": 0,
                "groupName": "Vehicle",
                "headerId": 48,
                "headerName": "Emissions",
                "titleId": 21,
                "titleName": "EPA Greenhouse Gas Score",
                "value": "N/A",
                "upgrade": false,
                "sequence": 23
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 14,
                "headerName": "Mileage",
                "titleId": 28,
                "titleName": "Cruising Range - City",
                "value": "372.00",
                "measurementUnit": "mi",
                "upgrade": true,
                "sequence": 24
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 14,
                "headerName": "Mileage",
                "titleId": 26,
                "titleName": "EPA Fuel Economy Est - City",
                "value": "30",
                "measurementUnit": "MPG",
                "upgrade": false,
                "sequence": 24
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 14,
                "headerName": "Mileage",
                "titleId": 25,
                "titleName": "Fuel Economy Est-Combined",
                "value": "33",
                "measurementUnit": "MPG",
                "upgrade": false,
                "sequence": 24
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 14,
                "headerName": "Mileage",
                "titleId": 29,
                "titleName": "Cruising Range - Hwy",
                "value": "471.20",
                "measurementUnit": "mi",
                "upgrade": true,
                "sequence": 25
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 8,
                "headerName": "Trailering",
                "titleId": 31,
                "titleName": "Dead Weight Hitch - Max Trailer Wt.",
                "value": "N/A",
                "measurementUnit": "lbs",
                "upgrade": false,
                "sequence": 27
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 8,
                "headerName": "Trailering",
                "titleId": 32,
                "titleName": "Dead Weight Hitch - Max Tongue Wt.",
                "value": "N/A",
                "measurementUnit": "lbs",
                "upgrade": false,
                "sequence": 28
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 8,
                "headerName": "Trailering",
                "titleId": 33,
                "titleName": "Wt Distributing Hitch - Max Trailer Wt.",
                "value": "N/A",
                "measurementUnit": "lbs",
                "upgrade": false,
                "sequence": 29
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 8,
                "headerName": "Trailering",
                "titleId": 34,
                "titleName": "Wt Distributing Hitch - Max Tongue Wt.",
                "value": "N/A",
                "measurementUnit": "lbs",
                "upgrade": false,
                "sequence": 30
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 13,
                "headerName": "Engine",
                "titleId": 40,
                "titleName": "Engine Order Code",
                "value": "N/A",
                "upgrade": false,
                "sequence": 34
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 13,
                "headerName": "Engine",
                "titleId": 41,
                "titleName": "Engine Type",
                "value": "Regular Unleaded I-4",
                "upgrade": false,
                "sequence": 35
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 13,
                "headerName": "Engine",
                "titleId": 42,
                "titleName": "Displacement",
                "value": "2.0 L/122",
                "upgrade": false,
                "sequence": 36
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 13,
                "headerName": "Engine",
                "titleId": 43,
                "titleName": "Fuel System",
                "value": "Sequential MPI",
                "upgrade": false,
                "sequence": 37
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 13,
                "headerName": "Engine",
                "titleId": 48,
                "titleName": "SAE Net Horsepower @ RPM",
                "value": "158 @ 6500",
                "upgrade": false,
                "sequence": 38
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 13,
                "headerName": "Engine",
                "titleId": 49,
                "titleName": "SAE Net Torque @ RPM",
                "value": "138 @ 4200",
                "upgrade": false,
                "sequence": 39
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 15,
                "headerName": "Transmission",
                "titleId": 51,
                "titleName": "Trans Order Code",
                "value": "N/A",
                "upgrade": false,
                "sequence": 40
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 15,
                "headerName": "Transmission",
                "titleId": 52,
                "titleName": "Trans Type",
                "value": "1",
                "upgrade": false,
                "sequence": 41
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 15,
                "headerName": "Transmission",
                "titleId": 53,
                "titleName": "Trans Description Cont.",
                "value": "CVT w/OD",
                "upgrade": false,
                "sequence": 42
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 15,
                "headerName": "Transmission",
                "titleId": 54,
                "titleName": "Trans Description Cont. Again",
                "value": "N/A",
                "upgrade": false,
                "sequence": 43
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 15,
                "headerName": "Transmission",
                "titleId": 56,
                "titleName": "First Gear Ratio (:1)",
                "value": "2.53 - 0.41",
                "upgrade": false,
                "sequence": 44
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 15,
                "headerName": "Transmission",
                "titleId": 62,
                "titleName": "Reverse Ratio (:1)",
                "value": "2.71",
                "upgrade": false,
                "sequence": 50
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 15,
                "headerName": "Transmission",
                "titleId": 65,
                "titleName": "Clutch Size",
                "value": "N/A",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 52
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 15,
                "headerName": "Transmission",
                "titleId": 69,
                "titleName": "Final Drive Axle Ratio (:1)",
                "value": "3.94",
                "upgrade": false,
                "sequence": 56
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 12,
                "headerName": "Electrical",
                "titleId": 76,
                "titleName": "Cold Cranking Amps @ 0° F (Primary)",
                "value": "N/A",
                "upgrade": false,
                "sequence": 61
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 12,
                "headerName": "Electrical",
                "titleId": 84,
                "titleName": "Maximum Alternator Capacity (amps)",
                "value": "N/A",
                "upgrade": false,
                "sequence": 66
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 11,
                "headerName": "Cooling System",
                "titleId": 91,
                "titleName": "Total Cooling System Capacity",
                "value": "N/A",
                "measurementUnit": "qts",
                "upgrade": false,
                "sequence": 69
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 17,
                "headerName": "Suspension",
                "titleId": 105,
                "titleName": "Suspension Type - Front",
                "value": "Strut",
                "upgrade": false,
                "sequence": 80
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 17,
                "headerName": "Suspension",
                "titleId": 106,
                "titleName": "Suspension Type - Rear",
                "value": "Multi-Link",
                "upgrade": false,
                "sequence": 81
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 17,
                "headerName": "Suspension",
                "titleId": 107,
                "titleName": "Suspension Type - Front (Cont.)",
                "value": "Strut",
                "upgrade": false,
                "sequence": 82
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 17,
                "headerName": "Suspension",
                "titleId": 108,
                "titleName": "Suspension Type - Rear (Cont.)",
                "value": "Multi-Link",
                "upgrade": false,
                "sequence": 83
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 14,
                "headerName": "Mileage",
                "titleId": 800,
                "titleName": "EPA MPG Equivalent - City",
                "value": "N/A",
                "upgrade": false,
                "sequence": 100
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 17,
                "headerName": "Suspension",
                "titleId": 131,
                "titleName": "Shock Absorber Diameter - Front",
                "value": "N/A",
                "measurementUnit": "mm",
                "upgrade": false,
                "sequence": 105
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 17,
                "headerName": "Suspension",
                "titleId": 132,
                "titleName": "Shock Absorber Diameter - Rear",
                "value": "N/A",
                "measurementUnit": "mm",
                "upgrade": false,
                "sequence": 106
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 17,
                "headerName": "Suspension",
                "titleId": 133,
                "titleName": "Stabilizer Bar Diameter - Front",
                "value": "N/A",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 107
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 17,
                "headerName": "Suspension",
                "titleId": 134,
                "titleName": "Stabilizer Bar Diameter - Rear",
                "value": "N/A",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 108
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 7,
                "headerName": "Tires",
                "titleId": 137,
                "titleName": "Front Tire Order Code",
                "value": "N/A",
                "upgrade": false,
                "sequence": 109
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 7,
                "headerName": "Tires",
                "titleId": 138,
                "titleName": "Rear Tire Order Code",
                "value": "N/A",
                "upgrade": false,
                "sequence": 110
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 7,
                "headerName": "Tires",
                "titleId": 139,
                "titleName": "Spare Tire Order Code",
                "value": "N/A",
                "upgrade": false,
                "sequence": 111
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 7,
                "headerName": "Tires",
                "titleId": 140,
                "titleName": "Front Tire Size",
                "value": "P215/55HR16",
                "upgrade": false,
                "sequence": 112
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 7,
                "headerName": "Tires",
                "titleId": 141,
                "titleName": "Rear Tire Size",
                "value": "P215/55HR16",
                "upgrade": false,
                "sequence": 113
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 7,
                "headerName": "Tires",
                "titleId": 142,
                "titleName": "Spare Tire Size",
                "value": "Compact",
                "upgrade": false,
                "sequence": 114
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 10,
                "headerName": "Wheels",
                "titleId": 156,
                "titleName": "Front Wheel Size",
                "value": "16 X 7",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 121
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 10,
                "headerName": "Wheels",
                "titleId": 157,
                "titleName": "Rear Wheel Size",
                "value": "16 X 7",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 122
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 10,
                "headerName": "Wheels",
                "titleId": 158,
                "titleName": "Spare Wheel Size",
                "value": "Compact",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 123
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 10,
                "headerName": "Wheels",
                "titleId": 165,
                "titleName": "Front Wheel Material",
                "value": "Aluminum",
                "upgrade": false,
                "sequence": 130
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 10,
                "headerName": "Wheels",
                "titleId": 166,
                "titleName": "Rear Wheel Material",
                "value": "Aluminum",
                "upgrade": false,
                "sequence": 131
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 10,
                "headerName": "Wheels",
                "titleId": 167,
                "titleName": "Spare Wheel Material",
                "value": "Steel",
                "upgrade": false,
                "sequence": 132
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 6,
                "headerName": "Steering",
                "titleId": 176,
                "titleName": "Steering Type",
                "value": "Rack-Pinion",
                "upgrade": false,
                "sequence": 133
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 6,
                "headerName": "Steering",
                "titleId": 178,
                "titleName": "Steering Ratio (:1), Overall",
                "value": "N/A",
                "upgrade": false,
                "sequence": 134
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 6,
                "headerName": "Steering",
                "titleId": 181,
                "titleName": "Lock to Lock Turns (Steering)",
                "value": "N/A",
                "upgrade": false,
                "sequence": 137
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 6,
                "headerName": "Steering",
                "titleId": 184,
                "titleName": "Turning Diameter - Curb to Curb",
                "value": "35.4",
                "measurementUnit": "ft",
                "upgrade": false,
                "sequence": 138
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 6,
                "headerName": "Steering",
                "titleId": 185,
                "titleName": "Turning Diameter - Wall to Wall",
                "value": "N/A",
                "measurementUnit": "ft",
                "upgrade": false,
                "sequence": 139
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 4,
                "headerName": "Brakes",
                "titleId": 186,
                "titleName": "Brake Type",
                "value": "4-Wheel Disc",
                "upgrade": false,
                "sequence": 140
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 4,
                "headerName": "Brakes",
                "titleId": 187,
                "titleName": "Brake ABS System",
                "value": "4-Wheel",
                "upgrade": false,
                "sequence": 141
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 4,
                "headerName": "Brakes",
                "titleId": 188,
                "titleName": "Brake ABS System (Second Line)",
                "value": "N/A",
                "upgrade": false,
                "sequence": 142
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 4,
                "headerName": "Brakes",
                "titleId": 190,
                "titleName": "Disc - Front (Yes or   )",
                "value": "Yes",
                "upgrade": false,
                "sequence": 144
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 4,
                "headerName": "Brakes",
                "titleId": 191,
                "titleName": "Disc - Rear (Yes or   )",
                "value": "Yes",
                "upgrade": false,
                "sequence": 145
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 4,
                "headerName": "Brakes",
                "titleId": 192,
                "titleName": "Front Brake Rotor Diam x Thickness",
                "value": "11.1",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 146
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 4,
                "headerName": "Brakes",
                "titleId": 193,
                "titleName": "Rear Brake Rotor Diam x Thickness",
                "value": "10.2",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 147
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 4,
                "headerName": "Brakes",
                "titleId": 196,
                "titleName": "Drum - Rear (Yes or   )",
                "value": "N/A",
                "upgrade": false,
                "sequence": 150
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 4,
                "headerName": "Brakes",
                "titleId": 197,
                "titleName": "Rear Drum Diam x Width",
                "value": "N/A",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 151
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 5,
                "headerName": "Fuel Tank",
                "titleId": 206,
                "titleName": "Fuel Tank Capacity, Approx",
                "value": "12.4",
                "measurementUnit": "gal",
                "upgrade": false,
                "sequence": 155
            },
            {
                "groupId": 4,
                "groupName": "Chassis",
                "headerId": 5,
                "headerName": "Fuel Tank",
                "titleId": 207,
                "titleName": "Aux Fuel Tank Capacity, Approx",
                "value": "N/A",
                "measurementUnit": "gal",
                "upgrade": false,
                "sequence": 156
            },
            {
                "groupId": 5,
                "groupName": "Dimensions",
                "headerId": 1,
                "headerName": "Interior Dimensions",
                "titleId": 256,
                "titleName": "Front Head Room",
                "value": "38.2",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 161
            },
            {
                "groupId": 5,
                "groupName": "Dimensions",
                "headerId": 1,
                "headerName": "Interior Dimensions",
                "titleId": 257,
                "titleName": "Front Leg Room",
                "value": "42.3",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 162
            },
            {
                "groupId": 5,
                "groupName": "Dimensions",
                "headerId": 1,
                "headerName": "Interior Dimensions",
                "titleId": 258,
                "titleName": "Front Shoulder Room",
                "value": "56.9",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 163
            },
            {
                "groupId": 5,
                "groupName": "Dimensions",
                "headerId": 1,
                "headerName": "Interior Dimensions",
                "titleId": 259,
                "titleName": "Front Hip Room",
                "value": "54.1",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 164
            },
            {
                "groupId": 5,
                "groupName": "Dimensions",
                "headerId": 1,
                "headerName": "Interior Dimensions",
                "titleId": 261,
                "titleName": "Second Head Room",
                "value": "34.6",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 165
            },
            {
                "groupId": 5,
                "groupName": "Dimensions",
                "headerId": 1,
                "headerName": "Interior Dimensions",
                "titleId": 262,
                "titleName": "Second Leg Room",
                "value": "35.9",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 166
            },
            {
                "groupId": 5,
                "groupName": "Dimensions",
                "headerId": 1,
                "headerName": "Interior Dimensions",
                "titleId": 263,
                "titleName": "Second Shoulder Room",
                "value": "52.6",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 167
            },
            {
                "groupId": 5,
                "groupName": "Dimensions",
                "headerId": 1,
                "headerName": "Interior Dimensions",
                "titleId": 264,
                "titleName": "Second Hip Room",
                "value": "48.1",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 168
            },
            {
                "groupId": 5,
                "groupName": "Dimensions",
                "headerId": 2,
                "headerName": "Exterior Dimensions",
                "titleId": 301,
                "titleName": "Wheelbase",
                "value": "106.3",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 181
            },
            {
                "groupId": 5,
                "groupName": "Dimensions",
                "headerId": 2,
                "headerName": "Exterior Dimensions",
                "titleId": 304,
                "titleName": "Length, Overall",
                "value": "177.3",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 184
            },
            {
                "groupId": 5,
                "groupName": "Dimensions",
                "headerId": 2,
                "headerName": "Exterior Dimensions",
                "titleId": 305,
                "titleName": "Width, Max w/o mirrors",
                "value": "70.9",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 185
            },
            {
                "groupId": 5,
                "groupName": "Dimensions",
                "headerId": 2,
                "headerName": "Exterior Dimensions",
                "titleId": 306,
                "titleName": "Height, Overall",
                "value": "54.9",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 186
            },
            {
                "groupId": 5,
                "groupName": "Dimensions",
                "headerId": 2,
                "headerName": "Exterior Dimensions",
                "titleId": 309,
                "titleName": "Track Width, Front",
                "value": "60.9",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 187
            },
            {
                "groupId": 5,
                "groupName": "Dimensions",
                "headerId": 2,
                "headerName": "Exterior Dimensions",
                "titleId": 310,
                "titleName": "Track Width, Rear",
                "value": "61.5",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 188
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 14,
                "headerName": "Mileage",
                "titleId": 801,
                "titleName": "EPA MPG Equivalent - Hwy",
                "value": "N/A",
                "upgrade": false,
                "sequence": 200
            },
            {
                "groupId": 5,
                "groupName": "Dimensions",
                "headerId": 2,
                "headerName": "Exterior Dimensions",
                "titleId": 326,
                "titleName": "Min Ground Clearance",
                "value": "N/A",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 202
            },
            {
                "groupId": 5,
                "groupName": "Dimensions",
                "headerId": 2,
                "headerName": "Exterior Dimensions",
                "titleId": 369,
                "titleName": "Liftover Height",
                "value": "N/A",
                "measurementUnit": "in",
                "upgrade": false,
                "sequence": 223
            },
            {
                "groupId": 5,
                "groupName": "Dimensions",
                "headerId": 3,
                "headerName": "Cargo Area Dimensions",
                "titleId": 379,
                "titleName": "Trunk Volume",
                "value": "12.1",
                "measurementUnit": "ft³",
                "upgrade": false,
                "sequence": 232
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 14,
                "headerName": "Mileage",
                "titleId": 802,
                "titleName": "EPA MPG Equivalent - Combined",
                "value": "N/A",
                "upgrade": false,
                "sequence": 300
            },
            {
                "groupId": 6,
                "groupName": "Powertrain",
                "headerId": 14,
                "headerName": "Mileage",
                "titleId": 803,
                "titleName": "Battery Range",
                "value": "N/A",
                "measurementUnit": "mi",
                "upgrade": false,
                "sequence": 400
            }
        ],
        "editorialContentSources": [
            {
                "sourceName": "Chrome Reviews",
                "editorialContents": [
                    {
                        "description": "PROS",
                        "value": "Responsive and efficient drivetrains; roomy interior; standard high-tech features; extensive safety options",
                        "mimeType": "text/plain"
                    },
                    {
                        "description": "VALUE_WRITEUP",
                        "value": "The Civic has topped the 'best compact car' lists for decades. With its consistent balance of quality, performance and practicality, that should come as no surprise. The 2016 model-year redesign made big improvements with extensive standard equipment, a high-quality stylish interior and a new powertrain lineup that comes at a range of price points intended to have something for everyone.",
                        "mimeType": "text/plain"
                    },
                    {
                        "description": "MODEL_HIGHLIGHTS",
                        "value": "The current generation Honda Civic was offered initially only in sedan form, but a coupe version appeared later in the model year, and now finally a hatchback version has appeared. With plenty of trim levels and a variety of body styles, there's a Civic for nearly every need.<p><p>The base LX comes well equipped leaving almost nothing out, it includes anti-lock brakes, power-adjustable mirrors, 4-speaker 160-watt CD/MP3 stereo with Bluetooth, power windows and locks and remote keyless entry. <p><p>EX models add 17-inch alloy wheels, an automatic transmission, remote start, an upgraded 8-speaker stereo as well as LaneWatch blind spot monitoring as well as Apple CarPlay and Android Auto smartphone integration. Leather seats, steering wheel and shift-knob are optional as are an 8-way power-adjustable driver seat.<p><p>The Touring Civic has 18-inch machined alloy wheels, rain-sensing wipers, a 450-watt audio system that also includes a 7-inch touchscreen that also includes all of the modern smartphone connectivity. Leather seats are standard on the Touring and they are heated and power-adjustable. Dynamic cruise control, LED headlights and dual-zone climate control are also included.<p><p>LX, Sport Sedan, and Sport Coupes receive a 158-horsepower, 2.0L i-VTEC 4-cylinder engine. <p>The LX hatchback, EX, EX-L and Touring models are equipped with a 1.5L turbo i-VTEC engine that produces 174 horsepower and 162 pound feet of torque, while the Sport and Sport Touring Hatchback produce 180 horsepower and 177 pound feet of torque. Continuously Variable Transmission (CVT) equipped vehicles extend gas mileage up to 42 mpg when paired with the 1.5L turbocharged engine. <p><p>Civic Hatchbacks are also available in the Sport Touring and SI trim. Sport Touring adds automatic LED headlights, heated rear outboard seats, navigation, an aero kit and sport pedals.<p><p>Si equipped vehicles get a power bump from the 1.5L turbo engine to 205 horsepower and 192 foot pounds of torque. <p><p>Safety takes a strong presence in the new Civic. Of course it includes front and side airbags, but low tire pressure warning, backup camera and stability control are also standard on every Civic. <p>Honda Sensing system, is also standard for all but the high-performance trims. It's a suite of safety features that includes Lane Keep Assist, which will monitor and can even nudge the vehicle back into its lane, Blind Spot sensors and Collision Mitigation that will detect an impending accident and can even apply the brakes if needed.",
                        "mimeType": "text/plain"
                    },
                    {
                        "description": "MODEL_NEWS",
                        "value": "The 2019 Honda Civic is refreshed for the new year adding a new Sport trim for Sedan and Coupe models. Both feature a refreshed front fascia, an updated HondaLink infotainment system with easier to use controls and is offered in either the 2.0L naturally aspirated 4-cylinder or 1.5L turbo 4-cylinder engine. The 1.5L engine is no longer available with a 6-speed manual transmission. Honda Sensing is now standard across the entire lineup.",
                        "mimeType": "text/plain"
                    }
                ]
            }
        ]
    }
}

export const StyleFactorySiennaToyota = () => {

  return {
    "style": {
      "model": {
        "modelYear": 2020,
        "divisionId": 39,
        "divisionName": "Toyota",
        "subdivisionId": 9241,
        "subdivisionName": "Toyota Cars",
        "modelId": 32191,
        "modelName": "Sienna",
        "dataReleaseDate": "2019-07-14T07:00:00.000Z",
        "initialPriceDate": "2019-01-30T08:00:00.000Z",
        "dataEffectiveDate": "2019-04-01T07:00:00.000Z",
        "dataComment": ""
      },
      "styleId": 405044,
      "styleName": "XLE Premium FWD 8-Passenger (Natl)",
      "styleNameWithoutTrim": "FWD 8-Passenger (Natl)",
      "trimName": "XLE Premium",
      "manufacturerModelCode": "5349",
      "styleGroupStyleIds": [
        405022,
        405021,
        405020,
        405031,
        405030,
        405029,
        405028,
        405027,
        405026,
        405034,
        405033,
        405032,
        405043,
        405042,
        405041,
        405025,
        405024,
        405023,
        405046,
        405045,
        405044,
        405037,
        405036,
        405035,
        405040,
        405039,
        405038,
        405049,
        405048,
        405047,
        405052,
        405051,
        405050,
        405055,
        405054,
        405053,
        405058,
        405057,
        405056,
        405064,
        405063,
        405062,
        405067,
        405066,
        405065,
        405061,
        405060,
        405059,
        405070,
        405069,
        405068,
        405073,
        405072,
        405071
      ],
      "styleGroupBase": false,
      "baseMsrp": "41255.0",
      "baseInvoice": "37956.0",
      "destination": "1095.0",
      "trueBasePrice": true,
      "priceState": "Actual",
      "bodyTypes": [
        {
          "bodyTypeId": 14,
          "bodyTypeName": "Mini-van, Passenger",
          "primary": true
        }
      ],
      "passengerDoors": 4,
      "marketClassId": 62,
      "marketClassName": "2WD Minivans",
      "stockPhotoUrl": "http://media.carbook.com/autoBuilderData/stockPhotos/29615.jpg",
      "consumerFriendlyModelName": "Sienna",
      "consumerFriendlyStyleName": "XLE Premium FWD 8-Passenger (Natl)",
      "consumerFriendlyDrivetrain": "Front Wheel Drive",
      "consumerFriendlyBodyType": "Mini-van, Passenger",
      "configurationState": {
        "dataVersion": "2019-07-14T07:00:00.000Z",
        "styleId": 405044,
        "fullyConfigured": true,
        "orderAvailability": "Retail",
        "specialEquipmentEnabled": true,
        "optionOrderLogicDisabled": true,
        "initialPricingEnabled": false,
        "chromeOptionCodeToggleStream": [
          "FE-0",
          "XL",
          "070-0",
          "LC42"
        ],
        "selectedChromeOptionCodes": [
          "FE-0",
          "LC42",
          "070-0",
          "XL"
        ],
        "serializedValue": "H4sIAAAAAAAAAGNgYJBjYKjdz8CmZ8LAlJrHwBQazAASQ+EzZr93/9nAyMgIlGJgYWBxc9U1YGCK8GFgNTA3ADJZfJxNjP4DAQMEsDIwKysrAxmMEC5EFYwL0Q7ngfTCeSBDYWyQOQYMjgzeDD4MvgxIwtgAI1QSAIHS7yHRAAAA"
      }
    },
    "configuredOptionsMsrp": "0.0",
    "configuredOptionsInvoice": "0.0",
    "configuredCustomEquipmentMsrp": "0.0",
    "configuredCustomEquipmentInvoice": "0.0",
    "advertisingAndAdjustmentsMsrp": "0.0",
    "advertisingAndAdjustmentsInvoice": "0.0",
    "configuredTotalMsrp": "42350.0",
    "configuredTotalInvoice": "39051.0",
    "configuredPriceState": "Actual",
    "standardEquipment": [
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 3,
        "consumerFriendlyHeaderName": "Mechanical",
        "description": "Engine: 3.5L DOHC V6 SMPI",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1051
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1059
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 3,
        "consumerFriendlyHeaderName": "Mechanical",
        "description": "Transmission w/Sequential Shift Control",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1195
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 3,
        "consumerFriendlyHeaderName": "Mechanical",
        "description": "Transmission: Electronic 8-Speed Automatic",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1130
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1195
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1220
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 3,
        "consumerFriendlyHeaderName": "Mechanical",
        "description": "Front-Wheel Drive",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1042
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 3,
        "consumerFriendlyHeaderName": "Mechanical",
        "description": "Axle Ratio: 3.003",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 3,
        "consumerFriendlyHeaderName": "Mechanical",
        "description": "Engine Oil Cooler",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 3,
        "consumerFriendlyHeaderName": "Mechanical",
        "description": "Battery w/Run Down Protection",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 3,
        "consumerFriendlyHeaderName": "Mechanical",
        "description": "1290lbs. Maximum Payload",
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 3,
        "consumerFriendlyHeaderName": "Mechanical",
        "description": "GVWR: 5,995 lbs",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 3,
        "consumerFriendlyHeaderName": "Mechanical",
        "description": "Gas-Pressurized Shock Absorbers",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 3,
        "consumerFriendlyHeaderName": "Mechanical",
        "description": "Front And Rear Anti-Roll Bars",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 3,
        "consumerFriendlyHeaderName": "Mechanical",
        "description": "Electric Power-Assist Speed-Sensing Steering",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1084
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 3,
        "consumerFriendlyHeaderName": "Mechanical",
        "description": "20 Gal. Fuel Tank",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 3,
        "consumerFriendlyHeaderName": "Mechanical",
        "description": "Single Stainless Steel Exhaust",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 3,
        "consumerFriendlyHeaderName": "Mechanical",
        "description": "Strut Front Suspension w/Coil Springs",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 3,
        "consumerFriendlyHeaderName": "Mechanical",
        "description": "Torsion Beam Rear Suspension w/Coil Springs",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 3,
        "consumerFriendlyHeaderName": "Mechanical",
        "description": "4-Wheel Disc Brakes w/4-Wheel ABS, Front Vented Discs and Brake Assist",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1018
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1020
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1228
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Wheels w/Machined Accents",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Wheels: 17\" Alloy",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1123
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Tires: P235/60R17 AS",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1088
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1093
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Steel Spare Wheel",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Compact Spare Tire Stored Underbody w/Crankdown",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1098
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Clearcoat Paint",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Express Open/Close Sliding And Tilting Glass 1st Row Sunroof w/Sunshade",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1069
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1132
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Body-Colored Front Bumper",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Body-Colored Rear Step Bumper",
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Black Side Windows Trim",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Chrome Door Handles",
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Body-Colored Power Heated Side Mirrors w/Convex Spotter and Manual Folding",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1064
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1065
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Fixed Rear Window w/Fixed Interval Wiper and Defroster",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1034
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Deep Tinted Glass",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1158
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Variable Intermittent Wipers w/Heated Wiper Park",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1127
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1159
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Front Windshield -inc: Sun Visor Strip",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Fully Galvanized Steel Panels",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Lip Spoiler",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1194
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Metal-Look Grille w/Chrome Surround",
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Power Sliding Rear Doors",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1037
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1038
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1222
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1223
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Power Liftgate Rear Cargo Access",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1198
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1225
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Tailgate/Rear Door Lock Included w/Power Door Locks",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1063
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Roof Rack Rails Only",
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Fully Automatic Projector Beam Halogen Auto High-Beam Daytime Running Lights Preference Setting Headlamps w/Delay-Off",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1061
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1169
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Front Fog Lamps",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1151
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "description": "Door Auto-Latch",
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 1,
        "consumerFriendlyHeaderName": "Entertainment",
        "description": "Radio w/Seek-Scan, In-Dash Mounted Single CD, MP3 Player, Clock, Speed Compensated Volume Control, Aux Audio Input Jack, Steering Wheel Controls, Radio Data System, Entune 3.0 External Memory Control and Internal Memory",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1300
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
            "categoryId": 1161
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1230
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 1,
        "consumerFriendlyHeaderName": "Entertainment",
        "description": "Radio: Entune 3.0 Audio Plus -inc: touch-screen display, navigation, Apple CarPlay, Amazon Alexa compatibility and 6 speakers",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1014
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1066
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1149
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1299
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1348
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1381
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 1,
        "consumerFriendlyHeaderName": "Entertainment",
        "description": "Window Grid And Roof Mount Diversity Antenna",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 1,
        "consumerFriendlyHeaderName": "Entertainment",
        "description": "Streaming Audio",
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 1,
        "consumerFriendlyHeaderName": "Entertainment",
        "description": "2 Wireless Headphones",
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 1,
        "consumerFriendlyHeaderName": "Entertainment",
        "description": "2 LCD Monitors In The Front",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 1,
        "consumerFriendlyHeaderName": "Entertainment",
        "description": "Bluetooth Wireless Phone Connectivity",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1211
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 1,
        "consumerFriendlyHeaderName": "Entertainment",
        "description": "Real-Time Traffic Display",
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Driver Seat",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Passenger Seat",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Removable 40-20-40 Folding Split-Bench Front Facing Manual Reclining Fold-Up Cushion Rear Seat w/Manual Fore/Aft",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1076
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1304
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Driver And Front Passenger Armrests and Rear Center Armrest Rear Seat Mounted Armrest",
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Manual Tilt/Telescoping Steering Column",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1087
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Gauges -inc: Speedometer, Odometer, Engine Coolant Temp, Tachometer, Trip Odometer and Trip Computer",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1203
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Power Rear Windows, Power Vented 3rd Row Windows and w/Manual Sun Blinds",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1126
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Entune 3.0 Mobile Hotspot Internet Access",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1324
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Heated Front Bucket Seats -inc: 8-way power driver and 4-way power passenger seats",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1074
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1075
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1082
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1156
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1189
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Fixed 60-40 Split-Bench Leatherette 3rd Row Seat Front, Manual Recline, Manual Fold Into Floor, 3 Manual and Adjustable Head Restraints",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1073
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Leather/Metal-Look Steering Wheel",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1192
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Illuminated Front Cupholder",
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Rear Cupholder",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Compass",
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Valet Function",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Remote Releases -Inc: Power Cargo Access and Mechanical Fuel",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1198
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Proximity Key For Doors And Push Button Start",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1062
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1063
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1229
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Remote Keyless Entry w/Integrated Key Transmitter, 2 Door Curb/Courtesy, Illuminated Entry, Illuminated Ignition Switch and Panic Button",
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
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "HomeLink Garage Door Transmitter",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1204
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Cruise Control w/Steering Wheel Controls",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1033
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Distance Pacing",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1346
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Dual Zone Front Automatic Air Conditioning",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1009
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1010
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1011
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Rear HVAC w/Separate Controls",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1011
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1012
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "HVAC -inc: Underseat Ducts and Headliner/Pillar Ducts",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Locking Glove Box",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Driver Foot Rest",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Full Cloth Headliner",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Interior Trim -inc: Simulated Wood Instrument Panel Insert, Simulated Wood Door Panel Insert, Simulated Wood Console Insert and Chrome/Metal-Look Interior Accents",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1170
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Leatherette Door Trim Insert",
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Leather/Simulated Wood Gear Shift Knob",
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Leather Seat Material",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1078
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Driver And Passenger Visor Vanity Mirrors w/Driver And Passenger Illumination",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1175
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1176
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1177
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1178
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Day-Night Auto-Dimming Rearview Mirror",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1173
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Partial Floor Console w/Covered Storage, Mini Overhead Console w/Storage, Conversation Mirror, Rear (removable) Console w/Storage and 4 12V DC Power Outlets",
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Front And Rear Map Lights",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Fade-To-Off Interior Lighting",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Full Carpet Floor Covering",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Carpet Floor Trim",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Trunk/Hatch Auto-Latch",
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Cargo Space Lights",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "FOB Controls -inc: Trunk/Hatch/Tailgate",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1229
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "4-Corner/Back Clearance & Back Sonar",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1180
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Dual-View Blu-Ray DVD Entertainment Center -inc: 16.4\" display, RCA jacks, SD card and HDMI inputs, two 120V AC power outlets, and remote",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1215
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Instrument Panel Covered Bin, Covered Dashboard Storage, Interior Concealed Storage, Driver / Passenger And Rear Door Bins",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Power 1st Row Windows w/Front And Rear 1-Touch Up/Down",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1126
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Delayed Accessory Power",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Power Door Locks w/Autolock Feature",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1063
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Analog Display",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Trip Computer",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1203
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Outside Temp Gauge",
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Manual Adjustable Front Head Restraints and Manual Adjustable Rear Head Restraints",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "2 Seatback Storage Pockets",
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Seats w/Leatherette Back Material",
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Engine Immobilizer",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1166
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Perimeter Alarm",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1013
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "Air Filtration",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "description": "4 12V DC Power Outlets",
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 9,
        "consumerFriendlyHeaderName": "Safety-Mechanical",
        "description": "Electronic Stability Control (ESC)",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1100
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1227
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 9,
        "consumerFriendlyHeaderName": "Safety-Mechanical",
        "description": "ABS And Driveline Traction Control",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1100
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 7,
        "consumerFriendlyHeaderName": "Safety-Exterior",
        "description": "Side Impact Beams",
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 8,
        "consumerFriendlyHeaderName": "Safety-Interior",
        "description": "Dual Stage Driver And Passenger Seat-Mounted Side Airbags",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1005
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 8,
        "consumerFriendlyHeaderName": "Safety-Interior",
        "description": "Lane Departure Alert (LDA) w/Steering Assist Lane Keeping Assist",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1314
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1323
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 8,
        "consumerFriendlyHeaderName": "Safety-Interior",
        "description": "Lane Departure Alert (LDA) w/Steering Assist Lane Departure Warning",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1314
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 8,
        "consumerFriendlyHeaderName": "Safety-Interior",
        "description": "Toyota Safety Sense P and Rear Cross-Traffic Alert (RCTA)",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1322
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 8,
        "consumerFriendlyHeaderName": "Safety-Interior",
        "description": "Blind Spot Monitor (BSM) Blind Spot Sensor",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1312
          }
        ],
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 8,
        "consumerFriendlyHeaderName": "Safety-Interior",
        "description": "Low Tire Pressure Warning",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1202
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 8,
        "consumerFriendlyHeaderName": "Safety-Interior",
        "description": "Dual Stage Driver And Passenger Front Airbags",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1001
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1002
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 8,
        "consumerFriendlyHeaderName": "Safety-Interior",
        "description": "Curtain 1st, 2nd And 3rd Row Airbags",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1007
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1008
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 8,
        "consumerFriendlyHeaderName": "Safety-Interior",
        "description": "Airbag Occupancy Sensor",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1310
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 8,
        "consumerFriendlyHeaderName": "Safety-Interior",
        "description": "Driver Knee Airbag and Passenger Cushion Front Airbag",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1317
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 8,
        "consumerFriendlyHeaderName": "Safety-Interior",
        "description": "Rear Child Safety Locks",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1039
          }
        ],
        "upgrade": false
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 8,
        "consumerFriendlyHeaderName": "Safety-Interior",
        "description": "Outboard Front Lap And Shoulder Safety Belts -inc: Rear Center 3 Point, Height Adjusters and Pretensioners",
        "upgrade": true
      },
      {
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 8,
        "consumerFriendlyHeaderName": "Safety-Interior",
        "description": "Back-Up Camera",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1224
          }
        ],
        "upgrade": false
      }
    ],
    "options": [
      {
        "chromeOptionCode": "FE-0",
        "oemOptionCode": "FE",
        "headerId": 1156,
        "headerName": "EMISSIONS",
        "consumerFriendlyHeaderId": 3,
        "consumerFriendlyHeaderName": "Mechanical",
        "optionKindId": 5,
        "descriptions": [
          {
            "description": "50 State Emissions",
            "type": "PrimaryName"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Actual",
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
        "uniqueTypeFilter": "A"
      },
      {
        "chromeOptionCode": "XL",
        "oemOptionCode": "XL",
        "headerId": 1249,
        "headerName": "OPTION PACKAGE",
        "consumerFriendlyHeaderId": 4,
        "consumerFriendlyHeaderName": "Package",
        "optionKindId": 21,
        "descriptions": [
          {
            "description": "XLE Premium Package",
            "type": "PrimaryName"
          },
          {
            "description": "-inc: HomeLink, electrochromic rearview mirror",
            "type": "Extended"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Actual",
        "affectingOptionCode": "",
        "categories": [
          {
            "categoryFlag": "Package",
            "categoryId": 1173
          },
          {
            "categoryFlag": "Package",
            "categoryId": 1204
          }
        ],
        "specialEquipment": false,
        "extendedEquipment": false,
        "customEquipment": false,
        "optionPackage": true,
        "optionPackageContentOnly": false,
        "discontinued": false,
        "optionFamilyCode": "",
        "optionFamilyName": "",
        "selectionState": "Selected",
        "uniqueTypeFilter": "M"
      },
      {
        "chromeOptionCode": "070-0",
        "oemOptionCode": "070",
        "headerId": 10650,
        "headerName": "PRIMARY PAINT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "optionKindId": 68,
        "descriptions": [
          {
            "description": "Blizzard Pearl",
            "type": "PrimaryName"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Actual",
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
        "uniqueTypeFilter": "L",
        "rgbValue": "DEDED2",
        "genericColors": [
          {
            "primary": true,
            "name": "White"
          }
        ]
      },
      {
        "chromeOptionCode": "1H1",
        "oemOptionCode": "1H1",
        "headerId": 10650,
        "headerName": "PRIMARY PAINT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "optionKindId": 68,
        "descriptions": [
          {
            "description": "Predawn Gray Mica",
            "type": "PrimaryName"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Actual",
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
        "uniqueTypeFilter": "L",
        "rgbValue": "494542",
        "genericColors": [
          {
            "primary": true,
            "name": "Gray"
          }
        ]
      },
      {
        "chromeOptionCode": "1J9",
        "oemOptionCode": "1J9",
        "headerId": 10650,
        "headerName": "PRIMARY PAINT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "optionKindId": 68,
        "descriptions": [
          {
            "description": "Celestial Silver Metallic",
            "type": "PrimaryName"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Actual",
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
        "uniqueTypeFilter": "L",
        "rgbValue": "BBBCB5",
        "genericColors": [
          {
            "primary": true,
            "name": "Silver"
          }
        ]
      },
      {
        "chromeOptionCode": "218",
        "oemOptionCode": "218",
        "headerId": 10650,
        "headerName": "PRIMARY PAINT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "optionKindId": 68,
        "descriptions": [
          {
            "description": "Midnight Black Metallic",
            "type": "PrimaryName"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Actual",
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
        "uniqueTypeFilter": "L",
        "rgbValue": "000000",
        "genericColors": [
          {
            "primary": true,
            "name": "Black"
          }
        ]
      },
      {
        "chromeOptionCode": "3Q3",
        "oemOptionCode": "3Q3",
        "headerId": 10650,
        "headerName": "PRIMARY PAINT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "optionKindId": 68,
        "descriptions": [
          {
            "description": "Salsa Red Pearl",
            "type": "PrimaryName"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Actual",
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
        "uniqueTypeFilter": "L",
        "rgbValue": "800C25",
        "genericColors": [
          {
            "primary": true,
            "name": "Red"
          }
        ]
      },
      {
        "chromeOptionCode": "6W4",
        "oemOptionCode": "6W4",
        "headerId": 10650,
        "headerName": "PRIMARY PAINT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "optionKindId": 68,
        "descriptions": [
          {
            "description": "Alumina Jade Metallic",
            "type": "PrimaryName"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Actual",
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
        "uniqueTypeFilter": "L",
        "rgbValue": "4F504C",
        "genericColors": [
          {
            "primary": true,
            "name": "Green"
          }
        ]
      },
      {
        "chromeOptionCode": "4W4",
        "oemOptionCode": "4W4",
        "headerId": 10650,
        "headerName": "PRIMARY PAINT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "optionKindId": 68,
        "descriptions": [
          {
            "description": "Toasted Walnut Pearl",
            "type": "PrimaryName"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Actual",
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
        "uniqueTypeFilter": "L",
        "rgbValue": "473B32",
        "genericColors": [
          {
            "primary": true,
            "name": "Brown"
          }
        ]
      },
      {
        "chromeOptionCode": "8W6",
        "oemOptionCode": "8W6",
        "headerId": 10650,
        "headerName": "PRIMARY PAINT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "optionKindId": 68,
        "descriptions": [
          {
            "description": "Parisian Night Pearl",
            "type": "PrimaryName"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Actual",
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
        "uniqueTypeFilter": "L",
        "rgbValue": "152034",
        "genericColors": [
          {
            "primary": true,
            "name": "Blue"
          }
        ]
      },
      {
        "chromeOptionCode": "LC42",
        "oemOptionCode": "LC42",
        "headerId": 1347,
        "headerName": "SEAT TRIM",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "optionKindId": 72,
        "descriptions": [
          {
            "description": "Bisque, Leather Seat Material",
            "type": "PrimaryName"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Actual",
        "affectingOptionCode": "",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1078
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
        "selectionState": "Selected",
        "uniqueTypeFilter": "K"
      },
      {
        "chromeOptionCode": "LC14",
        "oemOptionCode": "LC14",
        "headerId": 1347,
        "headerName": "SEAT TRIM",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "optionKindId": 72,
        "descriptions": [
          {
            "description": "Ash, Leather Seat Material",
            "type": "PrimaryName"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Actual",
        "affectingOptionCode": "",
        "categories": [
          {
            "categoryFlag": "Deleted",
            "categoryId": 1077
          },
          {
            "categoryFlag": "Clean",
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
        "optionFamilyCode": "",
        "optionFamilyName": "",
        "selectionState": "Unselected",
        "uniqueTypeFilter": "K"
      },
      {
        "chromeOptionCode": "PC-0",
        "oemOptionCode": "PC",
        "headerId": 10750,
        "headerName": "ADDITIONAL EQUIPMENT",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "Special Color",
            "type": "PrimaryName"
          }
        ],
        "msrp": "395.0",
        "invoice": "352.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Actual",
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
        "chromeOptionCode": "Q2",
        "oemOptionCode": "Q2",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 4,
        "consumerFriendlyHeaderName": "Package",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "Protection Package",
            "type": "PrimaryName"
          },
          {
            "description": "-inc: lower door moldings, mudguards, door edge guards and alloy wheel locks",
            "type": "Extended"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
        "affectingOptionCode": "",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1205
          }
        ],
        "specialEquipment": false,
        "extendedEquipment": false,
        "customEquipment": false,
        "optionPackage": true,
        "optionPackageContentOnly": false,
        "discontinued": false,
        "optionFamilyCode": "",
        "optionFamilyName": "",
        "selectionState": "Unselected",
        "uniqueTypeFilter": "N"
      },
      {
        "chromeOptionCode": "Q5",
        "oemOptionCode": "Q5",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 4,
        "consumerFriendlyHeaderName": "Package",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "Cargo Management Package",
            "type": "PrimaryName"
          },
          {
            "description": "-inc: cargo net-envelope, cargo organizer and roof rack cross bars",
            "type": "Extended"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
        "affectingOptionCode": "",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1172
          }
        ],
        "specialEquipment": false,
        "extendedEquipment": false,
        "customEquipment": false,
        "optionPackage": true,
        "optionPackageContentOnly": false,
        "discontinued": false,
        "optionFamilyCode": "",
        "optionFamilyName": "",
        "selectionState": "Unselected",
        "uniqueTypeFilter": "O"
      },
      {
        "chromeOptionCode": "Z1",
        "oemOptionCode": "Z1",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 4,
        "consumerFriendlyHeaderName": "Package",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "Preferred Accessory Package",
            "type": "PrimaryName"
          },
          {
            "description": "-inc: carpet floor mats, door sill protectors, cargo net-envelope and first aid kit",
            "type": "Extended"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
        "affectingOptionCode": "",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1055
          }
        ],
        "specialEquipment": false,
        "extendedEquipment": false,
        "customEquipment": false,
        "optionPackage": true,
        "optionPackageContentOnly": false,
        "discontinued": false,
        "optionFamilyCode": "",
        "optionFamilyName": "",
        "selectionState": "Unselected",
        "uniqueTypeFilter": "O"
      },
      {
        "chromeOptionCode": "Z3",
        "oemOptionCode": "Z3",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 4,
        "consumerFriendlyHeaderName": "Package",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "Preferred Accessory Package Plus",
            "type": "PrimaryName"
          },
          {
            "description": "-inc: carpet floor mats, door sill protectors, cargo net-envelope and roof rack cross bars",
            "type": "Extended"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
        "affectingOptionCode": "",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1055
          },
          {
            "categoryFlag": "Clean",
            "categoryId": 1172
          }
        ],
        "specialEquipment": false,
        "extendedEquipment": false,
        "customEquipment": false,
        "optionPackage": true,
        "optionPackageContentOnly": false,
        "discontinued": false,
        "optionFamilyCode": "",
        "optionFamilyName": "",
        "selectionState": "Unselected",
        "uniqueTypeFilter": "O"
      },
      {
        "chromeOptionCode": "DH",
        "oemOptionCode": "DH",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 3,
        "consumerFriendlyHeaderName": "Mechanical",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "Towing Hitch Receiver Kit",
            "type": "PrimaryName"
          },
          {
            "description": "-inc: tow hitch receiver and wire harness",
            "type": "Extended"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
        "affectingOptionCode": "",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1199
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
        "chromeOptionCode": "WL-0",
        "oemOptionCode": "WL",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "Alloy Wheel Locks",
            "type": "PrimaryName"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
        "affectingOptionCode": "",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1205
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
        "uniqueTypeFilter": "U"
      },
      {
        "chromeOptionCode": "BM",
        "oemOptionCode": "BM",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "Chrome Lower Door Molding",
            "type": "PrimaryName"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
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
        "chromeOptionCode": "MF",
        "oemOptionCode": "MF",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "Mudguards",
            "type": "PrimaryName"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
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
        "chromeOptionCode": "D9-0",
        "oemOptionCode": "D9",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "Door Sill Protectors",
            "type": "PrimaryName"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
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
        "chromeOptionCode": "3P",
        "oemOptionCode": "3P",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 10,
        "consumerFriendlyHeaderName": "Exterior",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "Paint Protection Film",
            "type": "PrimaryName"
          },
          {
            "description": "-inc: hood, fender, mirror backs and door cups",
            "type": "Extended"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
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
        "chromeOptionCode": "WH",
        "oemOptionCode": "WH",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 1,
        "consumerFriendlyHeaderName": "Entertainment",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "Wireless Headphones (2 pair)",
            "type": "PrimaryName"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
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
        "chromeOptionCode": "CF",
        "oemOptionCode": "CF",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "Carpet Mat Package",
            "type": "PrimaryName"
          },
          {
            "description": "-inc: carpet floor mats and door sill protectors",
            "type": "Extended"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
        "affectingOptionCode": "",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1055
          }
        ],
        "specialEquipment": false,
        "extendedEquipment": false,
        "customEquipment": false,
        "optionPackage": true,
        "optionPackageContentOnly": false,
        "discontinued": false,
        "optionFamilyCode": "",
        "optionFamilyName": "",
        "selectionState": "Unselected",
        "uniqueTypeFilter": "0"
      },
      {
        "chromeOptionCode": "2T",
        "oemOptionCode": "2T",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "All Weather Floor Liners & Door Sill Protectors",
            "type": "PrimaryName"
          },
          {
            "description": "-inc: door sill protector",
            "type": "Extended"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
        "affectingOptionCode": "",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1055
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
        "uniqueTypeFilter": "P"
      },
      {
        "chromeOptionCode": "63-0",
        "oemOptionCode": "63",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "All-Weather Floor Liners",
            "type": "PrimaryName"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
        "affectingOptionCode": "",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1055
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
        "uniqueTypeFilter": "P"
      },
      {
        "chromeOptionCode": "C8",
        "oemOptionCode": "C8",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "Four Season Floor Liner/Mat Package",
            "type": "PrimaryName"
          },
          {
            "description": "-inc: carpet floor mats, all-weather floor liners and door sill protectors",
            "type": "Extended"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
        "affectingOptionCode": "",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1055
          }
        ],
        "specialEquipment": false,
        "extendedEquipment": false,
        "customEquipment": false,
        "optionPackage": true,
        "optionPackageContentOnly": false,
        "discontinued": false,
        "optionFamilyCode": "",
        "optionFamilyName": "",
        "selectionState": "Unselected",
        "uniqueTypeFilter": "P"
      },
      {
        "chromeOptionCode": "2L",
        "oemOptionCode": "2L",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "All Weather Floor Liner Package",
            "type": "PrimaryName"
          },
          {
            "description": "-inc: all-weather floor liners and cargo liner",
            "type": "Extended"
          },
          {
            "description": "(PPO) (DISC)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "No longer available for factory ordering as of October 8, 2018.",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
        "affectingOptionCode": "",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1055
          }
        ],
        "specialEquipment": false,
        "extendedEquipment": false,
        "customEquipment": false,
        "optionPackage": true,
        "optionPackageContentOnly": false,
        "discontinued": true,
        "optionFamilyCode": "",
        "optionFamilyName": "",
        "selectionState": "Unselected",
        "uniqueTypeFilter": "P"
      },
      {
        "chromeOptionCode": "9G",
        "oemOptionCode": "9G",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "Cargo Tote",
            "type": "PrimaryName"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
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
        "chromeOptionCode": "9H",
        "oemOptionCode": "9H",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "Cargo Organizer",
            "type": "PrimaryName"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
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
        "chromeOptionCode": "GN",
        "oemOptionCode": "GN",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "Cargo Net-Envelope",
            "type": "PrimaryName"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
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
        "chromeOptionCode": "3T",
        "oemOptionCode": "3T",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "Roof Rack Cross Bars",
            "type": "PrimaryName"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
        "affectingOptionCode": "",
        "categories": [
          {
            "categoryFlag": "Clean",
            "categoryId": 1172
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
        "chromeOptionCode": "A6",
        "oemOptionCode": "A6",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "Coin Holder/Ashtray Cup",
            "type": "PrimaryName"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
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
        "chromeOptionCode": "U7",
        "oemOptionCode": "U7",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "Universal Tablet Holder",
            "type": "PrimaryName"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
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
        "chromeOptionCode": "D5-0",
        "oemOptionCode": "D5",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "Door Edge Guards",
            "type": "PrimaryName"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
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
        "chromeOptionCode": "3Z",
        "oemOptionCode": "3Z",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "First Aid Kit",
            "type": "PrimaryName"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
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
        "chromeOptionCode": "7R",
        "oemOptionCode": "7R",
        "headerId": 1281,
        "headerName": "PORT INSTALLED OPTIONS",
        "consumerFriendlyHeaderId": 2,
        "consumerFriendlyHeaderName": "Interior",
        "optionKindId": 0,
        "descriptions": [
          {
            "description": "Emergency Assistance Kit",
            "type": "PrimaryName"
          },
          {
            "description": "(PPO)",
            "type": "UnenforcedLogic"
          },
          {
            "description": "*PRICE TO FOLLOW*",
            "type": "PriceNote"
          }
        ],
        "msrp": "0.0",
        "invoice": "0.0",
        "frontWeight": "0.0",
        "rearWeight": "0.0",
        "priceState": "Unknown",
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
      }
    ],
    "configurationCheckListItems": [
      {
        "itemName": "Emission System",
        "optionKindId": 0,
        "chromeOptionCodes": [
          "FE-0"
        ],
        "satisfied": true
      },
      {
        "itemName": "Option Package",
        "optionKindId": 0,
        "chromeOptionCodes": [
          "XL"
        ],
        "satisfied": true
      },
      {
        "itemName": "Primary Exterior Color",
        "optionKindId": 0,
        "chromeOptionCodes": [
          "070-0",
          "1H1",
          "1J9",
          "218",
          "3Q3",
          "6W4",
          "4W4",
          "8W6"
        ],
        "satisfied": true
      },
      {
        "itemName": "Seat Color",
        "optionKindId": 0,
        "chromeOptionCodes": [
          "LC42",
          "LC14"
        ],
        "satisfied": true
      }
    ],
    "consumerInformation": {
      "rebate": "One of the following incentives may apply to this vehicle.  Regional incentives may vary.\r\n\r\nCash Incentive: $1000 or financing\r\n\r\nFinancing Incentive: 2.9% to 3.9%\r\n\r\nExpiration Date: 07/31/2019\r\n\r\nResource: toyota.com 07/10/2019",
      "warranty": "Basic: \r\n        3 Years/36,000 Miles\r\n\r\nDrivetrain: \r\n        5 Years/60,000 Miles\r\n\r\nCorrosion: \r\n        5 Years/Unlimited Miles\r\n\r\nRoadside Assistance: \r\n        2 Years/Unlimited Miles\r\n\r\nMaintenance: \r\n        2 Years/25,000 Miles"
    },
    "structuredConsumerInformation": [
      {
        "typeName": "Rebate",
        "items": [
          {
            "name": "Incentive Note",
            "sequence": 100,
            "value": "One of the following incentives may apply to this vehicle.  Regional incentives may vary."
          },
          {
            "name": "Cash Incentive Minimum",
            "sequence": 200,
            "value": "1000"
          },
          {
            "name": "Cash Finance Rule",
            "sequence": 600,
            "value": "Or"
          },
          {
            "name": "Financing Incentive Min",
            "sequence": 700,
            "value": "2.9"
          },
          {
            "name": "Financing Incentive Max",
            "sequence": 800,
            "value": "3.9"
          },
          {
            "name": "Expiration Date",
            "sequence": 1100,
            "value": "07/31/2019"
          },
          {
            "name": "Resource Name",
            "sequence": 1200,
            "value": "toyota.com"
          },
          {
            "name": "Resource Date",
            "sequence": 1300,
            "value": "07/10/2019"
          }
        ]
      },
      {
        "typeName": "Warranty",
        "items": [
          {
            "name": "Basic Years",
            "sequence": 200,
            "value": "3"
          },
          {
            "name": "Basic Miles/km",
            "sequence": 300,
            "value": "36,000"
          },
          {
            "name": "Drivetrain Years",
            "sequence": 500,
            "value": "5"
          },
          {
            "name": "Drivetrain Miles/km",
            "sequence": 600,
            "value": "60,000"
          },
          {
            "name": "Corrosion Years",
            "sequence": 800,
            "value": "5"
          },
          {
            "name": "Corrosion Miles/km",
            "sequence": 900,
            "value": "Unlimited"
          },
          {
            "name": "Roadside Assistance Years",
            "sequence": 2300,
            "value": "2"
          },
          {
            "name": "Roadside Assistance Miles/km",
            "sequence": 2400,
            "value": "Unlimited"
          },
          {
            "name": "Maintenance Years",
            "sequence": 2600,
            "value": "2"
          },
          {
            "name": "Maintenance Miles/km",
            "sequence": 2700,
            "value": "25,000"
          }
        ]
      }
    ],
    "technicalSpecifications": [
      {
        "groupId": 0,
        "groupName": "Vehicle",
        "headerId": 48,
        "headerName": "Emissions",
        "titleId": 81,
        "titleName": "Tons/yr of CO2 Emissions @ 15K mi/year",
        "value": "8.0 (2019)",
        "upgrade": false,
        "sequence": 1
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 15,
        "headerName": "Transmission",
        "titleId": 6,
        "titleName": "Drivetrain",
        "value": "Front Wheel Drive",
        "upgrade": false,
        "sequence": 6
      },
      {
        "groupId": 0,
        "groupName": "Vehicle",
        "headerId": 0,
        "headerName": "Vehicle",
        "titleId": 7,
        "titleName": "EPA Classification",
        "value": "2WD Minivans",
        "upgrade": false,
        "sequence": 7
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 1,
        "headerName": "Interior Dimensions",
        "titleId": 8,
        "titleName": "Passenger Capacity",
        "value": "8",
        "upgrade": false,
        "sequence": 8
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 1,
        "headerName": "Interior Dimensions",
        "titleId": 9,
        "titleName": "Passenger Volume",
        "value": "164.4",
        "measurementUnit": "ft³",
        "upgrade": false,
        "sequence": 9
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 9,
        "headerName": "Weight Information",
        "titleId": 10,
        "titleName": "Base Curb Weight",
        "value": "4590",
        "measurementUnit": "lbs",
        "upgrade": false,
        "sequence": 10
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 14,
        "headerName": "Mileage",
        "titleId": 27,
        "titleName": "EPA Fuel Economy Est - Hwy",
        "value": "27 (2019)",
        "measurementUnit": "MPG",
        "upgrade": false,
        "sequence": 23
      },
      {
        "groupId": 0,
        "groupName": "Vehicle",
        "headerId": 48,
        "headerName": "Emissions",
        "titleId": 21,
        "titleName": "EPA Greenhouse Gas Score",
        "value": "N/A",
        "upgrade": false,
        "sequence": 23
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 14,
        "headerName": "Mileage",
        "titleId": 28,
        "titleName": "Cruising Range - City",
        "value": "380.00",
        "measurementUnit": "mi",
        "upgrade": true,
        "sequence": 24
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 14,
        "headerName": "Mileage",
        "titleId": 26,
        "titleName": "EPA Fuel Economy Est - City",
        "value": "19 (2019)",
        "measurementUnit": "MPG",
        "upgrade": false,
        "sequence": 24
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 14,
        "headerName": "Mileage",
        "titleId": 25,
        "titleName": "Fuel Economy Est-Combined",
        "value": "22 (2019)",
        "measurementUnit": "MPG",
        "upgrade": false,
        "sequence": 24
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 14,
        "headerName": "Mileage",
        "titleId": 29,
        "titleName": "Cruising Range - Hwy",
        "value": "540.00",
        "measurementUnit": "mi",
        "upgrade": true,
        "sequence": 25
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 8,
        "headerName": "Trailering",
        "titleId": 31,
        "titleName": "Dead Weight Hitch - Max Trailer Wt.",
        "value": "3500",
        "measurementUnit": "lbs",
        "upgrade": false,
        "sequence": 27
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 8,
        "headerName": "Trailering",
        "titleId": 32,
        "titleName": "Dead Weight Hitch - Max Tongue Wt.",
        "value": "350",
        "measurementUnit": "lbs",
        "upgrade": false,
        "sequence": 28
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 8,
        "headerName": "Trailering",
        "titleId": 33,
        "titleName": "Wt Distributing Hitch - Max Trailer Wt.",
        "value": "3500",
        "measurementUnit": "lbs",
        "upgrade": false,
        "sequence": 29
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 8,
        "headerName": "Trailering",
        "titleId": 34,
        "titleName": "Wt Distributing Hitch - Max Tongue Wt.",
        "value": "350",
        "measurementUnit": "lbs",
        "upgrade": false,
        "sequence": 30
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 13,
        "headerName": "Engine",
        "titleId": 40,
        "titleName": "Engine Order Code",
        "value": "N/A",
        "upgrade": false,
        "sequence": 34
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 13,
        "headerName": "Engine",
        "titleId": 41,
        "titleName": "Engine Type",
        "value": "Regular Unleaded V-6",
        "upgrade": false,
        "sequence": 35
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 13,
        "headerName": "Engine",
        "titleId": 42,
        "titleName": "Displacement",
        "value": "3.5 L/211",
        "upgrade": false,
        "sequence": 36
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 13,
        "headerName": "Engine",
        "titleId": 43,
        "titleName": "Fuel System",
        "value": "Port/Direct Injection",
        "upgrade": false,
        "sequence": 37
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 13,
        "headerName": "Engine",
        "titleId": 48,
        "titleName": "SAE Net Horsepower @ RPM",
        "value": "296 @ 6600",
        "upgrade": false,
        "sequence": 38
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 13,
        "headerName": "Engine",
        "titleId": 49,
        "titleName": "SAE Net Torque @ RPM",
        "value": "263 @ 4700",
        "upgrade": false,
        "sequence": 39
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 15,
        "headerName": "Transmission",
        "titleId": 51,
        "titleName": "Trans Order Code",
        "value": "N/A",
        "upgrade": false,
        "sequence": 40
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 15,
        "headerName": "Transmission",
        "titleId": 52,
        "titleName": "Trans Type",
        "value": "8",
        "upgrade": false,
        "sequence": 41
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 15,
        "headerName": "Transmission",
        "titleId": 53,
        "titleName": "Trans Description Cont.",
        "value": "Automatic w/OD",
        "upgrade": false,
        "sequence": 42
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 15,
        "headerName": "Transmission",
        "titleId": 54,
        "titleName": "Trans Description Cont. Again",
        "value": "N/A",
        "upgrade": false,
        "sequence": 43
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 15,
        "headerName": "Transmission",
        "titleId": 56,
        "titleName": "First Gear Ratio (:1)",
        "value": "5.52",
        "upgrade": false,
        "sequence": 44
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 15,
        "headerName": "Transmission",
        "titleId": 57,
        "titleName": "Second Gear Ratio (:1)",
        "value": "3.18",
        "upgrade": false,
        "sequence": 45
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 15,
        "headerName": "Transmission",
        "titleId": 58,
        "titleName": "Third Gear Ratio (:1)",
        "value": "2.05",
        "upgrade": false,
        "sequence": 46
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 15,
        "headerName": "Transmission",
        "titleId": 59,
        "titleName": "Fourth Gear Ratio (:1)",
        "value": "1.49",
        "upgrade": false,
        "sequence": 47
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 15,
        "headerName": "Transmission",
        "titleId": 60,
        "titleName": "Fifth Gear Ratio (:1)",
        "value": "1.23",
        "upgrade": false,
        "sequence": 48
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 15,
        "headerName": "Transmission",
        "titleId": 61,
        "titleName": "Sixth Gear Ratio (:1)",
        "value": "1.00",
        "upgrade": false,
        "sequence": 49
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 15,
        "headerName": "Transmission",
        "titleId": 62,
        "titleName": "Reverse Ratio (:1)",
        "value": "4.22",
        "upgrade": false,
        "sequence": 50
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 15,
        "headerName": "Transmission",
        "titleId": 65,
        "titleName": "Clutch Size",
        "value": "N/A",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 52
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 15,
        "headerName": "Transmission",
        "titleId": 69,
        "titleName": "Final Drive Axle Ratio (:1)",
        "value": "3.00",
        "upgrade": false,
        "sequence": 56
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 12,
        "headerName": "Electrical",
        "titleId": 76,
        "titleName": "Cold Cranking Amps @ 0° F (Primary)",
        "value": "N/A",
        "upgrade": false,
        "sequence": 61
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 12,
        "headerName": "Electrical",
        "titleId": 84,
        "titleName": "Maximum Alternator Capacity (amps)",
        "value": "N/A",
        "upgrade": false,
        "sequence": 66
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 11,
        "headerName": "Cooling System",
        "titleId": 91,
        "titleName": "Total Cooling System Capacity",
        "value": "N/A",
        "measurementUnit": "qts",
        "upgrade": false,
        "sequence": 69
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 17,
        "headerName": "Suspension",
        "titleId": 105,
        "titleName": "Suspension Type - Front",
        "value": "Strut",
        "upgrade": false,
        "sequence": 80
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 17,
        "headerName": "Suspension",
        "titleId": 106,
        "titleName": "Suspension Type - Rear",
        "value": "Torsion Beam",
        "upgrade": false,
        "sequence": 81
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 17,
        "headerName": "Suspension",
        "titleId": 107,
        "titleName": "Suspension Type - Front (Cont.)",
        "value": "Strut",
        "upgrade": false,
        "sequence": 82
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 17,
        "headerName": "Suspension",
        "titleId": 108,
        "titleName": "Suspension Type - Rear (Cont.)",
        "value": "Torsion Beam",
        "upgrade": false,
        "sequence": 83
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 14,
        "headerName": "Mileage",
        "titleId": 800,
        "titleName": "EPA MPG Equivalent - City",
        "value": "N/A",
        "upgrade": false,
        "sequence": 100
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 17,
        "headerName": "Suspension",
        "titleId": 131,
        "titleName": "Shock Absorber Diameter - Front",
        "value": "N/A",
        "measurementUnit": "mm",
        "upgrade": false,
        "sequence": 105
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 17,
        "headerName": "Suspension",
        "titleId": 132,
        "titleName": "Shock Absorber Diameter - Rear",
        "value": "N/A",
        "measurementUnit": "mm",
        "upgrade": false,
        "sequence": 106
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 17,
        "headerName": "Suspension",
        "titleId": 133,
        "titleName": "Stabilizer Bar Diameter - Front",
        "value": "N/A",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 107
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 17,
        "headerName": "Suspension",
        "titleId": 134,
        "titleName": "Stabilizer Bar Diameter - Rear",
        "value": "N/A",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 108
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 7,
        "headerName": "Tires",
        "titleId": 137,
        "titleName": "Front Tire Order Code",
        "value": "N/A",
        "upgrade": false,
        "sequence": 109
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 7,
        "headerName": "Tires",
        "titleId": 138,
        "titleName": "Rear Tire Order Code",
        "value": "N/A",
        "upgrade": false,
        "sequence": 110
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 7,
        "headerName": "Tires",
        "titleId": 139,
        "titleName": "Spare Tire Order Code",
        "value": "N/A",
        "upgrade": false,
        "sequence": 111
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 7,
        "headerName": "Tires",
        "titleId": 140,
        "titleName": "Front Tire Size",
        "value": "P235/60TR17",
        "upgrade": false,
        "sequence": 112
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 7,
        "headerName": "Tires",
        "titleId": 141,
        "titleName": "Rear Tire Size",
        "value": "P235/60TR17",
        "upgrade": false,
        "sequence": 113
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 7,
        "headerName": "Tires",
        "titleId": 142,
        "titleName": "Spare Tire Size",
        "value": "Compact",
        "upgrade": false,
        "sequence": 114
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 10,
        "headerName": "Wheels",
        "titleId": 156,
        "titleName": "Front Wheel Size",
        "value": "17 X 7",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 121
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 10,
        "headerName": "Wheels",
        "titleId": 157,
        "titleName": "Rear Wheel Size",
        "value": "17 X 7",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 122
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 10,
        "headerName": "Wheels",
        "titleId": 158,
        "titleName": "Spare Wheel Size",
        "value": "Compact",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 123
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 10,
        "headerName": "Wheels",
        "titleId": 165,
        "titleName": "Front Wheel Material",
        "value": "Aluminum",
        "upgrade": false,
        "sequence": 130
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 10,
        "headerName": "Wheels",
        "titleId": 166,
        "titleName": "Rear Wheel Material",
        "value": "Aluminum",
        "upgrade": false,
        "sequence": 131
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 10,
        "headerName": "Wheels",
        "titleId": 167,
        "titleName": "Spare Wheel Material",
        "value": "Steel",
        "upgrade": false,
        "sequence": 132
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 6,
        "headerName": "Steering",
        "titleId": 176,
        "titleName": "Steering Type",
        "value": "Rack-Pinion",
        "upgrade": false,
        "sequence": 133
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 6,
        "headerName": "Steering",
        "titleId": 178,
        "titleName": "Steering Ratio (:1), Overall",
        "value": "N/A",
        "upgrade": false,
        "sequence": 134
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 6,
        "headerName": "Steering",
        "titleId": 181,
        "titleName": "Lock to Lock Turns (Steering)",
        "value": "N/A",
        "upgrade": false,
        "sequence": 137
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 6,
        "headerName": "Steering",
        "titleId": 184,
        "titleName": "Turning Diameter - Curb to Curb",
        "value": "37.5",
        "measurementUnit": "ft",
        "upgrade": false,
        "sequence": 138
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 6,
        "headerName": "Steering",
        "titleId": 185,
        "titleName": "Turning Diameter - Wall to Wall",
        "value": "N/A",
        "measurementUnit": "ft",
        "upgrade": false,
        "sequence": 139
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 4,
        "headerName": "Brakes",
        "titleId": 186,
        "titleName": "Brake Type",
        "value": "4-Wheel Disc",
        "upgrade": false,
        "sequence": 140
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 4,
        "headerName": "Brakes",
        "titleId": 187,
        "titleName": "Brake ABS System",
        "value": "4-Wheel",
        "upgrade": false,
        "sequence": 141
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 4,
        "headerName": "Brakes",
        "titleId": 188,
        "titleName": "Brake ABS System (Second Line)",
        "value": "N/A",
        "upgrade": false,
        "sequence": 142
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 4,
        "headerName": "Brakes",
        "titleId": 190,
        "titleName": "Disc - Front (Yes or   )",
        "value": "Yes",
        "upgrade": false,
        "sequence": 144
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 4,
        "headerName": "Brakes",
        "titleId": 191,
        "titleName": "Disc - Rear (Yes or   )",
        "value": "Yes",
        "upgrade": false,
        "sequence": 145
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 4,
        "headerName": "Brakes",
        "titleId": 192,
        "titleName": "Front Brake Rotor Diam x Thickness",
        "value": "12.9",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 146
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 4,
        "headerName": "Brakes",
        "titleId": 193,
        "titleName": "Rear Brake Rotor Diam x Thickness",
        "value": "12.2",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 147
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 4,
        "headerName": "Brakes",
        "titleId": 196,
        "titleName": "Drum - Rear (Yes or   )",
        "value": "N/A",
        "upgrade": false,
        "sequence": 150
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 4,
        "headerName": "Brakes",
        "titleId": 197,
        "titleName": "Rear Drum Diam x Width",
        "value": "N/A",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 151
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 5,
        "headerName": "Fuel Tank",
        "titleId": 206,
        "titleName": "Fuel Tank Capacity, Approx",
        "value": "20",
        "measurementUnit": "gal",
        "upgrade": false,
        "sequence": 155
      },
      {
        "groupId": 4,
        "groupName": "Chassis",
        "headerId": 5,
        "headerName": "Fuel Tank",
        "titleId": 207,
        "titleName": "Aux Fuel Tank Capacity, Approx",
        "value": "N/A",
        "measurementUnit": "gal",
        "upgrade": false,
        "sequence": 156
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 1,
        "headerName": "Interior Dimensions",
        "titleId": 256,
        "titleName": "Front Head Room",
        "value": "41",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 161
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 1,
        "headerName": "Interior Dimensions",
        "titleId": 257,
        "titleName": "Front Leg Room",
        "value": "40.5",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 162
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 1,
        "headerName": "Interior Dimensions",
        "titleId": 258,
        "titleName": "Front Shoulder Room",
        "value": "65",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 163
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 1,
        "headerName": "Interior Dimensions",
        "titleId": 259,
        "titleName": "Front Hip Room",
        "value": "58.6",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 164
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 1,
        "headerName": "Interior Dimensions",
        "titleId": 261,
        "titleName": "Second Head Room",
        "value": "39.7",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 165
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 1,
        "headerName": "Interior Dimensions",
        "titleId": 262,
        "titleName": "Second Leg Room",
        "value": "37.6",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 166
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 1,
        "headerName": "Interior Dimensions",
        "titleId": 263,
        "titleName": "Second Shoulder Room",
        "value": "64.6",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 167
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 1,
        "headerName": "Interior Dimensions",
        "titleId": 264,
        "titleName": "Second Hip Room",
        "value": "66.1",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 168
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 1,
        "headerName": "Interior Dimensions",
        "titleId": 266,
        "titleName": "Third Head Room",
        "value": "38.3",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 169
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 1,
        "headerName": "Interior Dimensions",
        "titleId": 267,
        "titleName": "Third Leg Room",
        "value": "36.3",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 170
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 1,
        "headerName": "Interior Dimensions",
        "titleId": 268,
        "titleName": "Third Shoulder Room",
        "value": "61.1",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 171
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 1,
        "headerName": "Interior Dimensions",
        "titleId": 269,
        "titleName": "Third Hip Room",
        "value": "50.3",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 172
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 2,
        "headerName": "Exterior Dimensions",
        "titleId": 301,
        "titleName": "Wheelbase",
        "value": "119.3",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 181
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 2,
        "headerName": "Exterior Dimensions",
        "titleId": 304,
        "titleName": "Length, Overall",
        "value": "N/A",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 184
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 2,
        "headerName": "Exterior Dimensions",
        "titleId": 305,
        "titleName": "Width, Max w/o mirrors",
        "value": "78.1",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 185
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 2,
        "headerName": "Exterior Dimensions",
        "titleId": 306,
        "titleName": "Height, Overall",
        "value": "70.7",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 186
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 2,
        "headerName": "Exterior Dimensions",
        "titleId": 309,
        "titleName": "Track Width, Front",
        "value": "67.7",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 187
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 2,
        "headerName": "Exterior Dimensions",
        "titleId": 310,
        "titleName": "Track Width, Rear",
        "value": "67.7",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 188
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 14,
        "headerName": "Mileage",
        "titleId": 801,
        "titleName": "EPA MPG Equivalent - Hwy",
        "value": "N/A",
        "upgrade": false,
        "sequence": 200
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 2,
        "headerName": "Exterior Dimensions",
        "titleId": 326,
        "titleName": "Min Ground Clearance",
        "value": "6.5",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 202
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 2,
        "headerName": "Exterior Dimensions",
        "titleId": 334,
        "titleName": "Rear Door Opening Height",
        "value": "N/A",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 205
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 2,
        "headerName": "Exterior Dimensions",
        "titleId": 335,
        "titleName": "Rear Door Opening Width",
        "value": "N/A",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 206
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 3,
        "headerName": "Cargo Area Dimensions",
        "titleId": 353,
        "titleName": "Cargo Area Length @ Floor to Seat 1",
        "value": "N/A",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 214
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 3,
        "headerName": "Cargo Area Dimensions",
        "titleId": 354,
        "titleName": "Cargo Area Length @ Floor to Seat 2",
        "value": "N/A",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 215
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 3,
        "headerName": "Cargo Area Dimensions",
        "titleId": 355,
        "titleName": "Cargo Area Length @ Floor to Seat 3",
        "value": "N/A",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 216
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 3,
        "headerName": "Cargo Area Dimensions",
        "titleId": 362,
        "titleName": "Cargo Area Width @ Beltline",
        "value": "N/A",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 219
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 3,
        "headerName": "Cargo Area Dimensions",
        "titleId": 364,
        "titleName": "Cargo Box Width @ Wheelhousings",
        "value": "N/A",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 221
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 3,
        "headerName": "Cargo Area Dimensions",
        "titleId": 366,
        "titleName": "Cargo Box (Area) Height",
        "value": "N/A",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 222
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 2,
        "headerName": "Exterior Dimensions",
        "titleId": 369,
        "titleName": "Liftover Height",
        "value": "N/A",
        "measurementUnit": "in",
        "upgrade": false,
        "sequence": 223
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 3,
        "headerName": "Cargo Area Dimensions",
        "titleId": 372,
        "titleName": "Cargo Volume to Seat 1",
        "value": "150",
        "measurementUnit": "ft³",
        "upgrade": false,
        "sequence": 226
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 3,
        "headerName": "Cargo Area Dimensions",
        "titleId": 373,
        "titleName": "Cargo Volume to Seat 2",
        "value": "87.1",
        "measurementUnit": "ft³",
        "upgrade": false,
        "sequence": 227
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 3,
        "headerName": "Cargo Area Dimensions",
        "titleId": 374,
        "titleName": "Cargo Volume to Seat 3",
        "value": "39.1",
        "measurementUnit": "ft³",
        "upgrade": false,
        "sequence": 228
      },
      {
        "groupId": 5,
        "groupName": "Dimensions",
        "headerId": 3,
        "headerName": "Cargo Area Dimensions",
        "titleId": 379,
        "titleName": "Trunk Volume",
        "value": "N/A",
        "measurementUnit": "ft³",
        "upgrade": false,
        "sequence": 232
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 15,
        "headerName": "Transmission",
        "titleId": 401,
        "titleName": "Seventh Gear Ratio (:1)",
        "value": "0.80",
        "upgrade": false,
        "sequence": 234
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 15,
        "headerName": "Transmission",
        "titleId": 402,
        "titleName": "Eighth Gear Ratio (:1)",
        "value": "0.67",
        "upgrade": false,
        "sequence": 235
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 14,
        "headerName": "Mileage",
        "titleId": 802,
        "titleName": "EPA MPG Equivalent - Combined",
        "value": "N/A",
        "upgrade": false,
        "sequence": 300
      },
      {
        "groupId": 6,
        "groupName": "Powertrain",
        "headerId": 14,
        "headerName": "Mileage",
        "titleId": 803,
        "titleName": "Battery Range",
        "value": "N/A",
        "measurementUnit": "mi",
        "upgrade": false,
        "sequence": 400
      }
    ]
  };
}
