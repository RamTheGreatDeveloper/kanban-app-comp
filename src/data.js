import { colors } from "@atlaskit/theme";
import jakeImg from "./assets/jake.png";
import finnImg from "./assets/finn.png";
import bmoImg from "./assets/bmo.png";
import princessImg from "./assets/princess.png";

const ReOrder = {
  id: "1",
  name: "RECEIVED ORDERS",
  url: "http://adventuretime.wikia.com/wiki/Jake",
  avatarUrl: jakeImg,
  colors: {
    soft: colors.Y50,
    hard: colors.Y200,
  },
  date: "DUE",
  tag: "RESPONSE DUE",
};

const OrderInPro = {
  id: "2",
  name: "ORDER IN PROGRESS",
  url: "http://adventuretime.wikia.com/wiki/BMO",
  avatarUrl: bmoImg,
  colors: {
    soft: colors.G50,
    hard: colors.G200,
  },
  date: "DUE",
  tag: "RESPONSE DUE",
};

const OrdReady = {
  id: "3",
  name: "ORDER IS READY FOR DELIVERY",
  url: "http://adventuretime.wikia.com/wiki/Finn",
  avatarUrl: finnImg,
  colors: {
    soft: colors.B50,
    hard: colors.B200,
  },
  date: "May,2019 3:00PM",
  tag: "RESPONSE DUE",
};

const OrdPicked = {
  id: "4",
  name: "ORDER PICKED UP",
  url: "http://adventuretime.wikia.com/wiki/Princess_Bubblegum",
  avatarUrl: princessImg,
  colors: {
    soft: colors.P50,
    hard: colors.P200,
  },
  date: "Jun,2019 3:00PM",
  tag: "RESPONSE DUE",
};

export const authors = [ReOrder, OrderInPro, OrdReady, OrdPicked];

export const quotes = [
  {
    id: "#1",
    orderNo:"#201",
    content: "Sometimes life is scary and dark",
    author: OrdPicked,
  },
  {
    id: "#2",
    orderNo:"#232",
    content:
      "Sucking at something is the first step towards being sorta good at something.",
    author: OrderInPro,
  },
  {
    id: "#3",
    orderNo:"#206",
    content: "You got to focus on what's real, man",
    author: OrdReady,
  },
  {
    id: "#4",
    orderNo:"#204",
    content: "Is that where creativity comes from? From sad biz?",
    author: ReOrder,
  },
  {
    id: "#5",
    orderNo:"#205",
    content: "Homies help homies. Always",
    author: OrdReady,
  },
  {
    id: "#6",
    orderNo:"#223",
    content: "Responsibility demands sacrifice",
    author: OrdReady,
  },
  {
    id: "#7",
    orderNo:"#406",
    content: "That's it! The answer was so simple, I was too smart to see it!",
    author: ReOrder,
  },
  {
    id: "#8",
    orderNo:"#645",
    content: "People make mistakes. It’s a part of growing up",
    author: OrderInPro,
  },
];

const getByAuthor = (author, items) =>
  items.filter((quote) => quote.author === author);

export const authorQuoteMap = authors.reduce(
  (previous, author) => ({
    ...previous,
    [author.name]: getByAuthor(author, quotes),
  }),
  {}
);
