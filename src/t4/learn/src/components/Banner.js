import React from "react"

import BannerPNG from "../images/Banner.png"
import "../scss/banner.scss"

const Banner = () => (
  <img className="banner" src={BannerPNG} alt="Restaurant table and chairs" />
)

export default Banner
