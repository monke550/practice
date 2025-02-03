import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import ContactForm3 from '../components/contact-form3'
import Contact14 from '../components/contact14'
import Contact7 from '../components/contact7'
import Footer4 from '../components/footer4'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Enchanted Single Gull</title>
        <meta property="og:title" content="Contact - Enchanted Single Gull" />
        <meta name="author" content="Kononenko Maksym"/>
      </Helmet>
      <Navbar8
        action1={
          <Fragment>
            <span className="contact-text11">Обрати тариф</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="contact-text14">Головна</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text17">Контакти</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text20">Про нас</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="contact-text23">Переваги</span>
          </Fragment>
        }
      ></Navbar8>
      <ContactForm3
        action={
          <Fragment>
            <span className="contact-text25">Надіслати</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text26">
            Відповідаємо з 10:00 до 17:00 у робочі дні
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text27">Зв'яжіться з нами</span>
          </Fragment>
        }
      ></ContactForm3>
      <Contact14
        content1={
          <Fragment>
            <span className="contact-text29">
            Ми тут, щоб допомогти вам. Звертайтеся до нас із будь-якими запитами.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text30">Зв'яжіться з нами</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text31">
            Відповідаємо з 10:00 до 17:00 у робочі дні
            </span>
          </Fragment>
        }
        heading4={
          <Fragment>
            <span className="contact-text32">Офіс</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="contact-text33">
            вул. Технологічна, 10, Київ
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="contact-text34">
            Ви завжди можете прийти до нас в офіс для вирішення будь-якої проблеми.
            </span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="contact-text35">Телефон</span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="contact-text36">+380-93-547-2852</span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="contact-text37">
            Дзвоніть у робочі години і ми з радістю допоможемо вам.
            </span>
          </Fragment>
        }
        email1={
          <Fragment>
            <span className="contact-text39">enchgull@gmail.com</span>
          </Fragment>
        }
      ></Contact14>
      <Contact7
        content1={
          <Fragment>
            <span className="contact-text41">
            Для запитань або підтримки, звертайтеся до нашого офісу в Києві.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="contact-text42">
              456 Park Avenue, Los Angeles, CA 90012
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="contact-text43">
              вул. Технологічна, 10, Київ
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="contact-text44">Офіс</span>
          </Fragment>
        }
      ></Contact7>
      <Footer4
        link1={
          <Fragment>
            <span className="contact-text48">Головна</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text50">Про нас</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text51">Контакти</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Contact
