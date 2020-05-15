import React from 'react'
import { render, screen } from "@testing-library/react"
import Search from './index'
import { GifsContextProvider } from 'context/GifsContext'

test('search show gifs when used', async () => {
  render(<GifsContextProvider><Search params={{keyword: 'Matrix'}} /></GifsContextProvider>)
  
  const gifs = await screen.findAllByRole('img')
  const title = await screen.findByText('Matrix')
  
  expect(title).toBeVisible()
  expect(gifs[0]).toBeVisible()
})