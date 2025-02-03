import React from 'react'

import { Helmet } from 'react-helmet'

import './not-found.css'

const NotFound = (props) => {
  return (
    <div className="not-found-container1">
      <Helmet>
        <title>404 - Не знайдено</title>
      </Helmet>
      <h3>УПС! СТОРІНКА НЕ ЗНАЙДЕНА</h3>
      <div className="not-found-container2">
        <h1 className="not-found-text2">404</h1>
      </div>
      <div className="not-found-container3">
        <h2 className="not-found-text3">
          СТОРІНКУ, ЯКУ ВИ ШУКАЄТЕ, НЕ ЗНАЙДЕНО
        </h2>
      </div>
    </div>
  )
}

export default NotFound
