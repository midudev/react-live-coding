import React from "react"
import { useLocation } from "wouter"
import useForm from './hook'
import css from "./SearchForm.module.css"

const RATINGS = ["g", "pg", "pg-13", "r"]

export default function SearchForm({
  initialKeyword = '',
  initialRating = RATINGS[0]
}) {
  const [_, pushLocation] = useLocation()

  const {keyword, rating, changeKeyword, changeRating} = useForm({ initialKeyword, initialRating })

  const onSubmit = ({ keyword }) => {
    if (keyword !== '') {
      // navegar a otra ruta
      pushLocation(`/search/${keyword}/${rating}`)
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

  return (
    <>
      <form onSubmit={handleSubmit} className={css["c-search"]}>
        <button className={css["c-search-btn"]}>Buscar</button>
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
      </form>
    </>
  )
}
