import React from 'react'
import CaoruselItem from './CaoruselItem'

const Carousel = () => {
    return (
        <div className="Carousel">
            <div className="Carousel-List">
            {[...Array(9)].map((x, i) =>
               <CaoruselItem key={i}/>
            )}

            </div>
        </div>
    )
}

export default Carousel
