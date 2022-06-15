/*
 *
 *  Creates a secure TCP tunnel to port 3000
 *  to access app on connected devices.
 *
 */
import ngrok from "ngrok";
import chalk from "chalk";

export default class Tunnel {
  async connect() {
    try {
      this.url = await ngrok.connect({
        proto: "http",
        addr: 8080,
        host_header: "locahost:8080",
        authtoken: process.env.NGROK_TOKEN,
      });
      console.log(chalk.white.bold.bgCyan(`ngrok serving app @ ${this.url}`));
      return this.url;
    } catch (e) {
      console.log(chalk.white.bgRed(JSON.stringify(e)));
    }
  }
}
