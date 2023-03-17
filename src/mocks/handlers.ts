import { rest } from "msw";
import { errorTypes } from "../hooks/types";

const {
  defaultErrorMessage,
  unauthorizedErrorMessage,
  userNotFoundErrorMessage,
} = errorTypes;

const mockedQuotes = {
  quotes: [
    {
      author: "Frida Kahlo",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/440px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg",
      country: "Mexico",
      quote: "Feet, what do I need them for if I have wings to fly?",
      tags: ["artists"],
      lived: "1907 - 1954",
      backgroundInfo:
        "Frida Kahlo was a Mexican painter known for her self-portraits, which often incorporated elements of her physical and emotional pain.",
    },
  ],
};

// src/mocks/handlers.js
const useUserApiUrl = process.env.REACT_APP_URL_API_USERS;

export const okHandlers = [
  rest.post(`${useUserApiUrl}/users/login`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: "token" }));
  }),

  rest.get(`${useUserApiUrl}/quotes`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedQuotes));
  }),
];

export const errorHandlers = [
  rest.post(`${useUserApiUrl}/users/login`, async (req, res, ctx) => {
    return res(ctx.status(401), ctx.json({ error: unauthorizedErrorMessage }));
  }),

  rest.get(`${useUserApiUrl}/quotes`, async (req, res, ctx) => {
    return res(ctx.status(404), ctx.json({ error: userNotFoundErrorMessage }));
  }),
  rest.get(`${useUserApiUrl}/quotes`, async (req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ error: defaultErrorMessage }));
  }),
];
