import { client } from "./lib/client";
export const Fetcher = () => {
  const query = '*[_type == "product"]';
  const res = client.fetch(query);
  return res;
};
