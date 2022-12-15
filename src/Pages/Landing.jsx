import React from 'react'
import Styles from "../Styles/Page-Styles/Landing.module.scss"

// Page Section Import Start
import Hero from '../Page-Sections/Hero'
// Page Section Import End

const Landing = () => {
  return (
    <div className={Styles.Page}>
      <Hero />
    </div>
  )
}

export default Landing