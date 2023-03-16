// src/mocks/server.js
import { setupServer } from "msw/node";
import { okHandlers } from "./handlers";

export const server = setupServer(...okHandlers);
