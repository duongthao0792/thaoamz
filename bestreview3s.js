function getData(){
	var dataAMZ = {
	B07VR22832: {US: "https://amzn.to/3q533rf",CA: "",UK: ""},
	B00UWP07LK: {US: "https://amzn.to/3s1Kvd8",CA: "",UK: ""},
	B01ALBMIEI: {US: "https://amzn.to/35l3yWi",CA: "",UK: ""},
	B083Q2L4VZ: {US: "https://amzn.to/3blkJuC",CA: "",UK: ""},
	B078YZ586K: {US: "https://amzn.to/35m7sy2",CA: "",UK: ""},
	B07RCNHTLS: {US: "https://amzn.to/3pTvb0e",CA: "",UK: ""},
	B07VM1HQ87: {US: "https://amzn.to/3pZUygV",CA: "",UK: ""},
	B000058TJ3: {US: "https://amzn.to/35lO5Fh",CA: "",UK: ""},
	B07VVK39F7: {US: "https://amzn.to/39fTDSG",CA: "",UK: ""},
	B07MY2H45K: {US: "https://amzn.to/3hVD9Da",CA: "",UK: ""},
	B00474X5DO: {US: "https://amzn.to/39rw7CH",CA: "",UK: ""},
	B07FDFP79J: {US: "https://amzn.to/2MBKSe8",CA: "",UK: ""},
	B07HB7QBQ2: {US: "https://amzn.to/2LgrhQl",CA: "",UK: ""},
	B00QBZ2BX2: {US: "https://amzn.to/2LA8cs4",CA: "",UK: ""},
	B07S76WBGF: {US: "https://amzn.to/3ounMnR",CA: "",UK: ""},
	B07CHYKRK7: {US: "https://amzn.to/3bwz3R9",CA: "",UK: ""},
	B07F618LKC: {US: "https://amzn.to/3oq6mJ5",CA: "",UK: ""},
	B009IJ2LM4: {US: "https://amzn.to/2JUg0oe",CA: "",UK: ""},
	B07RHQ5YNZ: {US: "https://amzn.to/3nqCScO",CA: "",UK: ""},
	B01MS22KO3: {US: "https://amzn.to/35nl6B3",CA: "",UK: ""},
	B07RSM91SY: {US: "https://amzn.to/38lJ15I",CA: "",UK: ""},
	B07B9NP4GF: {US: "https://amzn.to/3ov12Eg",CA: "",UK: ""},
	B01IRMBG7I: {US: "https://amzn.to/3biqyZJ",CA: "",UK: ""},
	B00FOUDF62: {US: "https://amzn.to/3osfwoe",CA: "",UK: ""},
	B00EPNDJ24: {US: "https://amzn.to/38nLvjP",CA: "",UK: ""},
	B009IJ2N9U: {US: "https://amzn.to/2Xlw2KX",CA: "",UK: ""},
	B0128T2HQK: {US: "https://amzn.to/2XscSmx",CA: "",UK: ""},
	B00TVFO0B0: {US: "https://amzn.to/3bll3cO",CA: "",UK: ""},
	B06XPGHMGF: {US: "https://amzn.to/3pZUVrP",CA: "",UK: ""},
	B072VLKC4P: {US: "https://amzn.to/3njBRTO",CA: "",UK: ""},
	B087Q3PTJP: {US: "https://amzn.to/2MGcy1v",CA: "",UK: ""},
	B07H7R6YTB: {US: "https://amzn.to/2MGcr65",CA: "",UK: ""},
	B07FP186CN: {US: "https://amzn.to/3bfTr8R",CA: "",UK: ""},
	B01M24RKQY: {US: "https://amzn.to/39a8mi8",CA: "",UK: ""},
	B0792PD6TY: {US: "https://amzn.to/3opKUnD",CA: "",UK: ""},
	B07GXZ49DY: {US: "https://amzn.to/35mBzoV",CA: "",UK: ""},
	B01E0NP5HU: {US: "https://amzn.to/38pTnle",CA: "",UK: ""},
	B077PBGYVD: {US: "https://amzn.to/3hS5BWA",CA: "",UK: ""},
	B08D3HW1MQ: {US: "https://amzn.to/3bjcKOx",CA: "",UK: ""},
	B07JGRJHV1: {US: "https://amzn.to/2Lg2Y50",CA: "",UK: ""},
	B08GYL2CBM: {US: "https://amzn.to/3q547LL",CA: "",UK: ""},
	B088T949GP: {US: "https://amzn.to/397Csmq",CA: "",UK: ""},
	B007HIKQCK: {US: "https://amzn.to/38n9mQI",CA: "",UK: ""},
	B00GIODM6G: {US: "https://amzn.to/2MLyqZx",CA: "",UK: ""},
	B08HYXW1NL: {US: "https://amzn.to/2LtQYg8",CA: "",UK: ""},
	B07TC3659T: {US: "https://amzn.to/3pZVnX3",CA: "",UK: ""},
	B089JS623C: {US: "https://amzn.to/3nlEnsN",CA: "",UK: ""},
	B00Q7EPY04: {US: "https://amzn.to/39dtLXD",CA: "",UK: ""},
	B00SMNLF4M: {US: "https://amzn.to/2JVdPAN",CA: "",UK: ""},
	B07CN38M23: {US: "https://amzn.to/2Xl5ERl",CA: "",UK: ""},
	B075XQRXCF: {US: "https://amzn.to/3nnFkRm",CA: "",UK: ""},
	B083G9WVNC: {US: "https://amzn.to/35ophfY",CA: "",UK: ""},
	B001BMDFPS: {US: "https://amzn.to/2LxqFpe",CA: "",UK: ""},
	B00C03D01Q: {US: "https://amzn.to/3i5nWjn",CA: "",UK: ""},
	B0000AMK5F: {US: "https://amzn.to/3bhuppJ",CA: "",UK: ""},
	B07DTKXTXV: {US: "https://amzn.to/3osmqKb",CA: "",UK: ""},
	B0055P70MQ: {US: "https://amzn.to/2Xo5wk1",CA: "",UK: ""},
	B01N6T5QNO: {US: "https://amzn.to/396UJAk",CA: "",UK: ""},
	B07C44DM6D: {US: "https://amzn.to/3hQPsRs",CA: "",UK: ""},
	B008DBRFBK: {US: "https://amzn.to/3pZWV3w",CA: "",UK: ""},
	B00G00BT72: {US: "https://amzn.to/35izhaA",CA: "",UK: ""},
	B07TDP2MMQ: {US: "https://amzn.to/3rZlq2B",CA: "",UK: ""},
	B07HVSR8RF: {US: "https://amzn.to/39eRg2v",CA: "",UK: ""},
	B074R7GK8V: {US: "https://amzn.to/3s5JFfC",CA: "",UK: ""},
	B01MAVR8UW: {US: "https://amzn.to/3beqXwe",CA: "",UK: ""},
	B003OBUE5I: {US: "https://amzn.to/3nrKxr4",CA: "",UK: ""},
	B06ZY896ZM: {US: "https://amzn.to/3nr4QoP",CA: "",UK: ""},
	B07QH5JV8K: {US: "https://amzn.to/3s5JGAc",CA: "",UK: ""},
	B07BN3B3YT: {US: "https://amzn.to/3orkphz",CA: "",UK: ""},
	B00UCIOWRM: {US: "https://amzn.to/2LrO8Iy",CA: "",UK: ""},
	B0165UFOGS: {US: "https://amzn.to/3s7AXNA",CA: "",UK: ""},
	B07H2CKPJV: {US: "https://amzn.to/35nSbN0",CA: "",UK: ""},
	B013I40R8E: {US: "https://amzn.to/35lmcNL",CA: "",UK: ""},
	B00005RHPD: {US: "https://amzn.to/3s3lYED",CA: "",UK: ""},
	B00F2CGXGG: {US: "https://amzn.to/3q2GCmC",CA: "",UK: ""},
	B009X43F38: {US: "https://amzn.to/2Lx994J",CA: "",UK: ""},
	B0052OX876: {US: "https://amzn.to/3hRFNtT",CA: "",UK: ""},
	B00R6AW5S2: {US: "https://amzn.to/3nqx0QT",CA: "",UK: ""},
	B005BPWN0O: {US: "https://amzn.to/35nmmEh",CA: "",UK: ""},
	B073ZC16ZD: {US: "https://amzn.to/38pgA75",CA: "",UK: ""},
	B01DD6C4TC: {US: "https://amzn.to/3pXccC0",CA: "",UK: ""},
	B07983G4D4: {US: "https://amzn.to/39fVaYW",CA: "",UK: ""},
	B07F39ZRCQ: {US: "https://amzn.to/3njD7X2",CA: "",UK: ""},
	B079YW5VQL: {US: "https://amzn.to/3s78I1R",CA: "",UK: ""},
	B011IH6MBO: {US: "https://amzn.to/3bjGOd1",CA: "",UK: ""},
	B073W1R4XQ: {US: "https://amzn.to/3npifxu",CA: "",UK: ""},
	B0002KVQBA: {US: "https://amzn.to/2L33QtZ",CA: "",UK: ""},
	B000GFPTQY: {US: "https://amzn.to/3npisku",CA: "",UK: ""},
	B000092TT0: {US: "https://amzn.to/35kNYcS",CA: "",UK: ""},
	B0002KVQBA: {US: "https://amzn.to/3s78O9J",CA: "",UK: ""},
	B01MCUXSFD: {US: "https://amzn.to/2XnRzTa",CA: "",UK: ""},
	B07TDHXBYT: {US: "https://amzn.to/35kqDs1",CA: "",UK: ""},
	B018RWQ16Y: {US: "https://amzn.to/3nodunV",CA: "",UK: ""},
	B07VRWZCDS: {US: "https://amzn.to/2XnllHW",CA: "",UK: ""},
	B07S2348R9: {US: "https://amzn.to/3s6yJxZ",CA: "",UK: ""},
	B081DG1BRW: {US: "https://amzn.to/2LbJIWs",CA: "",UK: ""},
	B01M7M9NXX: {US: "https://amzn.to/2Xp519i",CA: "",UK: ""},
	B00TVFO08S: {US: "https://amzn.to/3pSkL10",CA: "",UK: ""},
	B00Q7EPSHI: {US: "https://amzn.to/3hVF8Y8",CA: "",UK: ""},
	B00W4DCHUC: {US: "https://amzn.to/2XlqjF1",CA: "",UK: ""},
	B00AB25016: {US: "https://amzn.to/3pUFzVq",CA: "",UK: ""},
	B00FH441AE: {US: "https://amzn.to/39boi3R",CA: "",UK: ""},
	B003MANSNG: {US: "https://amzn.to/2JVUdN5",CA: "",UK: ""},
	B08HN5WLMM: {US: "https://amzn.to/38qEqPE",CA: "",UK: ""},
	B07WNNN6P9: {US: "https://amzn.to/3s797kT",CA: "",UK: ""},
	B00FADLVAK: {US: "https://amzn.to/2JTTjk0",CA: "",UK: ""},
	B01L9X99GC: {US: "https://amzn.to/3hS6Jti",CA: "",UK: ""},
	B074D6VDT1: {US: "https://amzn.to/35jWQ2L",CA: "",UK: ""},
	B00MWTJ9OA: {US: "https://amzn.to/39c9h1B",CA: "",UK: ""},
	B07QV8PMBY: {US: "https://amzn.to/35gBraD",CA: "",UK: ""},
	B07J31T4NC: {US: "https://amzn.to/3blhMdA",CA: "",UK: ""},
	B01N0KXNFX: {US: "https://amzn.to/3s4pApH",CA: "",UK: ""},
	B07B42DWWC: {US: "https://amzn.to/35lljEK",CA: "",UK: ""},
	B07PBFKXW9: {US: "https://amzn.to/3nkmJpa",CA: "",UK: ""},
	B00UVAJU6O: {US: "https://amzn.to/3q0ZtOJ",CA: "",UK: ""},
	B01L1TFG66: {US: "https://amzn.to/3s6NfG4",CA: "",UK: ""},
	B07NW8SP6H: {US: "https://amzn.to/3pZXH0q",CA: "",UK: ""},
	B07NW9JR3D: {US: "https://amzn.to/3bisMIz",CA: "",UK: ""},
	B075FBJXZ7: {US: "https://amzn.to/3bjePdb",CA: "",UK: ""},
	B078C6VHDD: {US: "https://amzn.to/3bo40qn",CA: "",UK: ""},
	B00WR1OTY8: {US: "https://amzn.to/2MK2xAx",CA: "",UK: ""},
	B0779KHLXJ: {US: "https://amzn.to/3s2s9IV",CA: "",UK: ""},
	B013LIN5W2: {US: "https://amzn.to/3bkoyQD",CA: "",UK: ""},
	B07H1B3PY9: {US: "https://amzn.to/38qEHlE",CA: "",UK: ""},
	B07PL6LDP1: {US: "https://amzn.to/2MLTOxJ",CA: "",UK: ""},
	B078H1XWFG: {US: "https://amzn.to/3q55I4d",CA: "",UK: ""},
	B07BKMSJ6X: {US: "https://amzn.to/3hRzRkq",CA: "",UK: ""},
	B077N51CR2: {US: "https://amzn.to/39dv6h7",CA: "",UK: ""},
	B002FU5SKU: {US: "https://amzn.to/35nqOCR",CA: "",UK: ""},
	B07QYC1TFB: {US: "https://amzn.to/2XlJ1MK",CA: "",UK: ""},
	B00212G3DI: {US: "https://amzn.to/39aama8",CA: "",UK: ""},
	B07SV9516S: {US: "https://amzn.to/39bFG8y",CA: "",UK: ""},
	B00KYB47JU: {US: "https://amzn.to/3npjcpM",CA: "",UK: ""},
	B076RTR86T: {US: "https://amzn.to/3nu1Xn4",CA: "",UK: ""},
	B076KKX4BC: {US: "https://amzn.to/3pYjAx1",CA: "",UK: ""},
	B07CYGLK5G: {US: "https://amzn.to/3pXHadi",CA: "",UK: ""},
	B00Z4TSRFW: {US: "https://amzn.to/3pTxEYy",CA: "",UK: ""},
	B01LW76AKC: {US: "https://amzn.to/3q19WtG",CA: "",UK: ""},
	B07CZ5K355: {US: "https://amzn.to/3s8vSF8",CA: "",UK: ""},
	B0185F07GS: {US: "https://amzn.to/39c9EJx",CA: "",UK: ""},
	B07W7G23ZG: {US: "https://amzn.to/3s2slI9",CA: "",UK: ""},
	B00PKXWIPC: {US: "https://amzn.to/3bklRyA",CA: "",UK: ""},
	B07XKCMKWB: {US: "https://amzn.to/3pXdmxm",CA: "",UK: ""},
	B01D3FOD0Q: {US: "https://amzn.to/3bkpmow",CA: "",UK: ""},
	B0861HFYW1: {US: "https://amzn.to/3ouqgmb",CA: "",UK: ""},
	B00A8UPX0Y: {US: "https://amzn.to/3bfVppL",CA: "",UK: ""},
	B00HXGSBXC: {US: "https://amzn.to/3pUGghu",CA: "",UK: ""},
	B01H7F0RPI: {US: "https://amzn.to/35hPHzF",CA: "",UK: ""},
	B07DFBQV15: {US: "https://amzn.to/3q10arj",CA: "",UK: ""},
	B08LG7GNMJ: {US: "https://amzn.to/3hPZv9m",CA: "",UK: ""},
	B07KRQBWCL: {US: "https://amzn.to/3oCNXZq",CA: "",UK: ""},
	B07XBPMBTF: {US: "https://amzn.to/2LATWja",CA: "",UK: ""},
	B07XBYFS9Z: {US: "https://amzn.to/3s2sDPf",CA: "",UK: ""},
	B07MXQQQZ5: {US: "https://amzn.to/3bo4FYT",CA: "",UK: ""},
	B01DTIC778: {US: "https://amzn.to/3pUGqFC",CA: "",UK: ""},
	B073X8ZBRL: {US: "https://amzn.to/3pXNcdU",CA: "",UK: ""},
	B07K7YXCFD: {US: "https://amzn.to/3npWRIr",CA: "",UK: ""},
	B08NSVXHB6: {US: "https://amzn.to/2Xoxs7o",CA: "",UK: ""},
	B004QERFA4: {US: "https://amzn.to/2JTI7Uv",CA: "",UK: ""},
	B004PULVOK: {US: "https://amzn.to/3noeI2v",CA: "",UK: ""},
	B06Y32FG2N: {US: "https://amzn.to/3bliI1A",CA: "",UK: ""},
	B074ML6THR: {US: "https://amzn.to/3s4viIa",CA: "",UK: ""},
	B074MLZR3Y: {US: "https://amzn.to/38nwmPC",CA: "",UK: ""},
	B07H781NMC: {US: "https://amzn.to/3hVGims",CA: "",UK: ""},
	B06XKRWWSG: {US: "https://amzn.to/3hUKL9c",CA: "",UK: ""},
	B07C49F2LD: {US: "https://amzn.to/2XsfJff",CA: "",UK: ""},
	B07RC8LL8R: {US: "https://amzn.to/399qlW5",CA: "",UK: ""},
	B07588SJHN: {US: "https://amzn.to/2XoxKLw",CA: "",UK: ""},
	B07WZFTGB4: {US: "https://amzn.to/3hWNSxw",CA: "",UK: ""},
	B01AU7KWXC: {US: "https://amzn.to/3hRHmYN",CA: "",UK: ""},
	B00QBZ25SS: {US: "https://amzn.to/3nqyAlN",CA: "",UK: ""},
	B07T5GGR8L: {US: "https://amzn.to/2L35jR1",CA: "",UK: ""},
	B07F36DGBN: {US: "https://amzn.to/38mYXEG",CA: "",UK: ""}
	}
	return dataAMZ;
}
