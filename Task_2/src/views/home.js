import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Enchanted Single Gull</title>
        <meta property="og:title" content="Enchanted Single Gull" />
        <meta name="author" content="Kononenko Maksym"/>
      </Helmet>
      <Navbar8
        link1Url="/"
        link1={
          <Fragment>
            <span className="home-text104">Головна</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">Контакти</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">Про нас</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Переваги</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        heading1={
          <Fragment>
            <span className="home-text116">
              <span className="desktop-only">Ласкаво просимо до нашої компанії!</span>
              <span className="mobile-only">Вітаємо!</span>
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              <span className="desktop-only">
                Ми створюємо інноваційні веб-сайти, які допомагають вашому бізнесу рости.
              </span>
              <span className="mobile-only">
                Створюємо сайти для вашого бізнесу
              </span>
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">Оптимізований код забезпечує миттєвий доступ до інформації.</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Велика швидкість завантаження</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">Легко налаштуйте веб-сайт під ваш бренд, змінюючи кольори, шрифти та зображення.</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Адаптивний дизайн</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">Наші сайти виглядають чудово на будь-якому пристрої: комп'ютері, планшеті або телефоні.</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Простота налаштування</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">Приєднуйтесь до нашої спільноти сьогодні!</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
            Зареєструйтесь зараз, щоб отримувати ексклюзивні пропозиції та оновлення.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Зареєструватися</span>
          </Fragment>
        }
      ></CTA26>
      <Pricing14
        heading1={
          <Fragment>
            <span>Оберіть тариф, який найбільше підходить</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span>Кожен тариф передбачає підтримку 24/7.</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text184">
              Зв'яжіться з нами для обговорення ваших ідей.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text185">
              Ми створюємо прототип сайту, який відповідає вашим потребам.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text186">Крок 2: Дизайн</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
              Ми створюємо прототип сайту, який відповідає вашим потребам.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text188">Крок 1: Консультація</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text189">Крок 3: Розробка</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              Ваш сайт готовий до роботи!
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">Крок 4: Запуск</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        heading1={
          <Fragment>
            <span className="home-text203">Відгуки наших клієнтів</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200">
              Дізнайтеся, що кажуть про нас наші задоволені клієнти
            </span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text194">Олександр Петренко</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text193">Директор, ТОВ "Інновації"</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text202">
              "Неймовірно професійна команда! Наш сайт перевершив усі очікування. 
              Особливо вражає швидкість роботи та увага до деталей. Рекомендую!"
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text197">Михайло Данилюк</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text192">Маркетинг-менеджер, "Світ краси"</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text196">
              "Дякуємо за чудовий сайт! Після запуску нового дизайну кількість 
              замовлень зросла вдвічі. Зручний інтерфейс та адаптивність - саме те, 
              що нам було потрібно."
            </span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text195">Ірина Василенко</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text201">Засновниця, "ЕкоЛавка"</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text204">
              "Відмінна робота! Сайт працює бездоганно, завантажується миттєво, 
              а технічна підтримка завжди на зв'язку. Дуже задоволена співпрацею."
            </span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text199">Антон Коваленко</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198">Технічний директор, "ІТ Солюшнс"</span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text205">
              "Вражаючий рівень експертизи та клієнтського сервісу. Команда 
              допомогла нам створити сучасний та функціональний сайт, який 
              повністю відповідає нашим потребам."
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
            І ми обговоримо ваші потреби та створимо оптимальний проект.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text208">Зв'яжіться з нами</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">Наш офіс: вул. Технологічна, 10, Київ, Україна</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text214">Головна</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text216">Про нас</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Контакти</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
