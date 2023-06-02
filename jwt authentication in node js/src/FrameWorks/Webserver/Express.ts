import express, { Application } from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";








const ExpressConfig = (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(morgan("dev"));
};





export default ExpressConfig;

