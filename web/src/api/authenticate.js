import * as Api from "@file-server/sdk";
import { configuration } from "./base";

export const auth = new Api.AuthApi(configuration)
