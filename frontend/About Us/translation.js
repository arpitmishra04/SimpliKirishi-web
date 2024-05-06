const TRANSLATION = [
	// TITLE
	{
		selector: "title",
		en: "SimpliKrishi",
		hi: "सिंपलीकृषि",
	},
	// NAVBAR
	{
		selector: "#body > nav > ul > li:nth-child(1) > a",
		en: "Home",
		hi: "होम पेज",
	},
	{
		selector: "#body > nav > ul > li:nth-child(2) > a",
		en: "About Us +",
		hi: "हमारे बारे में +",
	},
	{
		selector: "#body > nav > ul > li:nth-child(3) > a",
		en: "Contact Us",
		hi: "संपर्क करें",
	},
	{
		selector: "#body > nav > ul > li:nth-child(4) > a",
		en: "FAQS",
		hi: "सामान्य प्रश्नोत्तर",
	},

	// CONTACT PAGE
	{
		selector: ".contact > #company-name",
		en: "About Us",
		hi: "हमारे बारे में ",
	},
	{
		selector: "body > main > div.contact > h2",
		en: "SimpliKrishi's Helpline Center",
		hi: "सिंपलीकृषि का हेल्पलाइन सेंटर",
	},
	{
		selector: "#farmer-vid > h3",
		en: "Help for Farmers",
		hi: "किसानों के लिए मदद",
	},
	{
		selector: "#wholesaler-vid > h3",
		en: "Help for Wholesaler",
		hi: "थोक व्यापारी के लिए मदद",
	},
	// FAQS
	{
		selector: ".about > #company-name",
		en: "FAQs",
		hi: "पूछे जाने वाले प्रश्न",
	},
	{
		selector: "body > main > div.about > button:nth-child(2)",
		en: "Where and when will farmers see the farmer's portal?",
		hi: "किसान पोर्टल कहाँ और कब देखेगा?",
	},
	{
		selector: "body > main > div.about > div:nth-child(3) > p",
		en: "First enter your number, and OTP on the home page, If not signed up on our database, it will not show the Farmer's Portal. It will redirect to a sign up page, where you can select your type, add your details. Once details are added, it will redirect you to the farmer or wholesaler's portal depending on what you chose in sign up page.",
		hi: "पहले होम पेज पर अपना नंबर, और ओटीपी दर्ज करें, अगर हमारे डेटाबेस पर साइन अप नहीं किया गया है, तो यह किसान का पोर्टल नहीं दिखाएगा। यह एक साइन अप पृष्ठ पर पुनर्निर्देशित करेगा, जहां आप अपने प्रकार का चयन कर सकते हैं, अपना विवरण जोड़ सकते हैं। एक बार विवरण जोड़ दिए जाने के बाद, यह आपको किसान या थोक व्यापारी के पोर्टल पर पुनर्निर्देशित करेगा जो आपने साइन अप पृष्ठ पर चुना है।",
	},
	{
		selector: "body > main > div.about > button:nth-child(4)",
		en: ">How to add equipments to lend in Farmer's Portal?",
		hi: "किसान पोर्टल में उधार देने के लिए उपकरण कैसे जोड़े ?",
	},
	{
		selector: "body > main > div.about > button:nth-child(5) > p",
		en: "For lending equipments, there will be a plus icon under category, in manage equipments, which will redirect you to a Lend Equipments page. You can add the category, equipment and fill in all the details, and press add. The equipment will be added to your list on Farmer's Portal.",
		hi: "उधार देने वाले उपकरणों के लिए, प्रबंधन उपकरणों में श्रेणी के तहत एक प्लस आइकन होगा, जो आपको उधार उपकरण पृष्ठ पर पुनर्निर्देशित करेगा। आप श्रेणी, उपकरण जोड़ सकते हैं और सभी विवरण भर सकते हैं और ऐड दबा सकते हैं। उपकरण किसान के पोर्टल पर आपकी सूची में जोड़ दिए जाएंगे।",
	},
	{
		selector: "body > main > div.about > button:nth-child(6)",
		en: "How to rent an equipment in Farmer's Portal?",
		hi: "किसान पोर्टल में उपकरण किराए पर कैसे लें?",
	},
	{
		selector: "body > main > div.about > div:nth-child(7) > p",
		en: "For renting equipments, there will be a search bar,the farmer needs to choose from the available equipments and click on rent,he then needs to fill in the required details and click on submit",
		hi: "उपकरण किराए पर लेने के लिए, एक सर्च बार होगा, किसान को उपलब्ध उपकरणों में से चुनने और किराए पर क्लिक करने की आवश्यकता है, फिर उसे आवश्यक विवरण भरना होगा और सबमिट पर क्लिक करना होगा।",
	},
	{
		selector: "[onclick = 'toggleLanguage()'] li",
		en: "हिन्दी",
		hi: "English",
	},
];

let language = "en";
function toggleLanguage() {
	language = language == "en" ? "hi" : "en";
	translateTo(language);
}

function translateTo(lang) {
	for (let o of TRANSLATION) (get(o.selector) || {}).innerText = o[lang];
}
