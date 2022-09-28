import React from 'react'
import wotPic from '../my-work/images/1-wot-890.png'
import itemBgPic from './geometric-portfolio-item.jpg'

export default function WorkoutTracker() {
    return (
        <div>

            <section className="intro">
                <h1 className="section__title section__title--intro">
                    <span className='remove'>&nbsp;&nbsp;&nbsp;&nbsp;</span>Work Out Tracker
                </h1>
                <p className="section__subtitle section__subtitle--intro">Group project</p>
                <img src={wotPic} alt="portfolio-item-pic" className="intro__img" />
            </section>

            {/* paragraph about work */}
            <section className='portfolio-item-individual'>

                <p>A short paragraph about the item</p>
                {/* background pic */}
                <img src={itemBgPic} alt="geometric-background" className='portfolio-item-pic' />
                {/* link to repo */}

                <div className='portfolio-item-display'>

                    <p className='portfolio-item-links'>
                        <a href="https://github.com/Flipper5001/workout_tracker">Github <i className="fa-brands fa-github"></i></a>
                    </p>
                    {/* link to deployed app or youtube video */}
                    <p className='portfolio-item-links'>
                        <a href="https://r7-workout-tracker.herokuapp.com/login">Our App <i className="fa-solid fa-dumbbell"></i></a>
                    </p>

                </div>
            </section>

        </div>
    )
}
