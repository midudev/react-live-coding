import React, {useState} from 'react'
import css from './SearchForm.module.css'

export default function SearchForm ({ onSubmit }) {
  const [keyword, setKeyword] = useState('')

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    onSubmit({keyword})
  }

  return (
  <form onSubmit={handleSubmit} className={css["c-search"]}>
    <button className={css["c-search-btn"]}>Buscar</button>
    <input className={css["c-search-input"]} placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
  </form>
  )
}