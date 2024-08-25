import { IServerCfg } from "../interfaces";

export const serverCfg: IServerCfg = {
    game: "H2M", // was H1
    protocol: 2,
    udpPort: 20810,
    listFetchTime: 1000 * 60 * 5,
    raidmaxApiUrl: "http://api.raidmax.org:5000/servers",
    mandatoryServerParts: [], // removed the mandatory part
};
