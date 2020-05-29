import React from "react"
import { useLocation } from "wouter"
import ListOfGifs from 'components/ListOfGifs'
import {useGifs} from 'hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'
import SearchForm from 'components/SearchForm'

export default function Home() {
  const [_, pushLocation] = useLocation()
  const {gifs} = useGifs()

  const handleSubmitSearchForm = ({keyword}) => {
    // navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  }

  return (
    <>
      <header className="o-header">
        <SearchForm onSubmit={handleSubmitSearchForm} />
      </header>
      <div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
          </div>
          <div className="App-category">
            <TrendingSearches />
          </div>
        </div>
      </div>
    </>
  )
}