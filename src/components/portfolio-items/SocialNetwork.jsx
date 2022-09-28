import React from 'react'
import snPic from '../my-work/images/8-sn-890.png'
import itemBgPic from './geometric-portfolio-item.jpg'

export default function SocialNetwork() {
    return (
        <div>

            <section className="intro">
                <h1 className="section__title section__title--intro">
                    <span className='remove'>&nbsp;&nbsp;&nbsp;&nbsp;</span>Social Network
                </h1>
                <p className="section__subtitle section__subtitle--intro">NoSQL Database using Mongoose</p>
                <img src={snPic} alt="portfolio-item-pic" className="intro__img" />
            </section>

            {/* paragraph about work */}
            <section className='portfolio-item-individual'>

                <p>A short paragraph about the item</p>
                {/* background pic */}
                <img src={itemBgPic} alt="geometric-background" className='portfolio-item-pic' />
                {/* link to repo */}

                <div className='portfolio-item-display'>

                    <p className='portfolio-item-links'>
                        <a href="https://github.com/Clarky117/Social-Network">Github <i className="fa-brands fa-github"></i></a>
                    </p>
                    {/* link to deployed app or youtube video */}
                    <p className='portfolio-item-links'>
                        <a href="https://www.youtube.com/watch?v=tSVVmA1S6N8">Youtube <i className="fa-brands fa-youtube"></i></a>
                    </p>

                </div>
            </section>

        </div>
    )
}
