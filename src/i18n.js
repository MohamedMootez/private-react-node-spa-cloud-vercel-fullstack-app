import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {

      "aceuilleLabel": "Home",
      "Sûr-ceLabel":"About",
      "El_WaeedCulinatifLabe":"El Waeed Culinary Platform",
      "La_PassionLabel":"The Passion for Taste",
      "Au_cœurLabel":"At the Heart of Our Universe",
      "QuiLabel":"Who are we ?",
      "LàléléganceLabel":"Where Flavor Meets Elegance",
      
      "FondationLabel":"Founded in 2005, EL WAEED has established itself as a reference in professional training in pastry and cooking, thanks to more than 30 years of experience of its manager. With a practice-oriented approach, the school offers quality training recognized by local authorities, employment centers, and educational supervisors.",
      "PartenaireLabel":"Partner of the 33 system of the national employment fund 21/21, EL WAEED actively contributes to professional reintegration through targeted actions and collaborations with employment offices.",
      "ObjectifLabel":"our main objective :",
      "DevloperLabel":"develop the entrepreneurial spirit and strengthen the employability of young people for a promising future.",
"endroitLabel":"The perfect place to learn",
"Our Specialties":"Our Specialties",
"ExpLabel":"Experience",
"EveLabel":"Events",
"TeamLabel":"Our Team",
"RenLabel":"Meet Our Passionate",
"InscriLabel":"Register Here !",
"RegistrationLabel":"Join Our Program Today!",
"Name":"Name",
"Email":"Email",
"SInscriLabel":"Register",
"TellLabel":"Tell us more about Yourself !",
 "adressLabel":"Address",
 "openTimeLabel":"We are open",
 "ConnectLabel":"Let's stay Connected",
 "copyrights":"© 2024 Platfome Culinaire, Made by Ronin.",
 "inscriLabel":"Register Here",
 "uploadFile":"Upload File",
 "avatarBend1":"I began as a self-taught cook with a love for food and creativity. Now, running a culinary school has made my dream a reality, and every day feels like a new adventure.",
 "avatarBend2":"With years of professional training and experience in top restaurants and even aboard a cruise ship, I take pride in sharing my passion for cooking to inspire our students.",
 "avatarBend3":"As a proud advocate of Tunisian culinary heritage, I love blending traditional flavors with modern techniques to create dishes that tell a story.",
    },
  },
  fr: {
    translation: {

       "aceuilleLabel": "Aceuille",
       "Sûr-ceLabel":"Sûr-ce",
       "El_WaeedCulinatifLabel":"El Waeed Platfome Culinatif",
       "La_PassionLabel":"La Passion du Gout",
       "Au_cœurLabel":"Au cœur de notre monde",
       "QuiLabel":"Qui Sommes -Nous ?",
      "LàléléganceLabel":"Là où la Saveur Rencontre lélégance",
      "avatarBend1":"J'ai commencé comme une cuisinière autodidacte avec une passion pour la cuisine et la créativité. Aujourd'hui, diriger une école culinaire a transformé mon rêve en réalité, et chaque jour est une nouvelle aventure.",
      "avatarBend2":"Grâce à des années de formation professionnelle et d'expérience dans les meilleurs restaurants, ainsi qu'à bord d'un bateau de croisière, je suis fier de partager ma passion pour la cuisine et d'inspirer nos étudiants.",
      "avatarBend3":"En tant que fervente défenseure du patrimoine culinaire tunisien, j'aime mêler les saveurs traditionnelles aux techniques modernes pour créer des plats qui racontent une histoire.",

      "FondationLabel":"Fondée en 2005, EL WAEED sest imposée comme une référence en formation professionnelle en pâtisserie et cuisine, grâce à plus de 30 ans dexpérience de sa gérante. Avec une approche axée sur la pratique, lécole offre une formation de qualité reconnue par les autorités locales, les centres demploi, et les encadreurs pédagogiques.",
      "PartenaireLabel":"Partenaire du dispositif 33 du fonds national de lemploi 21/21, EL WAEED contribue activement à la réinsertion professionnelle à travers des actions ciblées et des collaborations avec les bureaux demploi.",
      "ObjectifLabel":"on objectif principal :",
      "DevloperLabel":"développer lesprit entrepreneurial et renforcer lemployabilité des jeunes pour un avenir prometteur.",
      "endroitLabel":"L'endroit parfait pour apprendre",

      "SpecLabel":"Nos Spécialités",
     "ExpLabel": "Expérience",
     "EveLabel":"Événement",
     "TeamLabel":"Notre Équipe",
     "RenLabel":"Rencontrez Nos Passionnée",
     "InscriLabel":"Inscrivez Vous Ici !",
     "RegistrationLabel":"Rejoignez Notre Programme dès Aujourd'hui !",

     "Name":"Nom",
     "Email":"Email",
     "SInscriLabel":"S'inscrire",
     "TellLabel":"Parlez-nous un peu de vous !",

     "adressLabel":"Adresse",
     "openTimeLabel":"Nous Sommes Ouverts",
    "ConnectLabel": " Restons connectés",
    "copyrights":"© 2024 Plateforme Culinaire, Réalisé par Ronin.",
     "inscriLabel":"S'inscrire",
     "uploadFile":"Télécharger votre Fichier"


    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
