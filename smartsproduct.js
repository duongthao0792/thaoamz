function getData(){
	const keysw = "www.smartsproduct.com";
	var keyAPI = (typeof keyhost != 'undefined') ? keyhost : document.location.host;
	var dataAMZ = {};
	if(keysw == keyAPI){
		dataAMZ = {
			B000058TJ3: {href: "google.com",nameProduct: `Intex Swim Center Family Inflatable Pool`,image: '',summary: ``,slug: ""},
			B00005RHPD: {href: "https://fb.com/3okM3ix",nameProduct: `Bosch 1617EVSPK Wood Router Tool Combo Kit`,image: '',summary: ``,slug: ""},
		}
	}
	return dataAMZ;
}
