import React from 'react'
import Styles from "../Styles/Page-Section-Styles/Hero.module.scss"

const Hero = () => {
  return (
    <div className={Styles.Section}>
        <div className={Styles.Content_Container}>
            <p className={Styles.Small_Text}>Architecture / Construction</p>
            <p className={Styles.Large_Text}>
                We Are Expert Builders
            </p>

            <button className={Styles.Project_Button}>Our Projects</button>
        </div>
    </div>
  )
}

export default Hero