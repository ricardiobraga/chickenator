//const names = require('./names');

let generateBtn = document.querySelector("#generate");
let ptLangBtn = document.querySelectorAll("lang");



document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-lang]").forEach(function (langBtn) {
    langBtn.addEventListener("click", function () {
      let btnName = document.querySelector(".btn-name");
      let btnCertificate = document.querySelector(".btn-certificate");
      let welcome = document.querySelector("h1");
      let chickenName = document.querySelector(".chicken-name");

      if (langBtn.dataset.lang === "en") {
        // Altera somente o texto, preservando o elemento <img>
        welcome.childNodes[0].nodeValue = "Welcome";
        welcome.classList.remove("active");
        btnName.childNodes[0].nodeValue = "Generate Name ";
        btnCertificate.childNodes[0].nodeValue = "Generate Birth Certificate ";
        chickenName.classList.remove("active");
        
      } else {
        welcome.childNodes[0].nodeValue = "Bem vinda";
        welcome.classList.remove("active");
        btnName.childNodes[0].nodeValue = "Gerar Nome ";
        btnCertificate.childNodes[0].nodeValue = "Gerar Certidão ";
        chickenName.classList.remove("active");
      }
    });
  });
});

generateBtn.addEventListener("click", generateChickenName);

function generateChickenName() {
  let chickenName = document.querySelector(".chicken-name");
  let title = document.querySelector("h1");
  chickenName.classList.remove("active");
  title.classList.remove("active");

  setTimeout(() => {
    const indexName = Math.floor(Math.random() * names.length);
    const chickenNameElement = document.querySelector(".chicken-name");
    const title = document.querySelector("h1");
    chickenNameElement.classList.add("active");
    title.classList.add("active");

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
  "Cocóck Sparrow",
];


function createCloud() {
  const cloud = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  cloud.setAttribute("width", "93");
  cloud.setAttribute("height", "55");
  cloud.setAttribute("viewBox", "0 0 93 55");
  cloud.setAttribute("fill", "none");
  cloud.classList.add("cloud");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill-rule", "evenodd");
  path.setAttribute("clip-rule", "evenodd");
  path.setAttribute(
    "d",
    "M59.2971 0C55.5339 0 52.0865 1.35215 49.4143 3.59711C46.742 1.35215 43.2946 0 39.5314 0C33.9778 0 29.1119 2.94488 26.4102 7.35828C25.0206 6.86 23.5229 6.58855 21.9619 6.58855C15.183 6.58855 9.5996 11.7075 8.86637 18.2908C3.70581 20.0765 -7.62939e-06 24.9788 -7.62939e-06 30.7466C-7.62939e-06 38.0242 5.8996 43.9238 13.1771 43.9238C14.0611 43.9238 14.9247 43.8367 15.7599 43.6708C18.5169 47.7958 23.2165 50.5124 28.5505 50.5124C31.5938 50.5124 34.4305 49.6281 36.8178 48.1024C40.8173 52.2935 46.458 54.9048 52.7086 54.9048C54.3539 54.9048 55.957 54.7238 57.499 54.3808C58.7727 54.7225 60.1118 54.9048 61.4933 54.9048C66.813 54.9048 71.5016 52.2028 74.2616 48.0964C75.1084 48.2409 75.9787 48.3162 76.8667 48.3162C85.3571 48.3162 92.24 41.4333 92.24 32.9428C92.24 27.7133 89.6289 23.0937 85.6392 20.3166C85.3531 13.8995 80.06 8.78475 73.5724 8.78475C73.4457 8.78475 73.3195 8.7867 73.1938 8.79057C70.7277 3.59357 65.4321 0 59.2971 0Z"
  );
  path.setAttribute("fill", "white");
  path.setAttribute("fill-opacity", "0.5");

  cloud.appendChild(path);

  // Posicionar a nuvem em uma altura aleatória dentro dos 30% superiores
  const topPosition = Math.random() * (window.innerHeight * 0.3); // Até 30% da tela
  cloud.style.top = `${topPosition}px`;
  cloud.style.left = '-100px'; // Fora da tela, à esquerda

  // Definir uma duração aleatória para o movimento
  const duration = Math.random() * 20 + 20; // 20s a 40s
  cloud.style.animationDuration = `${duration}s`;

  document.body.appendChild(cloud);

  // Remover a nuvem após a animação terminar
  setTimeout(() => {
    cloud.remove();
  }, duration * 1000);
}

// Função para gerar nuvens periodicamente
function generateClouds() {
  setInterval(createCloud, 5000); // Cria uma nova nuvem a cada 2 segundos
}

generateClouds();
