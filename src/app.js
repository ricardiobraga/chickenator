
//const names = require('./names');

let generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", generateChickenName);

function generateChickenName() {
    let chickenName = document.querySelector(".chicken-name");
    chickenName.classList.remove("active");
    
    
    setTimeout(() => {
        const indexName = Math.floor(Math.random() * names.length); 
        const chickenNameElement = document.querySelector(".chicken-name");
        chickenNameElement.classList.add("active");
        
        chickenNameElement.innerHTML = names[indexName];
  }, 300);
  
    
}


const names = [
    "Cococóra Coralinda",
    "Acelina Popópó",
    "Nicocólas Cage",
    "Penélope Cluckz",
    "Biquetta Garcochó",
    "Brad Bicock",
    "Giselda Bündchocó",
    "Cluckina Jolie",
    "Beyoncé Cocóles",
    "Galinha Pintonnett",
    "Ovangelina Cocóli",
    "Cocólia Cruz",
    "Plumínio Ovellar",
    "Cocóvin Bacon",
    "Frangela Bictorie",
    "Cocoricardo Darín",
    "Julia Cluckerts",
    "Cocórin Firth",
    "Ovin Diesel",
    "Lady Gagááá",
    "Pinton Hathaway",
    "Cocólin Farrell",
    "Galdemiro Mirandocó",
    "Bicoco Chanel",
    "Cococky Balboa",
    "Crispenélope Cruzinha",
    "Gal Gadowww",
    "Cocório Abreu",
    "Cocótia Rowland",
    "Frangolina Jolião",
    "Cocobama Michelle",
    "Tom Cocrooze",
    "Bicocchi Marin",
    "Cráááry Styles",
    "Plum Pit",
    "Cocólen Powell",
    "Frangione Cotillard",
    "Brad Cococker",
    "Cluckhem Hemsworth",
    "Galinhadad Gadú",
    "Cococleo DiCaprio",
    "Beyoncé Gagalinha",
    "Chickara Knightley",
    "Cocorra Knight",
    "Cocócila Black",
    "Bicôney West",
    "Plumília Clarke",
    "Galuiza Minnelli",
    "Cocovi Liv Tyler",
    "Cocóddie Murphy",
    "Plumeira Knightley",
    "Frangie Cocodson",
    "Cocórie Larson",
    "Cocoídia Arantes",
    "Julian Cluckinger",
    "Plumito Del Gallo",
    "Avesandro Patoñal",
    "Cocoema Watson",
    "Ovonda Rousey",
    "Cocósta Reeves",
    "Criscluck Pratt",
    "Cocock Mendes",
    "Frangie Ovonda",
    "Cocóne Dion",
    "Clucklícia Silverstone",
    "Cacarolinas Cochorra",
    "Bicósta Kiedis",
    "Cocórad Pittinha",
    "Frangaleta Kidman",
    "Cocóbrey Plaza",
    "Justin Frangobier",
    "Cluck Swift",
      "Cocóchelle Pfeiffer",
    "Plumanda Seycluck",
    "Cocovel Garcião",
    "Franguin Jolie",
    "Cocócarlitos Brown",
    "Cocock Norris",
    "Lady Galuinha",
    "Ovonne Clucksy",
    "Cocóca Grande",
    "Ariana Gallina",
    "Plumila Kunis",
    "Bicocó DiFrango",
    "Tom Gallancó",
    "Cate Cluckhett",
    "Plumentino Tarantocó",
    "Cocóster Stallone",
    "Ovocris Hemsworth",
    "Cocóty Perry",
    "Plumeira Wilson",
    "Cocobert Pattinson",
    "Al Gallpaccino",
    "Cocoveta Johansson",
    "Gallia Gadot",
    "Bicoco Chan",
    "Cocontina Aguilera",
    "Plumani Dicapó",
    "Cocórris Martin",
    "Cocogers Clooney",
    "Bicólly Parton",
    "Galinária Carey",
    "Cocodrick Lamar",
    "Plumoncé Knowles",
    "Cococris Rock",
    "Frangifer Lopez",
    "Cluck Pittman",
    "Cocóllin Firth",
    "Ovana Montana",
    "Cocórdade B",
    "Chris Prattininha",
    "Cocólas Sparks",
    "Brad Galliña",
      "Cocórah Silverman",
    "Pinton McCartney",
    "Cocóliver Queen",
    "Galistor Stallone",
    "Plumino Hawke",
    "Ovangerina Jolie",
    "Cocorbin Dallas",
    "Galliñando DiCaprio",
    "Cocóbama Barack",
    "Plumanda Bynes",
    "Galimilla Kunis",
    "Cocóvin Spacey",
    "Frangille Berry",
    "Cococky Gervais",
    "Galinha Turner",
    "Penosa Wintour",
    "Cocórton Hanks",
    "Ovamila Jovovich",
    "Lady Gallinever",
    "Plumelo Anthony",
    "Cocórcia Deneuve",
    "Cocóbalt Downey Jr.",
    "Frangiórgi Clooney",
    "Galidith Foster",
    "Cocóstian Bale",
    "Plumina Ryder",
    "Franguinha Montana",
    "Cocóprah Winfrey",
    "Bicocó Willis",
    "Cocóra Johansson",
    "Ovonzalo Ramos",
    "Cocóra Fitzgerald",
    "Plumanda Grier",
    "Nicocólas Flamel",
    "Cluck Reese",
    "Cocórion Cotillard",
    "Frangile Berry",
    "Cocórion Hardy",
    "Galícia Bardem",
    "Cocón Affleck",
    "Plumiranda Cosgrove",
    "Galizinha Kidman",
    "Cocock Hudson",
    "Cocoriana Grande",
    "Plumila Kun",
    "Cocóstian Stewart",
    "Galliane Hathaway",
    "Cocoreese Witherspoon",
    "Plumford Foster",
    "Cocony Depp",
    "Gallivie Newton",
    "Plumolly Ringwald",
    "Cocón McGregor",
    "Frangía Carey",
    "Cocóle Kidman",
    "Galli Cooper",
    "Cocosta Rica",
    "Plumeu Jackman",
    "Cocorence Fishburne",
    "Frangólie Colman",
    "Cocória Banks",
    "Plumando DiGallina",
    "Gallantino Tarantoco",
    "Cocolivia Newton-John",
    "Biquette Davis",
    "Cocórtney Cox",
    "Plumary Poppins",
    "Cocock Sparrow",
    "Lady Cluckington",
    "Cocozinha Aguilera",
    "Plumison Ford",
    "Coconey Montana",
    "Cocórne Firth",
    "Bicocan Reeves",
    "Cocobert Pattinó",
    "Plumin Timberlake",
    "Gallet Jackson",
    "Cocorion Day-Lewis",
    "Galiffith Tarantoco",
    "Cocósie Tyson",
    "Plumin Miranda",
    "Cocóber De Niro",
    "Gallionardo DiCapó",
    "Bicórris Martin",
    "Cocozelda Williams",
    "Plumessa Thompson",
    "Cocorrine Bailey Era",
    "Cococó Skywalker",
    "Bicórion Kenobi",
    "Plumione Granger",
    "Harry Frangópoter",
    "Cococódo Malfoy",
    "Gandalf, o Cluck",
    "Frodo Cocóvis",
    "Samwise Plumgee",
    "Bicórrum Baggins",
    "Cocócrules Snape",
    "Arwen Galinhávia",
    "Legocórnolas",
    "Cocólan Lannister",
    "Plumerys Targaryen",
    "Jon Snowcó",
    "Bicóndra Stark",
    "Tyrion Plumenister",
    "Cluck Widow",
    "Plummerica Rogers",
    "Cocóron Stark",
    "Thanos Cococluck",
    "Gamora Cocósis",
    "Bicocópula Romanoff",
    "Galigroot",
    "Cocoky Raccoon",
    "Bicócchio Potter",
    "Bruce Gallwayne",
      "Cocorine Wayne",
    "Alfred Penacóworth",
    "Plumvy Quinn",
    "Bicóan Kenobi",
    "Cocósky Walker",
    "Aragogallina",
    "Cocócrid Malfoy",
    "Thor Cocósen",
    "Loki Bicócson",
    "Tony Storkcluck",
    "Plumasha Romanoff",
    "Wanda Frangakov",
    "Bicócal Strange",
    "Frangalactus",
    "Cocóntis Prime",
    "Optimus Plumetrone",
    "Cocóbimus Prime",
    "Bicoclina Jones",
    "Lara Croftchocó",
    "Indiana Clucknes",
    "Cococó Jones",
    "Bicórman Escarlate",
    "Plumxander Harris",
    "Buffy, a Cluckadora",
    "Bicóler Cullen",
    "Cocórie Swan",
    "Plumowena Granger",
    "Galumbumblebee",
    "Bilbo Gallbaggins",
    "Cocócami Everdeen",
    "Pintaínna Mellark",
    "Cocorlet O'Hara",
    "Rhett Cocórlor",
    "Gollum Pluminho",
    "Bicock Greyjoy",
    "Cocórion Martell",
    "Arya Gallistar",
    "Daenerys Plumenborn",
    "Cocócrena Headey",
    "Bicórris Baggins",
    "Frango Skyplume",
    "Cocó Starkiller",
    "Plumchewbacca",
    "Cocorrine Solo",
    "Bicocola Organa",
    "Cocósidious",
    "Palpocluck",
    "Galloden Frangoia",
    "Bicódedore",
    "Frangine McGonacó",
    "Cocóvez Longbottom",
    "Ginny Cluckzley",
    "Plumione Weasley",
    "Cocock Finn",
    "Rey Gallwalker",
    "Plumlando Calrissian",
    "Cocó Yoda",
    "Frangky Skyplume",
    "Plumercy Gallant",
    "Bicórrick Grimes",
    "Daryl Frangón",
    "Michonne Plumgal",
    "Cocómer Wiggins",
    "Spockocó",
    "Plumcoy Kirk",
    "Bicóra Crusher",
    "Cocóth Picard",
    "Riker Gallimão",
    "Scotty Cluckbeam",
    "Cocósh Spock",
    "Bicócy Brown",
    "Plumbo Baggins",
    "Cocóck Sparrow"
  ];

