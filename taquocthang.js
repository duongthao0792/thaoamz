function getData(){
	const keysw = "www.taquocthang.com";
	var keyAPI = (typeof keyhost != 'undefined') ? keyhost : document.location.host;
	var dataAMZ = {};
	if(keysw == keyAPI){
		dataAMZ = {
			B000058TJ3: {href: "https://google.com/3iOvUjh",nameProduct: `Intex Swim Center Family Inflatable Pool`,image: '',summary: ``,slug: ""},
			B00005RHPD: {href: "https://fb.com/3cC29hw",nameProduct: `Bosch 1617EVSPK Wood Router Tool Combo Kit`,image: '',summary: ``,slug: ""},
			B0000AMK5F: {href: "https://amazon.com/3grCGIT",nameProduct: `BOSTITCH Coil Roofing Nailer`,image: '',summary: ``,slug: ""},
			
		}
	}
	return dataAMZ;
}
