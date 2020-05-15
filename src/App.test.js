import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';

import { render, waitForElement, fireEvent, screen } from '@testing-library/react'

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
})

test('home works as expected', async () => {
  const {container} = render(<App />)
  const gifLink = await waitForElement(() => container.querySelector('.Gif-link'))
  expect(gifLink).toBeVisible()
})

test('search form could be used', async () => {
  render(<App />)
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Matrix' } })
  fireEvent.click(screen.getByRole('button'))
  const title = await screen.findByText('Matrix')
  expect(title).toBeVisible()
})
