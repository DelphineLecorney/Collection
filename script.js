const collection = document.querySelector(".collection");

const objets = [
  {
    image: "./assets/Nissan.jpg",
    nom: "Nissan micra",
    annee: "Année : 2023",
    origine: "Origine japonaise",
    description:
      "Grâce sa ligne de toit spécifique et ses feux avant à LED, la Nissan MICRA combine le côté pratique d’une citadine à un design d’avant-garde et au souci du détail.",
    more: "learn more",
    del_Item: "delete",
    lien: "https://bouvymotor.be/modeles/nissan-micra/?gclid=CjwKCAjw0N6hBhAUEiwAXab-TbTAPKZAMTfL1WtgUHX1EWlwMwmQvPMIEkSlwMu0Ug0NzP4gq1hEZBoCgc4QAvD_BwE",
  },
  {
    image: "./assets/Alfa Romeo.jpg",
    nom: "Alfa-Romeo Stelvio Quadrifoglio",
    annee: "Année : 2023",
    origine: "Origine Italienne",
    description:
      "L'Alfa Romeo Stelvio Quadrifoglio incarne un mélange parfait de puissance et de technologie. Le moteur monobloc en aluminium 2.9 V6 Bi-Turbo de 510 ch est associé au système de transmission à quatre roues motrices Q4.",
    more: "learn more",
    del_Item: "delete",
    lien: "https://www.fja-automobiles.be/concessionnaire/alfa-romeo/recherche-voiture/voitures-neuves?source=SEM&MKcampaignID=223&campaignid=922-459-4064_alfa-romeo_dealer-search_170901_211231_multi_BEL&advertiserid=google&bannerid=kwd&gclid=CjwKCAjw0N6hBhAUEiwAXab-Tfy1RJR1h7hiM1LeG-XyajSOP9UScPGcDwDk3XUXKutSzDp-dUW2khoCUmoQAvD_BwE",
  },
  {
    image: "./assets/Audi.jpg",
    annee: "Année : 2023",
    origine: "Origine Allemagne",
    nom: "Audi activesphere ",
    description:
      "Avec l'Audi activesphere concept, Audi illustre encore brillamment sa vision des expériences uniques pour la mobilité haut de gamme du futur. Ce quatrième concept car de la famille sphere présente une nouvelle carrosserie et propose également une combinaison sans précédent entre l'élégance et la fonctionnalité. Le compagnon indispensable d'un style de vie actif.",
    more: "learn more",
    del_Item: "delete",
    lien: "https://www.fr.audi.be/be/web/fr/magazine/audi/audi-activesphere-concept.html",
  },
  {
    image: "./assets/Chevrolet.jpg",
    annee: "Année : 2023",
    origine: "Origine Etats-Unis",
    nom: " Chevrolet Malibu",
    description:
      "Vous savez peut-être déjà que Chevrolet va prochainement mettre un terme à son opération de vente de nouvelles voitures en Europe. Toutefois, nos réparateurs agréés continueront de fournir leurs services et l’entretien de véhicules à tous nos clients. De plus, avec l’appui d’Opel, notre marque partenaire GM en Europe, nous pouvons continuer de vous assister pour trouver le véhicule de vos rêves.",
    more: "learn more",
    del_Item: "delete",
    lien: "https://gmk.fr.chevrolet.be/models/malibu/model-overview.html",
  },
  {
    image: "./assets/Ford GT.jpg",
    nom: "Ford GT ",
    annee: "Année : 2023",
    origine: "Origine Américaine",
    description:
      "Voici à quoi ressemble la véritable innovation. Que l’on évoque la technologie de son moteur 3,5 litres EcoBoost ou son aérodynamique incroyablement performante, la Ford GT est la synthèse de tout ce que nous faisons d’exceptionnel chez Ford. Et cette passion pour l’innovation se retrouve dans l’intégralité de notre gamme de véhicules.",
    more: "learn more",
    del_Item: "delete",
    lien: "https://www.ford.fr/voitures-neuves/ford-gt",
  },
  {
    image: "./assets/Lamborghini.jpg",
    nom: "Lamborghini revuelto",
    annee: "Année : 2023",
    origine: "Origine Italienne",
    description:
      "Juste avant le 60e anniversaire de la marque, Lamborghini a dévoilé la Revuelto, la première supersportive hybride HPEV (High Performance Electrified Vehicle). Avec la Revuelto, Lamborghini établit une nouvelle référence en matière de performances, de technologie embarquée et de plaisir de conduire.",
    more: "learn  more",
    del_Item: "delete",
    lien: "https://www.lamborghini.com/fr-en/mod%C3%A8les/revuelto",
  },
  {
    image: "./assets/Mazda.jpg",
    nom: "Mazda CX-60",
    annee: "Année : 2023",
    origine: "Origine Japonaise",
    description:
      "Élaborée par nos maîtres concepteurs japonais, la All-New Mazda CX-60 reflète tout ce que Mazda a intégré dans son ADN au cours des 100 dernières années. L'architecture puissante est dotée d'une transmission intégrale pour la sportivité, ainsi que d'une série de nouvelles technologies centrées sur le conducteur. Découvrez l'élégance qui reflète notre héritage japonais dans le showroom en ligne.",
    more: "learn more",
    del_Item: "delete",
    lien: "https://fr.mazda.be/modeles/mazda-cx-60/",
  },
  {
    image: "./assets/McLaren.jpg",
    nom: "McLaren ",
    annee: "Année : 2023",
    origine: "Origine Royaume-Uni",
    description:
      "An extreme McLaren design concept born in the virtual racing world.Now made real. And ultra-rare. There will only ever be 25 Solus GTs. Rendered possible through McLaren’s position at the apex of motorsport, supercar and hypercar development – this is a pure expression of track driving focus and engagement. ",
    more: "learn more",
    del_Item: "delete",
    lien: "https://cars.mclaren.com/en/mclaren-solus-gt?_ga=2.116164806.1944944683.1681397524-1621508229.1681397524",
  },
  {
    image: "./assets/Porsche.jpg",
    nom: "Porsche ",
    annee: "Année : 2023",
    origine: "Origine Allemagne",
    description:
      "La conduite d'une Porsche vous permet de gouter à des performances exaltantes avec un sentiment permanent de perfection et de fiabilité. Avec la garantie Porsche Approved, vous pourrez apprécier durablement l'exaltation et la tranquillité d'esprit du premier jour.",
    more: "learn more",
    del_Item: "delete",
    lien: "https://dealer.porsche.com/be/porschecentrebrussels/fr-BE",
  },
  {
    image: "./assets/Subaru.jpg",
    nom: "Subaru Solterra ",
    annee: "Année : 2023",
    origine: "Origine japonaise",
    description:
      "A la recherche d'une nouvelle voiture électrique pour la nouvelle année ? Découvrez la Subaru Solterra Nombre très limité de voitures de stock disponibles en Belgique",
    more: "learn more",
    del_Item: "delete",
    lien: "https://www.subaru.be/fr-be/voitures-neuves",
  },
  {
    image: "./assets/Toyota.jpg",
    nom: "Toyota Yari Cross Hybride",
    annee: "Année : 2023",
    origine: "Origine japonaise",
    description:
      "Vous pensiez que vous étiez obligés de passer à l'électrique ? Re-pensez-y ! Rouler en Toyota hybride est souvent la solution la plus intéressante pour les professionnels. Avec la Toyota Yaris Cross, vous n'économisez pas seulementquand vous l'achetez, mais aussi quand vous roulez.",
    more: "learn more",
    del_Item: "delete",
    lien: "https://fr.toyota.be/professionnels/vehicules/gamme/yaris-cross",
  },
  {
    image: "./assets/Ferrari.jpg",
    nom: "Ferrari",
    annee: "Année : 2023",
    origine: "Origine Italienne",
    description:
      "Lorsque Ferrari construit un nouveau modèle, la tâche première et la plus difficile pour le constructeur basé à Maranello est de se surpasser une fois de plus. La tâche devient d'autant plus grande lorsqu'un nouveau moteur 12 cylindres doit être construit pour cela. ",
    more: "learn more",
    del_Item: "delete",
    lien: "https://www.ferrari.com/de-DE/auto/812-superfast",
  },
];

objets.forEach((objet) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = objet.image;
  card.appendChild(image);

  const h2 = document.createElement("h2");
  h2.textContent = objet.nom;
  card.appendChild(h2);

  const annee = document.createElement("p");
  annee.textContent = objet.annee;
  card.appendChild(annee);

  const origine = document.createElement("p");
  origine.textContent = objet.origine;
  card.appendChild(origine);

  const p = document.createElement("p");
  p.textContent = objet.description;
  card.appendChild(p);

  const more = document.createElement("a");
  more.textContent = objet.more;
  more.href = objet.lien;
  more.target = "_blank";
  card.appendChild(more);

  const del_Item = document.createElement("button");
  del_Item.textContent = objet.del_Item;
  del_Item.classList.add("del_Item");
  card.appendChild(del_Item);

  collection.appendChild(card);
});

let delButtons = document.querySelectorAll(".del_Item");

delButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
  });
});

// Créer l'élément select
let selectElement = document.createElement("select");
let headings = document.getElementsByTagName("h2");

let cardNames = [];
for (let i = 0; i < headings.length; i++) {
  cardNames.push(headings[i].innerText);
}

// Ajouter quelques options au select
let triParNom = document.createElement("option");
triParNom.value = "nom";
triParNom.text = "Nom";
selectElement.add(triParNom);

for (let i = 0; i < headings.length; i++) {
  let option = document.createElement("option");
  option.value = cardNames[i];
  option.text = cardNames[i];
  selectElement.add(option);
}

let triParOrdreAsc = document.createElement("option");
triParOrdreAsc.value = "nom";
triParOrdreAsc.text = "Tri par ordre alphabétique";
selectElement.add(triParOrdreAsc);

document.body.appendChild(selectElement);

selectElement.addEventListener("change", function () {
  if (selectElement.value === "nom") {
    // Afficher les cartes avec les noms d'origine
    for (let i = 0; i < headings.length; i++) {
      headings[i].innerText = cardNames[i];
      // Supprimer la classe 'selected' pour toutes les balises h2
      headings[i].classList.remove("selected");
    }
  } else if (selectElement.value === "OrdreAlphabétique") {
    // Trier les noms en ordre alphabétique et mettre à jour les cartes
    cardNames.sort();
    for (let i = 0; i < headings.length; i++) {
      headings[i].innerText = cardNames[i];
      // Supprimer la classe 'selected' pour toutes les balises h2
    }
    headings[i].classList.remove("selected");
  } else {
    // Afficher la carte choisie et ajouter la classe 'selected'
    for (let i = 0; i < headings.length; i++) {
      if (headings[i].innerText === selectElement.value) {
        // Ajouter la classe 'selected' à la balise h2 correspondante
        headings[i].classList.add("selected");
      } else {
        // Supprimer la classe 'selected' pour les autres balises h2
        headings[i].classList.remove("selected");
      }
    }
  }
});
