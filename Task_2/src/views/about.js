import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero8 from '../components/hero8'
import Stats2 from '../components/stats2'
import Logos1 from '../components/logos1'
import Features1 from '../components/features1'
import Team1 from '../components/team1'
import Footer4 from '../components/footer4'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Enchanted Single Gull</title>
        <meta property="og:title" content="About - Enchanted Single Gull" />
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
      <Hero8
        content1={
          <Fragment>
            <span className="about-text24">
            Створюємо сайти
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text26">
            На ринку майже 6 років!
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about-text27">Читати більше</span>
          </Fragment>
        }
      ></Hero8>
      <Stats2
        stat1={
          <Fragment>
            <span className="about-text28">Адаптивний дизайн</span>
          </Fragment>
        }
        stat3={
          <Fragment>
            <span className="about-text31">Швидкість завантаження</span>
          </Fragment>
        }
        stat4={
          <Fragment>
            <span className="about-text32">Задоволеність клієнтів</span>
          </Fragment>
        }
        stat2Description={
          <Fragment>
            <span className="about-text33">
            Користувачі можуть легко налаштувати свої продукти та послуги відповідно до своїх потреб.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text34">Переваги наших сайтів</span>
          </Fragment>
        }
        stat4Description={
          <Fragment>
            <span className="about-text35">
            Наші задоволені клієнти свідчать про якість нашої продукції та послуг.
            </span>
          </Fragment>
        }
        stat2={
          <Fragment>
            <span className="about-text36">Параметри налаштування</span>
          </Fragment>
        }
        stat3Description={
          <Fragment>
            <span className="about-text37">
            Відчуйте блискавичну швидкість завантаження для бездоганної взаємодії з користувачем.
            </span>
          </Fragment>
        }
        stat1Description={
          <Fragment>
            <span className="about-text38">
            Наші продукти та послуги створені для повної адаптивності на всіх пристроях.
            </span>
          </Fragment>
        }
      ></Stats2>
      <Logos1
        heading1={
          <Fragment>
            <span className="about-text39">
            Довіра найкращих світових компаній. Це дає вам можливість бути впевненим у нашому професіоналізмі.
            </span>
          </Fragment>
        }
      ></Logos1>
      <Features1
        feature2Title={
          <Fragment>
            <span className="about-text41">Різноманітність планів</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="about-text42">Адаптивний дизайн</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="about-text43">
            Наші продукти розроблені для плавної адаптації до будь-якого пристрою, забезпечуючи стабільну взаємодію з користувачем.
            </span>
          </Fragment>
        }
        slogan={
          <Fragment>
            <span className="about-text44">Спеціально для ваших потреби</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="about-text45">Відгуки задоволених клієнтів</span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="about-text46">
            Читайте, що наші задоволені клієнти говорять про своїй взаємодії з нашими продуктами та послугами.
            </span>
          </Fragment>
        }
        sectionDescription={
          <Fragment>
            <span className="about-text47">
            Ознайомтеся з ключовими функціями, які роблять наші продукти та послуги відмінними від конкурентів.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="about-text49">
            Виберіть з різноманітних планів та цінових опцій, щоб знайти ідеальний варіант для ваших потреб.
            </span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="about-text50">Особливості</span>
          </Fragment>
        }
      ></Features1>
      <Team1
        heading1={
          <Fragment>
            <span className="about-text54">Наша команда</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text78">
              Познайомтеся з талановитими людьми, які роблять все можливим.
            </span>
          </Fragment>
        }
        member1={
          <Fragment>
            <span className="about-text73">Олена Шевченко</span>
          </Fragment>
        }
        member1Job={
          <Fragment>
            <span className="about-text72">Директор з маркетингу</span>
          </Fragment>
        }
        member1Content={
          <Fragment>
            <span className="about-text77">
              Олена – творча геніальність, що вдихає життя в наш бренд своїми інноваційними ідеями.
            </span>
          </Fragment>
        }
        member2={
          <Fragment>
            <span className="about-text64">Микола Петренко</span>
          </Fragment>
        }
        member2Job={
          <Fragment>
            <span className="about-text57">Керівник операцій</span>
          </Fragment>
        }
        member2Content={
          <Fragment>
            <span className="about-text52">
              Микола забезпечує безперебійну роботу та ефективність у всіх наших процесах.
            </span>
          </Fragment>
        }
        member3={
          <Fragment>
            <span className="about-text76">Світлана Мороз</span>
          </Fragment>
        }
        member3Job={
          <Fragment>
            <span className="about-text55">Менеджер служби підтримки</span>
          </Fragment>
        }
        member3Content={
          <Fragment>
            <span className="about-text66">
              Світлана робить усе можливе, щоб наші клієнти завжди залишалися задоволеними.
            </span>
          </Fragment>
        }
        member4={
          <Fragment>
            <span className="about-text74">Андрій Гончаренко</span>
          </Fragment>
        }
        member4Job={
          <Fragment>
            <span className="about-text71">Фінансовий директор</span>
          </Fragment>
        }
        member4Content={
          <Fragment>
            <span className="about-text56">
              Андрій відповідає за фінансове планування та стратегічне управління ресурсами компанії.
            </span>
          </Fragment>
        }
        member5={
          <Fragment>
            <span className="about-text69">Марія Бойко</span>
          </Fragment>
        }
        member5Job={
          <Fragment>
            <span className="about-text80">Менеджер з розвитку бізнесу</span>
          </Fragment>
        }
        member5Content={
          <Fragment>
            <span className="about-text51">
              Марія кожен день шукає актуальні та нові можливості для зростання, розвитку та зміцнення нашого бізнесу.
            </span>
          </Fragment>
        }
        member6={
          <Fragment>
            <span className="about-text68">Олександр Ткаченко</span>
          </Fragment>
        }
        member6Job={
          <Fragment>
            <span className="about-text65">Директор з ІТ</span>
          </Fragment>
        }
        member6Content={
          <Fragment>
            <span className="about-text79">
              Олександр відповідає за технологічну підтримку та впровадження інноваційних рішень.
            </span>
          </Fragment>
        }
        member7={
          <Fragment>
            <span className="about-text60">Ірина Кравченко</span>
          </Fragment>
        }
        member7Job={
          <Fragment>
            <span className="about-text75">HR менеджер</span>
          </Fragment>
        }
        member7Content={
          <Fragment>
            <span className="about-text61">
              Ірина відповідає за управління талантами та розвиток команди, сприяючи створенню позитивного робочого клімату.
            </span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="about-text63">Приєднуйтесь до нас!</span>
          </Fragment>
        }
        actionContent={
          <Fragment>
            <span className="about-text67">Контактна форма</span>
          </Fragment>
        }
      ></Team1>
      <Footer4
        link1={
          <Fragment>
            <span className="about-text83">Головна</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text85">Про нас</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text86">Контакти</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default About
