import React, {useEffect, useState} from "react"
import { Link, useLocation } from "wouter"
import getGifs from '../../services/getGifs'
import ListOfGifs from '../../components/ListOfGifs'
import Category from '../../components/Category'
import {useGifs} from '../../hooks/useGifs'

const POPULAR_GIFS = ["Matrix", "Venezuela", "Chile", "Colombia", "Ecuador"]

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const {loading, gifs} = useGifs()

  const handleSubmit = evt => {
    evt.preventDefault()
    // navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <Category
            name="Categorias populares"
            options={POPULAR_GIFS}
          />
          <Category
            name="Mascotas"
            options={['Perros', 'Gatos', 'Hamster']}
          />
        </div>
      </div>
    </>
  )
}