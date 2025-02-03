import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text35">Відгуки наших клієнтів</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text32">
                  Дізнайтеся, що кажуть про нас наші задоволені клієнти
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text26">Олександр Петренко</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text25">Директор, ТОВ "Інновації"</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text34">
                        "Неймовірно професійна команда! Наш сайт перевершив усі очікування. 
                        Особливо вражає швидкість роботи та увага до деталей. Рекомендую!"
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text29">Марія Коваленко</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text24">Маркетинг-менеджер, "Світ краси"</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text28">
                        "Дякуємо за чудовий сайт! Після запуску нового дизайну кількість 
                        замовлень зросла вдвічі. Зручний інтерфейс та адаптивність - саме те, 
                        що нам було потрібно."
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text27">Ірина Василенко</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text33">Засновниця, "ЕкоЛавка"</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text36">
                        "Відмінна робота! Сайт працює бездоганно, завантажується миттєво, 
                        а технічна підтримка завжди на зв'язку. Дуже задоволена співпрацею."
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text31">Михайло Данилюк</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text30">Технічний директор, "ІТ Солюшнс"</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text37">
                        "Вражаючий рівень експертизи та клієнтського сервісу. Команда 
                        допомогла нам створити сучасний та функціональний сайт, який 
                        повністю відповідає нашим потребам."
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

Testimonial17.defaultProps = {
  heading1: (
    <Fragment>
      <span className="testimonial17-text35">Відгуки наших клієнтів</span>
    </Fragment>
  ),
  content1: (
    <Fragment>
      <span className="testimonial17-text32">
        Дізнайтеся, що кажуть про нас наші задоволені клієнти
      </span>
    </Fragment>
  ),
  
  // Перший відгук
  author1Name: (
    <Fragment>
      <span className="testimonial17-text26">Олександр Петренко</span>
    </Fragment>
  ),
  author1Position: (
    <Fragment>
      <span className="testimonial17-text25">Директор, ТОВ "Інновації"</span>
    </Fragment>
  ),
  review1: (
    <Fragment>
      <span className="testimonial17-text34">
        "Неймовірно професійна команда! Наш сайт перевершив усі очікування. 
        Особливо вражає швидкість роботи та увага до деталей. Рекомендую!"
      </span>
    </Fragment>
  ),

  // Другий відгук
  author2Name: (
    <Fragment>
      <span className="testimonial17-text29">Антон Коваленко</span>
    </Fragment>
  ),
  author2Position: (
    <Fragment>
      <span className="testimonial17-text24">Маркетинг-менеджер, "Світ краси"</span>
    </Fragment>
  ),
  review2: (
    <Fragment>
      <span className="testimonial17-text28">
        "Дякуємо за чудовий сайт! Після запуску нового дизайну кількість 
        замовлень зросла вдвічі. Зручний інтерфейс та адаптивність - саме те, 
        що нам було потрібно."
      </span>
    </Fragment>
  ),

  // Третій відгук
  author3Name: (
    <Fragment>
      <span className="testimonial17-text27">Ірина Василенко</span>
    </Fragment>
  ),
  author3Position: (
    <Fragment>
      <span className="testimonial17-text33">Засновниця, "ЕкоЛавка"</span>
    </Fragment>
  ),
  review3: (
    <Fragment>
      <span className="testimonial17-text36">
        "Відмінна робота! Сайт працює бездоганно, завантажується миттєво, 
        а технічна підтримка завжди на зв'язку. Дуже задоволена співпрацею."
      </span>
    </Fragment>
  ),

  // Четвертий відгук
  author4Name: (
    <Fragment>
      <span className="testimonial17-text31">Михайло Данилюк</span>
    </Fragment>
  ),
  author4Position: (
    <Fragment>
      <span className="testimonial17-text30">Технічний директор, "ІТ Солюшнс"</span>
    </Fragment>
  ),
  review4: (
    <Fragment>
      <span className="testimonial17-text37">
        "Вражаючий рівень експертизи та клієнтського сервісу. Команда 
        допомогла нам створити сучасний та функціональний сайт, який 
        повністю відповідає нашим потребам."
      </span>
    </Fragment>
  ),

  author1Alt: 'Олександр Петренко - Директор, ТОВ "Інновації"',
  author2Alt: 'Антон Коваленко - Маркетинг-менеджер, "Світ краси"',
  author3Alt: 'Ірина Василенко - Засновниця, "ЕкоЛавка"',
  author4Alt: 'Михайло Данилюк - Технічний директор, "ІТ Солюшнс"',
  
  author1Src: './images/3.1.jpg',
  author2Src: './images/3.2.jpg',
  author3Src: './images/3.3.jfif',
  author4Src: './images/3.4.jpeg',
}

Testimonial17.propTypes = {
  author2Position: PropTypes.element,
  author1Position: PropTypes.element,
  author3Alt: PropTypes.string,
  author1Name: PropTypes.element,
  author1Src: PropTypes.string,
  author3Name: PropTypes.element,
  review2: PropTypes.element,
  author2Name: PropTypes.element,
  author4Position: PropTypes.element,
  author4Name: PropTypes.element,
  author4Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author3Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  content1: PropTypes.element,
  author3Position: PropTypes.element,
  review1: PropTypes.element,
  heading1: PropTypes.element,
  review3: PropTypes.element,
  review4: PropTypes.element,
}

export default Testimonial17
