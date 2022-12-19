import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/GetInTouch.module.scss";

const GetInTouch = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Text_Box}>
        <p className={Styles.Title}>Let's Work Together</p>

        <p className={Styles.Text}>
          Let us know what you are looking for in an agency. We'll take a look
          and see <br /> if this could be the start of something beautiful.
        </p>

        <button className={Styles.Contact_Button}>Contact US</button>
      </div>
    </div>
  );
};

export default GetInTouch;
