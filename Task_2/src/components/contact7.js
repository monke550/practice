import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact7.css'

const Contact7 = (props) => {
  return (
    <div className="contact7-container1 thq-section-padding">
      <div className="contact7-max-width thq-section-max-width">
        <div className="contact7-content1 thq-flex-row">
          <div className="contact7-content2">
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact7-text17">
                    Для запитань або підтримки, звертайтеся до нашого офісу в Києві.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact7-content3 thq-flex-row">
          <div className="contact7-container2">
            <img
              alt={props.location1ImgAlt}
              src={props.location1ImgSrc}
              className="contact7-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact7-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact7-text20">Офіс</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact7-text19">
                    вул. Технологічна, 10, Київ
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact7.defaultProps = {
  location2ImgAlt: 'Офіс Image',
  location2: undefined,
  location1ImgSrc: './images/office.jpeg',
  location1ImgAlt: 'Офіс Image',
  content1: undefined,
  location2Description: undefined,
  location1Description: undefined,
  location1: undefined,
  heading1: undefined,
}

Contact7.propTypes = {
  location2ImgAlt: PropTypes.string,
  location2: PropTypes.element,
  location1ImgSrc: PropTypes.string,
  location1ImgAlt: PropTypes.string,
  content1: PropTypes.element,
  location2Description: PropTypes.element,
  location1Description: PropTypes.element,
  location2ImgSrc: PropTypes.string,
  location1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Contact7
