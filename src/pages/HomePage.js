import React, {useEffect, useState} from 'react';
import './style.scss'
import '../media/media.scss'
import {Link} from "react-router-dom";
import image from '../assets/me.jpg'
import movie from '../assets/movie.png'
import authImg from '../assets/auth-form.png'
import todoImg from '../assets/todoImg.png'
import cocktailImg from '../assets/cocktailImg.png'
import eventImg from '../assets/eventImg.png'
import laslesVpnImg from '../assets/laslesVpnImg.png'
import weatherImg from '../assets/weatherApi.png'
import carsImg from '../assets/cars.png'
import  cv from '../assets/ArapovAsilbek.pdf'
import burgerIcon from  '../assets/burger-menu.svg'

const HomePage = () => {
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)


  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      });
    }, { threshold: 0.2 });

    animatedElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      // Отписываемся от наблюдения при размонтировании компонента
      animatedElements.forEach(element => {
        observer.unobserve(element);
      });
    }
  }, []);

  console.log(open)

  return (
    <>
      <header className={'header'}>
        <a href={'#first'}>
          <h2 className={'logo'}>Portfolio</h2>
        </a>
        <nav className={'nav nav-desktop'}>
          <a href='#about'>About</a>
          <a href="#stack">Stack</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className={'wrap-burger'}>
          <i
            className={'burger-btn'}
            onClick={event => setOpen(!open)}
          ></i>
          <nav className={open ? 'nav nav-mobile d-flex' : 'nav nav-mobile d-none'}>
            <a href='#about'>About</a>
            <a href="#stack">Stack</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
      <main>
        <section id={'first'} className={'section-first'}>
          <div className="container">

            <div className={'section-first__content'}>
              <h1 className={'name animation'}>ARAPOV <span>ASILBEK</span></h1>
              <p className={'animation-appear'}>front-end developer from Bishkek</p>
            </div>
          </div>
        </section>
        <section id={'about'} className={'animate-on-scroll section-second'}>
          <div className="container">
            <div className="row">
              <div className="col-6 about_content">
                <div className="box ">
                  <h2 className={active? 'animation title' : 'title'}>ABOUT</h2>
                  <p className={active ? 'animation-appear' : ''}>
                    <span>
                      Здравствуйте!
                      Меня зовут Асил, и я — выпускник колледжа связи по направлению «Программирование в компьютерных системах» с отличием. В дальнейшем я решил углубиться в фронтенд-разработку и завершил курс  воотсамр.
                    </span>
                    {/*<span>*/}
                    {/*  Приветствую вас в мире фронтенд-разработки! Здесь мы стараемся сочетать техническое мастерство с творческим подходом, создавая пользовательские интерфейсы, которые не только визуально привлекательны, но и обеспечивают отличный пользовательский опыт.*/}
                    {/*</span>*/}
                    <span>
                      Образование в колледже стало хорошей основой, и поэтому могу быстро осваивать новые технологии и эффективно решать задачи, благодаря хорошим навыкам поиска информации и самообучения.
                    </span>
                    {/*<span>*/}
                    {/*  Я, Асилбек Арапов, являюсь основателем этого проекта и фронтенд-разработчиком с страстью к созданию современных и адаптивных веб-приложений. Мой интерес к фронтенду начался с изучения возможностей веб-технологий, и с тех пор я постоянно совершенствую свои навыки.*/}
                    {/*</span>*/}
                    <span>
                      Я стремлюсь не только к тому, чтобы код был эффективным, но и к созданию визуально привлекательных интерфейсов. Мы понимаем, что фронтенд - это не только о технической стороне, но и о создании приложений, которые легко взаимодействуют с пользователями и приносят им радость использования.
                    </span>
                    <span>
                      Давайте вместе создадим фронтенд, который не только отвечает техническим требованиям, но и делает ваш продукт уникальным и запоминающимся. Добро пожаловать в мир фронтенда - где технологии встречают креативность!
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className={active ? 'box about_content animation-appear' : 'box about_content'}>
                  <img src={image} alt="about-img" className={'about_img'}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id={'stack'} className={'section-stack'}>
          <div className="container">
            <div className="section-stack__box">
              <div className={'left-box'}>
                <h2 className={'title'}>STACK</h2>
                <div className={'stack'}>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVA SCRIPT</li>
                    <li>REACT</li>
                    <li>REDUX & REDUX TOOLKIT</li>
                  </ul>
                  <ul>
                    <li>REST API</li>
                    <li>AJAX</li>
                    <li>GIT</li>
                    <li>MATERIAL UI</li>
                    <li>BOOTSTRAP</li>
                  </ul>
                </div>
              </div>
              <div className="right-box">
                <h2 className="title">EDUCATION</h2>
                <div className="education">
                  <ul className={''}>
                    <li className={'rang'}>
                      СРЕДНЕЕ СПЕЦИАЛЬНОЕ
                    </li>
                    <ul className={'place'}>
                      <li>КОЛЛЕДЖ СВЯЗИ 54</li>
                      <li>2017-2021</li>
                      <li>техник-программист</li>
                    </ul>
                  </ul>
                  <ul className={''}>
                    <li className={'rang'}>
                      ВЫСШЕЕ
                    </li>
                    <ul className={'place'}>
                      <li>КГТУ ИМ. И. РАЗЗАКОВА</li>
                      <li>2023-2025</li>
                      <li>БИЗНЕС-ИНФОРМАТИКА</li>
                    </ul>
                  </ul>
                  <ul className={''}>
                    <li className={'rang'}>
                      КУРСЫ
                    </li>
                    <ul className={'place'}>
                      <li>ACADEMY CODIFY</li>
                      <li>2023</li>
                      <li>FRONTEND DEVOLOPER</li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id={'portfolio'} className="section-portfolio">
          <div className="container">
            <h2 className="title">PORTFOLIO</h2>
            <div className="row">
              <div className="col-6">
                <Link
                  to={'https://github.com/TotSamiy2Pac/movie'}
                  target={'_blank'}
                >
                  <div className="box box-wrap">
                    <div className={'img-wrap'}>
                      <img src={movie} alt="movie-img"/>
                    </div>
                    <div className={'link-git'}>
                      <h3 className={'project-title'}>
                        MOVIE
                      </h3>
                      <i className={'git-icon'}></i>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-6">
                <Link
                  to={'https://github.com/TotSamiy2Pac/usersRedux'}
                  target={'_blank'}
                >
                  <div className="box box-wrap">
                    <div className={'img-wrap'}>
                      <img src={authImg} alt="auth-img"/>
                    </div>
                    <div className="link-git">
                      <h3 className={'project-title'}>
                        authorization form
                      </h3>
                      <i className={'git-icon'}></i>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-6">
                <Link
                  to={'https://github.com/TotSamiy2Pac/todoReact'}
                  target={'_blank'}
                >
                  <div className="box box-wrap">
                    <div className={'img-wrap'}>
                      <img src={todoImg} alt="todo-img"/>
                    </div>
                    <div className="link-git">
                      <h3 className={'project-title'}>
                        TODO
                      </h3>
                      <i className={'git-icon'}></i>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-6">
                <Link
                  to={'https://github.com/TotSamiy2Pac/weatherApi'}
                  target={'_blank'}
                >
                  <div className="box box-wrap">
                    <div className={'img-wrap'}>
                      <img src={weatherImg} alt="weather-img"/>
                    </div>
                    <div className="link-git">
                      <h3 className={'project-title'}>
                        Weather
                      </h3>
                      <i className={'git-icon'}></i>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-6">
                <Link
                  to={'https://github.com/TotSamiy2Pac/theCocktailDBReact'}
                  target={'_blank'}
                >
                  <div className="box box-wrap">
                    <div className={'img-wrap'}>
                      <img src={cocktailImg} alt="cocktail-img"/>
                    </div>
                    <div className="link-git">
                      <h3 className={'project-title'}>
                        Cocktail recipe
                      </h3>
                      <i className={'git-icon'}></i>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-6">
                <Link
                  to={'https://github.com/TotSamiy2Pac/Event'}
                  target={'_blank'}
                >
                  <div className="box box-wrap">
                    <div className={'img-wrap'}>
                      <img src={eventImg} alt="event-img"/>
                    </div>
                    <div className="link-git">
                      <h3 className={'project-title'}>
                        Event landing page
                      </h3>
                      <i className={'git-icon'}></i>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-6">
                <Link
                  to={'https://github.com/TotSamiy2Pac/LaslesVPN'}
                  target={'_blank'}
                >
                  <div className="box box-wrap">
                    <div className={'img-wrap'}>
                      <img src={laslesVpnImg} alt="lasles-img"/>
                    </div>
                    <div className="link-git">
                      <h3 className={'project-title'}>
                        Lasles landing page
                      </h3>
                      <i className={'git-icon'}></i>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-6">
                <Link
                  to={'https://github.com/TotSamiy2Pac/car'}
                  target={'_blank'}
                >
                  <div className="box box-wrap">
                    <div className={'img-wrap'}>
                      <img src={carsImg} alt="cars-img"/>
                    </div>
                    <div className="link-git">
                      <h3 className={'project-title'}>
                        Cars landing page
                      </h3>
                      <i className={'git-icon'}></i>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id={'contact'} className={'section-contacts'}>
          <div className="container">
            <h2 className={'title'}>Contacts</h2>
            <div className="row">
              <div className="col-6 download">
                <div className="box ">
                  <h3 className="contact-title">
                    <a href={cv} download={'CV_Arapov_Asilbek'}>Download CV</a>
                  </h3>
                </div>
              </div>
              <div className="col-6">
                <div className="box adaptive">
                  <Link
                  to={'https://www.linkedin.com/in/asilbek-arapov-82a60528a/'}
                  target={'_blank'}
                  >
                    <div className={'contact'}>
                      <i className={'linkedin'}></i>
                      <h3 className={'contact-title'}>LinkEdin</h3>
                      <h3 className={'contact-title'}>click me</h3>
                    </div>
                  </Link>
                  <Link
                    to={'https://www.t.me/+996779999095'}
                    target={'_blank'}
                  >
                    <div className={'contact'}>
                      <i className={'telegram'}></i>
                      <h3 className={'contact-title'}>Telegram</h3>
                      <h3 className={'contact-title'}>click me</h3>
                    </div>
                  </Link>
                  <Link
                    to={'https://github.com/TotSamiy2Pac'}
                    target={'_blank'}
                  >
                    <div className={'contact'}>
                      <i className={'github'}></i>
                      <h3 className={'contact-title'}>GitHub</h3>
                      <h3 className={'contact-title'}>click me</h3>
                    </div>
                  </Link>
                  <Link
                    to={'tel:+79639991992'}
                    target={'_blank'}
                  >
                    <div className={'contact'}>
                      <i className={'phone'}></i>
                      <h3 className={'contact-title'}>Phone</h3>
                      <h3 className={'contact-title'}>+7 (963) 999 19 92</h3>
                    </div>
                  </Link>
                  <Link
                    to={'mailto:a.r.a.p.o.v@yandex.ru'}
                    target={'_blank'}
                  >
                    <div className={'contact'}>
                      <i className={'mail'}></i>
                      <h3 className={'contact-title'}>mail</h3>
                      <h3 className="contact-title">a.r.a.p.o.v@yandex.ru</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;