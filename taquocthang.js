function getData(){
	const keysw = "www.taquocthang.com";
	var keyAPI = (typeof keyhost != 'undefined') ? keyhost : document.location.host;
	var dataAMZ = {};
	if(keysw == keyAPI){
		dataAMZ = {
			B000058TJ3: {href: "https://amzn.to/2VdYwsh",nameProduct: `Intex Swim Center Family Inflatable Pool`,image: '',summary: ``,slug: ""},
			B00005RHPD: {href: "https://amzn.to/3f6YObB",nameProduct: `Bosch 1617EVSPK Wood Router Tool Combo Kit`,image: '',summary: ``,slug: ""},
			B000092TT0: {href: "https://amzn.to/3icHbJb",nameProduct: `Polk Audio PSW505 12" Powered`,image: '',summary: ``,slug: ""},
			B0000AMK5F: {href: "https://amzn.to/3ykhMDi",nameProduct: `BOSTITCH Coil Roofing Nailer`,image: '',summary: ``,slug: ""},
			B009IX5CZS: {href: "https://amzn.to/3f89LcQ",nameProduct: `Polk Audio PSW10 10" Powered Subwoofer`,image: '',summary: ``,slug: ""},
			B01N0LQJN6: {href: "https://amzn.to/2V6nGJJ",nameProduct: `Honeywell HFD-120-Q `,image: '',summary: ``,slug: ""},
			B000BO8AKW: {href: "https://amzn.to/3BY2PsL",nameProduct: `Butterfly Centrefold 25 Table Tennis Table`,image: '',summary: ``,slug: ""},
			B000GFPTQY: {href: "https://amzn.to/3ieEnew",nameProduct: `Bose Acoutimass 10 Series IV`,image: '',summary: ``,slug: ""},
			B000UXPFMU: {href: "https://amzn.to/3fbHmmg",nameProduct: `Pentair SuperFlo Pool Pump`,image: '',summary: ``,slug: ""},
			B001BMDFPS: {href: "https://amzn.to/3j1kWFw",nameProduct: `DuroMax XP4400E Generator`,image: '',summary: ``,slug: ""},
			B002635ODW: {href: "https://amzn.to/3rI0cX0",nameProduct: `EcoSmart ECO 27 Electric Tankless Water Heater`,image: '',summary: ``,slug: ""},
			B002G51BZU: {href: "https://amzn.to/3zPzmiz",nameProduct: `Mr. Heater Portable Buddy Heater`,image: '',summary: ``,slug: ""},
			B002QAYJPO: {href: "https://amzn.to/3j0Tw2l",nameProduct: `Honeywell Germ Free Cool Mist Humidifier`,image: '',summary: ``,slug: ""},
			B002R8CPRY: {href: "https://amzn.to/3rHAgLe",nameProduct: `Sunny Health and Fitness SF E905 Elliptical Machine Cross Trainer `,image: '',summary: ``,slug: ""},
			B002WKJ5ES: {href: "https://amzn.to/2V2I9z2",nameProduct: `Hayward Goldline AQR15 AquaRite Electronic Salt Chlorination System`,image: '',summary: ``,slug: ""},
			B003MANSNG: {href: "https://amzn.to/3lbxUmP",nameProduct: `National Tree Company lit Artificial Christmas Tree`,image: '',summary: ``,slug: ""},
			B0043E6PLC: {href: "https://amzn.to/3iXRErc",nameProduct: `BLACK+DECKER Countertop Convection Toaster Oven`,image: '',summary: ``,slug: ""},
			B00467H5YW: {href: "https://amzn.to/3BVD5wR",nameProduct: `Sunny Health & Fitness Exercise Cycling Bike`,image: '',summary: ``,slug: ""},
			B004PULVOK: {href: "https://amzn.to/3yfAHiv",nameProduct: `Kohler K-3999-0 Highline Comfort Height `,image: '',summary: ``,slug: ""},
			B004QERFA4: {href: "https://amzn.to/3rJbNFn",nameProduct: `Kohler Santa Rosa Comfort Toilet Review`,image: '',summary: ``,slug: ""},
			B0052OX876: {href: "https://amzn.to/3x7Vymx",nameProduct: `Lotos LTP5000D 50Amp Non-Touch Pilot Arc Plasma Cutter`,image: '',summary: ``,slug: ""},
			B0055P70MQ: {href: "https://amzn.to/3fbUHet",nameProduct: `Technivorm Moccamaster 59616 KBG Coffee Brewer`,image: '',summary: ``,slug: ""},
			B005BPWN0O: {href: "https://amzn.to/37o4MAJ",nameProduct: `Husqvarna 125B Handheld Blower`,image: '',summary: ``,slug: ""},
			B006H1QYBA: {href: "https://amzn.to/3lg5Aj1",nameProduct: `Steelcase Leap Chair`,image: '',summary: ``,slug: ""},
			B006IY89ZA: {href: "https://amzn.to/3zPzSx1",nameProduct: `Modway Articulate Ergonomic Mesh Office Chair`,image: '',summary: ``,slug: ""},
			B007HIKQCK: {href: "https://amzn.to/3BT8XCp",nameProduct: `Bio Bidet Ultimate BB-600 Advanced Bidet Toilet Seat`,image: '',summary: ``,slug: ""},
			B008DBRFBK: {href: "https://amzn.to/2Vl2Zcy",nameProduct: `Bissell 3624 Spot Clean Professional`,image: '',summary: ``,slug: ""},
			B009IJ2LM4: {href: "https://amzn.to/2UVpvt3",nameProduct: `TOTO Washlet s300e Electronic Bidet Toilet Seat`,image: '',summary: ``,slug: ""},
			B009IJ2N9U: {href: "https://amzn.to/3f701zF",nameProduct: `TOTO Washlet s350e Review 2020`,image: '',summary: ``,slug: ""},
			B009SCPYN4: {href: "https://amzn.to/3BZaUgz",nameProduct: `Hudson Bay Spas 4 Person`,image: '',summary: ``,slug: ""},
			B009X43F38: {href: "https://amzn.to/37dRcPW",nameProduct: `Hobart Handler 140 MIG Welder`,image: '',summary: ``,slug: ""},
			B00A8UPX0Y: {href: "https://amzn.to/3yg3i78",nameProduct: `National Tree Company Artificial Christmas Tree`,image: '',summary: ``,slug: ""},
			B00AB24XIW: {href: "https://amzn.to/3C6yCb0",nameProduct: `Dri-Eaz LGR 7000XLi Portable Dehumidifier`,image: '',summary: ``,slug: ""},
			B00AB25016: {href: "https://amzn.to/3xcNT6p",nameProduct: `Dri-Eaz F284 DefendAir HEPA 500 Air Purifier`,image: '',summary: ``,slug: ""},
			B00BUV305A: {href: "https://amzn.to/3f850jl",nameProduct: `Luraco i7 PLUS Medical Massage`,image: '',summary: ``,slug: ""},
			B00C03D01Q: {href: "https://amzn.to/3j2DkxD",nameProduct: `Flo by Moen Smart Water Shutoff `,image: '',summary: ``,slug: ""},
			B00CH9QWOU: {href: "https://amzn.to/3i8zsMm",nameProduct: `Breville the Barista Express Espresso Machine`,image: '',summary: ``,slug: ""},
			B00CMREO0Q: {href: "https://amzn.to/3C6yOqK",nameProduct: `Touchstone 80001 Onyx Electric `,image: '',summary: ``,slug: ""},
			B00EPNDJ24: {href: "https://amzn.to/2TGIIOg",nameProduct: `Manitowoc Nugget Ice Machine`,image: '',summary: ``,slug: ""},
			B00EUU5GFK: {href: "https://amzn.to/3fuJm9x",nameProduct: `Serta Ergonomic Executive Office Chair Review`,image: '',summary: ``,slug: ""},
			B00F2CGXGG: {href: "https://amzn.to/3lbyTDx",nameProduct: `Dewalt 10" DWE7491RS Table Saw with Rolling Stand Review`,image: '',summary: ``,slug: ""},
			B00FADLVAK: {href: "https://amzn.to/3y9BRfg",nameProduct: `Review National Tree Company lit Artificial Christmas Tree`,image: '',summary: ``,slug: ""},
			B00FH441AE: {href: "https://amzn.to/3l9CbXR",nameProduct: `Review 16 Piece Deluxe Edition Christmas Nativity Set`,image: '',summary: ``,slug: ""},
			B00FOUDF62: {href: "https://amzn.to/3C6yLLA",nameProduct: `TOTO MS992CUMFG#01 Neorest`,image: '',summary: ``,slug: ""},
			B00G00BT72: {href: "https://amzn.to/3i8ll9L",nameProduct: `McCulloch MC1375 Canister Steam Cleaner`,image: '',summary: ``,slug: ""},
			B00GBADAT6: {href: "https://amzn.to/3f80AZW",nameProduct: `JOOLA NOVA Outdoor Table Tennis`,image: '',summary: ``,slug: ""},
			B00GJ1N5VA: {href: "https://amzn.to/2TLgamU",nameProduct: `JOOLA Rally TL - Professional `,image: '',summary: ``,slug: ""},
			B00GN96JFW: {href: "https://amzn.to/3BWUZ2n",nameProduct: `Flash Furniture Eclipse Home Theater Seating Review`,image: '',summary: ``,slug: ""},
			B00H3DIT14: {href: "https://amzn.to/3zVukkR",nameProduct: `DRI EAZ F413 Revolution LGR Portable Dehumidifier`,image: '',summary: ``,slug: ""},
			B00H3RI32U: {href: "https://amzn.to/3zOrAWi",nameProduct: `Touchstone 80004 - Sideline Electric Fireplace`,image: '',summary: ``,slug: ""},
			B00HRT863U: {href: "https://amzn.to/3j6cxQW",nameProduct: `Bestway SaluSpa Miami Inflatable Hot Tub`,image: '',summary: ``,slug: ""},
			B00HXGSBXC: {href: "https://amzn.to/3ldimi7",nameProduct: `RoyalBaby Kids Bike Boys Girls Freestyle Bicycle`,image: '',summary: ``,slug: ""},
			B00I0ZGOZM: {href: "https://amzn.to/3fbWMXv",nameProduct: `APEC Drinking Water`,image: '',summary: ``,slug: ""},
			B00IFHPVEU: {href: "https://amzn.to/3BOHjX8",nameProduct: `Amazon Basics Leather-Padded Office Chair Review`,image: '',summary: ``,slug: ""},
			B00IWJOOU8: {href: "https://amzn.to/3xgaVcx",nameProduct: `Briggs & Stratton P3000 Power Smart Series Inverter Generator`,image: '',summary: ``,slug: ""},
			B00JGRBSS6: {href: "https://amzn.to/3zMZ6wb",nameProduct: `Marcy 150-lb Multifunctional Home Gym Station`,image: '',summary: ``,slug: ""},
			B00JH98GR4: {href: "https://amzn.to/377Ldw2",nameProduct: `Shark Navigator Lift-Away Deluxe NV360 Upright Vacuum`,image: '',summary: ``,slug: ""},
			B00JJ5I7GQ: {href: "https://amzn.to/2UVrJbT",nameProduct: `Polaris F9550 Robotic Pool`,image: '',summary: ``,slug: ""},
			B00KYB47JU: {href: "https://amzn.to/3j1R5g0",nameProduct: `American Spas AM-630LM 5-Person 30-Jet Lounger Spa`,image: '',summary: ``,slug: ""},
			B00LFS0DMG: {href: "https://amzn.to/3laa8r4",nameProduct: `Steelcase Amia Task Chair Review`,image: '',summary: ``,slug: ""},
			B00MYWQL96: {href: "https://amzn.to/3zTouAa",nameProduct: `Hessaire MC37M Portable Evaporative Cooler`,image: '',summary: ``,slug: ""},
			B01HBKW66M: {href: "https://amzn.to/3fuU3sH",nameProduct: `Coleman SaluSpa Inflatable Hot Tub Spa`,image: '',summary: ``,slug: ""},
			B00OX5B8CW: {href: "https://amzn.to/379lFyO",nameProduct: `Intex 12' x 30'' Metal Frame Pool`,image: '',summary: ``,slug: ""},
			B00PKXWIPC: {href: "https://amzn.to/2Ww1R6B",nameProduct: `Review Safavieh Hudson Shag Collection SGH281A Area Rug`,image: '',summary: ``,slug: ""},
			B00Q7EPSHI: {href: "https://amzn.to/3zW8sWB",nameProduct: `Zinus 12 Inch Green Tea Memory Foam Mattress`,image: '',summary: ``,slug: ""},
			B00Q7EPY04: {href: "https://amzn.to/3zVuQPP",nameProduct: `Zinus Memory Foam 12 Inch Green Tea Mattress Queen`,image: '',summary: ``,slug: ""},
			B00QBZ2BX2: {href: "https://amzn.to/3BVnzB8",nameProduct: `TUFT & NEEDLE Original Mattress`,image: '',summary: ``,slug: ""},
			B00R6AW5S2: {href: "https://amzn.to/3f71lm7",nameProduct: `Makita EB7650TH 75.6 cc MM4 Backpack Blower`,image: '',summary: ``,slug: ""},
			B00R73DYJW: {href: "https://amzn.to/3zOslP8",nameProduct: `PuraFlame Western Electric Fireplace Insert`,image: '',summary: ``,slug: ""},
			B00R9HVPBK: {href: "https://amzn.to/3BZbYkz",nameProduct: `DHP Emily Futon Sofa Bed`,image: '',summary: ``,slug: ""},
			B00SMNLF4M: {href: "https://amzn.to/3BY4nCQ",nameProduct: `WEN 56200i Super Quiet 2000 Watt Portable Inverter Generator`,image: '',summary: ``,slug: ""},
			B00TVFO08S: {href: "https://amzn.to/3zP4rTB",nameProduct: `Bose Acoustimass 6 Series V Home Theater Speaker System`,image: '',summary: ``,slug: ""},
			B00TVFO0B0: {href: "https://amzn.to/3BVFd7P",nameProduct: `Bose Acoustimass 10 series V`,image: '',summary: ``,slug: ""},
			B00UVAJU6O: {href: "https://amzn.to/3rIBwhg",nameProduct: `Classic Brands Cool Ventilated Gel Memory Foam 10 Inch`,image: '',summary: ``,slug: ""},
			B00UWP07LK: {href: "https://amzn.to/3lchaM0",nameProduct: `Frigidaire 70-Pint Dehumidifier`,image: '',summary: ``,slug: ""},
			B00W4DCHUC: {href: "https://amzn.to/3fbPZ00",nameProduct: `Zinus Ibidun Upholstered Button Tufted Platform Bed`,image: '',summary: ``,slug: ""},
			B00WR1OTY8: {href: "https://amzn.to/3l8cJC0",nameProduct: `SVS Ultra Center Channel Loudspeaker`,image: '',summary: ``,slug: ""},
			B00Z4TSRFW: {href: "https://amzn.to/3fbXQKZ",nameProduct: `Jura 15068 IMPRESSA C65 Automatic Coffee Machine`,image: '',summary: ``,slug: ""},
			B0116W5B5O: {href: "https://amzn.to/3iVFizG",nameProduct: `Review La-Z-Boy Delano Big`,image: '',summary: ``,slug: ""},
			B011IH6MBO: {href: "https://amzn.to/3ldkoyW",nameProduct: `Bose Wave SoundTouch Music System IV Review`,image: '',summary: ``,slug: ""},
			B0128T2HQK: {href: "https://amzn.to/2Wsj00W",nameProduct: `SmartBidet SB 1000 Smart Electric Bidet Seat`,image: '',summary: ``,slug: ""},
			B012H0K93I: {href: "https://amzn.to/3zRunOE",nameProduct: `Zinus 12 Inch Cloud Memory Foam Mattress`,image: '',summary: ``,slug: ""},
			B013I40R8E: {href: "https://amzn.to/3BWdS5D",nameProduct: `Breville BPR700BSS Fast Slow Pro Multi Function Cooker`,image: '',summary: ``,slug: ""},
			B013LIN5W2: {href: "https://amzn.to/3xemZLs",nameProduct: `Polk Audio T50 Home Theater Floor Standing Tower Speaker`,image: '',summary: ``,slug: ""},
			B0165UFOGS: {href: "https://amzn.to/2VmwavP",nameProduct: `TOTO SW2014#01 A100 Electronic Bidet Toilet`,image: '',summary: ``,slug: ""},
			B016J0EITS: {href: "https://amzn.to/3j7rqTn",nameProduct: `SureFire X300 Ultra Series LED WeaponLights`,image: '',summary: ``,slug: ""},
			B016OIF2JU: {href: "https://amzn.to/3zOsMce",nameProduct: `Steelcase Gesture Chair Review`,image: '',summary: ``,slug: ""},
			B0185F07GS: {href: "https://amzn.to/2WAukIC",nameProduct: `Review PORTER-CABLE 20V MAX 8-Tool Cordless Drill Combo Kit`,image: '',summary: ``,slug: ""},
			B0193V3DJ6: {href: "https://amzn.to/3BX9lj9",nameProduct: `NordicTrack T Series Treadmill Review`,image: '',summary: ``,slug: ""},
			B01AA8WOAK: {href: "https://amzn.to/3BX9mDJ",nameProduct: `Whynter Elite ARC 122DS 12,000 BTU`,image: '',summary: ``,slug: ""},
			B01ALBMIEI: {href: "https://amzn.to/3BUcdNZ",nameProduct: `Giantex Portable Mini Compact Twin Tub Washing Machine`,image: '',summary: ``,slug: ""},
			B01AWXC70U: {href: "https://amzn.to/3zRZeuc",nameProduct: `Intex Pure Spa 6 Person Hot Tub`,image: '',summary: ``,slug: ""},
			B01B4XUQI2: {href: "https://amzn.to/3iXTPem",nameProduct: `Frigidaire 8000 BTU Window Air Conditioner `,image: '',summary: ``,slug: ""},
			B01BM659ZG: {href: "https://amzn.to/3j1SjYE",nameProduct: `Aprilaire Dehumidifier`,image: '',summary: ``,slug: ""},
			B01D3FOD0Q: {href: "https://amzn.to/3fc2Cs3",nameProduct: `LG LW8016ER 8,000 BTU 115V Window Mounted `,image: '',summary: ``,slug: ""},
			B01D8DAYII: {href: "https://amzn.to/3BU7MCF",nameProduct: `Winix 5500-2 Air Purifier`,image: '',summary: ``,slug: ""},
			B01DD6C4TC: {href: "https://amzn.to/3j1SmUk",nameProduct: `Mr. Heater MH18B Big Buddy Indoor Propane Heater`,image: '',summary: ``,slug: ""},
			B01DEWZUG4: {href: "https://amzn.to/3j252dY",nameProduct: `Panasonic Microwave Oven NN-SN686S`,image: '',summary: ``,slug: ""},
			B01DTIC778: {href: "https://amzn.to/3j253P4",nameProduct: `Sun Joe MJ401E-PRO Electric Lawn Mower`,image: '',summary: ``,slug: ""},
			B01DV3849Q: {href: "https://amzn.to/2UXUqVA",nameProduct: `Infinity IT-8500X3 3D Zero Gravity Massage Chair Review`,image: '',summary: ``,slug: ""},
			B01E0NP5HU: {href: "https://amzn.to/2Vm1g77",nameProduct: `Seatcraft Dynasty Home Theater Seating`,image: '',summary: ``,slug: ""},
			B01H4UICZ8: {href: "https://amzn.to/3fbYE2t",nameProduct: `Instep Bike Trailer`,image: '',summary: ``,slug: ""},
			B01H7F0RPI: {href: "https://amzn.to/3j0WLXz",nameProduct: `Schwinn LOOP folding bike`,image: '',summary: ``,slug: ""},
			B01ICHJIM8: {href: "https://amzn.to/3jjHEsH",nameProduct: `BestOffice Gaming Chair`,image: '',summary: ``,slug: ""},
			B01IENFJ14: {href: "https://amzn.to/3rJRmrZ",nameProduct: `Dyson V8 Absolute Cordless Stick`,image: '',summary: ``,slug: ""},
			B01IRMBG7I: {href: "https://amzn.to/3fbYQ1H",nameProduct: `Panda 3200 rpm Portable Spin Dryer Review`,image: '',summary: ``,slug: ""},
			B01J664WSY: {href: "https://amzn.to/2V4K5H9",nameProduct: `Vornado VMH600 Whole Room Stainless Steel`,image: '',summary: ``,slug: ""},
			B01L1TFG66: {href: "https://amzn.to/3xeSK79",nameProduct: `Z Grills Wood Pellet Grill Smoker Review `,image: '',summary: ``,slug: ""},
			B01L9X99GC: {href: "https://amzn.to/3ldkq9R",nameProduct: `Best Choice Products 7.5ft Premium Spruce Artificial Holiday Christmas Tree`,image: '',summary: ``,slug: ""},
			B01LW3SOPE: {href: "https://amzn.to/3fbhxCU",nameProduct: `AlorAir Basement/Crawl Space Dehumidifiers`,image: '',summary: ``,slug: ""},
			B01LW76AKC: {href: "https://amzn.to/2V7z3kt",nameProduct: `Polk Audio MagniFi Mini Home Theater Surround Sound Bar`,image: '',summary: ``,slug: ""},
			B01M0L0D90: {href: "https://amzn.to/3j7g41B",nameProduct: `XTERRA Fitness TR150 Folding Treadmill Review`,image: '',summary: ``,slug: ""},
			B01M24RKQY: {href: "https://amzn.to/3zTNW8H",nameProduct: `Kahuna Massage Chair LM6800`,image: '',summary: ``,slug: ""},
			B01M716CC2: {href: "https://amzn.to/3f9FmL6",nameProduct: `Braun Series 9 Electric Shaver`,image: '',summary: ``,slug: ""},
			B01M73WPQ7: {href: "https://amzn.to/2WrGvY0",nameProduct: `PuraFlame Alice 50 Inches Recessed Electric Fireplace Review`,image: '',summary: ``,slug: ""},
			B01M7M9NXX: {href: "https://amzn.to/3fdCHA9",nameProduct: `ZINUS Shalini Upholstered Platform Bed Frame`,image: '',summary: ``,slug: ""},
			B01MAVR8UW: {href: "https://amzn.to/3f82JEY",nameProduct: `Upgraded Version Pyle Portable Washer `,image: '',summary: ``,slug: ""},
			B01MCUXSFD: {href: "https://amzn.to/2V2LApq",nameProduct: `SVS Dual PB16-Ultra Subwoofer`,image: '',summary: ``,slug: ""},
			B00NB2NOJI: {href: "https://amzn.to/3i8EQiy",nameProduct: `LUCID LU04QQFSGF2 4 Inch`,image: '',summary: ``,slug: ""},
			B01MPX171W: {href: "https://amzn.to/2WrGDGY",nameProduct: `Braun Series 7 Electric Shaver Review`,image: '',summary: ``,slug: ""},
			B01MRZ02TL: {href: "https://amzn.to/3BU8OP3",nameProduct: `Homall Gaming Chair Office Chair`,image: '',summary: ``,slug: ""},
			B01MS22KO3: {href: "https://amzn.to/3fd6Yz1",nameProduct: `Human Touch Novo XT Massage Chair Review 2020`,image: '',summary: ``,slug: ""},
			B01N0KXNFX: {href: "https://amzn.to/3BUWPkq",nameProduct: `Zinus 6 Inch Spring Twin Mattress Review`,image: '',summary: ``,slug: ""},
			B01N4RO2F4: {href: "https://amzn.to/3j0iC1r",nameProduct: `Schwinn Rascal Bike Pet Trailer`,image: '',summary: ``,slug: ""},
			B01NAUZJPE: {href: "https://amzn.to/3xb4KpZ",nameProduct: `Rheem RTEX-13 Residential Tankless Water Heater Review`,image: '',summary: ``,slug: ""},
			B06W2GYD8Y: {href: "https://amzn.to/3j6ymQo",nameProduct: `Real Relax 2020 Massage Chair`,image: '',summary: ``,slug: ""},
			B06W54K29J: {href: "https://amzn.to/3iVHiba",nameProduct: `Levoit LV-PUR131 Air Purifier `,image: '',summary: ``,slug: ""},
			B095KZJ2N8: {href: "https://amzn.to/2V7NAN0",nameProduct: `LG LP0817WSR 8,000 BTU`,image: '',summary: ``,slug: ""},
			B06XKRWWSG: {href: "https://amzn.to/3A4Hdcv",nameProduct: `Sony STR-DN1080 7.2-ch Surround Sound Home Theater AV Receiver`,image: '',summary: ``,slug: ""},
			B06XPGHMGF: {href: "https://amzn.to/3zRwamQ",nameProduct: `Seatcraft Omega Home Theater Seating Review`,image: '',summary: ``,slug: ""},
			B06Y49GJX4: {href: "https://amzn.to/3zOuoTk",nameProduct: `Summer Waves 10ft x 30in Quick Set Inflatable Above Ground Pool`,image: '',summary: ``,slug: ""},
			B07144LZ9V: {href: "https://amzn.to/3j5vZ0e",nameProduct: `Review Best Choice Portable`,image: '',summary: ``,slug: ""},
			B071D58ZY5: {href: "https://amzn.to/3icwyGj",nameProduct: `LEVOIT LV H132 Air Purifier Review`,image: '',summary: ``,slug: ""},
			B071FFSN22: {href: "https://amzn.to/2V48igT",nameProduct: `Milliard Diplomat Folding`,image: '',summary: ``,slug: ""},
			B071HP9PDR: {href: "https://amzn.to/3fbSfo0",nameProduct: `ALORAIR Commercial Water Damage Restoration Dehumidifier`,image: '',summary: ``,slug: ""},
			B072VLKC4P: {href: "https://amzn.to/3BZekzV",nameProduct: `Ashley Furniture Yandel Power Lift Recliner`,image: '',summary: ``,slug: ""},
			B073FKF9B5: {href: "https://amzn.to/3zHV3kK",nameProduct: `Intex 18ft X 52in Ultra Frame Pool Set Review`,image: '',summary: ``,slug: ""},
			B073FPL13F: {href: "https://amzn.to/3C6Cbho",nameProduct: `Intex 24ft X 12ft X 52in Ultra Frame Rectangular Pool Review`,image: '',summary: ``,slug: ""},
			B073VBWKJZ: {href: "https://amzn.to/2V4L4Hl",nameProduct: `hOmeLabs 70 Pint Dehumidifier`,image: '',summary: ``,slug: ""},
			B073W1R4XQ: {href: "https://amzn.to/3fbFqdg",nameProduct: `Edifier R1850DB Active Bookshelf Speakers`,image: '',summary: ``,slug: ""},
			B073X8ZBRL: {href: "https://amzn.to/3j2XEyT",nameProduct: `Leggett & Platt Adjustable Bed`,image: '',summary: ``,slug: ""},
			B073ZC16ZD: {href: "https://amzn.to/3j6fMb4",nameProduct: `Magic Chef White MCSTCW09W1 0.9 cu. ft. Compact Washer`,image: '',summary: ``,slug: ""},
			B0744CTXW8: {href: "https://amzn.to/3j1TU0A",nameProduct: `Review Swiss Madison St. Tropez Toilet`,image: '',summary: ``,slug: ""},
			B074D6VDT1: {href: "https://amzn.to/3j2n3sH",nameProduct: `National Tree 21 Foot Kingswood Fir Pencil Tree`,image: '',summary: ``,slug: ""},
			B074ML6THR: {href: "https://amzn.to/3iVHN52",nameProduct: `Brondell Swash SE600 Bidet Toilet Seat Review`,image: '',summary: ``,slug: ""},
			B074MLZR3Y: {href: "https://amzn.to/3zOuJFA",nameProduct: `Brondell Swash SE400 Seat Review`,image: '',summary: ``,slug: ""},
			B074PYH768: {href: "https://amzn.to/2UVr3mP",nameProduct: `hOmeLabs Compact Countertop Dishwasher`,image: '',summary: ``,slug: ""},
			B074R7GK8V: {href: "https://amzn.to/3j5TBlh",nameProduct: `COSTWAY Mini Washing Machine Review`,image: '',summary: ``,slug: ""},
			B074T9FRT7: {href: "https://amzn.to/3zQJt6V",nameProduct: `Vornado VMH300 Whole Room Metal Heater`,image: '',summary: ``,slug: ""},
			B075FBJXZ7: {href: "https://amzn.to/3zOuZEy",nameProduct: `Zinus Suzanne Metal and Wood Platform Bed Review`,image: '',summary: ``,slug: ""},
			B076KKX4BC: {href: "https://amzn.to/3zRY41M",nameProduct: `Xiaomi Mi Electric Scooter Review`,image: '',summary: ``,slug: ""},
			B076QLXHDH: {href: "https://amzn.to/3fbSSxS",nameProduct: `Frigidaire FFRA0511U1 Air`,image: '',summary: ``,slug: ""},
			B076RTR86T: {href: "https://amzn.to/3ldlRVN",nameProduct: `Direct Spa Model M 780D Hot Tub 7-Person 73-Jet Lounger Spa Review`,image: '',summary: ``,slug: ""},
			B0779KHLXJ: {href: "https://amzn.to/3lcIiug",nameProduct: `Marantz AV Receiver SR8012 - First-Ever High Performance 11.2 Channel`,image: '',summary: ``,slug: ""},
			B077N51CR2: {href: "https://amzn.to/3BUevg3",nameProduct: `Homall Single Recliner Chair Review`,image: '',summary: ``,slug: ""},
			B077PBGYVD: {href: "https://amzn.to/3BWYxSf",nameProduct: `Seatcraft Anthem Home Theater Seating`,image: '',summary: ``,slug: ""},
			B0787BVSTH: {href: "https://amzn.to/3lbJpdR",nameProduct: `LUNA Adult Weighted Blanket Review`,image: '',summary: ``,slug: ""},
			B078964VVX: {href: "https://amzn.to/3fdErtb",nameProduct: `Westinghouse WGen7500DF Dual Fuel`,image: '',summary: ``,slug: ""},
			B078C6VHDD: {href: "https://amzn.to/2WCc4yz",nameProduct: `SVS PB-4000 Subwoofer `,image: '',summary: ``,slug: ""},
			B0792PD6TY: {href: "https://amzn.to/3zVxS6F",nameProduct: `Review Woodbridge b-0030/bts160`,image: '',summary: ``,slug: ""},
			B07983G4D4: {href: "https://amzn.to/3j0BM7r",nameProduct: `DynastyMattress DM9000s Split King Adjustable `,image: '',summary: ``,slug: ""},
			B079K4L5BD: {href: "https://amzn.to/3zHW1xo",nameProduct: `ZINUS Ricardo Sofa Couch`,image: '',summary: ``,slug: ""},
			B079YW5VQL: {href: "https://amzn.to/2Ww5tFH",nameProduct: `Sony STR-DH790 7.2-ch Surround Sound Home`,image: '',summary: ``,slug: ""},
			B07B42DWWC: {href: "https://amzn.to/378fdYL",nameProduct: `Nectar Mattress Review`,image: '',summary: ``,slug: ""},
			B07B94ZR74: {href: "https://amzn.to/2V7AGP7",nameProduct: `SUPER DEAL Portable Washing Machine`,image: '',summary: ``,slug: ""},
			B07B9NP4GF: {href: "https://amzn.to/3j1qcce",nameProduct: `Zinus Memory Foam 9 Inch BioFusion Mattress`,image: '',summary: ``,slug: ""},
			B07BKMSJ6X: {href: "https://amzn.to/3A4IyA3",nameProduct: `REC TEC RT-700`,image: '',summary: ``,slug: ""},
			B07BN3B3YT: {href: "https://amzn.to/3zVyclT",nameProduct: `Avanti STW20D2P portable Washing Machine`,image: '',summary: ``,slug: ""},
			B07BNVST4P: {href: "https://amzn.to/3jjJN7J",nameProduct: `SWAGTRON Swagcycle EB5 Series Aluminum Folding Ebike `,image: '',summary: ``,slug: ""},
			B07C44DM6D: {href: "https://amzn.to/3j0C3qZ",nameProduct: `Dupray Neat Steam Cleaner`,image: '',summary: ``,slug: ""},
			B07C49F2LD: {href: "https://amzn.to/3j6A58k",nameProduct: `Denon-AVR-S540BT-Receiver - Review 2021`,image: '',summary: ``,slug: ""},
			B07CHYKRK7: {href: "https://amzn.to/3l9Ge6v",nameProduct: `COMFEE' Rice Cooker, Slow Cooker, Steamer, Stewpot, Sauté All in One`,image: '',summary: ``,slug: ""},
			B07CN38M23: {href: "https://amzn.to/2V2rsUp",nameProduct: `Masterbuilt MB20071117 Digital Electric Smoker`,image: '',summary: ``,slug: ""},
			B07CYGLK5G: {href: "https://amzn.to/3zSZY2u",nameProduct: `Yamaha P-125 Digital Piano Review`,image: '',summary: ``,slug: ""},
			B07CZ1CF79: {href: "https://amzn.to/3BS1jbD",nameProduct: `Arctic Dreams 10" Hybrid Cooling Gel Mattress`,image: '',summary: ``,slug: ""},
			B07CZ5K355: {href: "https://amzn.to/3fc5ANd",nameProduct: `Rachio 3 Smart Sprinkler Controller`,image: '',summary: ``,slug: ""},
			B07D528W98: {href: "https://amzn.to/3C02ANU",nameProduct: `YOSUDA Indoor Cycling Bike Stationary`,image: '',summary: ``,slug: ""},
			B07DFBQV15: {href: "https://amzn.to/2TK0QqH",nameProduct: `REL Acoustics HT1205 Subwoofer`,image: '',summary: ``,slug: ""},
			B07DTKXTXV: {href: "https://amzn.to/3zLgTUg",nameProduct: `Hoover Smartwash Automatic Carpet Cleaner`,image: '',summary: ``,slug: ""},
			B07F39ZRCQ: {href: "https://amzn.to/3xjIWc8",nameProduct: `Bose Bass Module 700`,image: '',summary: ``,slug: ""},
			B07PSPLXND: {href: "https://amzn.to/2V7BmUF",nameProduct: `Intex 18ft X 52in Ultra XTR Pool Review `,image: '',summary: ``,slug: ""},
			B07F3QF4KX: {href: "https://amzn.to/3fek9jh",nameProduct: `Intex 18ft X 9ft X 52in Ultra XTR Rectangular Pool`,image: '',summary: ``,slug: ""},
			B07F618LKC: {href: "https://amzn.to/3icnFg5",nameProduct: `COSTWAY Compact Laundry Dryer`,image: '',summary: ``,slug: ""},
			B07FDFP79J: {href: "https://amzn.to/3l6Pfx8",nameProduct: `Ninja Foodi 9-in-1 Pressure Unboxing`,image: '',summary: ``,slug: ""},
			B07FKJHNZX: {href: "https://amzn.to/3zHWJL4",nameProduct: `Bestway 57266-19 Round Kids Inflatable Pool`,image: '',summary: ``,slug: ""},
			B07FP186CN: {href: "https://amzn.to/3xeojxU",nameProduct: `TOTO Neorest NX1 Electronic Dual Flush Toilet`,image: '',summary: ``,slug: ""},
			B07FSYZVTZ: {href: "https://amzn.to/3zRZ9qm",nameProduct: `SereneLife Folding Treadmill Review`,image: '',summary: ``,slug: ""},
			B07FX7Z3NL: {href: "https://amzn.to/2Vit7Fg",nameProduct: `Shark Navigator Upright Vacuum`,image: '',summary: ``,slug: ""},
			B07FZ8S74R: {href: "https://amzn.to/3lcKQc8",nameProduct: `Echo Dot (3rd Gen)`,image: '',summary: ``,slug: ""},
			B07GNDDNMW: {href: "https://amzn.to/3lb1jgN",nameProduct: `SIHOO Ergonomic Office Chair`,image: '',summary: ``,slug: ""},
			B07GPXKN8Z: {href: "https://amzn.to/3ia4OlO",nameProduct: `Flume Water Monitor Review`,image: '',summary: ``,slug: ""},
			B07GXZ49DY: {href: "https://amzn.to/3BWliWw",nameProduct: `Kahuna LM6800 Massage Chair Review`,image: '',summary: ``,slug: ""},
			B07H1B3PY9: {href: "https://amzn.to/3j7vfId",nameProduct: `Polk Audio Signa S2 Ultra-Slim TV Sound Bar`,image: '',summary: ``,slug: ""},
			B07H2CKPJV: {href: "https://amzn.to/3fbHxxI",nameProduct: `Callaway Golf Men's Strata Complete Set`,image: '',summary: ``,slug: ""},
			B07F3DNQ4Q: {href: "https://amzn.to/3BYg3FV",nameProduct: `Intex 15ft x 42in Prism Frame Pool Set Review`,image: '',summary: ``,slug: ""},
			B07H781NMC: {href: "https://amzn.to/3f8asTl",nameProduct: `WOODBRIDGE T-0019 Cotton White toilet Review`,image: '',summary: ``,slug: ""},
			B07H7R6YTB: {href: "https://amzn.to/2TOcgty",nameProduct: `WOODBRIDGE B-0960S B0960S Smart Bidet seat Toilet`,image: '',summary: ``,slug: ""},
			B07HB7QBQ2: {href: "https://amzn.to/3faXfcL",nameProduct: `NordicTrack T Series Treadmill`,image: '',summary: ``,slug: ""},
			B07HVSR8RF: {href: "https://amzn.to/3A4JwMH",nameProduct: `SUPER DEAL Portable Compact Washing Machine`,image: '',summary: ``,slug: ""}
		}
	}
	return dataAMZ;
}
