import * as Api from "@file-server/sdk";

export const configuration = new Api.createConfiguration({ basePath: process.env.REACT_APP_SERVER_URL || "localhost:3001" });
