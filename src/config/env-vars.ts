import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const APP_DEBUG = Boolean(
  JSON.parse(String(process.env["APP_DEBUG"]).toLowerCase())
);

export const NODE_ENV = process.env.NODE_ENV;
