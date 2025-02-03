import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span className="thq-body-small">
              {props.slogan ?? (
                <Fragment>
                  <span className="features1-text17">
                    Спеціально для ваших потреб
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="thq-heading-2 features1-text11">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features1-text23">Функціонал</span>
                </Fragment>
              )}
            </h2>
          </div>
          <span className="thq-body-small">
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features1-text20">
                  Ознайомтеся з ключовими функціями, які роблять наші продукти та послуги відмінними від конкурентів.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features1-content1">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features1-text15">
                        Адаптивний дизайн
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features1-text16">
                        Наші продукти розроблені для плавної адаптації до будь-якого пристрою, забезпечуючи стабільну взаємодію з користувачем.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features1-text14">Різноманітність планів</span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features1-text22">
                        Виберіть з різноманітних планів та цінових опцій, щоб знайти ідеальний варіант для ваших потреб.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content4 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features1-text18">Відгуки задоволених клієнтів</span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features1-text19">
                        Читайте, що наші задоволені клієнти говорять про своїй взаємодії з нашими продуктами та послугами.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  mainAction: undefined,
  feature2Title: undefined,
  feature2ImageSrc:
    './images/about/3.1.jfif',
  feature1Title: undefined,
  feature2ImageAlt: 'Variety of Plans Image',
  feature1Description: undefined,
  feature3ImageSrc:
    './images/about/3.2.jfif',
  slogan: undefined,
  feature3Title: undefined,
  feature3Description: undefined,
  feature3ImageAlt: 'Testimonials Image',
  feature1ImageAlt: 'Responsive Design Image',
  sectionDescription: undefined,
  secondaryAction: undefined,
  feature1ImageSrc:
    './images/about/3.3.png',
  feature2Description: undefined,
  sectionTitle: undefined,
}

Features1.propTypes = {
  mainAction: PropTypes.element,
  feature2Title: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  slogan: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  sectionDescription: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  sectionTitle: PropTypes.element,
}

export default Features1
