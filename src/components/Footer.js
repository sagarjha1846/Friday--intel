import React from 'react'
import "../css/footer.css"
import logo2 from"../images/logo2.png"
import vector from"../images/Vector.png"
import siql from"../images/siql.png"
import right from"../images/right.png"
// import logo2 from"../images/logo2.png"
// import logo2 from"../images/logo2.png"
// import logo2 from"../images/logo2.png"
// import logo2 from"../images/logo2.png"
// import logo2 from"../images/logo2.png"
// import logo2 from"../images/logo2.png"

const Footer = () => {
  return (
    <footer>
       <div className="footer_container">
        <img  className='logo' src={logo2} alt="logo" />
        <img  className='vector' src={vector} alt="logo" />
        <img  className='siql' src={siql} alt="logo" />
        <img  className='right' src={right} alt="right" />
        {/* <img  className='logo' src={logo2} alt="logo" />
        <img  className='logo' src={logo2} alt="logo" />
        <img  className='logo' src={logo2} alt="logo" />
        <img  className='logo' src={logo2} alt="logo" />
        <img  className='logo' src={logo2} alt="logo" />
        <img  className='logo' src={logo2} alt="logo" /> */}
        
       </div>

    </footer>
  )
}

export default Footer