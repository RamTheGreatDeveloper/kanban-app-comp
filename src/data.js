import { colors } from "@atlaskit/theme";

const ReOrder = {
  id: "1",
  name: "RECEIVED ORDERS",
  colors: {
    soft: colors.Y50,
    hard: colors.Y200,
  },
  tag: "Response due",
};

const OrderInPro = {
  id: "2",
  name: "ORDER IN PROGRESS",
  colors: {
    soft: colors.G50,
    hard: colors.G200,
  },
  tag: "Response due",
};

const OrdReady = {
  id: "3",
  name: "ORDER IS READY FOR DELIVERY",
  colors: {
    soft: colors.B50,
    hard: colors.B200,
  },
  tag: "Response due",
};

const OrdPicked = {
  id: "4",
  name: "ORDER PICKED UP",
  colors: {
    soft: colors.P50,
    hard: colors.P200,
  },
  tag: "Response due",
};

export const authors = [ReOrder, OrderInPro, OrdReady, OrdPicked];

export const quotes = [
  {
    id: "#1",
    orderNo: "#201",
    content:"Paratha Side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa(1 Nos), Butter Roti(5 Nos)",
    author: OrdPicked,
    date: "Mar 19,2022 1:50PM",
  },
  {
    id: "#2",
    orderNo: "#232",
    content:"Paratha Side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos), Butter Roti (5 Nos) chicken biriyani (1 Nos)",
    author: OrderInPro,
    date: "Mar 19,2022 2:10PM",
  },
  {
    id: "#3",
    orderNo: "#206",
    content:"3 Phulka, 2 Chicken Gravy, 2 Barrota, 5 Ice Creams, Paratha Side Dish (2 Nos), Plain Dosa",
    author: OrdReady,
    date: "Mar 19,2022 2:15PM",
  },
  {
    id: "#4",
    orderNo: "#204",
    content:"Paratha Side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa(1 Nos), Butter Roti(5 Nos)",
    author: ReOrder,
    date: "Mar 19,2022 3:00PM",
  },
  {
    id: "#5",
    orderNo: "#205",
    content: "3 Dosa, 1 egg",
    author: OrdReady,
    date: "Mar 19,2022 2:34PM",
  },
  {
    id: "#6",
    orderNo: "#223",
    content:"Paratha Side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos), Butter Roti (5 Nos) chicken biriyani (1 Nos)",
    author: OrdReady,
    date: "Mar 19,2022 2:10PM",
  },
  {
    id: "#7",
    orderNo: "#406",
    content:"Paratha Side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos), Butter Roti (5 Nos) chicken biriyani (1 Nos)",
    author: ReOrder,
    date: "Mar 19,2022 3:24PM",
  },
  {
    id: "#8",
    orderNo: "#645",
    content:"3 Phulka, 2 Chicken Gravy, 2 Barrota, 5 Ice Creams, Paratha Side Dish (2 Nos), Plain Dosa",
    author: OrderInPro,
    date: "Mar,2022 2:50PM",
  },
];

const getByAuthor = (author, items) =>items.filter((quote) => quote.author === author);

export const authorQuoteMap = authors.reduce(
  (previous, author) => ({ ...previous, [author.name]: getByAuthor(author, quotes),}), {} );
