import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats2.css'

const Stats2 = (props) => {
  return (
    <div className="stats2-container1 thq-section-padding">
      <div className="stats2-max-width thq-section-max-width">
        <div className="stats2-container2 thq-flex-column">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats2-image"
          />
        </div>
        <div className="stats2-container3 thq-flex-column">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="stats2-text27">Переваги наших сайтів</span>
              </Fragment>
            )}
          </h2>
          <div className="stats2-container4 thq-grid-2">
            <div className="stats2-container5">
              <h2 className="thq-heading-2">
                {props.stat1 ?? (
                  <Fragment>
                    <span className="stats2-text21">Адаптивний дизайн</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats2-text31">
                      Наші продукти та послуги створені для повної адаптивності на всіх пристроях.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container6">
              <h2 className="thq-heading-2">
                {props.stat2 ?? (
                  <Fragment>
                    <span className="stats2-text29">Параметри налаштування</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats2-text26">
                      Користувачі можуть легко налаштувати свої продукти та послуги відповідно до своїх потреб.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="stats2-container7 thq-grid-2">
            <div className="stats2-container8">
              <h2 className="thq-heading-2">
                {props.stat3 ?? (
                  <Fragment>
                    <span className="stats2-text24">Швидкість завантаження</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats2-text30">
                      Відчуйте блискавичну швидкість завантаження для бездоганної взаємодії з користувачем.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container9">
              <h2 className="thq-heading-2">
                {props.stat4 ?? (
                  <Fragment>
                    <span className="stats2-text25">Задоволеність клієнтів</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat4Description ?? (
                  <Fragment>
                    <span className="stats2-text28">
                      Наші задоволені клієнти свідчать про якість нашої продукції та послуг.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats2.defaultProps = {
  stat1: undefined,
  content1: undefined,
  content2: undefined,
  image1Alt: 'Satisfied Customers',
  stat3: undefined,
  stat4: undefined,
  stat2Description: undefined,
  image1Src: './images/about/1.2.png',
  heading1: undefined,
  stat4Description: undefined,
  stat2: undefined,
  stat3Description: undefined,
  stat1Description: undefined,
}

Stats2.propTypes = {
  stat1: PropTypes.element,
  content1: PropTypes.element,
  content2: PropTypes.element,
  image1Alt: PropTypes.string,
  stat3: PropTypes.element,
  stat4: PropTypes.element,
  stat2Description: PropTypes.element,
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  stat4Description: PropTypes.element,
  stat2: PropTypes.element,
  stat3Description: PropTypes.element,
  stat1Description: PropTypes.element,
}

export default Stats2
