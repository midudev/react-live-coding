import { getConfig } from "config/settings";

const fromApiResponseToListOfTrending = (apiResponse) => {
  const { data = [] } = apiResponse;
  return data;
};

export default function getTrendingTerms() {
  const apiURL = `${getConfig("API_URL")}/trending/searches?api_key=${getConfig(
    "API_KEY"
  )}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToListOfTrending);
}
