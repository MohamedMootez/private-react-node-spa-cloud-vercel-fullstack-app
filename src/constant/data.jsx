import {
  specialite1,
  specialite2,
  specialite3,
  specialite4,
  specialite5,
  specialite6,
  avatar3,
  avatar2,
  formationA,
  formationB,
  formationC,
  formationD,
  formationE,
  formationF,
  formationG,
  formationH,
  formationI,
  formationJ,
  formationK,
  formationL,
} from "./imageData";

import { icons } from "./icons";

export const ourSpecialitiesList = [
  {
    image: specialite1,
    name: "nuddles",
  },
  {
    image: specialite2,
    name: "burger",
  },
  {
    image: specialite3,
    name: "salad",
  },
  {
    image: specialite4,
    name: "bread dish",
  },
  {
    image: specialite5,
    name: "pasta",
  },
  {
    image: specialite6,
    name: "sandwich",
  },
];

export const socialLinksMap = [
  {
    socialLink: "https://www.facebook.com/",
    socialIconName: icons.facebookIcon,
  },
  {
    socialLink: "https://www.youtube.com/",
    socialIconName: icons.youtubeIcon,
  },

  {
    socialLink: "https://www.instagram.com/",
    socialIconName: icons.instagramIcon,
  },
];

export const restaurantTimeMap = [
  {
    restaurantWeek: "dayA",
    restaurantTime: "timeA",
  },
  {
    restaurantWeek: "dayB",
    restaurantTime: "timeB",
  },
  {
    restaurantWeek: "dayC",
    restaurantTime: "timeC",
  },
];

export const menuDishesData = [
  {
    imgSrc: formationA,
    dishName: "CuisineT",
    description: "CuisineTD",
    price: "$30",
    rating: 4.7,
    ratingCount: 1125,
  },
  {
    imgSrc: formationB,
    dishName: "PatT",
    description: "PatTD",
    price: "$30",
    rating: 4.7,
    ratingCount: 1125,
  },
  {
    imgSrc: formationC,
    dishName: "CuisineO",
    description: "CuisineOD",
    price: "$39",
    rating: 4.4,
    ratingCount: 2050,
  },
  {
    imgSrc: formationL,
    dishName: "Pat",
    description: "PatD",
    price: "$29",
    rating: 4.3,
    ratingCount: 1080,
  },
  {
    imgSrc: formationD,
    dishName: "CuisineE",
    description: "CuisineED",
    price: "$30",
    rating: 4.7,
    ratingCount: 1125,
  },
  {
    imgSrc: formationE,
    dishName: "PatE",
    description: "PatED",
    price: "$30",
    rating: 4.7,
    ratingCount: 1125,
  },
  {
    imgSrc: formationF,
    dishName: "vien",
    description: "vienD",
    price: "$32",
    rating: 4.6,
    ratingCount: 2120,
  },
  {
    imgSrc: formationG,
    dishName: "Bou",
    description: "BouD",
    price: "$24",
    rating: 4.2,
    ratingCount: 1030,
  },
  {
    imgSrc: formationI,
    dishName: "chou",
    description: "chouD",
    price: "$30",
    rating: 4.7,
    ratingCount: 1125,
  },
  {
    imgSrc: formationH,
    dishName: "AmuseBoucheT",
    description: "AmuseBoucheTD",
    price: "$30",
    rating: 4.7,
    ratingCount: 1125,
  },
  {
    imgSrc: formationJ,
    dishName: "Fastf",
    description: "FastfD",
    price: "$19",
    rating: 4.1,
    ratingCount: 999,
  },

  {
    imgSrc: formationK,
    dishName: "KidCookingT",
    description: "KidCookingTD",
    price: "$30",
    rating: 4.7,
    ratingCount: 1125,
  },
];

export const drinkNamesData = [
  {
    drinkName: "Mocktail",
    drinkVariant: "Blueberry / Pineapple Mint Refreshed / Margarita ",
    price: "$13",
  },
  {
    drinkName: "Fruit Shakes",
    drinkVariant: "Apple / Mango / Watermelon / Banana / Strawberry.",
    price: "$18",
  },
  {
    drinkName: "Alcohol",
    drinkVariant: "Ember Whiskey / Crimson Tide Vodka / Horizon Rum",
    price: "$15",
  },
  {
    drinkName: "Soda",
    drinkVariant: "Cherry Wave /Berry Blast Soda / Mango Breeze Soda",
    price: "$10",
  },
];

export const dessertsNamesData = [
  {
    dessertName: "Cakes",
    dessertVariant:
      "Velvet Dream Cake / Chocolate Decadence / Strawberry Cake ",
    price: "$8",
  },
  {
    dessertName: "Muffins",
    dessertVariant: "Mocha Magic Muffins / Choco-Chip  / Banana Nut Crunch ",
    price: "$10",
  },
  {
    dessertName: "Donets",
    dessertVariant:
      "Blueberry Burst / Coconut Paradise  / Caramel Crunch Rings.",
    price: "$15",
  },
  {
    dessertName: "Ice Cream",
    dessertVariant: "Vanilla Bean Bliss /Coconut Almond Joy / Butter Scooch",
    price: "$8",
  },
];

export const reviewsSwiperData = [
  {
    reviewMessage: "avatarBend1",
    imgSrc: avatar3,
    name: "Dhouha Meddeb",
  },
  {
    reviewMessage: "avatarBend2",
    imgSrc: avatar2,
    name: "Hedi Atrous",
  },
];
