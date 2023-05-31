import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose, { MongooseOptions } from "mongoose";

import { router } from "./routes/routes";

class App {
  private app: express.Application;
  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
    this.database();
    this.server();
  }

  public middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(cors({ credentials: true }));
  }
  public routes(): void {
    this.app.use(router);
  }
  public async database(): Promise<void> {
    const dataString: string = process.env.DATABASE || "";
    await mongoose
      .connect(dataString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as MongooseOptions)
      .then(() => console.log("conectado ao banco"))
      .catch(() => console.log("erro ao conectar"));
  }
  public server() {
    this.app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  }
}

new App();
