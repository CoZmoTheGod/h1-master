import { IServerCfg, IServerItem } from "../interfaces";

// this is actually required for the response to be parsed correctly by the client...
const mandatoryPart: IServerItem = {
  ipParts: [72, 9, 153, 235],
  port: 25888,
  full: false,
  empty: false,
};

export const serverCfg: IServerCfg = {
  game: "H2M", // was H1
  protocol: 2,
  udpPort: 20810,
  listFetchTime: 1000 * 60 * 5,
  raidmaxApiUrl: "http://api.raidmax.org:5000/servers",
  mandatoryServerParts: [], // removed the mandatory part
};