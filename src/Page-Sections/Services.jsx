import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/Services.module.scss";

import ConstructionIcon from "@mui/icons-material/Construction";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import HardwareIcon from "@mui/icons-material/Hardware";
import FoundationIcon from "@mui/icons-material/Foundation";

import ServiceData from "../Assets/Data/Services.json";

const Services = () => {
  const [data, setData] = useState(ServiceData);

  return (
    <div className={Styles.Section}>
      <div className={Styles.About_Container}>
        <p className={Styles.Question}>- What We Do</p>
        <p className={Styles.Brand}>Providing The Best Service</p>
      </div>

      <div className={Styles.Content_Container}>
        {data &&
          data.map((value) => {
            return (
              <div className={Styles.Card} key={value.id}>
                <img src={value.Icon} alt="" className={Styles.Icon} />
                <p className={Styles.Title}>{value.Title}</p>
                <p className={Styles.Description}>{value.Description}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Services;
