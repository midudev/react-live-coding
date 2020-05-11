import { useState, useEffect } from "react";
import { getConfig } from "config/settings";

export const useFetch = ({ url, path, query }) => {
  const [promise, setPromise] = useState({ pending: true, response: null });
  let apiURL = `${url || getConfig("API_URL")}${path}?api_key=${getConfig(
    "API_KEY"
  )}`;

  if (query && !Array.isArray(query) && typeof query === "object") {
    const keys = Object.keys(query);
    const queryString = keys.map((key) => `${key}=${query[key]}`).join("&");
    apiURL = `${apiURL}${queryString ? `&${queryString}` : ""}`;
  }

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((res) => {
        setPromise((prevPromise) => ({
          ...prevPromise,
          pending: false,
          response: res,
        }));
      })
      .catch(console.error);
  }, [apiURL]);

  return promise;
};
