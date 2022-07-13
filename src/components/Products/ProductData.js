import { v4 as uuid } from "uuid";
const cardData = [
  {
    id: uuid(),
    title: "Macbook",
    content:
      "This apple product and available at store for buying at low as......",
    src: require("../../assets/img1.jpg"),
    price: 100,
  },
  {
    id: uuid(),
    title: "Ipad",
    content:
      "This apple product and available at store for buying at low as......",
    src: require("../../assets/img2.jpg"),
    price: 200,
  },
  {
    id: uuid(),
    title: "Iphone",
    content:
      "This apple product and available at store for buying at low as......",
    src: require("../../assets/img3.jpg"),
    price: 300,
  },
  {
    id: uuid(),
    title: "Keyboard",
    content:
      "This apple product and available at store for buying at low as......",
    src: require("../../assets/img4.jpg"),
    price: 500,
  },
  {
    id: uuid(),
    title: "Mouse",
    content:
      "This apple product and available at store for buying at low as......",
    src: require("../../assets/img5.jpg"),
    price: 400,
  },
  {
    id: uuid(),
    title: "Airbuds",
    content:
      "This apple product and available at store for buying at low as......",
    src: require("../../assets/img6.jpg"),
    price: 500,
  },
];

export default cardData;
