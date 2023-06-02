import { Application } from "express";
import UserRouter from "./UserRouter/UserRouter";




const Router = (app:Application)=>{
    app.use("/",UserRouter);
};

export default Router;