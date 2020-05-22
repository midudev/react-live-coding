import React, {useState} from 'react'

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
  <form onSubmit={handleSubmit}>
    <button>Buscar</button>
    <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
  </form>
  )
}