const randomize = require('randomatic');
import { v4 as UUIDv4 } from "uuid";

export default class Tunnel {
  public id = UUIDv4();
  public name = "Tgrok Tunnel"

  public protocol = "http"
  public subdomain = ""

  public localHost = "127.0.0.1";
  public localPort = "80"

  public paused = true;

  public status = 0;

  public static randomDomain() {
    return randomize('a0', 8);
  }

}
