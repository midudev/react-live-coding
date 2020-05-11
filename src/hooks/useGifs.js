import { useContext, useEffect } from "react";
import GifsContext from "context/GifsContext";
import { useFetch } from "./useFetch";
import { getService } from "config/services";
import { usePagination } from "./usePagination";

export function useGifs({ keyword } = { keyword: null }) {
  // recuperamos la keyword del localStorage
  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random";

  const { page, setPage, limit, offset } = usePagination();
  const { pending, response } = useFetch(
    getService("getGifs")(keywordToUse, { page, limit, offset })
  );
  const { gifs, setGifs } = useContext(GifsContext);

  const fromApiResponseToGifs = (apiResponse) => {
    const { data = [] } = apiResponse;
    if (Array.isArray(data)) {
      const gifs = data.map((image) => {
        const { images, title, id } = image;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });
      return gifs;
    }
    return [];
  };

  useEffect(() => {
    if (response && response.data) {
      setGifs(fromApiResponseToGifs(response));
    }
  }, [pending, response, setGifs]);

  useEffect(() => {
    localStorage.setItem("lastKeyword", keyword || keywordToUse);
  }, [keyword, keywordToUse]);

  return { loading: pending, gifs, loadingPage: pending, page, setPage };
}
