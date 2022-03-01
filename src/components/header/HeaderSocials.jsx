import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
      <div className="header__socials">
          <a href="https://www.linkedin.com/in/kartavya-magoo-047464190/" target="_blank"><BsLinkedin/></a>

          <a href="https://github.com/km10here" target="_blank"><FaGithub/></a>

          {/* <a href="https://www.linkedin.com/in/kartavya-magoo-047464190/" target="_blank"></a> */}

      </div>
    )
}

export default HeaderSocials 