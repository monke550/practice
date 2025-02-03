import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo1">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer4-logo2"
            />
          </div>
          <div className="footer4-links">
            <a
              href="/home"
              className="thq-body-small"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="footer4-text16">Головна</span>
                </Fragment>
              )}
            </a>
            <a
              href="/about"
              className="thq-body-small"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="footer4-text18">Про нас</span>
                </Fragment>
              )}
            </a>
            <a
              href="/contact"
              className="thq-body-small"
            >
              {props.link4 ?? (
                <Fragment>
                  <span className="footer4-text19">Контакти</span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">© 2025 Enchanted Gull. Усі права захищені.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  link5: undefined,
  link3: undefined,
  link1: undefined,
  termsLink: undefined,
  link2: undefined,
  link4: undefined,
  logoAlt: 'Company Logo',
  cookiesLink: undefined,
  logoSrc: './images/logo.png',
  privacyLink: undefined,
}

Footer4.propTypes = {
  link5: PropTypes.element,
  link3: PropTypes.element,
  link1: PropTypes.element,
  termsLink: PropTypes.element,
  link2: PropTypes.element,
  link4: PropTypes.element,
  logoAlt: PropTypes.string,
  cookiesLink: PropTypes.element,
  logoSrc: PropTypes.string,
  privacyLink: PropTypes.element,
}

export default Footer4
