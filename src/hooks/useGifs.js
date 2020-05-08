import {useContext, useEffect, useState} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs ({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [loadingPage, setLoadingPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const {gifs, setGifs} = useContext(GifsContext)

  // recuperamos la keyword del localStorage
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(function () {
    setLoading(true)

    getGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        // guardamos la keyword en el localStorage
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, keywordToUse, setGifs])

  useEffect(function () {
    if (page === INITIAL_PAGE || gifs.length === 0) return
    setLoadingPage(true)
    getGifs({ keyword: keywordToUse, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingPage(false)
      })
  }, [gifs.length, keywordToUse, page, setGifs])

  return {loading, gifs, loadingPage, page, setPage}
}