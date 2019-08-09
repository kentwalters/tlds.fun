
const tlds = [".academy",".accountant",".accountants",".active",".actor",".ads",".adult",".aero",".agency",".airforce",
    ".apartments",".app",".archi",".army",".associates",".attorney",".auction",".audible",".audio",".author",".auto",
    ".autos",".aws",".baby",".band",".bar",".barefoot",".bargains",".baseball",".beauty",".beer",".best",".bestbuy",
    ".bet",".bid",".bike",".bingo",".bio",".biz",".black",".blackfriday",".blockbuster",".blog",".blue",".boo",".book",
    ".bot",".boutique",".box",".broker",".build",".builders",".business",".buy",".buzz",".cafe",".call",".cam",
    ".camera",".camp",".cancerresearch",".capital",".cards",".care",".career",".careers",".cars",".case",".cash",
    ".casino",".catering",".catholic",".center",".ceo",".cfd",".channel",".chat",".cheap",".christmas",".church",
    ".circle",".city",".claims",".cleaning",".click",".clinic",".clothing",".cloud",".club",".coach",".codes",
    ".coffee",".college",".community",".company",".computer",".condos",".construction",".consulting",".contact",
    ".contractors",".cooking",".cool",".coop",".country",".coupon",".coupons",".courses",".credit",".creditcard",
    ".cricket",".cruises",".dad",".dance",".date",".dating",".day",".deal",".deals",".degree",".delivery",".democrat",
    ".dental",".dentist",".design",".dev",".diamonds",".diet",".digital",".direct",".directory",".discount",".diy",
    ".doctor",".dog",".domains",".download",".duck",".earth",".eat",".eco",".education",".email",".energy",".engineer",
    ".engineering",".equipment",".esq",".estate",".events",".exchange",".expert",".exposed",".express",".fail",".faith",
    ".family",".fan",".fans",".farm",".fashion",".fast",".feedback",".film",".final",".finance",".financial",".fire",
    ".fish",".fishing",".fit",".fitness",".flights",".florist",".flowers",".fly",".foo",".food",".foodnetwork",
    ".football",".forsale",".forum",".foundation",".free",".frontdoor",".fun",".fund",".furniture",".fyi",".gallery",
    ".game",".games",".garden",".gift",".gifts",".gives",".glass",".global",".gold",".golf",".gop",".graphics",
    ".green",".gripe",".group",".guide",".guitars",".guru",".hair",".hangout",".health",".healthcare",".help",".here",
    ".hiphop",".hiv",".hockey",".holdings",".holiday",".homegoods",".homes",".homesense",".horse",".host",".hosting",
    ".hot",".house",".how",".ice",".info",".ing",".ink",".institute",".insurance",".insure",".international",
    ".investments",".jewelry",".jobs",".joy",".kim",".kitchen",".land",".latino",".law",".lawyer",".lease",".legal",
    ".lgbt",".life",".lifeinsurance",".lighting",".like",".limited",".limo",".link",".live",".living",".loan",".loans",
    ".locker",".lol",".lotto",".love",".luxe",".luxury",".makeup",".management",".market",".marketing",".markets",
    ".mba",".media",".meet",".meme",".memorial",".men",".menu",".mint",".mobi",".mobily",".moe",".money",".mortgage",
    ".motorcycles",".mov",".movie",".museum",".name",".navy",".network",".new",".news",".NGO",".ninja",".now",".off",
    ".one",".one",".NGO",".onl",".online",".ooo",".open",".organic",".origins",".page",".partners",".parts",".party",
    ".pay",".pet",".pharmacy",".photo",".photography",".photos",".physio",".pics",".pictures",".pid",".pin",".pink",
    ".pizza",".place",".plumbing",".plus",".poker",".porn",".post",".press",".prime",".pro",".productions",".prof",
    ".promo",".properties",".property",".protection",".qpon",".racing",".radio",".read",".realestate",".realty",
    ".recipes",".red",".rehab",".ren",".rent",".rentals",".repair",".report",".republican",".rest",".review",".reviews",
    ".rich",".rip",".rocks",".rodeo",".room",".rsvp",".run",".safe",".sale",".save",".scholarships",".school",
    ".science",".secure",".security",".select",".services",".sex",".sexy",".shoes",".shop",".shopping",".show",
    ".showtime",".silk",".singles",".site",".ski",".skin",".sky",".smile",".soccer",".social",".software",".solar",
    ".solutions",".song",".space",".spot",".spreadbetting",".store",".stream",".studio",".study",".style",".sucks",
    ".supplies",".supply",".support",".surf",".surgery",".systems",".talk",".tattoo",".tax",".taxi",".team",".tech",
    ".technology",".tel",".tennis",".theater",".theatre",".tickets",".tips",".tires",".today",".tools",".top",".tours",
    ".town",".toys",".trade",".trading",".training",".travel",".travelersinsurance",".trust",".tube",".tunes",
    ".university",".vacations",".vet",".video",".villas",".vip",".vision",".vodka",".vote",".voting",".voyage",".wang",
    ".watch",".watches",".weather",".webcam",".website",".wed",".wedding",".whoswho",".wiki",".win",".wine",".winners",
    ".work",".works",".world",".wow",".wtf",".xxx",".xyz",".yoga",".you",".zero",".zone"];

const start = () => {
    setInterval(() => addChild(), 820);
};

const getRandomTLD = () => {
    return tlds[Math.floor(Math.random() * tlds.length)];
};

const addChild = () => {
    const newPElement = document.createElement('p');
    const text = document.createTextNode(getRandomTLD());
    newPElement.appendChild(text);
    newPElement.classList.add('positionable');
    document.getElementById('tld-container').appendChild(newPElement);
    randomizePosition(newPElement)
};

const randomizePosition = (element) => {
    let randX = Math.random() * (window.innerWidth - element.offsetWidth);
    let randY = Math.random() * (window.innerHeight - element.offsetHeight);

    element.style.left = randX + 'px';
    element.style.top = randY + 'px';

    return element;
};

start();
