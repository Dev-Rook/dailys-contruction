import React from 'react'
import Styles from "../Styles/Page-Styles/Landing.module.scss"

// Page Section Import Start
import Hero from '../Page-Sections/Hero'
import Introduction from "../Page-Sections/Indroduction"
import Services from '../Page-Sections/Services'
// Page Section Import End

const Landing = () => {
  return (
    <div className={Styles.Page}>
      <Hero />
      <Introduction />
      <Services />
    </div>
  )
}

export default Landing