import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-padding thq-section-max-width">
        <div className="hero17-content1">
          <h1 className="hero17-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero17-text7">Ласкаво просимо до нашої компанії!</span>
              </Fragment>
            )}
          </h1>
          <p className="hero17-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero17-text8">
                  Ми створюємо інноваційні веб-сайти, які допомагають вашому бізнесу рости.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-content2">
          <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="thq-animated-group-horizontal">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <img
                  key={`image${num}`}
                  alt={props[`image${num}Alt`] || "Hero Image"}
                  src={props[`image${num}Src`]}
                  className={`hero17-placeholder-image${num + 9} thq-img-scale thq-img-ratio-1-1`}
                />
              ))}
            </div>
            <div className="thq-animated-group-horizontal">
              {[1, 2, 3, 4, 5].map((num) => (
                <img
                  key={`image${num}-2`}
                  alt={props[`image${num}Alt`] || "Hero Image"}
                  src={props[`image${num}Src`]}
                  className={`hero17-placeholder-image${num + 15} thq-img-scale thq-img-ratio-1-1`}
                />
              ))}
              <img
                alt="Hero Image"
                className="hero17-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
          <div className="hero17-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="thq-animated-group-horizontal-reverse">
              {[7, 8, 9, 10, 11, 12].map((num) => (
                <img
                  key={`image${num}`}
                  alt={props[`image${num}Alt`] || "Hero Image"}
                  src={props[`image${num}Src`]}
                  className={`hero17-placeholder-image${num + 15} thq-img-scale thq-img-ratio-1-1`}
                />
              ))}
            </div>
            <div className="thq-animated-group-horizontal-reverse">
              {[7, 8, 9, 10, 11].map((num) => (
                <img
                  key={`image${num}-2`}
                  alt={props[`image${num}Alt`] || "Hero Image"}
                  src={props[`image${num}Src`]}
                  className={`hero17-placeholder-image${num + 21} thq-img-scale thq-img-ratio-1-1`}
                />
              ))}
              <img
                alt="Hero Image"
                className="hero17-placeholder-image33 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="hero17-container2">
            <Script
              html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
            ></Script>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  // Первый слайдер (1.1-1.6)
  image1Src: './images/1.1.webp',
  image2Src: './images/1.2.png',
  image3Src: './images/1.3.webp',
  image4Src: './images/1.4.webp',
  image5Src: './images/1.5.jfif',
  image6Src: './images/1.6.webp',
  
  // Второй слайдер (2.1-2.6)
  image7Src: './images/2.1.webp',
  image8Src: './images/2.2.webp',
  image9Src: './images/2.3.jfif',
  image10Src: './images/2.4.webp',
  image11Src: './images/2.5.webp',
  image12Src: './images/2.6.png',
  
  // Alt текст для изображений
  image1Alt: 'Slider Image 1',
  image2Alt: 'Slider Image 2',
  image3Alt: 'Slider Image 3',
  image4Alt: 'Slider Image 4',
  image5Alt: 'Slider Image 5',
  image6Alt: 'Slider Image 6',
  image7Alt: 'Slider Image 7',
  image8Alt: 'Slider Image 8',
  image9Alt: 'Slider Image 9',
  image10Alt: 'Slider Image 10',
  image11Alt: 'Slider Image 11',
  image12Alt: 'Slider Image 12',
  
  heading1: undefined,
  content1: undefined,
}

Hero17.propTypes = {
  image1Src: PropTypes.string,
  image2Src: PropTypes.string,
  image3Src: PropTypes.string,
  image4Src: PropTypes.string,
  image5Src: PropTypes.string,
  image6Src: PropTypes.string,
  image7Src: PropTypes.string,
  image8Src: PropTypes.string,
  image9Src: PropTypes.string,
  image10Src: PropTypes.string,
  image11Src: PropTypes.string,
  image12Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  image11Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
}

export default Hero17
