import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './logos1.css'

const Logos1 = (props) => {
  return (
    <div id="logos1" className="logos1-logos thq-section-padding">
      <div className="logos1-max-width thq-section-max-width">
        <h2 className="logos1-text1 thq-heading-2">
          {props.heading1 ?? (
            <Fragment>
              <span className="logos1-text2">
                Довіра найкращих світових компаній. Це дає вам можливість бути впевненим у нашому професіоналізмі.
              </span>
            </Fragment>
          )}
        </h2>
        <div className="thq-grid-6">
          <img
            alt={props.logo1Alt}
            src={props.logo1Src}
            className="logos1-logo1 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo2Alt}
            src={props.logo2Src}
            className="logos1-logo2 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo3Alt}
            src={props.logo3Src}
            className="logos1-logo3 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo4Alt}
            src={props.logo4Src}
            className="logos1-logo4 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo5Alt}
            src={props.logo5Src}
            className="logos1-logo5 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo6Alt}
            src={props.logo6Src}
            className="logos1-logo6 thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Logos1.defaultProps = {
  logo2Alt: 'Easy Customization',
  heading1: undefined,
  logo1Src:
    './images/about/2.1.webp',
  logo3Alt: 'Fast Loading Speed',
  logo4Alt: 'Variety of Products and Services',
  logo5Src:
    './images/about/2.2.webp',
  logo4Src:
    './images/about/2.3.webp',
  logo3Src:
    './images/about/2.4.webp',
  logo5Alt: 'Testimonials from Satisfied Customers',
  logo6Alt: 'Different Plans and Features',
  logo6Src:
    './images/about/2.5.webp',
  logo1Alt: 'Responsive Design',
  logo2Src:
    './images/about/2.6.webp',
}

Logos1.propTypes = {
  logo2Alt: PropTypes.string,
  heading1: PropTypes.element,
  logo1Src: PropTypes.string,
  logo3Alt: PropTypes.string,
  logo4Alt: PropTypes.string,
  logo5Src: PropTypes.string,
  logo4Src: PropTypes.string,
  logo3Src: PropTypes.string,
  logo5Alt: PropTypes.string,
  logo6Alt: PropTypes.string,
  logo6Src: PropTypes.string,
  logo1Alt: PropTypes.string,
  logo2Src: PropTypes.string,
}

export default Logos1
