var http = require("https");
var http1 = require("http");


var inStockNotice=[
	{
		name:"德亚蓝罐3",
		link:[
			{
				title:"1-800",
				hostname:"www.amazon.de",
				value:"/Aptamil-Pronutra-Folgemilch-Monat-Pack/dp/B00EE7T4QG/ref=redir_mobile_desktop?_encoding=UTF8&dpID=51QZtFXAVeL&dpPl=1&keywords=aptamil&pi=AC_SX236_SY340_QL65&qid=1505817583&ref=plSrch&ref_=mp_s_a_1_5&sr=8-5&th=1&language=en_GB"
			},{
				title:"2-800",
				hostname:"www.amazon.de",
				value:"/Aptamil-Pronutra-Folgemilch-Monat-Pack/dp/B00CPGATYO/ref=redir_mobile_desktop?_encoding=UTF8&dpID=51QZtFXAVeL&dpPl=1&keywords=aptamil&pi=AC_SX236_SY340_QL65&qid=1505817583&ref=plSrch&ref_=mp_s_a_1_5&sr=8-5&th=1&language=en_GB"
			},{
				title:"3-1200",
				hostname:"www.amazon.de",
				value:"/Aptamil-Pronutra-Folgemilch-Monat-Pack/dp/B00FF6EHCG/ref=redir_mobile_desktop?_encoding=UTF8&dpID=51QZtFXAVeL&dpPl=1&keywords=aptamil&pi=AC_SX236_SY340_QL65&qid=1505817583&ref=plSrch&ref_=mp_s_a_1_5&sr=8-5&th=1&language=en_GB"
			},{
				title:"4-800",
				hostname:"www.amazon.de",
				value:"/Aptamil-Pronutra-Folgemilch-Monat-Pack/dp/B00D8V09FE/ref=redir_mobile_desktop?_encoding=UTF8&dpID=51QZtFXAVeL&dpPl=1&keywords=aptamil&pi=AC_SX236_SY340_QL65&qid=1505817583&ref=plSrch&ref_=mp_s_a_1_5&sr=8-5&th=1&language=en_GB"
			},{
				title:"9-800",
				hostname:"www.amazon.de",
				value:"/Aptamil-Pronutra-Folgemilch-Monat-Pack/dp/B00LTPJFF6/ref=redir_mobile_desktop?_encoding=UTF8&dpID=51QZtFXAVeL&dpPl=1&keywords=aptamil&pi=AC_SX236_SY340_QL65&qid=1505817583&ref=plSrch&ref_=mp_s_a_1_5&sr=8-5&th=1&language=en_GB"
			}
		],
		phones:"13862415366,15150181446",
		protocl:http,
		protoclStr:"https",
		url:"https://www.amazon.de/Aptamil-Pronutra-Folgemilch-Monat-Pack/dp/B00CPGATYO/ref=redir_mobile_desktop?_encoding=UTF8&dpID=51QZtFXAVeL&dpPl=1&keywords=aptamil&pi=AC_SX236_SY340_QL65&qid=1505817583&ref=plSrch&ref_=mp_s_a_1_5&sr=8-5&th=1&language=en_GB"
	},
	{
		name:"德亚白金2",
		link:[
			{
				title:"4-800g",
				hostname:"www.amazon.de",
				value:"/Aptamil-Profutura-Folgemilch-nach-Monat/dp/B016WEDI6K/ref=redir_mobile_desktop?_encoding=UTF8&keywords=aptamil&pi=AC_SX236_SY340_FMwebp_QL65&qid=1506386269&ref_=mp_s_a_1_4&sr=8-4"
			}
		],
		phones:"13862415366,15150181446,15652965180",
		protocl:http,
		protoclStr:"https"
	},
	{
		name:"Silk 'n Permanent Hair",
		link:[
			{
				title:"Jewel",
				hostname:"www.amazon.de",
				value:"/gp/product/B06WLNL31G/ref=ox_sc_act_title_1?smid=A3JWKAKR8XB7XF&psc=1"
			}
		],
		phones:"13862415366,15150181446",
		protocl:http,
		protoclStr:"https"
	},
	{
		name:"澳洲爱他美奶粉terrywhitechemmart",
		link:[
			{
				title:"1-900",
				hostname:"mshop.terrywhitechemmart.com.au",
				value:"/aptamil-gold-plus-3-toddler-from-1-year-900g.html"
			}
		],
		phones:"13862415366,15150181446",
		protocl:http,
		protoclStr:"https"
	},
	{
		name:"澳爱他美terrywhitechemmart",
		link:[
			{
				title:"白二",
				hostname:"mshop.terrywhitechemmart.com.au",
				value:"/aptamil-profutura-2-premium-follow-on-formula-6-12-months-900g.html"
			}
		],
		phones:"13862415366,15150181446",
		protocl:http,
		protoclStr:"https"
	},
	{
		name:"澳爱他美terrywhitechemmart",
		link:[
			{
				title:"白三",
				hostname:"mshop.terrywhitechemmart.com.au",
				value:"/aptamil-profutura-3-premium-toddler-nutritional-supplement-from-1-year-900g.html"
			}
		],
		phones:"13862415366,15150181446",
		protocl:http,
		protoclStr:"https"
	},
	/*{
		name:"澳洲爱他美奶粉cincottachemist Gold 3",
		link:[
			{
				title:"Nutricia Aptamil Gold 3 Formula 900G",
				hostname:"m.cincottachemist.com.au",
				value:"/nutricia-aptamil-gold-3-formula-900g"
			}
		],
		phones:"13862415366,15150181446",
		protocl:http1,
		protoclStr:"http"

	},*/
	{
		name:"澳洲爱他美奶粉chemistwarehouse Gold 3",
		link:[
			{
				title:"Nutricia Aptamil Gold 3 Formula 900G",
				hostname:"www.chemistwarehouse.com.au",
				value:"/Buy/63148/Aptamil-Gold-3-Toddler-Nutritional-Supplement-From-1-year-900g"
			}
		],
		phones:"13862415366,15150181446",
		protocl:http,
		protoclStr:"https"
	}/*,
	{
		name:"澳洲爱他美奶粉cincottachemist Gold 2",
		link:[
			{
				title:"Nutricia Aptamil Gold 2 Formula 900g",
				hostname:"m.cincottachemist.com.au",
				value:"/baby-formula/nutricia-aptamil-gold-2-formula-900g"
			}
		],
		phones:"13862415366,15150181446",
		protocl:http1,
		protoclStr:"http"
	}*/
]



var inStockNoticetest=[	
	{
		name:"澳洲爱他美奶粉cincottachemist Gold 2",
		link:[
			{
				title:"Nutricia Aptamil Gold 2 Formula 900g",
				hostname:"m.cincottachemist.com.au",
				value:"/baby-formula/nutricia-aptamil-gold-2-formula-900g"
			}
		],
		phones:"13862415366,15150181446",
		protocl:http1,
		protoclStr:"http"
	}
]
exports.inStockNotice=inStockNotice;