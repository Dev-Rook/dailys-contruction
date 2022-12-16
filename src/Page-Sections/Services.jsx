import React, {useState} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/Services.module.scss";



import ServiceData from "../Assets/Data/Services.json";

const Services = () => {
  const [data, setData] = useState(ServiceData)
  return (
    <div className={Styles.Section}>
      
    </div>
  )
}

export default Services