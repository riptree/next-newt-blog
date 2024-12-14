import { createClient, type Content } from "newt-client-js";

export const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID as string,
  token: process.env.NEWT_CDN_API_TOKEN as string,
  apiType: "cdn",
});

export interface Post extends Content {
  title: string;
  body: string;
}
