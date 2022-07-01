import React from 'react'
import heroBannerImg from '../Assets/heroBanner.PNG'

const HeroBanner = () => {
  return (
    <section>
        <div className='heroBanner'>
            <span className='heroInnerBanner'>
                 <h2>Women's</h2>
                 <div></div>
            </span>
           <img src={heroBannerImg} alt='Athlete woman'/>
        </div>
    </section>
  )
}

export default HeroBanner