import { Server } from "http"
import { AddressInfo } from 'net'
import server from "./app"

class NotifyServer {
  server!: Server

  public constructor() {}

  listen = () => {
    const PORT = process.env.PORT || 3001
    this.server = server.listen(PORT,async () => {
      console.log(
        `When it's ${new Date().toLocaleString()} we are getting ready`
      );
      console.log(`Starting in ${process.env.NODE_ENV} mode`);
      console.log(`Listening on ${PORT}`);
    })
  }

  close = () => {
    this.server.close();
  };

  address = () => {
    return this.server.address() as AddressInfo;
  };

}

const app = new NotifyServer()
app.listen()