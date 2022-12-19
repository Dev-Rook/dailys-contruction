import React from 'react'
import Styles from "../Styles/Page-Styles/Landing.module.scss"

// Page Section Import Start
import Hero from '../Page-Sections/Hero'
import Introduction from "../Page-Sections/Indroduction"
import Services from '../Page-Sections/Services'
import Work from '../Page-Sections/Work'
import Blog from '../Page-Sections/Blog'
import GetInTouch from '../Page-Sections/GetInTouch'
// Page Section Import End

const Landing = () => {
  return (
    <div className={Styles.Page}>
      <Hero />
      <Introduction />
      <Services />
      <Work />
      <Blog />
      <GetInTouch />
    </div>
  )
}

export default Landing