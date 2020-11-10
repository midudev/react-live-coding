import React from "react"
import { useLocation } from "wouter"
import useForm from './hook'
import css from "./SearchForm.module.css"
import Button from 'components/Button'

const RATINGS = ["g", "pg", "pg-13", "r"]
const LANGS = ["es", "en", "it", "pr"]

export default function SearchForm ({
  initialKeyword = '',
  initialRating = RATINGS[0],
  initialLang = LANGS[0],
}) {
  const [_, pushLocation] = useLocation()

  const { keyword, rating, lang, changeKeyword, changeRating, changeLang } = useForm({ initialKeyword, initialRating, initialLang })

  const onSubmit = ({ keyword }) => {
    if (keyword !== '') {
      // navegar a otra ruta
      pushLocation(`/search/${keyword}/${rating}/${lang}`)
    }
  }

  const handleChange = (evt) => {
    changeKeyword({ keyword: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    onSubmit({ keyword })
  }

  const handleChangeRating = (evt) => {
    changeRating({ rating: evt.target.value })
  }

  const handleChangeLang = (evt) => {
    changeLang({ lang: evt.target.value })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={css["c-search"]}>
        <Button>Buscar</Button>
        <input
          className={css["c-search-input"]}
          placeholder="Search a gif here..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
        <select className={css["c-search-list"]} value={rating} onChange={handleChangeRating}>
          <option disabled>
            Rating:
          </option>
          {RATINGS.map((rating) => (
            <option key={rating}>{rating}</option>
          ))}
        </select>
        <select className={css["c-search-list"]} value={lang} onChange={handleChangeLang}>
          <option disabled>
            Lang:
          </option>
          {LANGS.map((lang) => (
            <option key={lang}>{lang}</option>
          ))}
        </select>
      </form>
    </>
  )
}
