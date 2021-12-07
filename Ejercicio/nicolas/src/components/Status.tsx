import React from 'react'
import status from  '../img/T1Oldlogo_square.png';
const Status = () => {
    return (
        <div className="Carousel">
        <div className="Carousel-List">
        {[...Array(9)].map((x, o) =>
           <div className="Carousel-Item" key={o}>
           <div className="Carrousel-Item-img">
             <img src={status} alt="Status" />
           </div>
           <div>
             <p>user</p>
           </div>
         </div>
        )}

        </div>
    </div>
    )
}

export default Status
