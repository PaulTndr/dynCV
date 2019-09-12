import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  choiceTemplate = {
    "RH" : 1,
    "TECH" : 0,
    "PERSONAL" : 0,
  }

  listTemplate = {
    "RH" : [
      {
        "id":0,
        "name":"example",
      },
      {
        "id":1,
        "name":"timeline",
      },
    ],
    "TECH" : [
      {
        "id":0,
        "name":"example",
      },
    ],
    "PERSONAL" : [
      {
        "id":0,
        "name":"example",
      },
    ],
  }

  //En attendant d'être en local et de pouvoir lire un json sans bug de stackblitz...
  data = {
    "general" : {
      "name" : "Paul TONDEREAU",
      "linkPicture" : "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/48406093_1156246514531076_7569138805542748160_n.jpg?_nc_cat=103&_nc_oc=AQmXdM2gMgVK8T0TfDM1K79-Xjf2gMF443aBeqVsMFPifIXLCqPEC4jmXfBV3F0Djdw&_nc_ht=scontent-cdt1-1.xx&oh=22e41d3df4faa3f29acfce98ad2d6f36&oe=5E0A5223",
      "birthDay": "30 avril 1997",
      "mail" : "paul.tondereau@yahoo.fr",
      "numeroTel" : "07 71 58 67 46",
      "adresse" : "1 place Sadi Carnot, 13002 Marseille",
      "linkedin" : "linkedin.com/in/paul-tondereau/",
      "description" : "Sed quid est quod in hac causa maxime homines admirentur et reprehendant meum consilium, cum ego idem antea multa decreverim, que magis ad hominis dignitatem quam ad rei publicae necessitatem pertinerent? Supplicationem quindecim dierum decrevi sententia mea. Rei publicae satis erat tot dierum quot C. Mario"
    },
    "formations" : [
      {
        "title" : "Ecole ingénieur généraliste en alternance",
        "location" : "Ecole Centrale de Marseille, Marseille",
        "startDate" : "2017",
        "endDate" : "2019",
        "description" : "Hortaretur Italiam otium est hortaretur militare se largitionum Constantius blande Syriam scribens palatinis protectorum properare."
      },
      {
        "title" : "Classes Préparatoires aux Grandes Ecoles",
        "location" : "Lycée Descartes, Tours",
        "startDate" : "2015",
        "endDate" : "2017",
        "description" : "Hortaretur Italiam otium est hortaretur militare se largitionum Constantius blande Syriam scribens palatinis protectorum properare."
      },
      {
        "title" : "Bac Scientifique",
        "location" : "Lycée Notre Dame des Aydes, Blois",
        "startDate" : "2012",
        "endDate" : "2015",
        "description" : "Hortaretur Italiam otium est hortaretur militare se largitionum Constantius blande Syriam scribens palatinis protectorum properare."
      },
    ],
    "experiences" : [
      {
        "title" : "Ingénieur études et développement en alternance",
        "entreprise" : "Sopra Steria (Dassault Aviation)",
        "startDate" : "Sept 2018",
        "endDate" : "Sept 2020",
        "description" : "Hortaretur Italiam otium est hortaretur militare se largitionum Constantius blande Syriam scribens palatinis protectorum properare."
      },
      {
        "title" : "Développeur front-end",
        "entreprise" : "KSI (Junior Entreprise) pour B.mind",
        "startDate" : "Aout 2019",
        "endDate" : "Nov 2019",
        "description" : "Hortaretur Italiam otium est hortaretur militare se largitionum Constantius blande Syriam scribens palatinis protectorum properare."
      },
      {
        "title" : "Stage amélioration continue et suivi de production",
        "entreprise" : "Thiolat Packaging",
        "startDate" : "Mai 2018",
        "endDate" : "Aout 2018",
        "description" : "Hortaretur Italiam otium est hortaretur militare se largitionum Constantius blande Syriam scribens palatinis protectorum properare."
      },
    ],
    "skills" : {
      "technical" : [
        {
          "name": "Git",
          "level": 8,
          "levelFav" :3,
        },
        {
          "name": "Angular",
          "level": 7,
          "levelFav" :10,
        },
        {
          "name": "STRUTS",
          "level": 6,
          "levelFav" :5,
        },
        {
          "name": "SQL",
          "level": 7,
          "levelFav" :6,
        },
        {
          "name": "Java",
          "level": 6,
          "levelFav" :7,
        },
        {
          "name": "jQuery",
          "level": 8,
          "levelFav" :8,
        },
      ],
      "langue": [
        {
          "name":"Anglais",
          "level":7,
          "officialLevel":"B2"
        },
        {
          "name":"Espagnol",
          "level":5,
          "officialLevel":"A2"
        },
      ]
    },
    "interets": ["Sciences", "Web", "Sport"],
    "references":[
      {
        "name" : "Mr. Thomas Astier",
        "role" : "Chef de projet Sopra Steria",
        "contactTel" : "0726364839",
        "contactMail" : "thomas.astier@soprasteria.com"
      },
      {
        "name" : "Mme. Jane Bourgninaud",
        "role" : "CEO B.mind",
        "contactTel" : "0726364898",
        "contactMail" : "janeb.mind@gmail.com"
      },
    ],
    "personality":{
      "description": "Batnae municipium in Anthemusia conditum Macedonum manu priscorum ab Euphrate flumine brevi spatio disparatur, refertum mercatoribus opulentis, ubi annua sollemnitate prope Septembris initium mensis ad nundinas magna promiscuae fortunae convenit multitudo ad commercanda quae Indi mittunt et Seres aliaque plurima vehi terra marique consueta.",
      "qualities": [
        {
          "name":"Enthousiaste",
          "level":10
        },
        {
        "name":"Motivé",
        "level":10
        },
        {
        "name":"Innovant",
        "level":9
        },
        {
        "name":"Persévérant",
        "level":8
        },
        {
        "name":"Organisé",
        "level":8
        }],
      "defauts": [
        {
          "name":"Impulsif",
          "level":8
        },
        {
          "name":"Bavard",
          "level":10
        },
        {
          "name":"Obstiné",
          "level":6
        }]
    },
    "motivations":[
      {
          "name":"Reconnaissance",
          "level":10
      },
      {
          "name":"Apprendre",
          "level":9
      },
      {
          "name":"Ëtre utile",
          "level":7
      }],
    "demotivations":["Ambiance non saine", "Cadre trop fixe"],
    "associations":[
      {
        "name":"Bureau des élèves",
        "logoSrc":"https://bde.asso.centrale-marseille.fr/wp-content/uploads/2019/04/Logo_final_propre.png",
        "poste":"Responsable Communication",
        "description":"Coordination d’un graphiste et d’un community manager. Bénévolat lors des différents événements organisés (conférences, week end formation, soirées, afterwork, week-end d’intégration des nouveaux élèves )"
      },
      {
        "name":"Raid Centrale Marseille",
        "logoSrc":"https://uaecm.fr/images/logos_assos/raid_logo.png",
        "poste":"Responsable Parcours",
        "description":"Création d’un parcours de course/VTT avec activités annexes pour une distante totale de plus de 100km. Organisation de sorties de reconnaissance du parcours. Prise de décision pendant l’événement et coordination équipe de 5-6 personnes pour le balisage/débalisage."
      },
      {
        "name":"Intercentrales 2018",
        "logoSrc":"https://www.alten-campus.fr/uploads/img/297.png",
        "poste":"Responsable Sport",
        "description":"Association chargée de l’organisation d’un événement sportif le temps d’un week-end rassemblant les écoles du groupe Centrale. (600+ participants). Coordination d’une équipe de 2 personnes et relation avec les autres pôles."
      },
      {
        "name":"Massilia Sun Ball",
        "logoSrc":"https://zupimages.net/up/19/36/vomb.png",
        "poste":"Pôle logistique",
        "description":"Association chargée de l’organisation d’un week-end sportif et festif rassemblant de nombreuses écoles d’ingénieurs (1000+ participants). Préparation au sein d’une équipe réduite de 8 personnes et bénévolat dans une équipe de 50 personnes lors de l'événement."
      },
    ],
    "facts":{
      "proudFact": "Avoir sû mener un projet personel sur plusieurs mois, de l'idée à la réalisation finale",
    },
    "descTechnique":"Ibi victu recreati et quiete, postquam abierat timor, vicos opulentos adorti equestrium adventu cohortium, quae casu propinquabant, nec resistere planitie porrecta conati digressi sunt retroque concedentes omne iuventutis robur relictum in sedibus acciverunt.",
    "formationsTech":[
      {
        "name":"Intelligence artificielle",
        "contexte":"Option 3è année, Cursus Digital.e",
        "desc":"Seleuciae rabie concepta efferebantur bellicis quam incendebat desperatio Seleuciae tresque induratae incohibili Castricius urbium fames."
      },
      {
        "name":"IOT",
        "contexte":"Option 3è année, Cursus Digital.e",
        "desc":"Seleuciae rabie concepta efferebantur bellicis quam incendebat desperatio Seleuciae tresque induratae incohibili Castricius urbium fames."
      },
      {
        "name":"Développement full stack",
        "contexte":"Option 3è année, Cursus Digital.e",
        "desc":"Seleuciae rabie concepta efferebantur bellicis quam incendebat desperatio Seleuciae tresque induratae incohibili Castricius urbium fames."
      },
      {
        "name":"Python Scientifique",
        "contexte":"Classes préparatoires & école",
        "desc":"Seleuciae rabie concepta efferebantur bellicis quam incendebat desperatio Seleuciae tresque induratae incohibili Castricius urbium fames."
      }
    ],
    "projetPerso":[
      {
        "name":"SightMess",
        "desc":"Seleuciae rabie concepta efferebantur bellicis quam incendebat desperatio Seleuciae tresque induratae incohibili Castricius urbium fames."
      },
      {
        "name":"MyCV",
        "desc":"Seleuciae rabie concepta efferebantur bellicis quam incendebat desperatio Seleuciae tresque induratae incohibili Castricius urbium fames."
      },
      {
        "name":"Kandle",
        "desc":"Seleuciae rabie concepta efferebantur bellicis quam incendebat desperatio Seleuciae tresque induratae incohibili Castricius urbium fames."
      }
    ],
    "experiencePro":[
      {
        "name":"Développeur en alternance",
        "techno":"Angular, Java Rest API, PostgreSQL",
        "entreprise":"Sopra Steria",
        "desc":"Seleuciae rabie concepta efferebantur bellicis quam incendebat desperatio Seleuciae tresque induratae incohibili Castricius urbium fames."
      },
      {
        "name":"Développeur en alternance",
        "techno":"JEE, Struts",
        "entreprise":"Sopra Steria",
        "desc":"Seleuciae rabie concepta efferebantur bellicis quam incendebat desperatio Seleuciae tresque induratae incohibili Castricius urbium fames."
      },
      {
        "name":"Intervenant, développeur Front-end",
        "techno":"Angular, Firebase",
        "entreprise":"KSI - B.Mind",
        "desc":"Seleuciae rabie concepta efferebantur bellicis quam incendebat desperatio Seleuciae tresque induratae incohibili Castricius urbium fames."
      },
      {
        "name":"Intervenant, développeur algorithmes",
        "techno":"Python, PHP",
        "entreprise":"KSI - Métal Laser",
        "desc":"Seleuciae rabie concepta efferebantur bellicis quam incendebat desperatio Seleuciae tresque induratae incohibili Castricius urbium fames."
      },
    ]
    
  }
  constructor() { }

}