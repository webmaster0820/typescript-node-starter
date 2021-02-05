import { Request, Response } from "express";
import HttpStatus from "http-status-codes";
export const getHome = (_: Request, res: Response) => {
  console.log("Calling Get Home API");
  res.json({
    msg: "Welcome",
    version: process.env.npm_package_version
  });
};

export const getHealth = (_: Request, res: Response) => {
  // Put logic to check DB connection, cache Connection and Etc here
  // If something wrong on that give status NOT OK
  // If status NOT OK set status code as HttpStatus.SERVICE_UNAVAILABLE
};

export const getPing = (_: Request, res: Response) => {
  res.status(HttpStatus.OK).send("PONG");
};
