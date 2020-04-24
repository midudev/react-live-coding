import {useContext} from 'react'
import GifsContext from '../context/GifsContext'

export default function useGlobalGifs () {
  return useContext(GifsContext).gifs
}