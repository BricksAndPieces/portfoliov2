import React from "react";
import styles from "./nav-bar.module.css";

export function NavBar() {

  React.useEffect(() => {
    const navSectionsIds = ['home', 'about', 'experience', 'projects'];
    const navSections = navSectionsIds.map(id => document.getElementById(id))

    const navBar = document.getElementById('header');
    const logo = document.getElementById('logo');
    const menuIcon = document.getElementById('menuIcon');

    let prevScrollPrev = window.scrollY;
    const convertNavBar = 100;

    const scrollEvent = () => {

      // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- //
      // Changing the current active page based on amount scrolled

      let navIndex = 0;
      for (let i = 1; i < navSections.length; i++) {
        let ns = navSections[i]
        if (ns && window.scrollY > ns.offsetTop + window.innerHeight - 200) {
          navIndex = i;
        } else break;
      }

      for (let i = 0; i < navSections.length; i++) {
        let doc = document.getElementById('nav-' + navSectionsIds[i])
        doc && (navIndex === i ? doc.classList.add(styles.active) : doc.classList.remove(styles.active));
      }

      // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- //

      if (navBar && logo && menuIcon) {
        if (document.body.scrollTop > convertNavBar || document.documentElement.scrollTop > convertNavBar) {
          navBar.style.backgroundColor = "#0e3147";
          navBar.style.borderBottom = "2px solid white"
          logo.style.marginTop = "5px"
          logo.style.marginBottom = "5px"
          menuIcon.style.padding = "22.5px 30px";
        } else {
          navBar.style.backgroundColor = "transparent";
          navBar.style.borderBottom = "none"
          logo.style.marginTop = "25px"
          logo.style.marginBottom = "25px"
          menuIcon.style.padding = "42.5px 30px";
        }
      }
    }

    window.addEventListener('scroll', scrollEvent);
    return () => window.removeEventListener('scroll', scrollEvent);
  })

  return (
    <>
      <header className={styles.header} id={"header"}>
        <a href="#" className={styles.logo}><h2 id={"logo"}>Portfolio</h2></a>
        <input className={styles.menuBtn} type="checkbox" id="menuBtn"/>
        <label className={styles.menuIcon} htmlFor="menuBtn" id={"menuIcon"}><span className={styles.navicon}/></label>
        <ul className={styles.menu}>
          <li><a id="nav-home" className={styles.active} href="#">Home</a></li>
          <li><a id="nav-about" href="#about">About</a></li>
          <li><a id="nav-experience" href="#experience">Experience</a></li>
          <li><a id="nav-projects" href="#projects">Projects</a></li>
        </ul>
      </header>
    </>
  );
}