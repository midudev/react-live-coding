import React, { useEffect } from "react";
import Spinner from "components/Spinner";
import ListOfGifs from "components/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, loadingPage, setPage } = useGifs({ keyword });
  const { isNearScreen, fromRef } = useNearScreen({ once: false });

  useEffect(
    function () {
      if (!loading && !loadingPage && isNearScreen) {
        console.log({ loading, loadingPage, isNearScreen });
        setPage((prevPage) => prevPage + 1);
      }
    },
    [isNearScreen, loading, loadingPage, setPage]
  );

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
        </>
      )}
      <div ref={fromRef}></div>
    </>
  );
}
