function getData(){
	var dataAMZ = {
	B00CH9QWOU: {US: "https://amzn.to/3vxmnRc",CA: "",UK: ""},
	B07JH7GS76: {US: "https://amzn.to/3vrq76W",CA: "",UK: ""},
	B07MRG5F4J: {US: "https://amzn.to/3cE3ROr",CA: "",UK: ""},
	B07FZ8S74R: {US: "https://amzn.to/3qPtMbi",CA: "",UK: ""},
	B07VR22832: {US: "https://amzn.to/2OCgFNt",CA: "",UK: ""},
	B00UWP07LK: {US: "https://amzn.to/3cB1UCr",CA: "",UK: ""},
	B01ALBMIEI: {US: "https://amzn.to/2Q9IqgR",CA: "",UK: ""},
	B083Q2L4VZ: {US: "https://amzn.to/3vxy62y",CA: "",UK: ""},
	B07RCNHTLS: {US: "https://amzn.to/3qSqvIj",CA: "",UK: ""},
	B000058TJ3: {US: "https://amzn.to/3cE4pUv",CA: "",UK: ""},
	B07VVK39F7: {US: "https://amzn.to/3eGk7Br",CA: "",UK: ""},
	B07MY2H45K: {US: "https://amzn.to/3bRszM9",CA: "",UK: ""},
	B07FDFP79J: {US: "https://amzn.to/2NrcsM6",CA: "",UK: ""},
	B07HB7QBQ2: {US: "https://amzn.to/3lpEwMf",CA: "",UK: ""},
	B086Q2M7FK: {US: "https://amzn.to/3vsccxr",CA: "",UK: ""},
	B07SFJXLYW: {US: "https://amzn.to/3qY8rws",CA: "",UK: ""},
	B07Q19RL7D: {US: "https://amzn.to/3cFzvLs",CA: "",UK: ""},
	B00QBZ2BX2: {US: "https://amzn.to/3cE4w2n",CA: "",UK: ""},
	B07PDXKSGJ: {US: "https://amzn.to/3vuTSny",CA: "",UK: ""},
	B07NRBDMJR: {US: "https://amzn.to/3rU2Hor",CA: "",UK: ""},
	B085797ZFF: {US: "https://amzn.to/38FObJB",CA: "",UK: ""},
	B0867GMW9X: {US: "https://amzn.to/3vtXJRw",CA: "",UK: ""},
	B07S76WBGF: {US: "https://amzn.to/3tvtF6x",CA: "",UK: ""},
	B07CHYKRK7: {US: "https://amzn.to/3cuizYg",CA: "",UK: ""},
	B07F618LKC: {US: "https://amzn.to/30Kuzj2",CA: "",UK: ""},
	B00I0ZGOZM: {US: "https://amzn.to/3voXUOd",CA: "",UK: ""},
	B0116W5B5O: {US: "https://amzn.to/3eKhZss",CA: "",UK: ""},
	B073VBWKJZ: {US: "https://amzn.to/38KNL4D",CA: "",UK: ""},
	B07MCDL9N3: {US: "https://amzn.to/2OYPHzi",CA: "",UK: ""},
	B07MKLJLY4: {US: "https://amzn.to/3rRo224",CA: "",UK: ""},
	B07144LZ9V: {US: "https://amzn.to/3rYEo9e",CA: "",UK: ""},
	B00CMREO0Q: {US: "https://amzn.to/3vtYgmD",CA: "",UK: ""},
	B07V48X7HG: {US: "https://amzn.to/3vv5AhN",CA: "",UK: ""},
	B07KKFDM1M: {US: "https://amzn.to/3rX6BwY",CA: "",UK: ""},
	B00JJ5I7GQ: {US: "https://amzn.to/2QbY2jV",CA: "",UK: ""},
	B01D8DAYII: {US: "https://amzn.to/2OChrdl",CA: "",UK: ""},
	B009SCPYN4: {US: "https://amzn.to/3eHSAzx",CA: "",UK: ""},
	B0744CTXW8: {US: "https://amzn.to/3eE7J4S",CA: "",UK: ""},
	B0787BVSTH: {US: "https://amzn.to/3ln3njV",CA: "",UK: ""},
	B00NB3P98G: {US: "https://amzn.to/3tng7K6",CA: "",UK: ""},
	B009IJ2LM4: {US: "https://amzn.to/38K7KAh",CA: "",UK: ""},
	B07RHQ5YNZ: {US: "https://amzn.to/2OERppV",CA: "",UK: ""},
	B01MPWCS7O: {US: "https://amzn.to/3eGrUPC",CA: "",UK: ""},
	B076QLXHDH: {US: "https://amzn.to/3vnVaAu",CA: "",UK: ""},
	B074PYH768: {US: "https://amzn.to/3vtYquf",CA: "",UK: ""},
	B01MS22KO3: {US: "https://amzn.to/3tsYHLY",CA: "",UK: ""},
	B07RSM91SY: {US: "https://amzn.to/3eKWmIb",CA: "",UK: ""},
	B07B9NP4GF: {US: "https://amzn.to/2Q1asLi",CA: "",UK: ""},
	B07FKJHNZX: {US: "https://amzn.to/3bR6flR",CA: "",UK: ""},
	B01IRMBG7I: {US: "https://amzn.to/3eNYqzh",CA: "",UK: ""},
	B00FOUDF62: {US: "https://amzn.to/2NlSa6v",CA: "",UK: ""},
	B00EPNDJ24: {US: "https://amzn.to/392b2PR",CA: "",UK: ""},
	B009IJ2N9U: {US: "https://amzn.to/2Ouyw9e",CA: "",UK: ""},
	B0128T2HQK: {US: "https://amzn.to/3tqcDGJ",CA: "",UK: ""},
	B06XBF75QJ: {US: "https://amzn.to/3vnVrU2",CA: "",UK: ""},
	B084DBC9MN: {US: "https://amzn.to/3cGu7Il",CA: "",UK: ""},
	B07NC2QM6V: {US: "https://amzn.to/3eLgzxQ",CA: "",UK: ""},
	B07N3Z9M7H: {US: "https://amzn.to/3bR6EVF",CA: "",UK: ""},
	B08BPJ76GP: {US: "https://amzn.to/3eG8Hxv",CA: "",UK: ""},
	B000ANEPYO: {US: "https://amzn.to/3qPuV2A",CA: "",UK: ""},
	B06XPGHMGF: {US: "https://amzn.to/38GJLC8",CA: "",UK: ""},
	B072VLKC4P: {US: "https://amzn.to/38Ks7xz",CA: "",UK: ""},
	B087Q3PTJP: {US: "https://amzn.to/2NpXs0Y",CA: "",UK: ""},
	B07H7R6YTB: {US: "https://amzn.to/2Nljv8S",CA: "",UK: ""},
	B07J6S4RZ9: {US: "https://amzn.to/3qLkY6c",CA: "",UK: ""},
	B07S39CW8Q: {US: "https://amzn.to/2ODsOSb",CA: "",UK: ""},
	B07D528W98: {US: "https://amzn.to/3vtP0id",CA: "",UK: ""},
	B084P72GYX: {US: "https://amzn.to/3rTFWkK",CA: "",UK: ""},
	B00JGRBSS6: {US: "https://amzn.to/3tmTup6",CA: "",UK: ""},
	B002R8CPRY: {US: "https://amzn.to/38Ksh89",CA: "",UK: ""},
	B07FP186CN: {US: "https://amzn.to/3lmkGkX",CA: "",UK: ""},
	B0792PD6TY: {US: "https://amzn.to/38K8Fkd",CA: "",UK: ""},
	B07Q9MDWQH: {US: "https://amzn.to/2Q0zb2i",CA: "",UK: ""},
	B00H3RI32U: {US: "https://amzn.to/3bVSp1T",CA: "",UK: ""},
	B07GXZ49DY: {US: "https://amzn.to/3qWiYI9",CA: "",UK: ""},
	B01E0NP5HU: {US: "https://amzn.to/3bVSqmt",CA: "",UK: ""},
	B077PBGYVD: {US: "https://amzn.to/3tsZD2W",CA: "",UK: ""},
	B07M8F5P7B: {US: "https://amzn.to/30OSkq8",CA: "",UK: ""},
	B012H0K93I: {US: "https://amzn.to/30OWeQ0",CA: "",UK: ""},
	B0043E6PLC: {US: "https://amzn.to/3cB5w7E",CA: "",UK: ""},
	B000UXPFMU: {US: "https://amzn.to/3qTTfAh",CA: "",UK: ""},
	B07VC44C68: {US: "https://amzn.to/2OBbQnE",CA: "",UK: ""},
	B07M949RQS: {US: "https://amzn.to/30LRYkj",CA: "",UK: ""},
	B01AA8WOAK: {US: "https://amzn.to/3qRnWWP",CA: "",UK: ""},
	B01DEWZUG4: {US: "https://amzn.to/3lmyzzM",CA: "",UK: ""},
	B08D3HW1MQ: {US: "",CA: "",UK: ""},
	B07JGRJHV1: {US: "https://amzn.to/2Qdcfxb",CA: "",UK: ""},
	B07BNVST4P: {US: "https://amzn.to/3rUfQ0O",CA: "",UK: ""},
	B002WKJ5ES: {US: "https://amzn.to/30U6ndX",CA: "",UK: ""},
	B06W54K29J: {US: "https://amzn.to/38LZaB7",CA: "",UK: ""},
	B08GYL2CBM: {US: "https://amzn.to/3tk5d7K",CA: "",UK: ""},
	B00R9HVPBK: {US: "https://amzn.to/2NlUAlB",CA: "",UK: ""},
	B016J0EITS: {US: "https://amzn.to/38KSlzR",CA: "",UK: ""},
	B088T949GP: {US: "https://amzn.to/3cRgnKX",CA: "",UK: ""},
	B007HIKQCK: {US: "https://amzn.to/3ljOmiK",CA: "",UK: ""},
	B07CZ1CF79: {US: "https://amzn.to/3lnk12E",CA: "",UK: ""},
	B08HYXW1NL: {US: "https://amzn.to/3vtacVG",CA: "",UK: ""},
	MCSDRY15W: {US: "https://amzn.to/38KppIg",CA: "",UK: ""},
	B07TC3659T: {US: "https://amzn.to/3qRlAHA",CA: "",UK: ""},
	B00R73DYJW: {US: "https://amzn.to/2QaAkof",CA: "",UK: ""},
	B07B94ZR74: {US: "https://amzn.to/3cwr1Xa",CA: "",UK: ""},
	B00JH98GR4: {US: "https://amzn.to/3bSBlJU",CA: "",UK: ""},
	B07FX7Z3NL: {US: "https://amzn.to/3cz9WvL",CA: "",UK: ""},
	B00GJ1N5VA: {US: "https://amzn.to/3tpl05j",CA: "",UK: ""},
	B00GBADAT6: {US: "https://amzn.to/3eWFAX1",CA: "",UK: ""},
	B000BO8AKW: {US: "https://amzn.to/3cRgPsD",CA: "",UK: ""},
	B07SG4KNT4: {US: "https://amzn.to/3cFECeC",CA: "",UK: ""},
	B07KQ6S5N1: {US: "https://amzn.to/3cG5Odg",CA: "",UK: ""},
	B089JS623C: {US: "https://amzn.to/30QFLL7",CA: "",UK: ""},
	B071FFSN22: {US: "https://amzn.to/3bNqwJ3",CA: "",UK: ""},
	B00Q7EPY04: {US: "https://amzn.to/38KWEeo",CA: "",UK: ""},
	B06W2GYD8Y: {US: "https://amzn.to/3vDfH4r",CA: "",UK: ""},
	B00IWJOOU8: {US: "https://amzn.to/3vxtLMs",CA: "",UK: ""},
	B07L1P4SPB: {US: "https://amzn.to/3tnkCnY",CA: "",UK: ""},
	B01J664WSY: {US: "https://amzn.to/3vtSv8l",CA: "",UK: ""},
	B002G51BZU: {US: "https://amzn.to/3rNa4y5",CA: "",UK: ""},
	B071D58ZY5: {US: "https://amzn.to/3linDTO",CA: "",UK: ""},
	B002635ODW: {US: "https://amzn.to/2Q1eZgM",CA: "",UK: ""},
	B00SMNLF4M: {US: "https://amzn.to/3rRLAnv",CA: "",UK: ""},
	B078964VVX: {US: "https://amzn.to/3tlLLaX",CA: "",UK: ""},
	B07CN38M23: {US: "https://amzn.to/3tjaXPc",CA: "",UK: ""},
	B083G9WVNC: {US: "https://amzn.to/2OBflui",CA: "",UK: ""},
	B001BMDFPS: {US: "https://amzn.to/3bRhtHd",CA: "",UK: ""},
	B00C03D01Q: {US: "https://amzn.to/2P2IYVm",CA: "",UK: ""},
	B0000AMK5F: {US: "https://amzn.to/2OubkrH",CA: "",UK: ""},
	B07DTKXTXV: {US: "https://amzn.to/38Kqksc",CA: "",UK: ""},
	B0055P70MQ: {US: "https://amzn.to/3czx9xX",CA: "",UK: ""},
	B07C44DM6D: {US: "https://amzn.to/30PPMIg",CA: "",UK: ""},
	B008DBRFBK: {US: "https://amzn.to/3cDMeyw",CA: "",UK: ""},
	B00G00BT72: {US: "https://amzn.to/38GO0xy",CA: "",UK: ""},
	B00MYWQL96: {US: "https://amzn.to/2Q4lpM5",CA: "",UK: ""},
	B07TDP2MMQ: {US: "https://amzn.to/3eGcGdr",CA: "",UK: ""},
	B07HVSR8RF: {US: "https://amzn.to/3vFezgC",CA: "",UK: ""},
	B074R7GK8V: {US: "https://amzn.to/38No7vY",CA: "",UK: ""},
	B01MAVR8UW: {US: "https://amzn.to/3rRQ25r",CA: "",UK: ""},
	B07BN3B3YT: {US: "https://amzn.to/3czxAIB",CA: "",UK: ""},
	B013I40R8E: {US: "https://amzn.to/3tlMskz",CA: "",UK: ""},
	B009X43F38: {US: "https://amzn.to/2Nq0L8o",CA: "",UK: ""},
	B0052OX876: {US: "https://amzn.to/3eRv6rw",CA: "",UK: ""},
	B00R6AW5S2: {US: "https://amzn.to/3lj7NbA",CA: "",UK: ""},
	B005BPWN0O: {US: "https://amzn.to/30OZlHG",CA: "",UK: ""},
	B01DD6C4TC: {US: "https://amzn.to/3vwaxXx",CA: "",UK: ""},
	B07983G4D4: {US: "https://amzn.to/3qSvYPg",CA: "",UK: ""},
	B00AB25016: {US: "https://amzn.to/3eGdiQh",CA: "",UK: ""},
	B078C6VHDD: {US: "https://amzn.to/3eII4ba",CA: "",UK: ""},
	B00WR1OTY8: {US: "https://amzn.to/2OtJwnh",CA: "",UK: ""},
	B0779KHLXJ: {US: "https://amzn.to/3cCcOIb",CA: "",UK: ""},
	B07XKCMKWB: {US: "https://amzn.to/3vo0Lqu",CA: "",UK: ""},
	B01D3FOD0Q: {US: "https://amzn.to/3cwsAV2",CA: "",UK: ""},
	B0861HFYW1: {US: "https://amzn.to/3qT4kBu",CA: "",UK: ""},
	B07MXQQQZ5: {US: "https://amzn.to/3eKk2MU",CA: "",UK: ""}
	}
	return dataAMZ;
}
