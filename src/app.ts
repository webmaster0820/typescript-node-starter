import express, { Express } from "express";
import { PORT } from "./config/env-vars";

class Server {
  public app: Express;

  constructor () {
    this.app = express();
    this.config();
  }

  public config (): void {
    this.app.set("port", PORT);
  }

  public start (): void {
    this.app.listen(this.app.get("port"), () => {
      console.log(
        "  App is running at http://localhost:%d in %s mode",
        this.app.get("port"),
        this.app.get("env")
      );
      console.log("  Press CTRL-C to stop\n");
    });
  }

}
export default Server;
