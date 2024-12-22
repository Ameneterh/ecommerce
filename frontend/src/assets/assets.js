import women1 from "./fashion_1.jpg";
import women2 from "./fashion_2.jpg";
import women3 from "./fashion_3.jpg";
import women4 from "./fashion_4.jpg";
import kid_fash_1 from "./kid_fash_1.jpg";
import kid_fash_2 from "./kid_fash_2.jpg";
import kid_fash_3 from "./kid_fash_3.jpg";
import kid_fash_4 from "./kid_fash_4.jpg";
import men_fash_1 from "./men_fash_1.jpg";
import men_fash_2 from "./men_fash_2.jpg";
import men_fash_3 from "./men_fash_3.jpg";
import men_fash_4 from "./men_fash_4.jpg";
import nav_img from "./header_img.png";
import hero_img from "./heroimage.png";
import exchange_icon from "./exchange_icon.png";
import quality_icon from "./quality_icon.png";
import support_icon from "./support_img.png";

export const assets = {
  nav_img,
  hero_img,
  exchange_icon,
  quality_icon,
  support_icon,
};

export const products = [
  {
    _id: "aaaaa",
    name: "Women Fashion One",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 10500,
    image: [women1, women2, women3, women4],
    category: "ladies",
    subCategory: "wears",
    sizes: ["S", "M", "L"],
    logistics_included: false,
    bestSeller: true,
    date: 1716634345448,
  },
  {
    _id: "aaaab",
    name: "Women Fashion Two",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 15000,
    image: [women1, women2, women3, women4],
    category: "ladies",
    subCategory: "accessories",
    sizes: ["S", "M", "L"],
    logistics_included: false,
    bestSeller: false,
    date: 1716634345448,
  },
  {
    _id: "aaaac",
    name: "Men Fashion One",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 1050,
    image: [men_fash_1, men_fash_2, men_fash_3, men_fash_4],
    category: "gentlemen",
    subCategory: "shoes",
    sizes: ["M", "L", "XL"],
    logistics_included: false,
    bestSeller: true,
    date: 1716634345448,
  },
  {
    _id: "aaaad",
    name: "Men Fashion Two",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 1500,
    image: [men_fash_1, men_fash_2, men_fash_3, men_fash_4],
    category: "gentlemen",
    subCategory: "wears",
    sizes: ["M", "L", "XL"],
    logistics_included: false,
    bestSeller: true,
    date: 1716634345448,
  },
  {
    _id: "aaaae",
    name: "Kids Fashion One",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 85000,
    image: [kid_fash_1, kid_fash_2, kid_fash_3, kid_fash_4],
    category: "kids",
    subCategory: "wears",
    sizes: ["S", "M"],
    logistics_included: false,
    bestSeller: true,
    date: 1716634345448,
  },
  {
    _id: "aaaaf",
    name: "Kids Fashion Two",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 9000,
    image: [kid_fash_1, kid_fash_2, kid_fash_3, kid_fash_4],
    category: "kids",
    subCategory: "bags",
    sizes: ["S", "M"],
    logistics_included: false,
    bestSeller: true,
    date: 1716634345448,
  },
];
