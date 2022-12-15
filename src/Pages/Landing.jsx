import React from 'react'
import Styles from "../Styles/Page-Styles/Landing.module.scss"

// Page Section Import Start
import Hero from '../Page-Sections/Hero'
import Introduction from "../Page-Sections/Indroduction"
// Page Section Import End

const Landing = () => {
  return (
    <div className={Styles.Page}>
      <Hero />
      <Introduction />
    </div>
  )
}

export default Landing