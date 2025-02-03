import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './pricing14.css'

const Pricing14 = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div id="pricing" className="pricing14-container">
      <div className="pricing14-pricing23 thq-section-padding">
        <div className="pricing14-max-width thq-section-max-width">
          <div className="pricing14-section-title">
            <span className="pricing14-text100 thq-body-small">
            </span>
            <div className="pricing14-content">
              <h2 className="pricing14-text101 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="pricing14-text180">
                      Оберіть тариф, який найбільше підходить
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="pricing14-text102 thq-body-large">
                {props.content2 ?? (
                  <Fragment>
                    <span className="pricing14-text202">
                      Також необхідно обрати термін підтримки сайту
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="pricing14-tabs">
            {isMonthly && (
              <button
                onClick={() => setIsMonthly(true)}
                className="pricing14-button10 thq-button-animated thq-button-filled"
              >
                <span className="thq-body-small">Місяць</span>
              </button>
            )}
            {!isMonthly && (
              <button
                onClick={() => setIsMonthly(true)}
                className="pricing14-button11 thq-button-outline thq-button-animated"
              >
                <span className="thq-body-small">Місяць</span>
              </button>
            )}
            {!isMonthly && (
              <button
                onClick={() => setIsMonthly(false)}
                className="pricing14-button12 thq-button-animated thq-button-filled"
              >
                <span className="thq-body-small">Рік</span>
              </button>
            )}
            {isMonthly && (
              <button
                onClick={() => setIsMonthly(false)}
                className="pricing14-button13 thq-button-outline thq-button-animated"
              >
                <span className="thq-body-small">Рік</span>
              </button>
            )}
          </div>
          {isMonthly && (
            <div className="pricing14-container1">
              <div className="pricing14-column1 thq-card">
                <div className="pricing14-price10">
                  <div className="pricing14-price11">
                    <p className="pricing14-text107 thq-body-large">
                      {props.plan1 ?? (
                        <Fragment>
                          <span className="pricing14-text182">Базовий</span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing14-text108 thq-heading-3">
                      {props.plan1Price ?? (
                        <Fragment>
                          <span className="pricing14-text204">$89.99/тиж</span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan1Yearly ?? (
                        <Fragment>
                          <span className="pricing14-text199">або $169.99/міс</span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing14-list1">
                    <div className="pricing14-list-item10">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature1 ?? (
                          <Fragment>
                            <span className="pricing14-text200">
                            Стабільна робота сайту
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item11">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature2 ?? (
                          <Fragment>
                            <span className="pricing14-text161">
                            Резервна копія даних
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item12">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature3 ?? (
                          <Fragment>
                            <span className="pricing14-text198">
                            Відстежування працездатності ресурсу
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <a 
                  href="/contact"
                  className="pricing14-button14 thq-button-outline thq-button-animated"
                >
                  <span className="thq-body-small">
                    <span className="pricing14-text158">Зв'язатися</span>
                  </span>
                </a>
              </div>
              <div className="pricing14-column2 thq-card">
                <div className="pricing14-price12">
                  <div className="pricing14-price13">
                    <p className="pricing14-text114 thq-body-large">
                      {props.plan2 ?? (
                        <Fragment>
                          <span className="pricing14-text174">Стандарт</span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing14-text115 thq-heading-3">
                      {props.plan2Price ?? (
                        <Fragment>
                          <span className="pricing14-text188">$119.99/тиж</span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan2Yearly ?? (
                        <Fragment>
                          <span className="pricing14-text168">або $249.99/міс</span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing14-list2">
                    <div className="pricing14-list-item13">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature1 ?? (
                          <Fragment>
                            <span className="pricing14-text179">
                            Усе з базового тарифу
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item14">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature2 ?? (
                          <Fragment>
                            <span className="pricing14-text165">
                            Регулярне оновлення даних
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item15">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature3 ?? (
                          <Fragment>
                            <span className="pricing14-text172">
                            Забезпечення захисту від вірусів
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item16">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature4 ?? (
                          <Fragment>
                            <span className="pricing14-text167">
                            Збільшити швидкість завантаження сторінок
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="pricing14-button15 thq-button-animated thq-button-filled"
                >
                  <span className="thq-body-small">
                    <span className="pricing14-text170">Зв'язатися</span>
                  </span>
                </a>
              </div>
              <div className="pricing14-column3 thq-card">
                <div className="pricing14-price14">
                  <div className="pricing14-price15">
                    <p className="pricing14-text122 thq-body-large">
                      {props.plan3 ?? (
                        <Fragment>
                          <span className="pricing14-text205">Преміум</span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing14-text123 thq-heading-3">
                      {props.plan3Price ?? (
                        <Fragment>
                          <span className="pricing14-text155">$249.99/тиж</span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan3Yearly ?? (
                        <Fragment>
                          <span className="pricing14-text194">або $899.99/міс</span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing14-list3">
                    <div className="pricing14-list-item17">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature1 ?? (
                          <Fragment>
                            <span className="pricing14-text171">
                              Усе з стандартного тарифу
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item18">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature2 ?? (
                          <Fragment>
                            <span className="pricing14-text177">
                            Налаштування хостингу
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item19">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature3 ?? (
                          <Fragment>
                            <span className="pricing14-text201">
                            Оперативне усунення помилок та багів;
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item20">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature4 ?? (
                          <Fragment>
                            <span className="pricing14-text195">
                            Модернізування сайту (у разі потреби)
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item21">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature5 ?? (
                          <Fragment>
                            <span className="pricing14-text186">
                            Розширена SEO-оптимізація
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="pricing14-button16 thq-button-animated thq-button-filled"
                >
                  <span className="thq-body-small">
                    <span className="pricing14-text156">Зв'язатися</span>
                  </span>
                </a>
              </div>
            </div>
          )}
          {!isMonthly && (
            <div className="pricing14-container2">
              <div className="pricing14-column4 thq-card">
                <div className="pricing14-price16">
                  <div className="pricing14-price17">
                    <span className="pricing14-text131 thq-body-large">
                      {props.plan11 ?? (
                        <Fragment>
                          <span className="pricing14-text157">Базовий</span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing14-text132 thq-heading-3">
                      {props.plan1Price1 ?? (
                        <Fragment>
                          <span className="pricing14-text173">$169.99/міс</span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan1Yearly1 ?? (
                        <Fragment>
                          <span className="pricing14-text192">
                            або $69.99/тиж
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list4">
                    <div className="pricing14-list-item22">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature11 ?? (
                          <Fragment>
                            <span className="pricing14-text184">
                            Стабільна робота сайту
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item23">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature21 ?? (
                          <Fragment>
                            <span className="pricing14-text185">
                            Резервна копія даних
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item24">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature31 ?? (
                          <Fragment>
                            <span className="pricing14-text197">
                              Відстежування працездатності ресурсу
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="pricing14-button17 thq-button-outline thq-button-animated"
                >
                  <span className="thq-body-small">
                    <span className="pricing14-text169">Зв'язатися</span>
                  </span>
                </a>
              </div>
              <div className="pricing14-column5 thq-card">
                <div className="pricing14-price18">
                  <div className="pricing14-price19">
                    <span className="pricing14-text138 thq-body-large">
                      {props.plan21 ?? (
                        <Fragment>
                          <span className="pricing14-text183">Стандарт</span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing14-text139 thq-heading-3">
                      {props.plan2Price1 ?? (
                        <Fragment>
                          <span className="pricing14-text193">$249.99/міс</span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan2Yearly1 ?? (
                        <Fragment>
                          <span className="pricing14-text187">
                            або $119.99/тиж
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list5">
                    <div className="pricing14-list-item25">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature11 ?? (
                          <Fragment>
                            <span className="pricing14-text162">
                            Усе з базового тарифу
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item26">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature21 ?? (
                          <Fragment>
                            <span className="pricing14-text175">
                            Регулярне оновлення даних
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item27">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature31 ?? (
                          <Fragment>
                            <span className="pricing14-text190">
                                Забезпечення захисту від вірусів
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item28">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature41 ?? (
                          <Fragment>
                            <span className="pricing14-text164">
                                Збільшити швидкість завантаження сторінок
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="pricing14-button18 thq-button-animated thq-button-filled"
                >
                  <span className="thq-body-small">
                    <span className="pricing14-text176">Зв'язатися</span>
                  </span>
                </a>
              </div>
              <div className="pricing14-column6 thq-card">
                <div className="pricing14-price20">
                  <div className="pricing14-price21">
                    <span className="pricing14-text146 thq-body-large">
                      {props.plan31 ?? (
                        <Fragment>
                          <span className="pricing14-text159">
                            Преміум
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing14-text147 thq-heading-3">
                      {props.plan3Price1 ?? (
                        <Fragment>
                          <span className="pricing14-text196">$899.99/міс</span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan3Yearly1 ?? (
                        <Fragment>
                          <span className="pricing14-text189">
                            або $249.99/тиж
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list6">
                    <div className="pricing14-list-item29">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature11 ?? (
                          <Fragment>
                            <span className="pricing14-text191">
                                Усе з стандартного тарифу
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item30">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature21 ?? (
                          <Fragment>
                            <span className="pricing14-text166">
                            Налаштування хостингу
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item31">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature31 ?? (
                          <Fragment>
                            <span className="pricing14-text181">
                              Оперативне усунення помилок та багів
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item32">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature41 ?? (
                          <Fragment>
                            <span className="pricing14-text160">
                              Модернізування сайту (у разі потреби)
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item33">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature51 ?? (
                          <Fragment>
                            <span className="pricing14-text163">
                            Розширена SEO-оптимізація
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="pricing14-button19 thq-button-animated thq-button-filled"
                >
                  <span className="thq-body-small">
                    <span className="pricing14-text203">Зв'язатися</span>
                  </span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

Pricing14.defaultProps = {
  plan3Price: undefined,
  plan3Action: undefined,
  plan11: undefined,
  plan1Action: undefined,
  plan31: undefined,
  plan3Feature41: undefined,
  plan1Feature2: undefined,
  plan2Feature11: undefined,
  plan3Feature51: undefined,
  plan2Feature41: undefined,
  plan2Feature2: undefined,
  plan3Feature21: undefined,
  plan2Feature4: undefined,
  plan2Yearly: undefined,
  plan1Action1: undefined,
  plan2Action: undefined,
  plan3Feature1: undefined,
  plan2Feature3: undefined,
  plan1Price1: undefined,
  plan2: undefined,
  plan2Feature21: undefined,
  plan2Action1: undefined,
  plan3Feature2: undefined,
  content1: undefined,
  plan2Feature1: undefined,
  heading1: undefined,
  plan3Feature31: undefined,
  plan1: undefined,
  plan21: undefined,
  plan1Feature11: undefined,
  plan1Feature21: undefined,
  plan3Feature5: undefined,
  plan2Yearly1: undefined,
  plan2Price: undefined,
  plan3Yearly1: undefined,
  plan2Feature31: undefined,
  plan3Feature11: undefined,
  plan1Yearly1: undefined,
  plan2Price1: undefined,
  plan3Yearly: undefined,
  plan3Feature4: undefined,
  plan3Price1: undefined,
  plan1Feature31: undefined,
  plan1Feature3: undefined,
  plan1Yearly: undefined,
  plan1Feature1: undefined,
  plan3Feature3: undefined,
  content2: undefined,
  plan3Action1: undefined,
  plan1Price: undefined,
  plan3: undefined,
}

Pricing14.propTypes = {
  plan3Price: PropTypes.element,
  plan3Action: PropTypes.element,
  plan11: PropTypes.element,
  plan1Action: PropTypes.element,
  plan31: PropTypes.element,
  plan3Feature41: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan3Feature51: PropTypes.element,
  plan2Feature41: PropTypes.element,
  plan2Feature2: PropTypes.element,
  plan3Feature21: PropTypes.element,
  plan2Feature4: PropTypes.element,
  plan2Yearly: PropTypes.element,
  plan1Action1: PropTypes.element,
  plan2Action: PropTypes.element,
  plan3Feature1: PropTypes.element,
  plan2Feature3: PropTypes.element,
  plan1Price1: PropTypes.element,
  plan2: PropTypes.element,
  plan2Feature21: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan3Feature2: PropTypes.element,
  content1: PropTypes.element,
  plan2Feature1: PropTypes.element,
  heading1: PropTypes.element,
  plan3Feature31: PropTypes.element,
  plan1: PropTypes.element,
  plan21: PropTypes.element,
  plan1Feature11: PropTypes.element,
  plan1Feature21: PropTypes.element,
  plan3Feature5: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan2Price: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan2Feature31: PropTypes.element,
  plan3Feature11: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  plan2Price1: PropTypes.element,
  plan3Yearly: PropTypes.element,
  plan3Feature4: PropTypes.element,
  plan3Price1: PropTypes.element,
  plan1Feature31: PropTypes.element,
  plan1Feature3: PropTypes.element,
  plan1Yearly: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan3Feature3: PropTypes.element,
  content2: PropTypes.element,
  plan3Action1: PropTypes.element,
  plan1Price: PropTypes.element,
  plan3: PropTypes.element,
}

export default Pricing14
