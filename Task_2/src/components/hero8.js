import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero8.css'

const Hero8 = (props) => {
  return (
    <div className="hero8-header26 thq-section-padding">
      <div className="hero8-max-width thq-flex-column thq-section-max-width">
        <div className="hero8-column">
          <div className="hero8-content">
            <h1 className="hero8-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero8-text7">
                  На ринку майже 6 років!
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero8-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero8-text5">
                  Створюємо сайти
                  </span>
                </Fragment>
              )}
            </p>
            <div className="hero8-actions">
              <a 
                href="#logos1" 
                className="thq-button-filled hero8-button1"
              >
                <span className="thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero8-text8">Читати більше</span>
                    </Fragment>
                  )}
                </span>
              </a>
            </div>
          </div>
        </div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="thq-img-ratio-16-9"
        />
      </div>
    </div>
  )
}

Hero8.defaultProps = {
  image1Alt: 'Variety of Products and Services',
  content1: undefined,
  action2: undefined,
  image1Src:
    './images/about/1.1.jpg',
  heading1: undefined,
  action1: undefined,
}

Hero8.propTypes = {
  image1Alt: PropTypes.string,
  content1: PropTypes.element,
  action2: PropTypes.element,
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  action1: PropTypes.element,
}

export default Hero8
