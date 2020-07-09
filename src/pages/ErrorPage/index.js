/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core'

import React from 'react'
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";
import { Link } from "wouter";

const gifsErrors = [
  "d2jjuAZzDSVLZ5kI",
  "Bp3dFfoqpCKFyXuSzP",
  "hv5AEBpH3ZyNoRnABG",
  "hLwSzlKN8Fi6I",
];

const pageErrorStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
`

const codeErrorStyles = css`
font-size: 5rem;
font-weight: bold;
font-style: italic;
`

const msgErrorStyles = css`
  font-size: 1.5rem;
  margin: 1rem 0;
`

const gifErrorStyles = css`
margin: 1rem auto;
width: 250px;
height: 250px;
`

export default function ErrorPage() {
  const randomImage = () => {
    return `https://media.giphy.com/media/${
      gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1]
    }/giphy.gif`;
  };

  return (
    <>
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>
      <header className="o-header">
        <SearchForm />
      </header>
      <div css={pageErrorStyles}>
        <span css={codeErrorStyles}>404</span>
        <span css={msgErrorStyles}>Sometimes gettings lost isn't that bad</span>
        <img css={gifErrorStyles} src={randomImage()} alt="alt-page-404" />
        <Link href="/" class="btn">
          Go to home
        </Link>
      </div>
    </>
  );
}
