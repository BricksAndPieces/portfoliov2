import React from 'react';
import logo from './logo.svg';
import './App.module.css';
import styles from './App.module.css'

import A from './assets/Mountains.png'
import B from './assets/Ground.png'
import {NavBar} from "./components/nav-bar/nav-bar";
import {Experience} from "./components/experience/experience";
import {Education} from "./components/education/education";
import {ProjectCard} from "./components/project-card/project-card";
import {Projects} from "./components/projects/projects";

import RESUME_PDF from './assets/resume.pdf';

function App() {

  React.useEffect(() => {
    const mountains = document.getElementById('mountains');
    const ground = document.getElementById('ground');

    const scrollEvent = () => {
      if (mountains && ground && window.innerWidth > 768) {
        let v = window.scrollY;
        mountains.style.bottom = v * -0.5 - 5 + "px";
      }
    }

    window.addEventListener('scroll', scrollEvent);
    return () => window.removeEventListener('scroll', scrollEvent);
  })

  return (
    <>
      <div className={styles.background} id={'home'}>
        {/*<header className={styles.header} id={"header"}>*/}
        {/*  <a href="#" className={styles.logo}><h2 id={"logo"}>Portfolio</h2></a>*/}
        {/*  <input className={styles.menuBtn} type="checkbox" id="menuBtn"/>*/}
        {/*  <label className={styles.menuIcon} htmlFor="menuBtn"><span className={styles.navicon}/></label>*/}
        {/*  <ul className={styles.menu}>*/}
        {/*    <li><a className={styles.active} href="#">Home</a></li>*/}
        {/*    <li><a href="#about">About</a></li>*/}
        {/*    <li><a href="#careers">Experience</a></li>*/}
        {/*    <li><a href="#contact">Projects</a></li>*/}
        {/*  </ul>*/}
        {/*</header>*/}

        <NavBar/>

        <div className={styles.contentHolder} id={"name"}>
          <div>
            <h1>Ishan Shetty</h1>
            {/*<div className={styles.contentHolder}>*/}
            <h2 className={styles.tagline}>Full-Stack Developer</h2>
            {/*</div>*/}
          </div>
        </div>

        <img src={A} className={styles.parallaxObjects} id={"mountains"}/>
        <img src={B} className={styles.parallaxObjects} id={"ground"}/>
      </div>
      <section className={styles.filler}>
        <h2 className={styles.sectionHeader} id={'about'}>About</h2>
        <div className={styles.centerText}>
          <p className={styles.aboutText}>
            Creative Coder, Full-stack developer & honors undergraduate student.
            Interested in Machine Learning, its applications, and the problems that can be solved using this technology.
          </p>
        </div>
        <div className={styles.iconHolder}>
          <div className={styles.icon}>
            <i className="devicon-java-plain"/>
            <span><b>Java</b></span>
          </div>
          <div className={styles.icon}>
            <i className="devicon-python-plain"/>
            <span><b>Python</b></span>
          </div>
          <div className={styles.icon}>
            <i className="devicon-swift-plain"/>
            <span><b>Swift</b></span>
          </div>
          <div className={styles.icon}>
            <i className="devicon-angularjs-plain"/>
            <span><b>Angular</b></span>
          </div>
          <div className={styles.icon}>
            <i className="devicon-react-original"/>
            <span><b>React</b></span>
          </div>
          <div className={styles.icon}>
            <i className="devicon-javascript-plain"/>
            <span><b>Javascript</b></span>
          </div>
          <div className={styles.icon}>
            <i className="devicon-typescript-plain"/>
            <span><b>Typescript</b></span>
          </div>
          <div className={styles.icon}>
            <i className="devicon-html5-plain"/>
            <span><b>HTML5</b></span>
          </div>
          <div className={styles.icon}>
            <i className="devicon-css3-plain"/>
            <span><b>CSS3</b></span>
          </div>
        </div>
        <h2 className={styles.sectionHeader} id={'experience'}>Experience</h2>
        <Experience/>
        {/*<h2 className={styles.sectionHeader} id={'education'}>Education</h2>*/}
        {/*<Education/>*/}
        <h2 className={styles.sectionHeader} id={'projects'}>Projects</h2>
        <Projects/>

        <footer>
          <div className={styles.footerLinks}>
            <a href={"https://www.github.com/BricksAndPieces"} target={"_blank"} rel="noreferrer">
              <i className="fa fa-github-square"/>
            </a>
            <a href={"https://www.linkedin.com/in/ishan-shetty"} target={"_blank"} rel="noreferrer">
              <i className="fa fa-linkedin-square"/>
            </a>
            <a href={RESUME_PDF} target={"_blank"} rel="noreferrer">
              <i className="fa fa-file-text"/>
            </a>
          </div>
          <span>Made with 🧠 by Ishan Shetty</span>
          <br/>
          <a href='https://www.freepik.com/vectors/business' target="_blank" rel="noreferrer">
            Mountain Image by pikisuperstar
          </a>
        </footer>
      </section>
    </>
  );
}

export default App;
